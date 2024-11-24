'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/atoms/carousel';
import { cn } from '@/lib/utils';

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

const MarketingSwiper = ({
  data,
  className,
}: {
  className?: string;
  data: MarketingListProps[];
}): React.ReactElement => {
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on('init', () => {
      plugin.current.play();
    });

    api.on('reInit', () => {
      plugin.current.play();
    });

    api.on('destroy', () => {
      plugin.current.stop();
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className={cn('', className)}
      opts={{
        align: 'start',
        loop: true,
      }}>
      <CarouselContent className={cn('-ml-2 md:-ml-4')}>
        {data?.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/4 min-w-[332px]">
            <div className="p-1">
              <section className="h-[90px] py-2 px-4 gap-x-5 w-auto flex flex-row bg-white/20 rounded-xl justify-start items-center">
                <div className="p-3 w-[56px] h-[56px]  bg-white/40 rounded-xl">
                  <Image className="w-full h-full" src={item.icon} width={45} height={45} alt="icon marketing" />
                </div>
                <p className="text-2xl font-semibold text-white">{item.title}</p>
              </section>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MarketingSwiper;
