import React from 'react'

const ApplyPage = () => {
  return (
    <main className="mb-20 flex flex-col items-center justify-center">
      <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
        <h2
          className="text-center text-xl text-main xs:text-3xl"
          
        >
          Before continuing to the application please subscribe on these social
          media platforms.{" "}
        </h2>
        <div className="mt-5 flex gap-3  md:text-sm">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center bg-[#4267B2] rounded-full text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </div>
        </div>
        <div className="group w-full xs:w-52">
          <div className="popover rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
            <p>Click the icon above first.</p>
          </div>
          <button
           
            className="w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52"
            
          >
            CONTINUE
          </button>
        </div>
        <p className="text-center">
          Already applied?{" "}
          <a className="text-blue-400 underline" href="/admit-card">
            Get Admit Card
          </a>
        </p>
      </div>
      </main>
     
  );
}

export default ApplyPage
