import logo from "@/app/public/Logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-[1920px] h-[92px]  px-[220px] py-16 bg-[#043873] flex justify-between items-center">
      <div className="w-[191px] h-[34px] ">
        <Image src={logo} alt="logo" />
      </div>
      <div className="w-[737.5px] h-[60px] flex justify-between items-center">
        <div className="w-[549px] h-[23px]">
          <ul className="flex flex-row justify-between text-white ">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="w-[126px] h-[60px]">
          <button className="px-10 py-4 rounded-lg bg-[#FFE492] text-[#043873]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
