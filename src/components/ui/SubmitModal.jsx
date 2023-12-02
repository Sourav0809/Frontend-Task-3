import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BackDropModal from "../../common/modal/BackDropModal";

const SubmitModal = () => {
  return (
    <BackDropModal>
      <div className="absolute top-1/2 left-1/2 font-custom transform -translate-x-1/2 -translate-y-1/2 h-[10rem] w-[30rem] border z-20 flex flex-col gap-4 justify-center items-center bg-[#ffffff] shadow-lg">
        <h1 className="text-xl">Submitted</h1>
        <CheckCircleIcon className=" text-blue-600 text-lg" fontSize="large" />
      </div>
    </BackDropModal>
  );
};

export default SubmitModal;
