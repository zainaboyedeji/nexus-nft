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

const TrendingNFT = () => {
  return (
    <div className="mt-36">
      <h3 className="font-bold text-3xl inline">
        Top 3 Trending NFTS
        <Image src={fire} alt="Fire" className="ml-2 inline" />
      </h3>
      <div className="flex justify-between mt-10">
        <div className="trendingDiv rounded-md">
          <Image src={blackearth} alt="BlackEarth" />
          <h3 className="mt-6 mb-5 font-bold text-2xl">Black Earth Grid</h3>

          <div className="flex justify-between">
            <div className="flex">
              <Image src={creambox} className="rounded-full" alt="CreamBox" />
              <span className="mt-5 ml-2 text-sm">Javier</span>
            </div>
            <div className="mt-5">
              <Image src={ellipsis} className="mt-2" alt="Ellipsis" />
            </div>
          </div>

          <div className="flex mt-6 justify-between">
            <div>
              <p className="text-xs">End in</p>
              <h2 className="text-lg">1h 50min</h2>
            </div>
            <div>
              <p className="text-xs">Top Bid</p>
              <div className="flex">
                <Image src={ethereum} className="" alt="Ethereum" />
                <h2 className="text-lg">8.32 ETH</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="trendingDiv rounded-md">
          <Image src={brain} alt="Brain" className="rounded" />
          <h3 className="mt-6 mb-5 font-bold text-2xl">Glowing Brain</h3>

          <div className="flex justify-between">
            <div className="flex">
              <Image src={sculpture} className="rounded-full" alt="Sculpture" />{" "}
              <span className="mt-3 ml-2 text-sm">Maabits</span>
            </div>
            <div className="mt-5">
              <Image src={ellipsis} className="" alt="Ellipsis" />
            </div>
          </div>

          <div className="flex mt-6 justify-between">
            <div>
              <p className="text-xs">End in</p>
              <h2 className="text-lg">2h 10min</h2>
            </div>
            <div>
              <p className="text-xs">Top Bid</p>
              <div className="flex">
                <Image src={ethereum} className="" alt="Ethereum" />
                <h2 className="text-lg">8.32 ETH</h2>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <button className="trendingButton rounded-full w-full">
              Place a Bid
            </button>
          </div>
        </div>

        <div className="trendingDiv rounded-md">
          <Image src={box} className="rounded" alt="Box" />
          <h3 className="mt-6 mb-5 font-bold text-2xl">Iron Magic Cube</h3>

          <div className="flex justify-between">
            <div className="flex">
              <Image src={boxtwo} className="rounded-full" alt="Box-Two" />{" "}
              <span className="mt-3 ml-2 text-sm">Kondrashova</span>
            </div>
            <div className="mt-5">
              <Image src={ellipsis} className="" alt="Ellipsis" />
            </div>
          </div>

          <div className="flex mt-6 justify-between">
            <div>
              <p className="text-xs">End in</p>
              <h2 className="text-lg">3h 30min</h2>
            </div>
            <div>
              <p className="text-xs">Top Bid</p>
              <div className="flex">
                <Image src={ethereum} className="" alt="Ethereum" />
                <h2 className="text-lg">8.32 ETH</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNFT;
