import React from "react";
import Image from "next/image";
import manDrinkingWater from "../../../../public/articlesImages/mandrinking.png";
import manReading from "../../../../public/articlesImages/manreading.png";
import eye from "../../../../public/articlesImages/eye.png";
import dot from "../../../../public/articlesImages/dot.png";
import articles from "../../../../public/articlesImages/articles.png";

const Articles = () => {
  return (
    <div className="mt-20">
      <div>
        <h3 className="inline"> Some Articles That Can Help You </h3>
        <Image src={articles} alt="Articles" className="inline" />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <div className="bg-gray-100 p-3">
            <Image src={manDrinkingWater} alt="Man Drinking Water" />
          </div>
          <h6 className="mt-5">How To Build An Amazing NFT</h6>
          <p className="mt-5">
            Learn how to build an nft and sell it to the platform.This article
            will <br /> help you get into the nft world
          </p>

          <div className="mt-5">
            <Image src={eye} alt="Eye" />
            <p>2.4K</p>
            <h6>
              <Image src={dot} alt="Dot" />
              Published 20 Nov 2022
            </h6>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 p-3">
            <Image src={manReading} alt="Man Reading" />
          </div>
          <h6 className="mt-5">Increase Your Sense of Art</h6>
          <p className="mt-5">
            Get stuck while designing?yup me either.In this article i'll show{" "}
            <br /> you how i get up from stuck and increase the art taste
          </p>

          <div className="mt-5">
            <Image src={eye} alt="Eye" />
            <p>5.8K</p>
            <h6>
              <Image src={dot} alt="Dot" />
              Published 10 Nov 2022
            </h6>
          </div>
        </div>
      </div>

      <div className="text-center mt-5"><button>View More</button></div>
    </div>
  );
};

export default Articles;
