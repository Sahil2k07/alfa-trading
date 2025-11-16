import { Mail, Phone } from "lucide-react";
import Link from "next/link";

function Footer() {
  const phone: string = "+919876543210";
  const email: string = "sublimeweb.in@gmail.com";
  return (
    <footer className="bg-alfa-blue text-gray-400 p-10 flex flex-col gap-7 text-center">
      <div className="flex flex-col gap-7 md:gap-14 md:flex-row justify-around md:items-baseline w-full max-w-5xl mx-auto">
        <section className="text-center flex flex-col gap-3 text-sm">
          <h4 className="font-bold text-white text-xl">
            Alfa Trading House DMCC
          </h4>
          <div className="flex flex-col gap-2">
            <p>
              Global Trading | Industrial Solutions | Scientific Equipements
            </p>
          </div>
        </section>

        <section className="text-center flex flex-col gap-3">
          <h4 className="text-white font-bold text-xl">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/sectors-we-serve">Sectors</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>
        </section>

        <section className="text-center flex flex-col gap-3">
          <h4 className="text-white font-bold">Contact & Social Media</h4>
          <Link
            href={`tel:${phone}`}
            className="flex justify-center gap-2 items-center"
          >
            <Phone />
            <span>{phone}</span>
          </Link>
          <Link
            href={`mailto:${email}`}
            className="flex justify-center items-center gap-2"
          >
            <Mail />
            <span>{email}</span>
          </Link>
        </section>
      </div>

      <div className="h-0.5 bg-gray-600 w-full max-w-5xl mx-auto"></div>

      <span className="text-gray-400 text-xs sm:text-sm">
        © 2025 Alfa Trading House DMCC. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
