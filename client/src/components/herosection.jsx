import React from "react";
import Model from "../assets/image 32618.png";
import AMASection from "./amasection";
import Footer from "./footer";
import Navbar from "./navbar";
import Frame from "../assets/square.png";
import Spark from "../assets/spark.png";

const Herosection = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[1440px] h-[1044px] relative">
        {/* Positioning the Frame image at the top left corner */}
        <img
          src={Frame}
          alt="FrameImage"
          className="absolute top-0 left-0 w-[100px] h-[100px]"
        />

        <div className="w-[79.69px] h-[79.69px] left-[603px] top-[439px] absolute">
          <div className="w-[79.69px] h-[79.69px] left-0 top-0 absolute bg-white rounded-full" />
          <div className="w-10 h-10 px-[2.50px] pt-[2.50px] pb-[6.25px] left-[20px] top-[20.50px] absolute justify-center items-center inline-flex" />
        </div>
        <div className="w-[1233px] h-[886px] left-[62px] top-[79px] absolute">
          <div className="w-[588px] h-[178px] left-[364px] top-0 absolute flex-col justify-center items-center gap-4 inline-flex">
            <div className="text-green-600 text-4xl font-normal leading-10 font-abc">
              Success stories
            </div>
            {/* <h1 className="text-xl font-Switzer">This is for Testing Fonts</h1> */}
            <div className="w-[588px]  text-center text-zinc-900 text-[50px] font-semibold whitespace-nowrap  font-Manrope leading-[67.20px]">
              Every success journey
            </div>
            <div>
              <span className="w-[588px]  text-left text-zinc-900 text-[50px] font-semibold   font-Manrope leading-[67.20px]">
                we've encountered.
              </span>
            </div>
          </div>
          <div className="w-[398px] text-left left-[835px] top-[361px] font- absolute text-zinc-900 text-[40px] font-semibold font-Manrope leading-[48px]">
            Enhance fortune 50 company's insights teams research capabilities
          </div>
          <div className="w-[727.49px] h-[596px] left-0 top-[290px] absolute">
            <div className="w-[506.98px] h-[546.27px] left-[144.69px] top-0 absolute">
              <div className="w-[506.98px] h-[546.27px] left-0 top-0 absolute" />
              <img className=" top-0 absolute rounded-[50.70px]" src={Model} />
            </div>
            <div className="w-[245px] h-[88px] pl-4 pr-8 py-4 left-[86.19px] top-[412.71px] absolute bg-white rounded-[111.54px] shadow backdrop-blur-[50.70px] justify-start items-center gap-3.5 inline-flex">
              <div className="w-[52px] h-[52px] relative">
                <div className="w-[52px] h-[52px] left-0 top-0 absolute opacity-40 bg-neutral-200 rounded-full" />
                <div className="w-8 h-8 pl-[3px] pr-1 pt-1 pb-[3px] left-[10px] top-[10px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                <div className="text-zinc-900 text-2xl font-bold font-Manrope uppercase">
                  10 days
                </div>
                <div className="text-zinc-500 text-base font-medium font-Manrope leading-tight">
                  Staff Deployment
                </div>
              </div>
            </div>
            <div className="w-[290.49px] h-[239px] pl-9 pr-[30px] pt-[34px] pb-10 left-[437px] top-[357px] absolute bg-green-950 rounded-[28.36px] shadow border border-neutral-700 flex-col justify-start items-start gap-5 inline-flex">
              <div className="justify-start items-baseline gap-[11px] inline-flex">
                <div className="text-white text-[63.37px] font-medium  leading-[76.05px] font-Switzer">
                  $0.5
                </div>
                <div className="text-stone-400 text-[22.81px] font-medium font-Switzer uppercase leading-loose tracking-tight">
                  million
                </div>
              </div>
              <div className="w-[224.49px] text-left text-stone-300 text-lg font-medium  leading-normal font-Manrope">
                Reduced client expenses by saving on hiring and employee costs.
              </div>
            </div>
            <div className="w-[267.82px] h-[239px] p-[30px] left-0 top-[114px] absolute bg-white rounded-[27.11px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[79.17px] h-[78.48px] relative origin-top-left rotate-[-21.27deg]" />
              <div className="text-zinc-900 text-[64px] font-medium leading-[76.80px] font-Switzer">
                40%
              </div>
              <div className="w-[207.82px] text-left text-zinc-500 text-lg font-medium font-Manrope leading-normal">
                Achieved reduction in project execution time by optimising team
                availability
              </div>
            </div>
          </div>
          <div className="w-[56.25px] h-[10.75px] left-[835px] top-[608px] absolute justify-start items-start gap-3 inline-flex">
            <div className="w-[10.75px] h-[10.75px] bg-green-600 rounded-full" />
            <div className="w-[10.75px] h-[10.75px] bg-neutral-200 rounded-full" />
            <div className="w-[10.75px] h-[10.75px] bg-neutral-200 rounded-full" />
          </div>
          <div className="w-[245px] h-[88px] px-10 py-[31px] left-[835px] top-[749px] absolute bg-zinc-900 hover:bg-neutral-600 rounded-[100px] justify-center items-center gap-4 inline-flex">
            <div className="text-center text-white text-xl font-semibold font-Manrope capitalize">
              Explore more
            </div>
            <div className="w-6 h-6 px-1 py-[4.22px] origin-top-left -rotate-180 justify-center items-center flex" />
          </div>
        </div>
      </div>
      <AMASection />
      <Footer />
    </div>
  );
};

export default Herosection;
