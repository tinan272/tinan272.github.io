// app/page.js (Next.js 13+ with App Router)
"use client";
import * as React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "@mui/material/Stack";
import work from "../../data/work.json";
import SectionTitle from "./components/SectionTitle";
import ListSection from "./components/ListSection";
import Qualifications from "../../data/qualifications.json";

export default function Home() {
    let statement = `My name is Tina! I'm an aspiring Software Engineer based in Atlanta, GA. I recently (May 2025) graduated from Georgia Tech with a Masters in CS, specializing in Machine Learning!`;

    return (
        <main className="flex min-h-screen flex-col bg-white text-gray-900 py-10 px-10 xl:px-20 ">
            <Navbar />
            <Hero statement={statement} />
            <Stack gap={{ xs: 4, md: 6 }}>
                <SectionTitle title={"My Projects"} />
                {Object.entries(work).map(([category, data]) => (
                    <div key={category}>
                        <Projects
                            id={category}
                            project={data}
                            type={
                                String(category).charAt(0).toUpperCase() +
                                String(category).slice(1)
                            }
                        />
                    </div>
                ))}

                {Object.entries(Qualifications).map(([category, data]) => (
                    <div key={category}>
                        <SectionTitle id={data.id} title={data.id} />
                        <ListSection aDict={data.info} />
                    </div>
                ))}

                <div
                    style={{
                        flexGrow: 1,
                        height: 1.5,
                        backgroundColor: "black",
                    }}
                />
            </Stack>
        </main>
    );
}
