'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Image from 'next/image';

export const marketingList = [
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

function MarketSlide() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
  };
  return (
    <div className="absolute left-4 top-0 right-0 bottom-0">
      <Slider {...settings}>
        {[...marketingList, ...marketingList]?.map((item, index) => {
          return (
            <section
              key={index}
              className="h-20 px-4 w-full min-w-[332px] max-w-[332px] !flex !flex-row bg-white/20 rounded-xl !justify-start !gap-x-4 !items-center">
              <div className="p-3 w-[53px] h-[53px]  bg-white/40 rounded-xl  ">
                <Image className="w-full h-full" src={item.icon} width={45} height={45} alt="icon marketing" />
              </div>
              <section className="text-lg font-semibold text-white/80">{item.title}</section>
            </section>
          );
        })}
      </Slider>
    </div>
  );
}

export default MarketSlide;
