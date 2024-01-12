"use client";
import { lusitana } from "../fonts";
import Image from "next/image";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
// import { authenticate } from '../lib/action';
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../login";
import Logo from "../logo";
import Link from "next/link";

export default function LoginForm() {
  const errorMessage = "";

  return (
    <div className="flex flex-col imin-h-screen p-6">
      <div className="flex-shrink-0 h-20 items-center rounded-lg bg-blue-700 p-4 md:h-30">
        <Logo />
      </div>
      <Logo />
      <form action="" className="space-y-3 w-full items-center">
        <div
          className="flex-1 flex flex-col items-center  
        justify-center rounded-lg bg-gray-100 px-6 pb-4 pt-8  "
        >
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Please log in to continue.
          </h1>
          <div className="w-80">
            <div className=" ">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900 "
                htmlFor="email"
              >
                User ID
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="text"
                  type="email"
                  name="email"
                  placeholder="Enter your User Id"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
            <>
              <p className="text-gray-600">{`I don't have an account? `}</p>
              <Link
                href="/manager/register"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center">
        <Image
          src="/logo.png"
          width={450}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/logo.png"
          width={560}
          height={580}
          className="block md:hidden mb-20 items-center"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-30" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
