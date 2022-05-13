import React from "react";

export default function Service() {
  return (
    <section>
      <div className='px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-screen'>
          <div className='relative z-10 lg:py-16'>
            <div className='relative h-64 sm:h-80 lg:h-full'>
              <img
                className='absolute inset-0 object-cover w-full h-full'
                src='https://i.pinimg.com/736x/c4/42/6a/c4426a1484d2fc75e88cca1ce1386581.jpg'
                alt='Indoors house'
              />
            </div>
          </div>

          <div className='relative flex items-center bg-gray-100'>
            <span className='hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16'></span>

            <div className='p-8 sm:p-16 lg:p-24'>
              <h2 className='text-2xl font-bold sm:text-3xl'>NFT Drop</h2>
              <p className='mt-4 text-gray-600'>
                The NFT Drop contract allows you to define the conditions for
                when and how your users can mint an NFT, including whitelists,
                release dates, claim limits and delayed reveals.
              </p>
              <p className='mt-4 text-gray-600'>
                When you add NFTs to your drop contract, they are not minted at
                this point. You prepare everything for your users so that they
                can mint the NFT(s). This means the user who claims the NFT is
                the one who mints it, and it is minted into their wallet. By
                default, the user is the one who pays the gas fees.
              </p>

              <a
                className='inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring'
                href='/contact'>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
