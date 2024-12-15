import React from "react";
import Link from "next/link";
import Image from "next/image";

export const NavLogo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/img/JomenaGroupWhite.svg" alt="Jomena Group Logo" width={500} height={100} className="h-24 w-auto" />
    </Link>
  );
};
