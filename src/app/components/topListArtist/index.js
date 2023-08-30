import Image from "next/image";
import alien from "../../../../public/topListArtistImages/alien.png";
import alienSmall from "../../../../public/topListArtistImages/alien-small.png";
import pink from "../../../../public/topListArtistImages/pink.png";
import funds from "../../../../public/topListArtistImages/funds.png";
import ethereum from "../../../../public/ethereum.png";

const TopListArtist = () => {
    return (
        <div>
            <h3>Top List Artist</h3>

            <div className="flex">
                <div>
                    <Image src={alien} alt="Alien" />
                    <div className="flex">
                        <div>
                            <Image src={alienSmall} alt="Alien" />
                            <div>
                                <h3> Artgangstyle</h3>
                                <p>Floor Price: 8.6ETH</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <Image src={alienSmall} alt="Alien" />
                                <h3>8934.56 ETH</h3>
                            </div>
                            <div>
                                <Image src={alienSmall} alt="Alien" />
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
                                <h6>Floor Price:</h6> <Image src={ethereum} alt="Alien" /> <h6>5.6 ETH</h6>
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
                                <h6>Floor Price:</h6> <Image src={ethereum} alt="Alien" /> <h6>5.6 ETH</h6>
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
                                <h6>Floor Price:</h6> <Image src={ethereum} alt="Alien" /> <h6>5.6 ETH</h6>
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