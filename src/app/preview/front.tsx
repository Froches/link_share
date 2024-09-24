import Back from "./back";

const page = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className="w-11/12 h-fit border-2 border-[#234053]">
        <div className="h-[30vh] bg-[#b2fffc] flex items-center justify-center">
          <h2 className="font-bold text-4xl text-[#ff69b4]">
            Your Thoughts💭,
          </h2>
        </div>
        <div className="h-[30vh] flex items-center justify-center bg-[#ff69b4]">
          <h2 className="font-bold text-4xl text-[#b2fffc]">
            Ideas💡💡, and <span className="font-sans">creations</span>
          </h2>
        </div>

        <div className="h-[30vh] flex items-center justify-center bg-[#b2fffc]">
          <h2 className="font-bold text-4xl text-[#234053] font-serif">
            Will change the WORLD🌎🏆!
          </h2>
        </div>
      </div>
    </div>
    <Back />
    </>
  );
};

export default page;
