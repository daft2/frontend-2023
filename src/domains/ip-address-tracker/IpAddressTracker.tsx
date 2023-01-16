import React, { useState } from "react";

type Props = {};

const IpAddressTracker = (props: Props) => {
  return (
    <div className="text-[18px] font-rubik h-screen">
      <div className="w-full h-fit relative">
        <img
          src="images/ip-address-tracker/pattern-bg.png"
          alt=""
          className="w-full object-cover min-h-[20rem]"
        />
        <div className="absolute top-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-white font-medium text-2xl lg:text-3xl">
            IP Address Tracker
          </h1>
          <div className="py-8 w-full max-w-xs lg:max-w-3xl">
            <div className="relative overflow-hidden rounded-xl">
              <input
                type="text"
                className="py-4 pl-4 pr-14 w-full text-black rounded-xl"
              />
              <span className="absolute inset-y-0 right-0 flex items-center justify-center bg-black w-12 cursor-pointer hover:bg-black/80">
                <img src="images/ip-address-tracker/icon-arrow.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="bg-white flex flex-col lg:flex-row justify-center items-center w-full max-w-xs lg:max-w-3xl shadow rounded-xl py-8 gap-4">
            <DescriptionItem label="ip address" value="192.168.123.123" />
            <div className="hidden lg:block h-[4rem] w-[2px] bg-slate-100" />
            <DescriptionItem label="location" value="Brooklyn, NY 10001" />
            <div className="hidden lg:block h-[4rem] w-[2px] bg-slate-100" />
            <DescriptionItem label="timezone" value="UTC -05.00" />
            <div className="hidden lg:block h-[4rem] w-[2px] bg-slate-100" />
            <DescriptionItem label="isp" value="SpaceX Starlink" />
          </div>
        </div>
      </div>
    </div>
  );
};

const DescriptionItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex flex-col font-bold items-center justify-center lg:items-start lg:justify-start">
    <h1 className="text-ipGray text-xs uppercase">{label}</h1>
    <h1 className="text-ipDarkGray">{value}</h1>
  </div>
);

export default IpAddressTracker;
