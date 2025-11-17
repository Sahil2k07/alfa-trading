"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about-us",
      label: "About Us",
    },
    {
      path: "/services",
      label: "Services",
    },
    {
      path: "/sectors-we-serve",
      label: "Sectors we serve",
    },
  ];

  return (
    <nav className="hidden sm:flex text-gray-500 font-semibold gap-5 md:gap-8 lg:gap-12">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            pathname === link.path ? "text-alfa-orange" : "text-gray-500"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;
