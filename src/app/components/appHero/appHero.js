import Image from 'next/image'
import HeroOne from "../../../../public/hero-1.png"
import HeroTwo from "../../../../public/hero-2.png"
import HeroThree from "../../../../public/hero-3.png"
import Bitcoin from "../../../../public/bitcoin.png"
import Crypto from "../../../../public/crypto.png"
import MetaMask from "../../../../public/metamask.png"


export default function AppHero() {
    return (
        <div>

            <div>
                <h3>Discover,Collect, and Sell Amazing NFTs</h3>
                <p>Explore the largest market of NFT and sell billion of amazing NFT arts. Collects a lot of arts to appreciate the artist</p>
                <button>Discover</button>
            </div>

            <div className='flex'>
                <div>
                    <Image src={HeroOne} alt="HeroImg" />
                </div>

                <div>
                    <Image src={HeroTwo} alt="HeroImgTwo" />
                </div>

                <div>
                    <Image src={HeroThree} alt="HeroImgThree" />
                </div>

            </div>


            <div className='flex'>
                <div className='flex'>
                <Image src={Bitcoin} alt="Bitcoin" />
                <Image src={Crypto} alt="Crypto" />
                <Image src={MetaMask} alt="MetaMask" />
                </div>

                <div className='flex'>
                    <div>
                        <h6>12.3K</h6>
                        <p>Running Action</p>
                    </div>

                    <div>
                        <h6>15.5K+</h6>
                        <p>Awesome Artist</p>
                    </div>

                    <div>
                        <h6>32.4K</h6>
                        <p>Collectible Artwork</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
