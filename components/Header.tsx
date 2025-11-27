import Image from "next/image";
import Link from "next/link";
import Sidenav from "./Sidenav";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "Kids", href: "#" },
    { name: "Sale", href: "#" },
  ];

  return (
    <header className="xl:absolute max-w-[1440px] mx-auto left-0 right-0  bg-gray-50 ">
      <div className=" container mx-auto">
        <div className=" flex justify-between items-center py-10 ">
          {/* logo and sidenav */}
          <div className="flex justify-between items-center w-full md:w-auto ">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                width={226}
                height={28}
                alt="logo"
              />
            </Link>
            <div className="  xl:hidden ">
              <Sidenav />
            </div>
          </div>
          {/* nav desktop */}
          <nav className="hidden xl:flex gap-6 pl-24 text-primary font-semibold">
            {navLinks.map((links) => (
              <a
                href={links.href}
                key={links.name}
                className="link-primary hover:text-accent-2"
              >
                {links.name}
              </a>
            ))}
          </nav>

          {/* search, favourite, cart */}
          <div className="hidden md:flex items-center justify-end gap-4 w-[360px] ">
            <input
              type="search"
              name=""
              id=""
              className="input  w-[126px] focus:w-[200px] transition-all pl-7 "
              placeholder="Search..."
            />
            {/* favourites */}
            <button className="btn-icon btn-outline group">
              <HeartIcon
                className="text-primary group-hover:text-primary/90"
                fill="black"
              />
            </button>
            {/* cart */}
            <button className="btn-icon btn-accent">
              <ShoppingCartIcon className="text-primary " fill="black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
