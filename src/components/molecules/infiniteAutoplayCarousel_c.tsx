'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/atoms/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/atoms/carousel';

const items = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
  { id: 4, content: 'Slide 4' },
  { id: 5, content: 'Slide 5' },
];

export function InfiniteAutoplayCarousel() {
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
      className="w-full max-w-sm"
      opts={{
        align: 'start',
        loop: true,
      }}>
      <CarouselContent className="-ml-2 md:-ml-4">
        {items.map((item) => (
          <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{item.content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
