import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconFilled,
  ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";
function Post() {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <img
        src="https://avatars.githubusercontent.com/u/62194124?v=4"
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-secondary-gray">
            <div className="inline-block group">
              <h4 className="font-bold text-[15px] sm:text-base text-secondary-default group-hover:underline inline-block">
                User's Name
              </h4>
              <span className="text-sm sm:text-[15px] ml-1.5">@handle</span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              5 minutes ago
            </span>
            <p className="text-secondary-default text-[15px] sm:text-base mt-0.5">
              This is my first post. Let me know how it looks!
            </p>
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="h-5 text-secondary-gray group-hover:text-primary-default" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
