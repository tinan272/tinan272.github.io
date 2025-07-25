"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import WorkHeader from "../../../components/WorkHeader";

export default function atlTraffic() {
    const links = {
        PDF: "../../datavis.pdf",
        Google: "https://docs.google.com/document/d/1J1_CpZbA1J1lTtik95Rm4dxfOpxNlbw03Krn3H0YOAw/edit?usp=sharing",
    };
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900 bg-white">
            <div className="my-10">
                <Navbar />
            </div>
            <div className="text-4xl font-bold text-center mb-12">
                <WorkHeader
                    title={"Georgia Traffic Visualization"}
                    links={links}
                />
            </div>

            <SectionTitle title={"Coding Project"} />

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="flex-col items-center gap-1">
                        {["datavis3.png", "datavis.png"].map((src, idx) => (
                            <div key={idx} className="w-full">
                                <Image
                                    src={`/images/datavis/${src}`}
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

                    <div className="text-xl w-full lg:w-1/2 space-y-2">
                        <p>
                            For my Data Visualization and Analysis class, my
                            group and I designed an interactive visualization
                            that depicts traffic information and accident
                            information in Georgia. The application aims to
                            encourage consideration of adequate safety metrics
                            for routing on people’s daily commutes. The project
                            calculates how traffic patterns are affected by
                            various types of accidents and how it affects
                            commute. It also visualizes concrete safety and
                            speed statistics of different routes from origin to
                            destination.
                        </p>
                        <p>
                            Current routing systems prioritize travel time
                            without adequately considering historical collision
                            data and traffic patterns, limiting the users’
                            ability to make informed, risk-aware route choices.
                            This gap can lead to increased frustration for
                            commuters, and prevents traffic planners from
                            addressing critical safety concerns effectively.
                        </p>
                        <p>
                            The application combines important information from
                            both the collision dataset from Georgia Department
                            of Transportation (GDOT) with TomTom’s routing
                            patterns. Using Javascript and D3.js, we retrieve
                            top 3 routes between any two locations from the
                            interactive map of metro Atlanta. Many similar
                            applications usually only focus on the top route at
                            a time.
                        </p>
                        <p>
                            Statistics will be generated and historical trends
                            on traffic flow, collisions, and overall safety will
                            be visualized for each of the routes, providing a
                            more holistic approach for commuters to determine
                            the best route.
                        </p>
                        <div className="leading-relaxed">
                            <h2 className="text-xl font-bold mb-2">
                                Project Structure
                            </h2>
                            <ul className="list-disc space-y-1">
                                <li>
                                    <strong>main.js</strong> – Main frontend JS
                                </li>
                                <li>
                                    <strong>
                                        Collisions Dataset.csv,
                                        SpeedSafetyPrioritization.csv
                                    </strong>
                                </li>
                                <li>
                                    <strong>Collisions Dataset.sql</strong>
                                </li>
                                <li>
                                    <strong>
                                        accidents_by_segment_hourly.sql
                                    </strong>
                                    – SQL script for aggregating accident data
                                    by road segment & hour
                                </li>
                                <li>
                                    <strong>createHourlyBarChart.js</strong> –
                                    generating accident rate by hour with bar
                                    chart visualization using D3.js
                                </li>
                                <li>
                                    <strong>getRoute.js</strong> – Handles route
                                    logic and fetching accidents on a route
                                    <ul className="list-inside list-disc">
                                        <li>
                                            Fetches top 3 routes from A to B
                                            with TomTom API
                                        </li>
                                        <li>
                                            Retrieves traffic flow data along
                                            specified coordinates
                                        </li>
                                        <li>
                                            Generates buffer around route then
                                            queries local DB for collision
                                            (accident) within the buffer
                                        </li>
                                        <li>
                                            Ranks each route based on traffic
                                            efficiency & collision risk (i.e.
                                            severity, risk depending on time of
                                            the day, and fatality likelihood)
                                        </li>
                                        <li>
                                            Calculates safety and traffic index
                                            for routes into a final route index
                                        </li>
                                        <li>
                                            Selects best route based on highest
                                            route index score
                                        </li>
                                        <li>
                                            Converts user-inputted addresses
                                            into lat/lon coords using TomTom API
                                        </li>
                                        <li>
                                            Supports detailed accident
                                            statistics queries: by hour, day of
                                            week, and road segment
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>map.html</strong> – renders the
                                    interactive map and graph visualizations
                                </li>
                                <li>
                                    <strong>server.js</strong> – Express server
                                    to connect to database with POST endpoints
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 h-0.5 bg-black" />
        </main>
    );
}
