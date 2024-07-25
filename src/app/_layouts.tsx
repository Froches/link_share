import Image from "next/image";
import logo from "../../public/assets/Logo.svg"

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-[7.6px]">
        <Image src={logo} alt="" />
      </div>
    </div>
  );
};

export default Logo;
