"use client";
import Image from "next/image";
import Statement from "./Statement.js";
export default function Hero({ statement }) {
    return (
        <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-20 mb-20">
            <div className="sm:w-screen">
                <Image
                    src="./images/portfolio_image.JPG"
                    width={1000}
                    height={500}
                    alt="work image"
                    className="shadow-md w-[1000px] h-auto"
                />
            </div>
            <div>
                <Statement statement={statement} />
            </div>
        </div>
    );
}

// src="./portfolio_image.JPG"
// alt="portfolio-image"
// className=""
