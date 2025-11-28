import Link from "next/link";
import Image from "next/image";

const Category = () => {
  const catergoryLinks = {
    Inspiration: [
      { name: "Summer Clothes", href: "/" },
      { name: "Summer OutFits", href: "/" },
      { name: "Summer Tops", href: "/" },
      { name: "Summer Hots", href: "/" },
      { name: "Summer Dresses", href: "/" },
    ],

    SummerCasual: [
      { name: "Crop Tops", href: "/" },
      { name: "Graphic Tees", href: "/" },
      { name: "White Tees", href: "/" },
      { name: "High Wasted Shorts", href: "/" },
      { name: "Short Shorts", href: "/" },
    ],
    SummerSports: [
      { name: "Bike Shorts", href: "/" },
      { name: "Basketball Shorts", href: "/" },
      { name: "Plus-Size Swimwear", href: "/" },
      { name: "Running Sunglasses", href: "/" },
      { name: "Golf Shorts", href: "/" },
    ],
    SummerEssentials: [
      { name: "Summer Shoes", href: "/" },
      { name: "Summer Pants", href: "/" },
      { name: "Sleeveless Shirts", href: "/" },
      { name: "Sunglasses", href: "/" },
      { name: "Moisture-Wicking Shirts", href: "/" },
    ],
  };

  return (
    <section className="mt-24 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-[72px] ">
          <h4 className="h4 w-max border-b-2 "> Shop by Category </h4>
          <Link
            href="/"
            className="link-primary text-accent-2 hover:text-primary "
          >
            View All
          </Link>
        </div>
        {/* grid image */}
        <div className="grid grid-cols-3 gap-4 xl:gap-10 mb-10 ">
          {/* image 1 */}
          <div className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px] ">
            <Image
              src="/assets/img/category/1.jpg"
              fill
              quality={100}
              alt=""
              className="object-contain"
            />
          </div>
          {/* image 2 */}
          <div className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px] ">
            <Image
              src="/assets/img/category/2.jpg"
              fill
              quality={100}
              alt=""
              className="object-contain"
            />
          </div>
          {/* image 3 */}
          <div className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px] ">
            <Image
              src="/assets/img/category/3.jpg"
              fill
              quality={100}
              alt=""
              className="object-contain"
            />
          </div>
        </div>

        {/* category link  */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* 1 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Summer Inspiration </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.Inspiration.map((links) => (
                <li key={links.name}>
                  <a href={links.href} className="links-secondary ">
                    {links.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 2 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Summer Casual </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.SummerCasual.map((links) => (
                <li key={links.name}>
                  <a href={links.href} className="links-secondary ">
                    {links.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 3 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Summer Sports </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.SummerSports.map((links) => (
                <li key={links.name}>
                  <a href={links.href} className="links-secondary ">
                    {links.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 4 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Summer Essentials </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.SummerEssentials.map((links) => (
                <li key={links.name}>
                  <a href={links.href} className="links-secondary ">
                    {links.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
