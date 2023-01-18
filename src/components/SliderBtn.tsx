import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type SliderBtnProps = {
  direction: "right" | "left";
  handleRightClick: () => void;
  handleLeftClick: () => void;
};

function SliderBtn({
  direction,
  handleRightClick,
  handleLeftClick,
}: SliderBtnProps) {
  return (
    <div
      className={`absolute top-[50%] translate-y-[-50%] ${
        direction === "right" ? "right-0" : "left-0"
      } cursor-pointer bg-primary p-4 2xl:p-5 rounded-full bg-opacity-70 hover:bg-opacity-95 transition-all`}
      onClick={direction === "right" ? handleRightClick : handleLeftClick}
    >
      {direction === "right" ? (
        <AiOutlineRight size={25} />
      ) : (
        <AiOutlineLeft size={25} />
      )}
    </div>
  );
}

export default SliderBtn;
