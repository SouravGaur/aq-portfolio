import React from "react";

const AboutmeImg = () => {
  return (
    <div className="h-[500px] width-[300px] relative">
      <div className="h-[500px] w-[300px]  rounded-[100px] absolute overflow-hidden">
        <img
          src="../../public/images/about-me.jpg"
          alt=""
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px]  w-[250px] bg-orange-2 absolute botttom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutmeImg;
