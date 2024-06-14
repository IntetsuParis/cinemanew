import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={1440}
    height={667}
    viewBox="0 0 1440 667"
    backgroundColor="#787878"
    foregroundColor="#fdfcfc"
    {...props}
  >
    <rect x="60" y="90" rx="2" ry="2" width="440" height="500" />
    <rect x="536" y="100" rx="2" ry="2" width="640" height="360" />
  </ContentLoader>
);

export default Skeleton;
