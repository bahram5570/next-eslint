import Image from "next/image";
import SvgTest from "public/headLineMain.svg";
import mainImage from "../public/pinkCoins.png";
import styles from "./testing.module.css";

const Testing = () => {
  return (
    <div>
      <SvgTest className={styles.svgStyling} />

      <div className={styles.mainImage}>
        <Image src={mainImage} alt="png file" layout="fill" />
      </div>
    </div>
  );
};
export default Testing;
