import React from "react";
import Left from "../../Molecules/Left/Left";
import Right from "../../Molecules/Right/Right";

const MainCont = () => {
  return (
    <div className="container m-auto px-10 lg:px-20 w-full min-h-screen flex flex-col md:flex-row items-center py-[80px] gap-14 ">
      <Left />
      <Right />
    </div>
  );
};

export default MainCont;
