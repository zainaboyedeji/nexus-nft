import Image from "next/image";
import blackearth from "../../../../public/blackearth.png";
import creambox from "../../../../public/creambox.png";
import ellipsis from "../../../../public/ellipsis.png";

const TrendingNFT = ({ name, age }) => {
  return (
    <div>
      <h3>Top 3 Trending NFTS</h3>
      <Image src={blackearth} alt="BlackEarth" />
      <h3>Black Earth Grid</h3>

      <div className="flex">
        <div>
          <Image src={creambox} alt="CreamBox" /> <span>Javier</span>
        </div>
        <Image src={ellipsis} alt="Ellipsis" />
      </div>

      <div className="flex">
        <div>
          <p>End in</p>
          <h2>1h 50min</h2>
        </div>
        <div>
          <p>End in</p>
          <h2>1h 50min</h2>
        </div>
      </div>

      <button>Place a Bid</button>
    </div>
  );
};

export default TrendingNFT;
