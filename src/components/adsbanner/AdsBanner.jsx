import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AdsBanner = () => {
  const [textad, setTextad] = useState(false);
  const [mediaad, setMediaad] = useState(false);
  const navigate = useNavigate();

  // when user click any ads banner and click next
  const submitAdHandeler = () => {
    if (textad) {
      navigate("/select-ads/text-ad");
    } else if (mediaad) {
      navigate("/select-ads/media-ad");
    } else if (textad & mediaad) {
      navigate("/dashboard");
    } else {
      toast.error("Select the folowing options ");
    }
  };

  return (
    <div className=" font-custom m-6 bg-[#FFFF] h-fit py-16  rounded-md  ">
      <div className=" absolute top-24 left-10 text-2xl ">
        <h1>Create Ads</h1>
      </div>

      <div className="flex flex-col min-[420px]:flex-row min-[420px]:justify-center mt-20 min-[420px]:items-center gap-8">
        <label htmlFor="text-ad">
          <div className=" w-[80%] m-auto min-[420px]:w-80 h-fit border shadow-md rounded-md cursor-pointer">
            <div className=" p-3 ">
              <input
                type="checkbox"
                id="text-ad"
                name="text-ad"
                value={textad}
                className="w-6 h-6"
                onChange={() => setTextad((prev) => !prev)}
              />
            </div>

            <div className=" flex justify-center items-center">
              <img src="/images/text-ads.png" className=" object-cover" />
            </div>

            <div className=" bg-gray-50  flex flex-col justify-center items-center p-2 m-1 rounded-md ">
              <h1 className=" text-base">Create</h1>
              <h1 className=" text-xl font-semibold">Text Ad</h1>
            </div>
          </div>
        </label>

        <label htmlFor="media-ad">
          <div className=" w-[80%] m-auto min-[420px]:w-80 h-fit border shadow-md rounded-md cursor-pointer">
            <div className=" p-3 ">
              <input
                type="checkbox"
                id="media-ad"
                name="media-ad"
                value={mediaad}
                className="w-6 h-6"
                onChange={() => setMediaad((prev) => !prev)}
              />
            </div>

            <div className=" flex justify-center items-center">
              <img src="/images/media-ads2.png" className=" object-cover" />
            </div>

            <div className=" bg-gray-50 flex flex-col justify-center items-center p-2 m-1 rounded-md">
              <h1 className=" text-base">Create</h1>
              <h1 className=" text-xl font-semibold">Media Ad</h1>
            </div>
          </div>
        </label>
      </div>
      <div className=" flex mt-20 justify-end items-end px-20 ">
        <button
          onClick={submitAdHandeler}
          className=" bg-blue-600 text-white w-fit px-10 rounded-md font-roboto py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdsBanner;
