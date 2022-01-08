import { useState, useEffect, useRef } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

function Input() {
  useEffect(() => {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3`}>
      <img
        src="https://avatars.githubusercontent.com/u/62194124?v=4"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="divide-y divide-gray-700 w-full">
        <div>
          <textarea
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-secondary-default text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px] resize-none"
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="text-primary-default h-[22px]" />
              <input type="file" ref={filePickerRef} hidden />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="text-primary-default h-[22px]" />
            </div>

            <div className="icon">
              <EmojiHappyIcon className="text-primary-default h-[22px]" />
            </div>

            <div className="icon">
              <CalendarIcon className="text-primary-default h-[22px]" />
            </div>
          </div>
          <button className="bg-primary-default text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-primary-hover disabled:hover:bg-primary-default disabled:opacity-50 disabled:cursor-default">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
