import React from "react";
import Union from "../assets/Union.png";

const amasection = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[1440px] h-[813px] relative bg-white justify-center">
        <div className="w-[1376px] h-[749px] left-[32px] top-[32px] absolute bg-gray-200 rounded-[40px]">
          <img
            className="w-[491px] h-[514.61px] left-0 top-[274px] absolute opacity-40"
            src={Union}
          />
          <div className="left-[94.50px] top-[80px] absolute flex-col justify-center items-start gap-5 inline-flex">
            <div className="text-neutral-400 text-[32px] font-normal font-abc leading-9">
              What’s on your mind
            </div>
            <div className="text-zinc-900 text-6xl font-semibold font-['Manrope'] leading-[66px]">
              Ask Questions
            </div>
          </div>
          <div className="h-[538px] left-[721px] top-[137px] absolute flex-col justify-start items-start gap-9 inline-flex">
            <div className="self-stretch h-[52px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-xl font-semibold font-['Manrope'] leading-7">
                  Do you offer freelancers?
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="self-stretch h-[0px] border border-zinc-300"></div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-xl text-left font-semibold font-['Manrope'] leading-7">
                  What’s the guarantee that I will be satisfied
                  <br />
                  with the hired talent?
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="self-stretch h-[0px] border border-zinc-300"></div>
            </div>
            <div className="self-stretch h-[154px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-xl text-left font-semibold font-['Manrope'] leading-7">
                  Can I hire multiple talents at once?
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="self-stretch h-[78px] text-gray-500 text-[15px] font-normal font-['Manrope'] text-left leading-normal">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </div>
              <div className="self-stretch h-[0px] border border-zinc-300"></div>
            </div>
            <div className="self-stretch h-[52px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-xl text-left font-semibold font-['Manrope'] leading-7">
                  Why should I not go to an agency directly?
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="self-stretch h-[0px] border border-zinc-300"></div>
            </div>
            <div className="self-stretch h-14 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="w-[446px] text-zinc-900 text-left text-xl font-semibold font-['Manrope'] leading-7">
                  Who can help me pick a right skillset
                  <br />
                  and duration for me?
                </div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default amasection;
