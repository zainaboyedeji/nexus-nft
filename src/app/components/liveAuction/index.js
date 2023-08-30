import React from "react";
import Image from "next/image";
import ethereum from "../../../../public/ethereum.png";
import ocean from "../../../../public/liveAuctionImages/ocean.png";
import treeocean from "../../../../public/liveAuctionImages/treeocean.png";

const LiveAuction = () => {
    return (
        <div>
            <h3>Live Auction</h3>

            <div className="flex">
                <div>
                    <h1>
                        // The Stronger Pain of Art <br /> Art #216
                    </h1>

                    <div className="flex">
                        <div>
                            <p>Highest Bid</p>
                            <div className=""> 
                                <Image src={ethereum} alt="Ethereum" /> <h3>0.778ETH</h3> 
                            </div> 
                        </div>
                        <div>
                            <p>Highest Bidder</p>
                            <div className="flex">
                                <Image src={ocean} alt="Ocean" /> <p>@skylaart</p> 
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                    <div>
                            <p>Highest Bidder</p>
                            <div className="flex">
                                <Image src={ocean} alt="Ocean" /> <p>@skylaart</p> 
                            </div>
                        </div>
                        <div>
                            <p>Highest Bidder</p>
                            <div className="flex">
                                <Image src={ocean} alt="Ocean" /> <p>@skylaart</p> 
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <p>End In</p>
                        <div>05:20:10</div>
                    </div>

                    <button>Place a Bid</button>
                </div>

                <div>

                    <Image src={treeocean} alt="Tree In Ocean"/>
                </div>
            </div>
        </div>
    );
};

export default LiveAuction;
