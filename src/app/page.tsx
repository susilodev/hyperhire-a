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

        <header className="absolute top-0 left-0 right-0 mx-auto max-w-[1170px] w-full z-30 bg-transparent ">
          <nav className="relative w-full h-[65px] flex items-center justify-between px-4 lg:px-0">
            {/* Logo */}
            <Image src="/assets/logo/hyperhire.svg" alt="hyperhire logo" width={114} height={21} className="" />
            {/* Tombol */}
            <Button variant="link" size="lg" className="bg-white text-primary-blue py-3 font-semibold text-base px-6">
              문의하기
            </Button>
          </nav>

          <section className={cn('flex w-full justify-between lg:pt-[105px]', WRAPPER_HEADER)}>
            <section className="w-6/12 pt-12">
              <h1 className="text-white text-5xl font-bold leading-[3.8rem] ">
                최고의 실력을 가진 <br />
                외국인인재를 찾고 계신가요?
              </h1>

              <h2 className="text-white text-2xl font-semibold mt-5">
                법률 및 인사관리 부담없이 <br />
                1주일 이내에 원격으로 채용해보세요.
              </h2>
              <h3 className="underline underline-offset-4 text-white text-lg  mt-6">개발자가 필요하신가요?</h3>
            </section>

            <section className="relative w-6/12 flex-row">
              <OverflowCarousel />
            </section>
          </section>
        </header>
      </section>
    </>
  );
}
