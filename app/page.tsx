import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import me from "./assets/me.jpg"
import Button from "./components/Button";
import { IButton } from "./interfaces/IButton";
import Boop from "./components/Boop";

export default function Home() {

  const linkedInButtonConf: IButton = {
    text: "View LinkedIn",
    textcolor: "text-white",
    bgcolor: "bg-slate-800",
    link: "https://www.linkedin.com/in/chuah-wei-jie-113374191/"
  }

  const gitHubButtonConf: IButton = {
    text: "View Github",
    textcolor: "text-black",
    bgcolor: "bg-white",
    link: "https://github.com/chuahweijie-01"
  }

  return (
    <div className="flex pt-5 gap-10">
      <div className="flex-2/3">
        <RoughNotationGroup show={true}>
          <header className="font-bold text-2xl pb-8">
            Hello! I'm CHUAH Wei Jie, a <RoughNotation type="highlight" color="#E5D7FC">developer</RoughNotation> based in Singapore / Malaysia.
          </header>
          <div className="text-xm text-gray-500 pb-3">
            I’m passionate about creating tools that are <RoughNotation type="highlight" color="#F0D3E5">user friendly, simple</RoughNotation> and a <RoughNotation type="highlight" color="#F6E79B">joy to use</RoughNotation>.
          </div>
          <div className="text-xm text-gray-500 pb-3">
            I studied Software Engineering at Universiti Malaysia Pahang, where I spent 42 months building a strong foundation in the field. Later, I joined a startup in Taiwan, taking on a hybrid role that involved both <RoughNotation type="highlight" color="#F2CDD0">frontend</RoughNotation> and <RoughNotation type="highlight" color="#E5D7FC">backend</RoughNotation> development along with a variety of other responsibilities.
          </div>
          <div className="text-xm text-gray-500 pb-3">
            I have <RoughNotation type="highlight" color="#F0D3E5">6 years</RoughNotation> of work experience in software development. These experiences gave me the chance to collaborate with teams of all sizes, from specialized units to cross-functional groups, across different countries.
          </div>
          <div className="text-xm text-gray-500 pb-3">
            Along the way, I developed a working style that values <RoughNotation type="highlight" color="#F6E79B">flexibility, clear communication</RoughNotation> and <RoughNotation type="highlight" color="#F2CDD0">teamwork</RoughNotation>.
          </div>
          <div className="text-xm text-gray-500 pb-4">
            I'm currently looking for a new role as a developer. <RoughNotation type="circle" color="#F0D3E5" strokeWidth={2}><span className="font-bold">Hire me?</span></RoughNotation>
          </div>
          <div className="flex gap-3 pt-4">
            <Boop scale={1.05}><Button {...linkedInButtonConf}></Button></Boop>
            <Boop scale={1.05}><Button {...gitHubButtonConf}></Button></Boop>
          </div>
        </RoughNotationGroup>
      </div>
      <div className="flex flex-1/3 justify-end">
        <Image src={me} alt="me"></Image>
      </div>
    </div >
  );
}
