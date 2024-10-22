import React from "react";
import leftRed from "../../assets/team/leftRed.png";
import right1 from "../../assets/team/right1.png";
import right2 from "../../assets/team/right2.png";
import right3 from "../../assets/team/right3.png";
import right4 from "../../assets/team/right4.png";

export default function TeamHero() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 w-full h-full">
      {/* Büyük resim */}
      <img
        src={leftRed}
        alt="red"
        className="col-span-2 row-span-2 object-cover w-full h-full"
      />

      {/* Küçük resimler */}

      <img src={right1} alt="image2" className="object-cover w-full h-full" />
      <img src={right2} alt="image3" className="object-cover w-full h-full" />
      <img src={right3} alt="image4" className="object-cover w-full h-full" />
      <img src={right4} alt="image5" className="object-cover w-full h-full" />
    </div>
  );
}
