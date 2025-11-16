import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="bg-[url('/header.webp')] flex flex-col justify-center items-center p-20 bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-48 xl:py-64 px-6 gap-6 md:gap-12">
      <div className="flex flex-col gap-6 text-center max-w-7xl">
        <h1 className="font-bold text-white text-4xl lg:text-5xl">
          Global Trading.
          <span className="text-alfa-orange">Trusted Solutins.</span>
          <br />
          Superior Quality
        </h1>

        <h3 className="text-white text-md lg:text-xl md:px-16 font-medium max-w-5xl">
          Alfa Trading House DMCC is a global leader in exporting scientific
          equipment, agricultural technologies, commodities, safety products,
          and engineering solutions.
        </h3>
      </div>

      <div className="flex gap-3">
        <Button className="border bg-transparent lg:text-lg lg:p-5">
          <Link href="/sectors-we-serve">Explore Our Sectors</Link>
        </Button>

        <Button className="bg-alfa-orange lg:text-lg lg:p-5 font-bold hover:bg-white hover:text-alfa-orange hover:border-[0.5px] hover:border-alfa-orange border border-transparent">
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}

export default Header;
