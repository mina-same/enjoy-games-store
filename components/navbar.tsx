"use client";

import Link from "next/link";
import { NavbarActions } from "./navbar-actions";
import { Container } from "./ui/container";
import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  ClerkProvider,
} from "@clerk/nextjs";
import { FaHome, FaShoppingCart, FaThList, FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation"; // Correct import for app directory
import { useState } from "react";

// Navbar component
export const Navbar = () => {
  const pathname = usePathname(); // Correct usePathname hook
  const [hovered, setHovered] = useState<number | null>(null); // State for hover effect

  // Helper to detect active link
  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-dark mx-[100px]">
      <Container>
        <div className="flex h-[100px] justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Navbar actions: Clerk (Sign-in, User button) + Cart */}
          <div className="flex items-center gap-6">
            <ClerkProvider>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <NavbarActions />
            </ClerkProvider>
          </div>

          {/* Main navigation with icons and hover/active effects */}
          <div className="flex items-center gap-[172px]">
            <div className="flex items-center gap-[30px]">
              {[
                { href: "/contact", label: "اتصل بنا", icon: <FaPhoneAlt /> },
                { href: "/category", label: "الأصناف", icon: <FaThList /> },
                { href: "/shop", label: "المتجر", icon: <FaShoppingCart /> },
                { href: "/", label: "الصفحة الرئيسية", icon: <FaHome /> },
              ].map((link, index) => (
                <div key={index} className="relative flex flex-col items-center w-200px">
                  <Link
                    href={link.href}
                    className={`text-xs font-extrabold font-['Cairo'] flex items-center gap-2 transition-colors duration-300 ${
                      isActive(link.href) ? "text-white" : "text-white"
                    } ${hovered === index ? "text-gray-300" : ""}`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {link.icon} {link.label}
                  </Link>
                  {/* Underline for active link */}
                  {isActive(link.href) && (
                    <div
                      className="absolute top-5 w-[40px] h-[2px] bg-white transition-all duration-300"
                      style={{ left: '50%', transform: 'translateX(-50%)' }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Logo on the right */}
          <Link href="/" className="flex items-center z-15 cursor-pointer relative">
            <Image
              className="w-[70px] h-[67px] mr-4"
              src="/svg/logo.svg"
              alt="Logo"
              width={70}
              height={67}
            />
          </Link>

        </div>
      </Container>
    </div>
  );
};
