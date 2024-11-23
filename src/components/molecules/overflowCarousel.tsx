'use client';

import { useState, useEffect } from 'react';

import { Card, CardContent } from '@/components/atoms/card';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar';
import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/atoms/carousel';

const OverflowCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="debug-green" setApi={setApi} opts={{ align: 'start' }}>
      <CarouselContent className="-ml-1 pr-0 pl-1   py-8 z-10 debug-red w-full">
        {Array.from({ length: 5 }).map((_, index) => {
          const isVisible = index >= current - 1 && index <= current + 1;

          return (
            <CarouselItem
              key={index}
              className={cn(
                '-pl md:basis-1/2 lg:w-[292px]  bg-transparent transition-transform duration-500 ease-out',
                index === current ? 'scale-110 z-30  opacity-100' : 'scale-90',
                index === current - 1 ? '-mr-40 z-10' : '',
                index === current + 1 ? '-ml-40 z-20' : '',
                !isVisible ? 'opacity-0 invisible -ml-40' : 'opacity-100 visible',
                // index > current + 1 && index !== current && current ? 'hidden' : '',
                // index > current + 1 && index !== current ? 'ml-72 debug-red' : '',
                // index < current - 1 && index !== current ? 'mr-72' : '',
              )}>
              <div className="p-1">
                <Card
                  className={cn(
                    index === current - 1 ? 'opacity-80' : '',
                    index === current + 1 ? 'opacity-80' : '',
                    'transition-transform duration-500 ease-out lg:w=[292px]',
                  )}>
                  <CardContent className="flex items-center justify-center p-6 flex-col">
                    <div className="relative flex justify-center items-center">
                      <Avatar className="relative h-[120px] w-[120px]">
                        <AvatarImage src="/assets/avatar/girl/eli-36.png" alt="eli" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Image
                        className="absolute z-40 right-2 bottom-0 h-3 w-auto"
                        src="/assets/icons/flagw.png"
                        alt="flag"
                        width="25"
                        height="18"
                      />
                    </div>

                    <p className="text-black text-xl font-sans font-extrabold mt-3">Abhishek Gupta</p>

                    <span className="text-primary-blue text-sm font-bold mt-1">
                      마케팅{' '}
                      <strong>
                        {' '}
                        · 2y+ i/c
                        {index}
                        {'/'}
                        {current}
                      </strong>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent border-none text-white font-light hover:bg-transparent hover:text-white text-2xl -left-4 z-50 outline-none focus:outline-none" />
      <CarouselNext className="bg-transparent border-none text-white font-light hover:bg-transparent hover:text-white  z-50 right-0 outline-none focus:outline-none" />{' '}
    </Carousel>
  );
};

export default OverflowCarousel;
