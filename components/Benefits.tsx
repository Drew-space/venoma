import Image from "next/image";

const Benefits = () => {
  return (
    <section className="mt-24 pt-[72px] min-h-[540px] bg-[url('/assets/img/benefits/bg.png')] bg-no-repeat bg-cover relative overflow-hidden ">
      <div className="container mx-auto flex flex-col ">
        {/* for the text */}
        <div className="relative  flex flex-col md:flex-row justify-between gap-6 md:gap-48 text-gray-300 ">
          {/* item 1 */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-[360px] ">
            <div>
              <div className="flex items-center justify-start gap-2 mb-4 ">
                <Image
                  src={"/assets/icons/trophy.svg"}
                  height={24}
                  width={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold ">
                  Performance Excellence
                </h6>
              </div>
              <p>
                {" "}
                Crafted from high-performance materials for unmatched durability
                and comfort{" "}
              </p>
            </div>
            {/*  */}
            <div>
              <div className="flex items-center justify-start gap-2 mb-4 ">
                <Image
                  src={"/assets/icons/design.svg"}
                  height={24}
                  width={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold ">
                  Stylish Design
                </h6>
              </div>
              <p className="xl:max-w-[320px] xl:mr-auto ">
                From classic essentials to cutting-edge trends, our apparel
                blends fashion with function seamlessly
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-[360px] ">
            <div>
              <div className="flex items-center justify-start gap-2 mb-4 ">
                <Image
                  src={"/assets/icons/build.svg"}
                  height={24}
                  width={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold ">
                  Build to last
                </h6>
              </div>
              <p>
                Dsign to eithstand the rigors of active lifestyle, ensuring
                longevity
              </p>
            </div>
            {/*  */}
            <div>
              <div className="flex items-center justify-start gap-2 mb-4 ">
                <Image
                  src={"/assets/icons/trophy.svg"}
                  height={24}
                  width={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold ">
                  Performance Excellence
                </h6>
              </div>
              <p>
                Crafted from high-performance materials for unmatched durability
                and comfort
              </p>
            </div>
          </div>
        </div>
        {/* for the image */}
        <div></div>
      </div>
    </section>
  );
};

export default Benefits;
