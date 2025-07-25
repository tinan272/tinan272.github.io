"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import WorkHeader from "../../../components/WorkHeader";

export default function OnlineC() {
    const links = {
        Google: "https://docs.google.com/document/d/1M58rC3P3fCppx1MXQnT1HEZZhpQq1VKe4W_S9yaA8c8/edit?usp=sharing",
    };
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900">
            <div className="my-10">
                <Navbar />
            </div>
            <div className="text-4xl font-bold text-center mb-12">
                <WorkHeader
                    title={
                        "From Boomers to Zoomers: Bridging Generations Without Community Traditions"
                    }
                    links={links}
                />
            </div>

            <SectionTitle title={"Paper (CS6470)"} />

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex lg:flex-row gap-10 justify-center">
                        {["onlinec.png"].map((src, idx) => (
                            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
                                <Image
                                    src={`./images/onlinec/${src}`}
                                    alt="work image"
                                    width={0}
                                    height={0}
                                    className="w-full h-auto object-contain"
                                    sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-xl w-full">
                        <p className="leading-relaxed">
                            For my Online Communities class, my group and I
                            studied the qualities that contribute to the success
                            of an e-community on Reddit: r/AskOldPeople.
                        </p>
                        <p>
                            This community is one of the largest on Reddit, with
                            over 765k members. It attracts much of its audience
                            through high engagement and often appears on
                            Reddit&#39;s trending pages. Our paper evaluates
                            whether the current community aligns with Amy Jo
                            Kim&#39;s “Nine Principles for Community Design” by
                            participating in the subreddit and interviewing nine
                            users. I personally interviewed four users.
                        </p>
                        <p>
                            Through our research, we found that the subreddit
                            has a clear purpose, acting as a third place where
                            anyone can post a question, but only those born on
                            or before 1980 can post responses. The community
                            bridges generation gaps by providing a space for
                            younger people to ask questions to an older
                            audience. As a simple site with rigid rules and
                            moderators to enforce them, there are no evolving
                            member profiles or roles, no community events, no
                            rituals, and no subgroups. Participants do not
                            report feeling like a close-knit community but do
                            enjoy learning from and interacting with one
                            another.
                        </p>
                        <p>
                            The subreddit evolves with current trends, and the
                            topics and viewpoints shift over time. It lacks many
                            attributes aligned with Kim&#39;s design principles
                            and thus does not fully meet the criteria for a
                            community. While its members may not feel a strong
                            sense of belonging, the subreddit remains popular
                            due to its low-commitment structure and flexibility.
                            It has remained peaceful and respectful over the
                            years and continues to serve as a reliable place
                            where niche questions can be asked and explored.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 h-0.5 bg-black" />
        </main>
    );
}
