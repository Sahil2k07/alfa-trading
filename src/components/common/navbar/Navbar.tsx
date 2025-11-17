import Link from "next/link";
import Image from "next/image";
import NavSheet from "./NavSheet";
import { Button } from "../../ui/button";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="flex justify-between sm:px-12 md:px-24 lg:px-36 py-4 px-6 items-center sticky top-0 z-50 bg-white">
      <div className="flex justify-evenly sm:justify-center items-center gap-6">
        <NavSheet />
        <Link href={"/"}>
          <Image
            alt="Alfa Logo"
            width={50}
            height={50}
            src={"/Logo.png"}
            className="-mt-3 hidden sm:block"
          />
        </Link>
        <NavLinks />
      </div>
      <div>
        <Button className="hidden sm:block bg-alfa-orange font-bold hover:bg-white hover:text-alfa-orange hover:border-[0.5px] hover:border-alfa-orange border border-transparent">
          <Link href="/contact-us">Contact Us</Link>
        </Button>
        <Link href={"/"} className="block sm:hidden">
          <Image
            alt="Alfa Logo"
            width={50}
            height={50}
            src={"/Logo.png"}
            className="-mt-2"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
