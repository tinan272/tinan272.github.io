"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import WorkHeader from "../../../components/WorkHeader";

export default function FinSight() {
    const links = {
        Movie: "https://drive.google.com/file/d/1CbnEfKv1jYJvQhNi____O0Zfce5eakzx/view?usp=sharing",
        Google: "https://docs.google.com/document/d/1MCSTNE4kVr2HY54vND6QmzTICZthEUIK94PdElplr1Y/edit?tab=t.0",
    };
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900">
            <Navbar />
            <div className="text-4xl font-bold text-center mb-12">
                <WorkHeader
                    title={"FinSight: Financial Budgeting Tool"}
                    links={links}
                />
            </div>
            <SectionTitle title={"Coding Project"} />
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex lg:flex-row gap-10">
                        {["MAS.png", "MAS7.png", "MAS6.png"].map((src, idx) => (
                            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
                                <Image
                                    src={`./images/mas/${src}`}
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
                            For my Mobile Applications class, I worked in a team
                            of 4 to develop a financial insight application in
                            React Native with a Javascript-based backend and
                            Firestore (Firebase) as the database to store user
                            information. We developed the application in 5
                            separate sprints, ~3 weeks per sprint. The
                            information and process for each sprint is deeply
                            detailed on our Google Doc linked above.
                        </p>
                        <p>
                            I specifcally worked as the Full-Stack Developer on
                            this project. I set up the data pipeline from
                            Firestore to save user data (authentication,
                            spending habits, budgets)
                        </p>
                    </div>
                    <div className="text-xl">
                        <p className="font-bold mt-4">Sprint 1: Ideation</p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>
                                Identified domain with research & ideated
                                problem scope and key concerns – conducted{" "}
                                <strong>9</strong> interviews with potential
                                target audience to explore financial struggles.
                            </li>
                        </ul>

                        <p className="font-bold mt-4">
                            Sprint 2: Research and Narrow Down Scope
                        </p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>
                                Conducted research on target customer segments,
                                value proposition, and benefit analysis.
                            </li>
                            <li>
                                Ideated 3 different approaches based on user
                                interviews and developed clickable Figma
                                prototypes for each.
                            </li>
                            <li>
                                Conducted user interviews with{" "}
                                <strong>12</strong> people to get feedback on
                                ideas. Walked through different use cases to
                                determine which solution received the best
                                feedback.
                            </li>
                            <li>
                                Consensus was FinSight: Budgeting Breakdown +
                                Spending Forecaster. From interviews, we
                                gathered data on potential features to include
                                in the app – Goal tracker, Budget & Expense
                                Breakdown, Transaction History.
                            </li>
                        </ul>
                        <div>
                            <Image
                                src="./images/mas/MAS2.png"
                                alt="work image"
                                width={0}
                                height={0}
                                className="w-auto h-auto object-contain"
                                sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                            />
                        </div>
                        <p className="font-bold mt-4">
                            Sprint 3: Initialization of React Native Prototype +
                            Research for Data Vis. Feature{" "}
                        </p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>
                                Initialized our codebase, Firebase setup, user
                                authentication, mock Home page and Budgets page.
                            </li>
                            <li>
                                Developed storyboards for our final plan
                                (Students, Working Professionals, Family
                                Retirement).
                            </li>
                            <li>
                                Conducted <strong>30</strong> interviews to
                                discuss preferred types of financial data
                                visualizations.
                            </li>
                        </ul>
                        <div className="flex">
                            {["MAS3.png", "MAS4.png", "MAS5.png"].map(
                                (src, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full sm:w-1/2 lg:w-1/3"
                                    >
                                        <Image
                                            src={`./images/mas/${src}`}
                                            alt="work image"
                                            width={0}
                                            height={0}
                                            className="w-full h-auto object-contain"
                                            sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                        <p className="font-bold mt-4">
                            Sprint 4: Development of Home Page + Budget Page
                            features, Prediction Calculations based on past
                            spending
                        </p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>
                                Created functional Home and Budget pages and
                                implemented budgeting visualizations and
                                forecasting logic.
                            </li>
                            <li>
                                Interviewed <strong>30</strong> users to test
                                the app’s budgeting flow using in-app recorded
                                metrics and feedback.
                            </li>
                        </ul>

                        <p className="font-bold mt-4">
                            Sprint 5: Refining + Developing Value Proposition +
                            Launch Strategies + Deployment
                        </p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>
                                Finalized core flows and UI, refined the value
                                proposition, planned launch strategy, and
                                deployed the app.
                            </li>
                            <li>
                                Prepared demo materials including pitch, poster,
                                and documentation.
                            </li>
                        </ul>
                        <div className="flex">
                            {["MAS8.png", "MAS9.png", "MAS10.png"].map(
                                (src, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full sm:w-1/2 lg:w-1/3"
                                    >
                                        <Image
                                            src={`./images/mas/${src}`}
                                            alt="work image"
                                            width={0}
                                            height={0}
                                            className="w-full h-auto object-contain"
                                            sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 h-0.5 bg-black" />
        </main>
    );
}
