'use client';

import { useState, useRef, useEffect, ReactElement } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/atoms/carouselCustom';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
// import AutoScroll from 'embla-carousel-auto-scroll';

export const dataList = [
  {
    id: 1,
    icon: '/assets/icons/header/icon-marketing.svg',
    title: '해외 마케팅',
  },
  {
    id: 2,
    icon: '/assets/icons/header/icon-image.svg',
    title: '퍼블리셔',
  },
  {
    id: 3,
    icon: '/assets/icons/header/icon-box.svg',
    title: '캐드원(제도사)',
  },
  {
    id: 4,
    icon: '/assets/icons/header/icon-target.svg',
    title: '해외 세일즈',
  },
  {
    id: 5,
    icon: '/assets/icons/header/icon-call.svg',
    title: '해외 CS',
  },
];

interface MarketingListProps {
  id: number;
  icon: string;
  title: string;
}
const MarketingList = ({ data, className }: { className?: string; data: MarketingListProps[] }): ReactElement => {
  const plugin = useRef(Autoplay({ delay: 500, stopOnInteraction: true }));

  return (
    <Carousel
      // plugins={[plugin.current]}
      className={cn('w-full', className)}
      opts={{
        loop: true,
      }}
      autoplay={true}
      autoplayInterval={1000}>
      <CarouselContent className="-ml-1 flex flex-row  w-full overflow-x-auto">
        {[...data, ...data, ...data].map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className={cn(
                'rounded-xl pl-3 w-72 md:basis-auto bg-transparent transition-transform duration-500 ease-out',
              )}>
              <div className="p-0">
                <section className="h-20 px-4 gap-x-5 w-auto flex flex-row bg-white/20 rounded-xl justify-start items-center">
                  <div className="p-3 w-[53px] h-[53px]  bg-white/40 rounded-xl">
                    <Image className="w-full h-full" src={item.icon} width={45} height={45} alt="icon marketing" />
                  </div>
                  <p className="text-lg font-semibold text-white/80">{item.title}</p>
                </section>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default MarketingList;
