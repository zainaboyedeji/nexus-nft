import React from "react";
import Image from "next/image";
import polina from "../../../../public/bannerImages/polina.png";
import slack from "../../../../public/bannerImages/slack.png";
import telegram from "../../../../public/bannerImages/telegram.png";
import vector from "../../../../public/bannerImages/vector.png";
import hero from "../../../../public/hero-1.png";
import hero2 from "../../../../public/hero-2.png";

const Banner = () => {
    return (
        <div>
            <h6>Join Our Community</h6>
            <p>
                Learn,make a friends and grow together with other <br /> artist around the world
            </p>

            <div className="flex">
                <div>
                    <Image src={hero} alt="Hero" />
                </div>

                <div>
                    <button>Join Now</button>
                    <div>
                        <Image src={telegram} alt="Telegram" />
                        <Image src={vector} alt="Vector" />
                        <Image src={slack} alt="Slack" />
                    </div>
                    <Image src={polina} alt="Polina" />
                </div>

                <div>
                    <Image src={hero2} alt="Hero2" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
