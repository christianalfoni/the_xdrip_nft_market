import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          {<Image
            src={images.logo2}
            alt="brand logo"
            width={280}
            height={70}
          />
          }

          <h1>THE ECOSYSTEM </h1>
          <p>GENERATING A STRONG PASSIVE INCOME</p>

          <div className={Style.Brand_box_left_box}>
            <span>                
              <Image
                src={images.bullet_2}
                alt="Logo"
                width={50}
                height={50}
                /></span>
            <small>DEDICATED DEVELOPMENT TEAM FOCUSED ON THE PROJECTS FUTURE GROWTH</small>
          </div>

          <div className={Style.Brand_box_left_box}>
            <span>
            <Image
                src={images.bullet_2}
                alt="Logo"
                width={50}
                height={50}
                />
            </span>
            <small>commitment to sustainability is evident in every aspect of our project</small>
          </div>

          <div className={Style.Brand_box_left_box}>
            <span>
            <Image
                src={images.bullet_2}
                alt="Logo"
                width={50}
                height={50}
                />
            </span>
            <small>SO MUCH more than just a cryptocurrency project - it's a movement </small>
          </div>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="WEBSITE"
              handleClick={() => window.open("https://www.xdrip.io")}
            />
            <Button
              btnName="COMMUNITY"
              handleClick={() => window.open("https://t.me/The_XdRiP_Official")}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image
            src={images.earn}
            alt="brand logo"
            width={800}
            height={500}
            className={Style.Brand_box_right_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;