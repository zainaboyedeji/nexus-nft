import React from "react";
import Image from "next/image";
import polina from "../../../../public/bannerImages/polina.png";
import slack from "../../../../public/bannerImages/slack.png";
import telegram from "../../../../public/bannerImages/telegram.png";
import vector from "../../../../public/bannerImages/vector.png";
import hero from "../../../../public/hero-1.png";
import hero2 from "../../../../public/hero-2.png";
import hands from "../../../../public/hands.png";

const Banner = () => {
  return (
    <div className="p-2 bg-gray-100 mt-20">
      <div>
        <h6 className="inline">Join Our Community</h6>
        <Image src={hands} alt="Hands" className="inline" />
      </div>
      <p className="text-center">
        Learn,make a friends and grow together with other <br /> artist around
        the world
      </p>

      <div className="w-full flex justify-between mt-10">
        <div>
          <Image src={hero} alt="Hero" className="rounded" />
        </div>

        <div>
          <div className="text-center"><button>Join Now</button></div>
          <div className="flex justify-center mt-5 mb-5">
            <Image src={telegram} alt="Telegram" />
            <Image src={vector} alt="Vector" />
            <Image src={slack} alt="Slack" />
          </div>
          <Image src={polina} alt="Polina" className="rounded" />
        </div>

        <div>
          <Image src={hero2} alt="Hero2" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
