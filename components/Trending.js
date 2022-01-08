import { DotsHorizontalIcon } from "@heroicons/react/outline";
function Trending() {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
      <div className="space-y-0.5">
        <p className="text-secondary-gray text-xs font-medium">
          Trending in the USA
        </p>
        <h6 className="font-bold max-w-[250px] text-sm">
          This is going to be the title of the trending tweet/news.
        </h6>
        <p className="text-secondary-gray text-xs font-medium max-w-[250px]">
          Trending with <span className="tag">#hashtag</span>,{" "}
          <span className="tag">#twitta</span>
        </p>
      </div>

      {/* {result.img ? (
        <Image
          src={result.img}
          width={70}
          height={70}
          objectFit="cover"
          className="rounded-2xl"
        />
      ) : ( */}
      <div className="icon group">
        <DotsHorizontalIcon className="h-5 text-secondary-gray group-hover:text-primary-default" />
      </div>
      {/* )} */}
    </div>
  );
}

export default Trending;
