'use client';

import Boop from '@/src/components/animation/Boop';
import Button from '@/src/components/ui/Button';
import useDarkTheme from '@/src/hooks/useDarkTheme';
import React from 'react';
import me from "@/public/images/me.jpg";
import Image from "next/image";

const About = () => {
    const redirectToLink = (link: string) => window.location.href = link;

    const linkedInButtonConf = {
        text: "View LinkedIn",
        textcolor: useDarkTheme() ? "text-black" : "text-white",
        bgcolor: useDarkTheme() ? "bg-white" : "bg-slate-800",
        onClick: () => redirectToLink("https://www.linkedin.com/in/chuah-wei-jie-113374191/")
    }

    const gitHubButtonConf = {
        text: "View Github",
        textcolor: useDarkTheme() ? "text-white" : "text-black",
        bgcolor: useDarkTheme() ? "bg-slate-800" : "bg-white",
        onClick: () => redirectToLink("https://github.com/chuahweijie-01")
    }

    const fontColor = useDarkTheme() ? "text-white" : "text-black";
    const contentFontColor = useDarkTheme() ? "text-white" : "text-gray-500"

    return (
        <>
            <div className="flex pt-5 gap-10 flex-col-reverse lg:flex-row pb-8">
                <div className="flex-1 lg:flex-2/3">
                    <div className="flex flex-col justify-between h-full">
                        <header className={`text-4xl pb-4 ${fontColor}`}>
                            I&apos;m Kelvin — a Full-stack Developer
                        </header>
                        <div className={`text-xm ${contentFontColor} flex flex-col gap-7 pr-10`}>
                            <div>
                                I started building on desktop and web in 2020.
                            </div>
                            <div>
                                As I&apos;ve grown as a software engineer, I&apos;ve worked alongside experienced developer who have raised my standards for whats expected of a good product.
                            </div>
                            <div>
                                Through these experiences, I have had the opportunity to provide guidance to other developers and contribute to a collaborative and supportive work environment.
                            </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                            <Boop scale={1.05}><Button {...linkedInButtonConf}></Button></Boop>
                            <Boop scale={1.05}><Button {...gitHubButtonConf}></Button></Boop>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:flex-1/3 justify-center lg:justify-end">
                    <Image src={me} alt="me"></Image>
                </div>
            </div>
        </>
    )
}

export default About