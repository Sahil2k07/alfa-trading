import Link from "next/link";
import { Button } from "../ui/button";
import NavSheet from "./NavSheet";

function Navbar() {
  return (
    <nav className="flex justify-between sm:justify-between sm:px-12 md:px-24 lg:px-36 py-3 px-6 items-center">
      <div>
        <NavSheet />
        <nav className="hidden sm:flex text-gray-500 font-semibold gap-5 md:gap-8 lg:gap-12">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/sectors-we-serve">Sectors We Serve</Link>
        </nav>
      </div>
      <Button className="bg-alfa-orange font-bold hover:bg-white hover:text-alfa-orange hover:border-[0.5px] hover:border-alfa-orange border border-transparent">
        Contact Us
      </Button>
    </nav>
  );
}

export default Navbar;
