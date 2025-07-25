"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import WorkHeader from "../../../components/WorkHeader";

export default function CoffeeAndCoding() {
    const links = {
        GitHub: "https://github.com/tinan272/coffeeandcoding/pulls",
    };
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900 bg-white">
            <Navbar />

            <div className="text-4xl font-bold text-center mb-12">
                <WorkHeader title={"Coffee & Coding"} links={links} />
            </div>

            <SectionTitle title={"Coding Project"} />

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="flex flex-col items-center gap-1">
                        <Image
                            src="./images/coffeeandcoding/coffeecoding.jpg"
                            width={500}
                            height={500}
                            alt="work image"
                        />
                        <Image
                            src="./images/coffeeandcoding/coffeecoding2.png"
                            width={500}
                            height={500}
                            alt="work image"
                        />
                    </div>

                    {/* Description */}
                    <div className="text-xl w-full lg:w-1/2">
                        <p className="leading-relaxed">
                            I am currently developing an Atlanta Coffee blog
                            with a partner. This passion project allows us to
                            gather all our coffee-related opinions about metro
                            Atlanta’s coffee scene and place them in one central
                            hub. Our friends, family, and peers can explore the
                            reviews and images we’ve accumulated over the years.
                            It also allows us to work on the skills we’ve
                            accumulated over the years at schools and at
                            internships to then apply to our own project. It is
                            currently in development!
                        </p>
                        <p>
                            So far, we have developed a database using MongoDB
                            to input our cafe information. For the Frontend, we
                            use ReactJS, NextJS, CSS and Material UI. For our
                            backend, we use Python, ExpressJS, and NodeJS to
                            communicate with our database.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 h-0.5 bg-black" />
        </main>
    );
}
