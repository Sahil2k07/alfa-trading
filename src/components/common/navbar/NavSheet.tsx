import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="text-alfa-orange sm:hidden" />
      </SheetTrigger>

      <SheetContent side="left">
        <div>
          <div className="flex justify-center items-center pt-16 gap-4 px-2">
            <Image
              alt="Alfa Logo"
              width={50}
              height={50}
              src={"/Logo.png"}
              className="-mt-3"
            />
            <p className="text-wrap font-extrabold text-alfa-blue">
              Alfa Trading House DMCC
            </p>
          </div>
          <nav className="flex flex-col gap-6 text-alfa-orange mt-10 text-lg font-medium text-center">
            <SheetClose asChild>
              <Link href="/">Home</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/about-us">About Us</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/services">Services</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/sectors-we-serve">Sectors We Serve</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/contact-us">Contact Us</Link>
            </SheetClose>
          </nav>
        </div>

        <SheetFooter className="mt-auto">
          <SheetClose asChild>
            <Button
              variant="outline"
              className="text-alfa-orange border-alfa-orange hover:bg-alfa-orange hover:text-white transition"
            >
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default NavSheet;
