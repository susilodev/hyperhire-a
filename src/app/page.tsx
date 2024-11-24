'use client';

import { Button } from '@/components/atoms/button';
import OverflowCarousel from '@/components/molecules/overflowCarousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Headerlist, { headerData } from '@/components/molecules/headerList';
import useElementWidth from '@/hooks/useElementWidth';
import MarketingSwiper, { dataList } from '@/components/molecules/marketing-swiper';

const WRAPPER_HEADER = 'w-full';
export default function Home() {
  const { ref, width } = useElementWidth();
  return (
    <>
      <Image
        src="/assets/header/header-back.png"
        alt="header backdrop"
        width={1920}
        height={929}
        className="absolute z-10 top-0 mx-auto inset-0 h-[929px] w-[1920px] object-cover"
      />

      <section
        className={cn('relative z-20 mx-auto flex w-full justify-center flex-col 2 h-auto pb-40', WRAPPER_HEADER)}>
        {/* Header dan Navbar */}

        <header className="absolute top-0 left-0 right-0 mx-auto max-w-[1190px] w-full z-30 bg-transparent ">
          <nav ref={ref} className="relative w-full h-[65px] flex items-center justify-between px-4 lg:px-0">
            {/* Logo */}
            <Image src="/assets/logo/hyperhire.svg" alt="hyperhire logo" width={114} height={21} className="" />
            {/* Tombol */}
            <Button variant="link" size="lg" className="bg-white text-primary-blue py-3 font-bold text-base px-6">
              문의하기
            </Button>
          </nav>

          <section className={cn('flex w-full flex-row justify-between lg:pt-[105px]', WRAPPER_HEADER)}>
            <section className="w-6/12 pt-12 flex flex-col">
              <h1 className="text-white text-5xl font-bold leading-[3.8rem] ">
                최고의 실력을 가진 <br />
                외국인인재를 찾고 계신가요?
              </h1>

              <h2 className="text-white text-2xl font-semibold mt-5">
                법률 및 인사관리 부담없이 <br />
                1주일 이내에 원격으로 채용해보세요.
              </h2>

              <h3 className="text-white text-lg font-semibold mt-6">개발자가 필요하신가요?</h3>
              <span className="-mt-1 w-[170px] border-solid border-white/90 mb-10 border-[0.7px]"></span>

              <Headerlist data={headerData} />
            </section>

            <section className="w-6/12 flex-row pl-4">
              <OverflowCarousel />
            </section>
          </section>

          <MarketingSwiper className="absolute left-0 right-[-50vw] max-w-none" data={dataList} />
        </header>
      </section>
    </>
  );
}
