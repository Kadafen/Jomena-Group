import React from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { NavLogo } from "../navbar/NavLogo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8">
      <MaxWidthWrapper className="relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-1 md:col-span-4">
            <NavLogo />
            <span className="mt-3 inline-block text-sm text-zinc-500">
              © Jomena.Group - All rights reserved.
            </span>
          </div>
          <div className="col-span-1 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-x-12">
              <div>
                <span className="block text-zinc-400 font-medium mb-3">Key Features</span>
                <div className="space-y-2.5">
                  <FooterLink title="Overview" href="/#features" />
                  <FooterLink title="Services" href="/#services" />
                  <FooterLink title="Integrations" href="/#carousel" />
                </div>
              </div>
              <div>
                <span className="block text-zinc-400 font-medium mb-3">Success Stories</span>
                <div className="space-y-2.5">
                  <FooterLink title="Customer Reviews" href="/#testimonials" />
                  <FooterLink title="Case Studies" href="/#customers" />
                  <FooterLink title="Performance Stats" href="/#stats" />
                </div>
              </div>
              <div>
                <span className="block text-zinc-400 font-medium mb-3">Get Started</span>
                <div className="space-y-2.5">
                  <FooterLink title="View Plans" href="/#pricing" />
                  <FooterLink title="Book a Demo" href="/#cta" />
                  <FooterLink title="Contact Sales" href="/#cta" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

const FooterLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      className="block text-zinc-500 transition-colors hover:text-zinc-300"
    >
      {title}
    </Link>
  );
};
