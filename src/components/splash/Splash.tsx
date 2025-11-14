import Image from "next/image";
import logo from "../../../public/logo.svg"
const Splash = () => {
  return (
    <>
      <div className="loader">
        {/* Website logo */}
        <Image src={logo} alt="logo" className="logo" />
      </div>
    </>
  );
};
export default Splash;
