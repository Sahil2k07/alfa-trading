import Link from "next/link";
import { Button } from "../ui/button";

function Banner() {
  return (
    <section className="bg-alfa-orange flex flex-col justify-around sm:flex-row items-center p-6 md:p-20 gap-6 md:gap-14">
      <p className="text-alfa-blue font-extrabold text-center text-xl md:text-2xl md:max-w-2xl lg:text-4xl lg:max-w-4xl">
        Need Scientific Equipment, Agricultural Technologies, or Industrial
        Solutions?
      </p>

      <Button className="bg-white font-bold text-alfa-blue md:text-xl md:p-7 hover:bg-alfa-blue hover:text-white">
        <Link href="/contact-us">Contact Our Team</Link>
      </Button>
    </section>
  );
}

export default Banner;
