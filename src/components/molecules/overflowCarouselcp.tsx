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
    <Carousel className="w-full " setApi={setApi}>
      <CarouselContent className="-ml-1 py-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className={cn(
              '-pl md:basis-1/2 lg:basis-1/3 bg-transparent transition-transform duration-500 ease-out',
              index === current ? 'scale-110 opacity-100' : 'scale-100 opacity-85',
            )}>
            <div className="p-1">
              <Card className="transition-transform duration-500 ease-out">
                <CardContent className="flex items-center justify-center p-6 flex-col">
                  <div className="relative flex justify-center items-center">
                    <Avatar className="relative h-20 w-20">
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

                  <p className="text-black text-base font-extrabold mt-3">Abhishek Gupta</p>

                  <span className="text-primary-blue text-sm font-bold mt-1">
                    마케팅 <strong> · 2y+</strong>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-transparent border-none text-white font-light hover:bg-transparent hover:text-white text-2xl -left-4" />
      <CarouselNext className="bg-transparent border-none text-white font-light hover:bg-transparent hover:text-white -right-10" />
    </Carousel>
  );
};

export default OverflowCarousel;
