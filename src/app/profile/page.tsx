import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="w-full h-screen grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h2>Profile Details</h2>
          </div>
          <div className="col-span-3">
            Images and all
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
