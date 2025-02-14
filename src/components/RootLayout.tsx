import { Outlet } from "react-router";
import GlowBackground from "./GlowBackground";
import Header from "./Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <GlowBackground className="hidden lg:block" />
    </>
  );
};

export default RootLayout;
