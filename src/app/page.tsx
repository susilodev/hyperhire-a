import { Button } from '@/components/atoms/button';
import OverflowCarousel from '@/components/molecules/overflowCarousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const WRAPPER_HEADER = 'max-w-[1250px]';
export default function Home() {
  return (
    // background
    <>
      <Image
        src="/assets/header/header-back.png"
        alt="header backdrop"
        width={1920}
        height={929}
        className="absolute z-10 top-0 w-full aspect-[1920/929] object-cover"
      />
      <section
        className={cn(
          'relative z-20 mx-auto flex w-full justify-center flex-col max-w-[1920px] aspect-[1920/929]',
          WRAPPER_HEADER,
        )}>
        {/* Header dan Navbar */}

        <header className="absolute top-0 left-0 right-0 mx-auto max-w-[1200px] w-full z-30 bg-transparent ">
          <nav className="relative w-full h-[60px] flex items-center justify-between px-4 lg:px-0">
            {/* Logo */}
            <Image src="/assets/logo/hyperhire.svg" alt="hyperhire logo" width={114} height={21} className="" />
            {/* Tombol */}
            <Button variant="link" size="sm" className="bg-white text-primary-blue py-2 font-semibold text-base px-6">
              문의하기
            </Button>
          </nav>

          <section className={cn('flex w-full justify-between lg:pt-[105px]', WRAPPER_HEADER)}>
            <section className="w-5/12 debug-red"></section>

            <section className="relative w-6/12 flex-row">
              <OverflowCarousel />
              {/* <div className="w-1/12"></div> */}
            </section>
          </section>
        </header>
      </section>
    </>
  );
}
