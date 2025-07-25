"use client";
import Image from "./Image.js";
import Statement from "./Statement.js";
export default function Hero({ statement }) {
    return (
        <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-20 mb-20">
            <div className="sm:w-screen">
                <Image />
            </div>
            <div>
                <Statement statement={statement} />
            </div>
        </div>
    );
}
