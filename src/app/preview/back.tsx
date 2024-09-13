const Back = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-11/12 h-fit border-2 border-[#234053]">
        <div className="h-[30vh] bg-gradient-to-b from-[#ff69b4] to-[#b2fffc] flex items-center justify-center"></div>
        <div className="h-[30vh] flex items-center justify-center bg-[#b2fffc]">
          <h2 className="font-bold text-4xl text-[#ff69b4]">
            Congratulations <span className="font-sans">Dee 💕💖</span>
          </h2>
        </div>

        <div className="h-[30vh] flex items-center justify-center bg-gradient-to-t from-[#ff69b4] to-[#b2fffc]"></div>
      </div>
    </div>
  );
};

export default Back;
