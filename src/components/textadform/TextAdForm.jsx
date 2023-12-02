import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitModal from "../ui/SubmitModal";

const TextAdForm = () => {
  const navigate = useNavigate();
  const [modal, setShowModal] = useState(false);

  const backToAdsBanner = () => {
    navigate("/select-ads");
  };
  const submitFormHandeler = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/select-ads");
    }, 600);
  };
  return (
    <>
      {modal && <SubmitModal />}
      <div className=" mx-8 my-5 px-7 py-4 bg-[#FFFF] font-custom font-medium">
        <div className=" text-2xl">
          <h1>Create Text & Media</h1>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center gap-6 mt-5 ">
          <div className="flex flex-col gap-2 md:w-1/2 w-full">
            <label htmlFor="heading">Heading 01</label>
            <input
              type="text"
              className=" border  w-full p-2 rounded-md"
              placeholder="Add a heading that would make users intersted"
            />
            <label htmlFor="heading">Heading 02</label>
            <input
              type="text"
              className=" border  w-full p-2 rounded-md"
              placeholder="Add a heading that would make users intersted"
            />
          </div>

          <div className=" flex flex-col gap-2 md:w-1/2 w-full ">
            <label htmlFor="description">Description 01</label>
            <textarea
              type="text"
              placeholder="Add primary text to help users understand more about your products, service or offers"
              className=" border  w-full p-2 h-[8rem] rounded-md resize-none "
            />
          </div>
        </div>

        <div className=" mt-4 flex flex-col gap-4 ">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="">Business Name</label>
              <input
                type="text"
                className="border  w-full p-2 rounded-md"
                placeholder="Add your business name"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label>Button Label</label>
              <select className="border  w-full py-2 px-5 rounded-md">
                <option value={"none"}>
                  Select a label that best suits your ad
                </option>
                <option value={"option1"}>option 1</option>
                <option value={"option2"}>option 2</option>
                <option value={"option3"}>option 3</option>
              </select>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <label>Website URL</label>
            <input
              type="text"
              className="border  w-full p-2 rounded-md"
              placeholder="Add the URL of the landing page you want to redirect users to"
            />
          </div>
          <div className=" mt-28 flex gap-2 justify-end items-end">
            <button
              className=" bg-gray-200 text-black px-8 py-2"
              onClick={backToAdsBanner}
            >
              Back
            </button>
            <button
              className=" px-8 py-2 bg-blue-600 text-white"
              onClick={submitFormHandeler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextAdForm;
