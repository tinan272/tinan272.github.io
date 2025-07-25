"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import WorkHeader from "../components/WorkHeader";

export default function Resume() {
    const links = {
        PDF: "./resume.pdf",
    };
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
            <div className="my-10">
                <Navbar />
            </div>
            <div className="text-4xl font-bold text-center mb-12">
                <WorkHeader title={"Resume"} links={links} />
            </div>

            <SectionTitle title={"My Resume"} />
            <div className="flex justify-center items-center min-h-screen overflow-hidden">
                <Image
                    src="/images/resume.png"
                    alt="Resume"
                    width={700}
                    height={700}
                    className="max-w-full h-auto object-contain"
                />
            </div>
        </main>
    );
}
