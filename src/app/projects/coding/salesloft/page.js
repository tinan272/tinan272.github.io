"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";

export default function Salesloft() {
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900 bg-white">
            <Navbar />

            <div className="text-4xl font-bold text-center mb-12">
                <p> Dynamic Email Templates: Intern Project at Salesloft </p>
            </div>
            <SectionTitle title={"Coding Project"} />

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="flex flex-col items-center gap-1">
                        <Image
                            src="/tinan272.github.io/images/salesloft/salesloft2.png"
                            width={500}
                            height={500}
                            alt="work image"
                        />
                    </div>

                    <div className="text-xl w-full lg:w-1/2">
                        <p className="leading-relaxed">
                            I was tasked to develop 4 versions of Salesloft’s
                            new email template using **Slim (templating
                            language), CSS** to improve 100k+ new customer
                            experiences. This project was part of a company-wide
                            redesign that sought to reflect the updated company
                            vision and identity. I collaborated with UX/UI
                            Designers to determine what the company was looking
                            for and how to use Figma designs and interaction
                            details as a Software Developer. This allowed me to
                            better understand the expectations in terms of
                            layout specs. Thereafter, I started on the local
                            development of these templates. I met with a
                            Software Developer on the team as well to review my
                            code and discuss any suggestions or improvements I
                            could’ve made. In the end, I was able to develop the
                            responsive email templates with media-query. After I
                            finished the local development, I collaborated with
                            the Salesloft QA team to learn about their internal
                            system to deploy my branch locally and test the
                            email templates out on different browsers and email
                            applications. I spent time editing my code to fit
                            constraints of Internet Explorer, Outlook, etc. as
                            each had different requirements. For example, I
                            learned to the necessities of fallback attributes.
                            For example, Internet Explorer didn’t fully support
                            the flexbox attribute, so I had to shift the code to
                            account for this.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 h-0.5 bg-black" />
        </main>
    );
}
