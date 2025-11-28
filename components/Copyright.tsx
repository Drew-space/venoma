import React from "react";

const Copyright = () => {
  const copyrightLinks = [
    { name: "Terms of use", href: "/" },
    { name: "Cookies Settings", href: "/" },
    { name: "Privacy Policy", href: "/" },
  ];

  return (
    <section className="bg-primary mt-24 py-12 text-white ">
      <div className="container mx-auto flex flex-col items-center gap-12">
        <ul className="flex flex-col xl:flex-row items-center justify-center gap-4">
          {copyrightLinks.map((links) => (
            <li key={links.name}>
              <a href={links.href}>{links.name}</a>
            </li>
          ))}
        </ul>
        <p> &copy; 2025 Venoma. All right reseverd (Drew) </p>
      </div>
    </section>
  );
};

export default Copyright;
