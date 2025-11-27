import { FaArrowRight, FaFire, FaPlay } from "react-icons/fa";
//

const Hero = () => {
  return (
    <section className="bg-gray-50 xl:h-[1064px]  bg-[url(/assets/img/hero/bg.png)] bg-no-repeat bg-position-[-60%] md:bg-bottom-right xl:bg-right">
      <div className="container mx-auto flex items-center h-full ">
        <div className="relative flex flex-col xl:flex-row items-center w-full ">
          {/* For the */}
          <div className=" w-full max-w-[760px] mb-24 md:mb-0 flex flex-col items-center xl:items-start ">
            <div className="flex items-center gap-4 mb-12">
              <div className=" bg-accent text-primary flex items-center gap-2 py-2 px-4 rounded-full">
                {" "}
                <FaFire /> <p className="font-semibold">New</p>
              </div>
              <p>Premium Sport Apparel for Peak Performance</p>
            </div>
            <h1 className="h1 mb-10 text-center xl:text-left ">
              {" "}
              Unleash <br /> Your Inner <br /> Athlete
            </h1>
            {/*  btns */}
            <div className="flex flex-col xl:flex-row gap-10 mb-32 md:mb-0 ">
              <button className="btn btn-accent">
                <div className=" flex items-center gap-4">
                  <span>Explore Collection</span>
                  <FaArrowRight />
                </div>
              </button>
              <button className=" h-14 font-medium text-primary flex items-center justify-center cursor-pointer ">
                <div className=" flex items-center gap-4">
                  <span>Watch Video </span>
                  <div className="bg-white text-primary rounded-full border-10 border-gray-200 p-4  ">
                    <FaPlay />
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* For the image */}
          <div className="relative xl:absolute xl:-right-[100px] xl:top-7  ">
            <img
              src="/assets/img/hero/running.png"
              alt="person running image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
