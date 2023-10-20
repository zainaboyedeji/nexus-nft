import Image from "next/image";
import blackearth from "../../../../public/blackearth.png";
import creambox from "../../../../public/creambox.png";
import ellipsis from "../../../../public/ellipsis.png";
import brain from "../../../../public/brain.png";
import box from "../../../../public/box.png";
import boxtwo from "../../../../public/box2.png";
import ethereum from "../../../../public/ethereum.png";
import sculpture from "../../../../public/sculpture.png";
import fire from "../../../../public/fire.png";
import "./trendingNFT.css";
import Card from "../card/card";

const TrendingNFT = () => {
  return (
    <div className="mt-36">
      <h3 className="font-bold text-3xl inline">
        Top 3 Trending NFTS
        <Image src={fire} alt="Fire" className="ml-2 inline" />
      </h3>
      <div className="flex justify-between mt-10">
      <Card img={blackearth} imgAlt="blackearth" imgNext={creambox} imgNextAlt="creamboxicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.32 ETH" noOfLikes="216" iconText="Marjuki"/>
      <Card img={blackearth} imgAlt="blackearth" imgNext={creambox} imgNextAlt="creamboxicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.32 ETH" noOfLikes="216" iconText="Marjuki"/>
      <Card img={blackearth} imgAlt="blackearth" imgNext={creambox} imgNextAlt="creamboxicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.32 ETH" noOfLikes="216" iconText="Marjuki"/>
      </div>
    </div>
  );
};

export default TrendingNFT;
