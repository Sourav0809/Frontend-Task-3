import ReactDOM from "react-dom";
const BackDropModal = (props) => {
  return ReactDOM.createPortal(
    <div className=" w-screen h-screen bg-[#ffffffd5] fixed">
      {props.children}
    </div>,
    document.getElementById("overlays")
  );
};

export default BackDropModal;
