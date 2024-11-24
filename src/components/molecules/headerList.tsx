import { ReactElement } from 'react';

export const headerData = [
  {
    id: '1',
    title: <>평균 월 120만원</>,
    desc: (
      <>
        임금을 해당 국가를 기준
        <br />
        으로계산합니다.
      </>
    ),
  },
  {
    id: '2',
    title: <>최대 3회 인력교체</>,
    desc: (
      <>
        막상 채용해보니 맞지 않 <br /> 아도 걱정하지 마세요.
      </>
    ),
  },
  {
    id: '3',
    title: <>평균 3일, 최대 10일</>,
    desc: (
      <>
        급하게 사람이 필요한경
        <br /> 우에도 빠른 채용이 가능
        <br />
        합니다.
      </>
    ),
  },
];

interface PropsHeader {
  id: string;
  title: ReactElement;
  desc: ReactElement;
}

export default function HeaderList({ data }: { data: PropsHeader[] }): ReactElement {
  return (
    <section className="flex flex-row mt-7 gap-x-[54px]">
      {data?.map((item: PropsHeader) => {
        return (
          <div className="flex flex-col text-white" key={item.id}>
            <span className="w-[130px] border-solid border-white/90 border-[0.7px]"></span>
            <p className="text-lg font-bold mt-[7px]">{item.title}</p>
            <p className="text-base mt-2 text-white/80 text-justify font-semibold">{item.desc}</p>
          </div>
        );
      })}
    </section>
  );
}
