import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import me from "./assets/me.jpg"
import Button from "./components/Button";

export default function Home() {

  return (
    <div className="flex pt-5 gap-10">
      <div className="flex-2/3">
        <header className="font-bold text-2xl pb-8">
          Hello! I'm CHUAH Wei Jie, a <RoughNotation type="highlight" show={true} color="#E5D7FC">developer</RoughNotation> based in Singapore / Malaysia.
        </header>
        <div className="text-xm text-gray-500 pb-2">
          I love building tools that are <RoughNotation type="highlight" show={true} color="#F0D3E5">user friendly, simple</RoughNotation> and <RoughNotation type="highlight" show={true} color="#F6E79B">delightful</RoughNotation>.
        </div>
        <div className="text-xm text-gray-500 pb-2">
          I was a student at University Malaysia Pahang where I spent 42 months learning the fundamental of software engineering. I also worked in s startup company at Taiwan where my role was split between <RoughNotation type="highlight" show={true} color="#F2CDD0">frontend</RoughNotation> and <RoughNotation type="highlight" show={true} color="#E5D7FC">backend</RoughNotation> development (and more).
        </div>
        <div className="text-xm text-gray-500 pb-2">
          Through these experiences, I had the opportunity to work with both small and large, specialised and cross-functional team across different countries and developed a working style that leans towards flexibility, clarity and collaboration.
        </div>
        <div className="text-xm text-gray-500 pb-2">
          I'm currently looking for a new role as a developer. <RoughNotation type="circle" show={true} color="#F0D3E5"><span className="font-bold">Hire me?</span></RoughNotation>
        </div>
        <div className="flex gap-3 pt-4">
          <Button text="View LinkedIn" bgcolor="bg-slate-800" textcolor="text-white" link="https://www.linkedin.com/in/chuah-wei-jie-113374191/"></Button>
          <Button text="View Github" bgcolor="bg-white" textcolor="text-black"></Button>
        </div>
      </div>
      <div className="flex flex-1/3 justify-end">
        <Image src={me} alt="me" width={300}></Image>
      </div>
    </div>
  );
}
