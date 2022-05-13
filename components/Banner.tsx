import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section className='relative bg-white w-full'>
      <Image
        className='absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100 '
        src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        alt='Couple on a bed with a dog'
        layout='fill'
      />

      <div className='hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent'></div>

      <div className='relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
        <div className='max-w-xl text-center sm:text-left'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Let us be your
            <strong className='font-extrabold text-rose-700 sm:block'>
              Minting Solution.
            </strong>
          </h1>

          <p className='max-w-lg mt-4 sm:leading-relaxed sm:text-xl'>
            The NFT Drop contract is best used when you want to release a 1-of-1
            or 1-of-many NFT collection, such as a PFP (profile picture)
            collection, and uses the ERC721 Standard.
          </p>

          <div className='flex flex-wrap gap-4 mt-8 text-center'>
            <a
              className='block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring'
              href='/get-started'>
              Get Started
            </a>

            <a
              className='block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring'
              href='/about'>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
