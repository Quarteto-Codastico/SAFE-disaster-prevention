import { AiOutlinePlus } from "react-icons/ai";

export default function CreateCategoryButton() {


  return (
    <div className="w-full flex justify-end">
      <button className="bg-[#75FFCA] p-2 rounded-t-xl flex items-center gap-2 font-semibold">
        Adicionar categoria <AiOutlinePlus />
      </button>
    </div>
  );
}
