import React from "react";

type Props = {};

const IpAddressTracker = (props: Props) => {
  return (
    <div className="text-[18px] font-rubik">
      <div className="w-full h-fit relative">
        <img
          src="images/ip-address-tracker/pattern-bg.png"
          alt=""
          className="w-full object-cover min-h-[20rem]"
        />
        <div className="absolute top-10 flex items-center justify-center w-full">
          <h1 className="text-white font-medium text-2xl">
            IP Address Tracker
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IpAddressTracker;
