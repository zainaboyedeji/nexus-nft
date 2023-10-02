import React from "react";
import Image from "next/image";
import ethereum from "../../../../public/ethereum.png";
import ocean from "../../../../public/liveAuctionImages/ocean.png";
import treeocean from "../../../../public/liveAuctionImages/treeocean.png";
import liveauction from "../../../../public/liveAuctionImages/liveauction.png";

const LiveAuction = () => {
  return (
    <div className="mt-36">
      <div className="text-center">
        <h3 className="text-4xl mb-10 inline ">Live Auction</h3>
        <div className="inline">
          <Image src={liveauction} alt="Live Auction" className="inline" />
        </div>
      </div>

      <div className="flex w-full justify-between mt-20">
        <div>
          <h1 className="text-4xl">
            // The Stronger Pain of Art <br /> Art #216
          </h1>

          <div className="flex mt-10 justify-between">
            <div>
              <p>Highest Bid</p>
              <div>
                <div className="inline">
                  <Image src={ethereum} alt="Ethereum" className="inline" />
                </div>
                <h3 className="inline">0.778ETH</h3>
              </div>
            </div>
            <div>
              <p>Highest Bidder</p>
              <div className="flex bg-gray-100 p-2">
                <Image src={ocean} alt="Ocean" className="rounded-full" />{" "}
                <p>@skylaart</p>
              </div>
            </div>
          </div>
          <div className="flex mt-10 justify-between">
            <div>
              <p>Highest Bidder</p>
              <div className="flex bg-gray-100 p-2">
                <Image src={ocean} alt="Ocean" className="rounded-full" />{" "}
                <p>@skylaart</p>
              </div>
            </div>
            <div>
              <p>Highest Bidder</p>
              <div className="flex bg-gray-100 p-2">
                <Image src={ocean} alt="Ocean" className="rounded-full" />{" "}
                <p>@skylaart</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <p>End In</p>
            <div>05:20:10</div>
          </div>

          <div className="mt-5 text-center bg-black text-white p-2 rounded-full">
          <button>Place a Bid</button></div>
        </div>

        <div className="bg-gray-100 p-2 rounded">
          <Image src={treeocean} alt="Tree In Ocean" />
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
