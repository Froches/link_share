
const ProfileScreen = () => {
  return (
    <>
      <div className="w-5/6 m-12">
        <h2 className="text-3xl font-bold mb-2" data-aos="fade">
          Profile Details
        </h2>
        <p className="text-gray-400">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div
        className="bg-background w-[90%] h-52 flex flex-col lg:flex-row gap-4 text-gray-400 rounded-xl"
        data-aos="fade"
      >
        <div className="flex items-center justify-center m-4 w-1/3 hover:bg-gray-100 rounded-xl">
          Profile picture
        </div>
        <div className="flex items-center justify-center m-4 w-1/3 hover:bg-gray-100 rounded-xl">
          + Upload Image
        </div>
        <div className="flex items-center justify-center m-4 w-1/3 hover:bg-gray-100 rounded-xl">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </div>
      </div>
      <div
        className="bg-background w-[90%] h-52 flex items-center justify-center flex-col rounded-xl gap-4 p-6"
        data-aos="fade"
      >
        <div className="flex justify-between w-full items-center">
          <label
            htmlFor="email"
            className="mb-2 font-medium text-gray-400 dark:text-white"
          >
            First name
          </label>
          <input
            type="email"
            name="email"
            // value={}
            onChange={(e) => e.target.value}
            id="email"
            className="bg-white border border-gray-300 text-gray-400 sm:text-sm rounded-lg w-8/12 focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g alex@email.com"
            required
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <label
            htmlFor="email"
            className="mb-2 font-medium text-gray-400 dark:text-white"
          >
            Last name
          </label>
          <input
            type="email"
            name="email"
            // value={}
            onChange={(e) => e.target.value}
            id="email"
            className="bg-white border border-gray-300 text-gray-400 sm:text-sm rounded-lg w-8/12 focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g alex@email.com"
            required
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <label
            htmlFor="email"
            className="mb-2 font-medium text-gray-400 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            // value={}
            onChange={(e) => e.target.value}
            id="email"
            className="bg-white border border-gray-300 text-gray-400 sm:text-sm rounded-lg w-8/12 focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g alex@email.com"
            required
          />
        </div>
      </div>
    </>
  );
}

export default ProfileScreen
