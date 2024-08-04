import Image from "next/image";
import footer_bg from "../../../public/footer_bg.svg";

export default function AdminFooter() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around bg-[#75FFCA] py-3 flex-wrap mx-auto text-center">
      <p>SAFE prevenção de catástrofes</p>
      <p className="hidden md:flex">|</p>
      <p>© 2024</p>
      <p className="hidden md:flex">|</p>
      <p>Desenvolvido por Quarteto Codástico</p>
    </div>
  );
}
