"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/clubs", label: "Clubs" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky pl-52 top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-evenly">
    
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">EventHub</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button>Sign In</Button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;