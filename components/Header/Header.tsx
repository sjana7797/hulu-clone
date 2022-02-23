import Image from "next/image";

//importing Logo
import logo from "../../assets/img/hulu-white.png";

//importing HeaderItem
import HeaderItem from "./HeaderItem";

//importing Icons
import { icons } from "../../utils/icons";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {icons.map((icon, index) => (
          <HeaderItem Icon={icon.Icon} title={icon.title} key={index} />
        ))}
      </div>
      <Image
        src={logo}
        width={200}
        height={100}
        alt="logo"
        className="object-contain"
      />
    </header>
  );
}

export default Header;
