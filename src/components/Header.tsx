"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#044E83] md:py-7 py-4 z-50 text-white sticky top-0">
      <div className="max-w-[88%] mx-auto">
        {/* Desktop Menu */}
        <div className="md:flex justify-end gap-16 items-center hidden">
          <div className="absolute left-14 top-6">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={90} height={90} />
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#B9D8F3]">
              Tuition Free Education Program on Latest Technologies
            </h2>
          </div>
          <div>
            <nav>
              <ul className="flex gap-12 items-center font-bold">
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/apply">
                  <li>Apply</li>
                </Link>
                <Link href="/job">
                  <li>Job</li>
                </Link>
                <Link href="/result">
                  <li>Result</li>
                </Link>
                <Link href="/courses">
                  <li>Courses</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex justify-end gap-12 items-center">
          <div className="absolute left-4 top-4">
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#dbecfb]">
              Tuition Free Program
            </h2>
          </div>
          <div className="relative z-10">
            {isOpen ? (
              <CloseIcon
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-3xl"
              />
            ) : (
              <MenuIcon
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>
          {isOpen && (
            <div className="fixed inset-0 bg-[#044E83]">
              <nav className="mt-24 max-w-[90%] mx-auto">
                <ul className="flex flex-col gap-10 items-start font-bold text-lg">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <li>Home</li>
                  </Link>
                  <Link href="/apply" onClick={() => setIsOpen(false)}>
                    <li>Apply</li>
                  </Link>
                  <Link href="/job" onClick={() => setIsOpen(false)}>
                    <li>Job</li>
                  </Link>
                  <Link href="/result" onClick={() => setIsOpen(false)}>
                    <li>Result</li>
                  </Link>
                  <Link href="/courses" onClick={() => setIsOpen(false)}>
                    <li>Courses</li>
                  </Link>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
