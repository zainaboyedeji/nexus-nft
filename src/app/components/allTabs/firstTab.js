import hello from "../../../../public/exploreImages/hello.png";
import appleicon from "../../../../public/exploreImages/apple.png";
import chair from "../../../../public/exploreImages/chair.png";
import mindofhole from "../../../../public/exploreImages/mindofhole.png";
import manoncloud from "../../../../public/exploreImages/manoncloud.png";
import glassmorphrism from "../../../../public/exploreImages/glassmorphrism.png";
import swirlyglowball from "../../../../public/exploreImages/swirlyglowball.png";
import scarymanwithaxe from "../../../../public/exploreImages/scarymanwithaxe.png";
import stainlesssteel from "../../../../public/exploreImages/stainlesssteel.png";
import cloudyicon from "../../../../public/exploreImages/cloudyicon.png";
import cryptogangicon from "../../../../public/exploreImages/cryptogangicon.png";
import deathartisticon from "../../../../public/exploreImages/deathartisticon.png";
import flewawayicon from "../../../../public/exploreImages/flewawayicon.png";
import guterdogsicon from "../../../../public/exploreImages/guterdogsicon.png";
import punksonlyicon from "../../../../public/exploreImages/punksonlyicon.png";
import triangleartsicon from "../../../../public/exploreImages/triangleartsicon.png";
import Card from "../card/card";

const FirstTab = () => {
  return (
    <div className="mt-26">
      <div className="flex justify-between mt-10 flex-wrap">
     <Card img={hello} imgAlt="hello" imgNext={appleicon} imgNextAlt="appleicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.32 ETH" noOfLikes="216" iconText="Marjuki"/>
     <Card img={swirlyglowball} imgAlt="swirlyglowball" imgNext={guterdogsicon} imgNextAlt="guterdogsicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.45 ETH" noOfLikes="229" iconText="GuterDogs" buttonText="Place a bid"/>
     <Card img={mindofhole} imgAlt="mindofhole" imgNext={cryptogangicon} imgNextAlt="cryptogangicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="1.32 ETH" noOfLikes="189" iconText="CryptoGang"/>
     <Card img={stainlesssteel} imgAlt="stainlesssteel" imgNext={punksonlyicon} imgNextAlt="punksonlyicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.67 ETH" noOfLikes="90" iconText="PunksOnly"/>
     <Card img={glassmorphrism} imgAlt="glassmorphrism" imgNext={triangleartsicon} imgNextAlt="triangleartsicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.89 ETH" noOfLikes="190" iconText="Trianglearts"/>
     <Card img={scarymanwithaxe} imgAlt="scarymanwithaxe" imgNext={deathartisticon} imgNextAlt="deathartisticon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.21 ETH" noOfLikes="139" iconText="Deathartist"/>
     <Card img={chair} imgAlt="chair" imgNext={cloudyicon} imgNextAlt="cloudyicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.29 ETH" noOfLikes="101" iconText="CloudyBuddy"/>
     <Card img={manoncloud} imgAlt="manoncloud" imgNext={flewawayicon} imgNextAlt="flewawayicon" cardText="Hello Computer" cardParagraph="Buy Now"  cardEth="0.55 ETH" noOfLikes="114" iconText="FlewAway"/>
      </div>
      <div><button>View More</button></div>
    </div>
  );
};

export default FirstTab;
