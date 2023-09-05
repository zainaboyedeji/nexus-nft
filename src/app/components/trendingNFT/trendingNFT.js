import Image from "next/image";
import blackearth from "../../../../public/blackearth.png";
import creambox from "../../../../public/creambox.png";
import ellipsis from "../../../../public/ellipsis.png";
import brain from "../../../../public/brain.png";
import box from "../../../../public/box.png";
import "./trendingNFT.css";

const TrendingNFT = () => {
    return (
        <div className="mt-36">
            <h3 className="font-bold text-3xl">Top 3 Trending NFTS</h3>
            <div className="flex justify-between mt-10">
                <div className="trendingDiv">
                    <Image src={blackearth} className="rounded" alt="BlackEarth" />
                    <h3 className="mt-6 mb-5 font-bold text-xl">Black Earth Grid</h3>

                    <div className="flex justify-between">
                        <div className="flex">
                            <Image src={creambox} className="rounded-full" alt="CreamBox" /> <span className="mt-3 ml-2">Javier</span>
                        </div>
                        <Image src={ellipsis} className="w-5 h-5" alt="Ellipsis" />
                    </div>

                    <div className="flex mt-5 justify-between">
                        <div>
                            <p>End in</p>
                            <h2>1h 50min</h2>
                        </div>
                        <div>
                            <p>End in</p>
                            <h2>1h 50min</h2>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <button className="trendingButton rounded-full">Place a Bid</button>
                    </div>
                </div>

                <div className="trendingDiv">
                    <Image src={brain} alt="Brain" />
                    <h3 className="mt-5 mb-5 font-bold">Black Earth Grid</h3>

                    <div className="flex justify-between">
                        <div className="flex">
                            <Image src={creambox} className="rounded-full" alt="CreamBox" /> <span>Javier</span>
                        </div>
                        <Image src={ellipsis} className="w-5 h-5" alt="Ellipsis" />
                    </div>

                    <div className="flex mt-5 justify-between">
                        <div>
                            <p>End in</p>
                            <h2>1h 50min</h2>
                        </div>
                        <div>
                            <p>End in</p>
                            <h2>1h 50min</h2>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <button className="trendingButton rounded-full">Place a Bid</button>
                    </div>
                </div>

                <div className="trendingDiv">
                    <Image src={box} alt="Box" />
                    <h3 className="mt-5 mb-5 font-bold">Black Earth Grid</h3>

                    <div className="flex justify-between">
                        <div className="flex">
                            <Image src={creambox} className="rounded-full" alt="CreamBox" /> <span>Javier</span>
                        </div>
                        <Image src={ellipsis} className="w-5 h-5" alt="Ellipsis" />
                    </div>

                    <div className="flex mt-5 justify-between">
                        <div>
                            <p>End in</p>
                            <h2>1h 50min</h2>
                        </div>
                        <div>
                            <p>End in</p>
                            <h2>1h 50min</h2>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <button className="trendingButton rounded-full">Place a Bid</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingNFT;
