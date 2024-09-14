import getStarted from "@/../public/home-page/getStarted.svg";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div
      className="flex flex-col px-14 md:px-28 py-14 items-center justify-center gap-8"
      data-aos="fade"
    >
      <Image src={getStarted} alt="get started" />
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-xl md:text-3xl">Let's get you started</h3>
        <p className="text-gray-400 text-center md:p-4">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We&apos;re here to help you
          share your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
