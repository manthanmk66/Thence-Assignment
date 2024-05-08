import React from "react";
import logo from "../assets/Vector.png";

const Submission = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen mt-[-11vh]">
      <div className="w-[1392px] h-[60.17px] pl-[52.22px] pr-[20.89px] pt-[19.97px]  bg-white/opacity-80 rounded-[65.28px] backdrop-blur-[31.33px] justify-between items-center inline-flex mt-[-20vh]">
        <img className="" src={logo} alt="logo"></img>
      </div>
      <div className="w-[718px] h-[357px] flex-col justify-start items-center gap-[41px] inline-flex">
        <div className="justify-start items-start gap-[25px] inline-flex">
          <div className="w-20 h-20 relative">
            <div className="w-14 h-14 left-[12.50px] top-[12.50px] absolute bg-white rounded-full" />
          </div>
        </div>
        <div className="self-stretch h-[236px] flex-col justify-start items-center gap-4 flex">
          <div className="text-green-600 text-4xl font-normal font-abc leading-10">
            Success Submitted
          </div>
          <div className="self-stretch h-48 flex-col justify-start items-center gap-5 flex">
            <div className="text-center text-zinc-900 text-[56px] font-semibold font-['Manrope'] leading-[67.20px]">
              Congratulations
            </div>
            <div className="self-stretch text-center text-neutral-500 text-[27px] font-medium font-['Manrope'] leading-[35.10px]">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </div>
          </div>
        </div>
        <div className="w-[718px] mt-28 text-center">
          <span
            style={{
              color: "var(--neutral-500)",
              fontSize: "1rem",
              fontWeight: "normal",
              fontFamily: "Manrope",
              lineHeight: "normal",
            }}
          >
            Redirecting you to Homepage in
          </span>
          <span
            style={{
              color: "var(--neutral-500)",
              fontSize: "1rem",
              fontWeight: "medium",
              fontFamily: "Manrope",
              lineHeight: "normal",
            }}
          >
            {" "}
          </span>
          <span
            style={{
              color: "var(--zinc-900)",
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "Manrope",
              lineHeight: "normal",
            }}
          >
            5 Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Submission;
