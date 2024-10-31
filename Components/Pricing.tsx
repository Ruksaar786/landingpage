import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <div className="py-8">
      <section className="text-center">
        <h2 className="text-5xl font-bold">Pricing Plans</h2>
        <p className="text-3xl pt-3">
          Choose the plan that &#x27;s right for you
        </p>
        <br />
      </section>

      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        <div className="rounded-lg border text-card-foreground shadow-sm w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0 animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
          <div>
            <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-4">
              <div className="flex justify-between">
                <h3 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 text-lg">
                  Fullstack web development
                </h3>
              </div>
              <div className="flex flex-col gap-0.5 bg-orange-200 p-2 rounded-md">
                <h3 className="text-lg font-semibold">Total Price</h3>
                <span className="flex  text-lg  font-semibold">R2875.00 </span>
              </div>
              <p className="text-sm text-muted-foreground pt-1.5 h-12">
                live className + recorded video
              </p>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Join live className
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Access to recorded video
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Course duration 9 months
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Total price includes 15% VAT
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0 mt-2">
            <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 py-2 relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur"></div>
              <a href="/dashboard/bank">EFT Bank Transfer</a>
            </button>
          </div>
        </div>
        <div className="rounded-lg border text-card-foreground shadow-sm w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0 animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
          <div>
            <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-4">
              <div className="flex justify-between">
                <h3 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 text-lg">
                  Frontend web development
                </h3>
              </div>
              <div className="flex flex-col gap-0.5 bg-orange-200 p-2 rounded-md">
                <h3 className="text-lg font-semibold">Total Price</h3>
                <span className="flex  text-lg  font-semibold">R1725.00</span>
              </div>
              <p className="text-sm text-muted-foreground pt-1.5 h-12">
                live className + recorded video
              </p>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Join live className
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Access to recorded video
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Course duration 6 months
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Total price includes 15% VAT
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0 mt-2">
            <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 py-2 relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur"></div>
              <a href="/dashboard/bank">EFT Bank Transfer</a>
            </button>
          </div>
        </div>
        <div className="rounded-lg border text-card-foreground shadow-sm w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0 animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
          <div>
            <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-4">
              <div className="flex justify-between">
                <h3 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 text-lg">
                  Fullstack web development
                </h3>
              </div>
              <div className="flex flex-col gap-0.5 bg-orange-200 p-2 rounded-md">
                <h3 className="text-lg font-semibold">Total Price</h3>
                <span className="flex  text-lg  font-semibold">R1725.00</span>
              </div>
              <p className="text-sm text-muted-foreground pt-1.5 h-12">
                Access to recorded video only
              </p>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Access to recorded video
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Course duration 9 months
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-check my-auto text-green-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                  Total price includes 15% VAT
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0 mt-2">
            <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 py-2 relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur"></div>
              <a href="/dashboard/bank">EFT Bank Transfer</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
