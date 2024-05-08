import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="mb-2">
      <div className="w-[1376px] h-36 p-[60px] bg-neutral-100 rounded-[40px] flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-center gap-[77px] flex">
          <div className="flex-col justify-start items-center gap-8 flex">
            <div className="justify-start items-center gap-[668px] inline-flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-6 h-6 p-0.5 justify-center items-center flex" />
                <div className="text-zinc-900 text-lg font-medium font-['Manrope'] flex gap-2 leading-tight whitespace-nowrap">
                  <FaRegCopyright />
                  <span>Talup 2023. All rights reserved</span>
                </div>
              </div>
              <div className="justify-start items-start gap-[52px] flex">
                <div className="text-zinc-900 text-lg font-normal font-['Manrope']  leading-tight whitespace-nowrap">
                  Terms & Conditions
                </div>
                <div className="text-zinc-900 text-lg font-normal font-['Manrope'] leading-tight whitespace-nowrap">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
