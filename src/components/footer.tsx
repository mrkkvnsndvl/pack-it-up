import Link from 'next/link';

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className='px-4 py-8 text-center bg-black md:px-8 xl:px-16'>
      <span className='text-white text-h6'>
        © {getYear} Pack it up, All Rights Reserved.&nbsp;
        <Link className='hover:underline' href='/'>
          Privacy Policy
        </Link>
        &nbsp;|&nbsp;
        <Link className='hover:underline' href='/'>
          Terms of Service
        </Link>
      </span>
    </footer>
  );
}
