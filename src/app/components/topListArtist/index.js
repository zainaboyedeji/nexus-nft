import Image from "next/image";
import alien from "../../../../public/topListArtistImages/alien.png";
import alienSmall from "../../../../public/topListArtistImages/alien-small.png";
import pink from "../../../../public/topListArtistImages/pink.png";
import funds from "../../../../public/topListArtistImages/funds.png";
import medal from "../../../../public/topListArtistImages/medal.png";
import ethereum from "../../../../public/ethereum.png";

const TopListArtist = () => {
  return (
    <div className="mt-36">
      <div>
        <h3 className="text-4xl mb-10 inline">Top List Artist</h3>
        <Image src={medal} alt="Medal" className="inline" />
      </div>
      <div className="flex justify-between">
        <div className="bg-gray-100 rounded p-6">
          <div>
            <Image src={alien} alt="Alien" className="rounded" />
          </div>
          <div className="flex mt-10">
            <div className="flex justify-between">
              <div className="">
                <Image src={alienSmall} alt="Alien-Small" />
              </div>
              <div>
                <h3 className="text-2xl"> Artgangstyle</h3>
                <p>Floor Price: 8.6ETH</p>
              </div>
            </div>

            <div>
              <div>
                <Image src={ethereum} alt="Ethereum" />

                <h3>8934.56 ETH</h3>
              </div>
              <div>
                <Image src={funds} alt="Funds" />
                <p>+126.23%</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
            <Image src={pink} alt="Pink" />

            <div>
              <h6>Dareangel</h6>
              <div className="flex">
                <Image src={funds} alt="Funds" /> <span>+126.23%</span>
              </div>
              <div className="flex">
                <h6>Floor Price:</h6> <Image src={ethereum} alt="Alien" />{" "}
                <h6>5.6 ETH</h6>
              </div>
            </div>

            <h1>7934.56 ETH</h1>
          </div>

          <div className="flex">
            <Image src={pink} alt="Pink" />

            <div>
              <h6>Dareangel</h6>
              <div className="flex">
                <Image src={funds} alt="Funds" /> <span>+126.23%</span>
              </div>
              <div className="flex">
                <h6>Floor Price:</h6> <Image src={ethereum} alt="Alien" />{" "}
                <h6>5.6 ETH</h6>
              </div>
            </div>

            <h1>7934.56 ETH</h1>
          </div>

          <div className="flex">
            <Image src={pink} alt="Pink" />

            <div>
              <h6>Dareangel</h6>
              <div className="flex">
                <Image src={funds} alt="Funds" /> <span>+126.23%</span>
              </div>
              <div className="flex">
                <h6>Floor Price:</h6> <Image src={ethereum} alt="Alien" />{" "}
                <h6>5.6 ETH</h6>
              </div>
            </div>

            <h1>7934.56 ETH</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopListArtist;
