import React from "react";
import Link from "next/link";
import Image from "next/image";

export const NavLogo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/img/JomenaGroupWhite.svg"
        alt="Jomena Group Logo"
        width={500}
        height={100}
        className="hidden h-20 w-auto md:block"
      />
      <Image
        src="/img/Jomena mini logo.png"
        alt="Jomena Mini Logo"
        width={40}
        height={40}
        className="block h-10 w-auto md:hidden"
      />
    </Link>
  );
};
