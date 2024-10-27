import tick from "../../../public/assets/game/green1.gif"
import Image from "next/image";

interface ModuleProps {
  isOpen: boolean;
}

export default function Success({ isOpen}: ModuleProps) {
    if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-black rounded-3xl overflow-hidden shadow-xl transform transition-all">
          <div className="flex flex-col justify-center">
            <Image src={tick} alt="Green Tick" width={500} height={500}/>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl text-white text-center font-bold p-10 leading-normal">Game Created <br /> Successfully</h1>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}