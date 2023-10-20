import React from "react";
import like from "../../../../public/exploreImages/like.png";
import Image from "next/image";
import ellipsis from "../../../../public/ellipsis.png";
import ethereum from "../../../../public/ethereum.png";
import './card.css'

const Card = ({
  img,
  imgAlt,
  cardText,
  imgNext,
  imgNextAlt,
  cardParagraph,
  cardEth,
  noOfLikes,
  iconText,
  buttonText,
}) => {
  return (
    <div className="cardDiv mt-5">
      <Image src={img} className="rounded" alt={imgAlt} />
      <h3 className="mt-6 mb-5 font-bold text-2xl">{cardText}</h3>
      <div className="flex justify-between">
        <div className="flex">
          <Image src={imgNext} className="rounded-full" alt={imgNextAlt} />
          <span className="mt-3 ml-2 text-sm">{iconText}</span>
        </div>
        <div className="mt-5">
          <Image src={ellipsis} className="" alt="Ellipsis" />
        </div>
      </div>

      <div className="flex mt-6 justify-between">
        <div>
          <p className="text-xs">{cardParagraph}</p>
          <h2 className="text-lg inline">
            <Image src={ethereum} className="inline" alt="Ethereum" />
            {cardEth}
          </h2>
        </div>
        <div className="flex">
          <p className="text-xs">{noOfLikes}</p>
          <h2 className="text-lg">
            <Image src={like} className="" alt="Like" />
          </h2>
        </div>
      </div>
      <div>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
