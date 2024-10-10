import logo from "../../public/assets/Logo.svg";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className="w-full bg-black bg-opacity-50 flex justify-between">
        <div className="py-6 px-4">
          <a href="/main">
            <Image src={logo} alt="logo" width={250} height={50} />
          </a>
        </div>
        <div>
          <a href="/about" className="font-medium text-lg hover:underline text-nav">
            About
          </a>
          <a href="/mission"></a>
          <a href="/" className=" font-medium text-lg hover:underline text-nav">
            Log out
          </a>
        </div>
      </nav>
    </>
  );
}


