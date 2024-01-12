import { HomeModernIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <HomeModernIcon className="h-12 w-12 rotate-[1deg] " />
      <p className="ml-4 text-[34px]">SwiftRent Hub</p>
    </div>
  );
}
