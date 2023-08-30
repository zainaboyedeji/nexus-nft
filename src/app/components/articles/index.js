import React from "react";
import Image from "next/image";
import manDrinkingWater from "../../../../public/articlesImages/mandrinking.png";
import manReading from "../../../../public/articlesImages/manreading.png";
import eye from "../../../../public/articlesImages/eye.png";
import dot from "../../../../public/articlesImages/dot.png";

const Articles = () => {
    return (
        <div>
            <h3> Some Articles That Can Help You </h3>
            <div className="flex">
                <div>
                    <Image src={manDrinkingWater} alt="Man Drinking Water" />
                    <h6>How To Build An Amazing NFT</h6>
                    <p>
                        Learn how to build an nft and sell it to the platform.This article will <br /> help you get into the nft world{" "}
                    </p>

                    <div>
                        <Image src={eye} alt="Eye" />
                        <p>2.4K</p>
                        <h6>
                            <Image src={dot} alt="Dot" />
                            Published 20 Nov 2022
                        </h6>
                    </div>
                </div>

                <div>
                    <Image src={manReading} alt="Man Reading" />
                    <h6>Increase Your Sense of Art</h6>
                    <p>
                        Get stuck while designing?yup me either.In this article i'll show <br /> you how i get up from stuck and increase the art taste
                    </p>

                    <div>
                        <Image src={eye} alt="Eye" />
                        <p>5.8K</p>
                        <h6>
                            <Image src={dot} alt="Dot" />
                            Published 10 Nov 2022
                        </h6>
                    </div>
                </div>
            </div>

            <button>View More</button>
        </div>
    );
};

export default Articles;
