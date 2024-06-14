import ContentLoader from "react-content-loader";

const AccountSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={505}
    height={550}
    viewBox="0 0 505 550"
    backgroundColor="#787878"
    foregroundColor="#fdfcfc"
    {...props}
  >
    <rect x="63" y="186" rx="2" ry="2" width="750" height="550" />
  </ContentLoader>
);

export default AccountSkeleton;
