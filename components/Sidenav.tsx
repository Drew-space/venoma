import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import Image from "next/image";
import Link from "next/link";

import {} from "react-icons";
import { MdOutlineMenu } from "react-icons/md";
const Sidenav = () => {
  const navLinks = [
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "Kids", href: "#" },
    { name: "Sale", href: "#" },
  ];
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer flex items-center justify-center">
        <MdOutlineMenu className="text-3xl text-primary" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col h-full pt-16 ">
          <SheetHeader>
            <SheetTitle className="max-w-max mx-auto mb-48 ">
              <Link href="#">
                <Image
                  src={"/assets/logo-white.svg"}
                  width={200}
                  height={200}
                  alt="logo"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-center gap-12  text-white ">
            {navLinks.map((links) => (
              <a
                href={links.href}
                key={links.name}
                className="link-pirmary hover:text-accent-2 "
              >
                {links.name}
              </a>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidenav;
