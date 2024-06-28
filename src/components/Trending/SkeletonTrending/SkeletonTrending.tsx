import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./SkeletonTrending.module.scss";

const SkeletonTrending = (props: any) => (
  <ContentLoader
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#787878"
    foregroundColor="#ecebeb"
    className={styles.skeleton}
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="250" />
  </ContentLoader>
);

export default SkeletonTrending;
