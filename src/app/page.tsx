import Image from 'next/image';
import Link from 'next/link';

import { HowToUse } from '@/_lib/how-to-use-lib';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 justify-center px-4 text-center bg-cover bg-center md:px-8 xl:px-16 bg-[url('/jpgs/hero.jpg')] h-[calc(100svh-72px)]">
        <h1 className='leading-none text-white text-h2 md:text-h1'>
          The Adventure Essentials List
        </h1>
        <p className='text-white text-h6 md:text-h5'>
          Ensuring a comprehensive and organized packing list for any trip.
        </p>
      </section>
      <section className='flex flex-col gap-5 px-4 py-8 bg-white lg:gap-10 md:px-8 xl:px-16 md:py-16 xl:py-28'>
        <div className='flex flex-col items-center justify-center text-center'>
          <span className=' text-h6'>How to use Pack it up</span>
          <h2 className='mb-6 font-medium leading-none text-h3 md:text-h2'>
            Don&apos;t forget a thing
          </h2>
          <p className=' text-h6 max-w-[651px]'>
            Your go-to companion for a hassle-free adventure! Whether
            you&apos;re planning a camping trip, a weekend getaway, or a grand
            expedition, Pack it up helps you stay organized
          </p>
        </div>
        <div className='grid items-end grid-cols-1 gap-6 xl:grid-cols-2 place-items-center'>
          {HowToUse.map(({ id, src, heading, description }) => (
            <div
              className='group shadow-[0_0_0_1px_rgba(34,34,34,100)] max-w-[564px]'
              key={id}>
              <div className='overflow-hidden'>
                <Image
                  className='w-auto h-auto transition-all duration-300 group-hover:scale-110'
                  src={src}
                  alt='How to use Pack it up'
                  width={400}
                  height={400}
                  priority={true}
                />
              </div>
              <div className='flex flex-col px-3 pb-3 '>
                <h3 className='font-medium text-h4 md:text-h3'>{heading}</h3>
                <p className=' text-h6'>{description}</p>
              </div>
            </div>
          ))}
          <Link
            className='px-5 py-4 text-center text-white bg-black max-w-[564px] w-full text-h6'
            href='/create'>
            Create a List
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
