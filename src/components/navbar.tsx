import Link from 'next/link';

import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export default function Navbar() {
  return (
    <header className='w-full px-4 bg-white border-b border-b-black md:px-8 xl:px-16'>
      <div className='flex items-center justify-between h-[72px]'>
        <Link className='font-serif font-medium text-h5' href='/'>
          Pack it up
        </Link>
        <div className='flex items-center gap-3'>
          <Link
            className='p-1 text-white bg-black rounded-full'
            href='https://www.facebook.com/markkevsandoval'
            target='_blank'>
            <IconBrandFacebook />
          </Link>
          <Link
            className='p-1 text-white bg-black rounded-full'
            href='https://www.instagram.com/markkevsandoval'
            target='_blank'>
            <IconBrandInstagram />
          </Link>
        </div>
      </div>
    </header>
  );
}
