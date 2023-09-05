import Image from "next/image";
import HeroOne from "../../../../public/hero-1.png";
import HeroTwo from "../../../../public/hero-2.png";
import HeroThree from "../../../../public/hero-3.png";
import Bitcoin from "../../../../public/bitcoin.png";
import Crypto from "../../../../public/crypto.png";
import MetaMask from "../../../../public/metamask.png";
import spark from "../../../../public/spark.png";
import "./appHero.css";

export default function AppHero() {
    return (
        <div className="mt-20">
            <div>
                <h3 className="text-center text-5xl font-bold">Discover, Collect, and Sell</h3>
                <div className="flex justify-center mt-5">
                    <h3 className="text-5xl font-bold mt-5">Amazing NFTs</h3>
                    <div>
                        <Image src={spark} alt="Spark" className="w-12 mt-5"/>
                    </div>
                </div>
                <p className="text-center mt-12 exploreText font-thin">
                    Explore the largest market of NFT and sell billion of amazing NFT arts. Collects <br /> a lot of arts to appreciate the artist
                </p>
                <div className="flex justify-center mt-10 mb-5">
                    <button className="heroButton rounded-full">Discover</button>
                </div>
            </div>

            <div className="w-full flex justify-between mt-10">
                <div >
                    <Image src={HeroOne} alt="HeroImg" className="heroImg" />
                </div>

                <div>
                    <Image src={HeroTwo} alt="HeroImgTwo" className="heroImg" />
                </div>

                <div>
                    <Image src={HeroThree} alt="HeroImgThree" className="heroImg" />
                </div>
            </div>

            <div className="w-full flex mt-20">
                <div className="flex w-1/2 justify-between cryptoDiv">
                    <Image src={Bitcoin} alt="Bitcoin" className="bitcoinImage" />
                    <Image src={Crypto} alt="Crypto" className="cryptoImage" />
                    <Image src={MetaMask} alt="MetaMask" className="cryptoImage pr-10" />
                </div>

                <div className="flex w-1/2 justify-between pl-10">
                    <div>
                        <h6 className="heroHeader font-bold text-2xl mb-2">12.3K</h6>
                        <p className="heroParagraph">Running Action</p>
                    </div>

                    <div>
                    <h6 className="heroHeader font-bold text-2xl mb-2">15.5K+</h6>
                        <p className="heroParagraph">Awesome Artist</p>
                    </div>

                    <div>
                    <h6 className="heroHeader font-bold text-2xl mb-2">32.4K</h6>
                        <p className="heroParagraph">Collectible Artwork</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
