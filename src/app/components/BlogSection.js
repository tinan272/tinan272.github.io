"use client";
import Image from "next/image";

export default function BlogSection({
    idx,
    title,
    images,
    description,
    link,
    extra,
    pdf,
}) {
    return (
        <div>
            <div className="flex justify-between">
                <div className="mb-5 text-2xl">
                    {idx + 1}.{title}
                </div>
                <div className="flex flex-col">
                    {link && (
                        <a className="text-base" href={link}>
                            Link: {link}
                        </a>
                    )}
                    {pdf && (
                        <a className="text-base" href={pdf}>
                            PDF: GOOGLE DOC
                        </a>
                    )}
                </div>
            </div>
            <div className="flex align-center">
                <div className="mr-10">
                    {images.map((image, idx) => (
                        <div key={idx}>
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt="work image"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-between">
                    <div className="text-wrap w-3xl text-xl whitespace-pre-line">
                        {description}
                    </div>
                </div>
            </div>
            <div className="text-xl whitespace-pre-line">{extra}</div>
        </div>
    );
}
