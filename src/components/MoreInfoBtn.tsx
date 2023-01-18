import { AiOutlineInfoCircle } from "react-icons/ai";

function MoreInfoBtn() {
  return (
    <button className="flex items-center gap-2 font-bold text-2xl bg-[#4f504a] py-3 px-6 rounded-lg bg-opacity-70 cursor-pointer justify-center hover:bg-opacity-40 transition-all">
      <AiOutlineInfoCircle size={25} />
      Learn More
    </button>
  );
}

export default MoreInfoBtn;
