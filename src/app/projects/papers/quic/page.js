"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Article from "@mui/icons-material/Article";

export default function QUIC() {
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900">
            <Navbar />

            <div className="text-4xl font-bold text-center mb-12">
                <p> Fingerprinting Quic over Media </p>
                <a
                    className="text-base"
                    href={"https://www.overleaf.com/read/gxhksfbgcmpq#a19e77"}
                >
                    <Article /> <p>Doc Link</p>
                </a>
            </div>

            <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl italic">Paper (CS6262)</h2>
                <div className="flex-grow ml-4 h-0.5 bg-black" />
            </div>

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex lg:flex-row gap-10 justify-center items-center">
                        {["quic.png", "quic4.png"].map((src, idx) => (
                            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
                                <Image
                                    src={`./images/quic/${src}`}
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
                        <p>
                            I worked in a group of 4 to fingerprint QUIC-media
                            transport layer to determine the level of security
                            QUIC brings.
                        </p>
                        <p>
                            We conducted experiments on both a controlled
                            testbed using a MoQT implementation and on
                            real-world traffic captured from various youtube
                            streaming sessions. From the local testbed, we were
                            able to easily identify the quality of the videos
                            based on patterns seen in biterate. Our boundaries
                            achieved 100% accuracy for our test dataset.
                        </p>
                        <p>
                            We then analyzed real-world application of QUIC. I
                            specifically worked on collecting data from 20+
                            Youtube videos using Wireshark to capture metrics
                            such as burst rate, bitrate, etc.
                        </p>
                        <p>
                            Thereafter, I assessed the information we could
                            collect for predicted/inferred from QUIC and MoQT
                            traffic, despite encryption and transport-layer
                            protocols. I was first unable to find patterns, but
                            later thought to combine plain UDP + QUIC.
                            Thereafter, I started seeing patterns in burst
                            sizes. While researching Youtube's documentation, I
                            found little about their media streaming protocols,
                            specifically with QUIC. I did however see that
                            Youtube used plain UDP for live streams and ads.
                            While those weren't the videos I collected, I
                            theorized that that could also be their fallback for
                            streaming media. I then analyzed QUIC and plain UDP
                            packets and found patterns in burst sizes.
                            Thereafter, I was able to identify video quality
                            with 77% accuracy.
                        </p>
                        <div className="flex justify-center items-center">
                            {["quic2.png", "quic3.png"].map((src, idx) => (
                                <div
                                    key={idx}
                                    className="w-full sm:w-1/2 lg:w-1/3"
                                >
                                    <Image
                                        src={`./images/quic/${src}`}
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
                    </div>
                </div>
            </div>

            <div className="mt-10 h-0.5 bg-black" />
        </main>
    );
}
