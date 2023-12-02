import React from "react";

const Wrapper = (props) => {
  return (
    <div className=" w-screen h-screen bg-[#fafafa]">{props.children}</div>
  );
};

export default Wrapper;
