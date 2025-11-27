import { Truck, TruckIcon } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <section className="bg-primary h-10 text-center text-white">
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className=" flex items-center  gap-2">
          <Truck />
          <p className="text-sm">Complementary global shipping</p>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
