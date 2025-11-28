"use client";
import { motion } from "motion/react";

const Footer = () => {
  const catergoryLinks = {
    Products: [
      { name: "Shoes", href: "/" },
      { name: "Clothing", href: "/" },
      { name: "Accesories", href: "/" },
      { name: "Gift Cards", href: "/" },
      { name: "New Arrivals", href: "/" },
      { name: "Best Sellers", href: "/" },
      { name: "Sale", href: "/" },
    ],

    Resources: [
      { name: "Find A Store", href: "/" },
      { name: "Become A Member", href: "/" },
      { name: "Student Discount", href: "/" },
      { name: "Send Us Feedback", href: "/" },
      { name: "Golf Shorts", href: "/" },
    ],
    Help: [
      { name: "Get Help", href: "/" },
      { name: "Order Status", href: "/" },
      { name: "Delivery", href: "/" },
      { name: "Returns", href: "/" },
      { name: "Payment Options", href: "/" },
      { name: "Contact Us", href: "/" },
    ],
    Company: [
      { name: "About Venoma", href: "/" },
      { name: "News", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Investors", href: "/" },
      { name: "Sustainability", href: "/" },
    ],
  };

  return (
    <footer className=" pt-24">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* 1 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Products </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.Products.map((links) => (
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
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Resources </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.Resources.map((links) => (
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
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Help </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.Help.map((links) => (
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
            <h6 className="h6 pb-4 mb-6 border-b-2 ">Company </h6>
            <ul className="flex flex-col gap-4 ">
              {catergoryLinks.Company.map((links) => (
                <li key={links.name}>
                  <a href={links.href} className="links-secondary ">
                    {links.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
