import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function SubHeader() {
  return (
    <section className="flex flex-col justify-center p-10 lg:p-16 gap-8 lg:gap-14">
      <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-alfa-orange">
        Connecting Global Markets With Quality & Trust
      </h2>

      <div className="flex xl:px-40 justify-center items-center lg:gap-16 xl:gap-24">
        <Image
          src="/header.webp"
          width={500}
          height={520}
          alt="Picture of the author"
          className="hidden lg:block"
        />

        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-center text-md text-gray-700 lg:text-lg">
            Alfa Trading House DMCC is a multinational general trading company
            delivering high-quality scientific instruments, laboratory
            equipment, commodities, agricultural technologies, and industrial
            solutions. We provide complete end-to-end service—from project
            planning and design to installation, technical support, and
            professional training—all under one roof.
          </p>

          <Button className="bg-white border-alfa-orange text-alfa-orange border hover:bg-alfa-orange hover:text-white cursor-pointer">
            <Link href="/about-us">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SubHeader;
