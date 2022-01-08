import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
function Widgets() {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent h-12 placeholder-gray-500 outline-none text-secondary-default absolute inset-0 pl-11 border border-transparent w-full focus:border-primary-default rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Search Twitta"
          />
        </div>
      </div>

      <div className="text-secondary-default space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Trends for you</h4>
        <Trending />
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-primary-default font-light">
          Show more
        </button>
      </div>

      <div className="text-secondary-default space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/62194124?s=40&v=4"
            width={50}
            height={50}
            objectFit="cover"
            className="rounded-full"
          />
          <div className="ml-4 leading-5 group">
            <h4 className="font-bold group-hover:underline">Name</h4>
            <h5 className="text-gray-500 text-[15px]">@handle</h5>
          </div>
          <button className="ml-auto bg-transparent border-2 border-primary-default text-primary-default rounded-full font-bold text-sm py-1.5 px-3.5">
            Follow
          </button>
        </div>
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-primary-default font-light">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;
