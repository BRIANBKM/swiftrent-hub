"use client";

import React from "react";
import Logo from "./logo";
import { lusitana } from "./fonts";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="flex flex-col min-h-screen p-6">
      <div className="flex-shrink-0 h-20 items-center rounded-lg bg-blue-700 p-4 md:h-30">
        <Logo />
      </div>
      
      <p
        className={`font-${lusitana.className} text-2xl mt-10 text-gray-800 leading-tight md:text-5xl`}
      >
        <strong>Welcome to: </strong>
      </p>
      <div className="flex flex-row items-center justify-evenly mt-20 ">
        <Image
          src="/logo.png"
          width={500}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <div className="flex flex-col items-center border border-solid border-black-900 p-10">
          <Image
            src="/logo.png"
            width={560}
            height={620}
            className="block md:hidden mb-20"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Link
            href="/manager"
            className="flex items-center gap-5 rounded-lg bg-blue-900 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-600 blur-400"
          >
            Login as Manager
          </Link>
          <Link
            href="/tenant"
            className="flex items-center gap-5 rounded-lg bg-blue-900 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-600 mt-4"
          >
            Login as Tenant
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
