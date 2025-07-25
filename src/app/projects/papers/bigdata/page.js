"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import WorkHeader from "../../../components/WorkHeader";

export default function BigData() {
    const links = {
        Article: "https://www.overleaf.com/read/gxhksfbgcmpq#a19e77",
    };
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900">
            <div className="my-10">
                <Navbar />
            </div>
            <div className="text-4xl font-bold text-center mb-12">
                <WorkHeader
                    title={"Training Pretrained LLMs on Geolocation"}
                    links={links}
                />
            </div>

            <SectionTitle title={"Paper (CS6220)"} />

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex lg:flex-row gap-10 justify-center">
                        {["bigdata.png", "bigdata2.png"].map((src, idx) => (
                            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
                                <Image
                                    src={`/images/bigdata/${src}`}
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
                            For my Big Data System & Analytics class, I
                            completed a research project with 3 team members on
                            the performance capability of LLMs on geolocation
                            using visualizations. We wanted to improve the
                            accuracy of LLM geolocating capabilities, our group
                            developed a two-step method by combining fine-tuning
                            image-coordinate pairs with a novel
                            prompt-engineering approach. The output will be a
                            precise coordinate point that aligns with the image
                            input. We each focused on separate LLMs, so I worked
                            on Qwen2, an instruction-tuned model.
                        </p>
                        <p>
                            Through preliminary research, we saw that LLM
                            geolocation performance can achieve better
                            performance than the average humans. Large models
                            (Claude 3.5, GPT-4o) have shown significantly
                            accurate performance when identifying popular cities
                            through street images all over the world. For
                            example, the models were able to identify Duluth,
                            Georgia through a self-taken street view image using
                            the Atlanta area codes, Korean writing, and its
                            previous knowledge with the demographic knowledge.
                            Results are marginally improved with
                            Chain-of-Thought prompting. While LLMs are able to
                            achieve impressive performance because of their
                            generic multi-domain knowledge, it could be
                            bolstered with concrete evidence by fine-tuning with
                            StreetView image data. This can be a redundant way
                            to check easy cases, while allowing the LLM to
                            potentially solve hard cases that can only be solved
                            with few-shot learning.
                        </p>
                    </div>
                    <div className="text-xl">
                        <p className="font-bold mt-4">Models & Dataset</p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            Four pre-trained large language models were used on
                            this research project:
                            <li>
                                <a href=" https://huggingface.co/microsoft/Phi-3.5-vision-instruct">
                                    Phi 3.5
                                </a>
                            </li>
                            <li>
                                <a href="https://huggingface.co/Qwen/Qwen2-VL-2B-Instruct">
                                    Qwen2
                                </a>
                            </li>
                            <li>
                                <a href="https://huggingface.co/qresearch/llama-3.1-8B-vision-378">
                                    LLama
                                </a>
                            </li>
                            <li>
                                <a href="https://huggingface.co/mistralai/Pixtral-12B-Base-2409">
                                    Pixtral
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="https://www.kaggle.com/datasets/killusions/street-location-images?resource=download">
                                    {" "}
                                    Kaggle Street View Dataset
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-xl">
                        <p className="font-bold mt-4">Process</p>
                        First, we benchmark these models to see how they
                        currently perform on street view images. We used the a
                        test dataset from the Street Location Images dataset
                        from Kaggle. After, each model was trained on images and
                        their respective geo-coordinates. To get the best
                        results, the team also applied a specific
                        prompt-engineering method to guide the LLM in its
                        search. The methodology instructs the LLM to first
                        narrow down the search itself with its foundational
                        model.
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>
                                Step 1: Sanitize the dataset (filter out values
                                w/o location)
                            </li>
                            <li>
                                Step 2: Run benchmarking of 4 different
                                pre-trained models on the test portion of the
                                dataset
                            </li>
                            <li>
                                Step 3: Fine-tune the 4 models using the
                                training portion of the dataset
                            </li>
                            <li>
                                Step 4: Run benchmarking of the 4 fine-tuned
                                models on the test portion
                            </li>
                            <li>
                                Step 5: Obtain comparative results for pre- and
                                post-fine-tuning (easy, medium, and hard cases)
                            </li>
                            <li>
                                Step 6: Obtain comparative results between all 4
                                fine-tuned models (easy, medium, and hard cases)
                            </li>
                        </ul>
                        <div className="flex justify-center  items-center">
                            {["bigdata6.png", "bigdata4.png"].map(
                                (src, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full sm:w-1/2 lg:w-1/3"
                                    >
                                        <Image
                                            src={`/images/bigdata/${src}`}
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
                    <div className="text-xl">
                        <p className="font-bold mt-4">Results</p>
                        <p>
                            Qwen2 performed relatively well on all the easy,
                            medium, and hard cases in comparison to the other
                            models’ results. Because it has been trained on
                            instruction and performs well on arbitrary image
                            resolutions, it was able to handle the task of
                            predicting geotags better than the other models.
                            Qwen2 performed the worst on PHI-3.5’s hard case
                            potentially due because of the lack of signs or
                            visual cues. In terms of location, Qwen2 seemed to
                            have consistent results no matter what country or
                            continent it was predicting. The hard cases for
                            Qwen2 were inconsistent as Pixtral’s hard case
                            contained more imagery and visual cues while LLamas’
                            contained less. Yet, Qwen2 was successful with the
                            LLama image, but not the Pixtral. This may be
                            because the Pixtral image contained more complex or
                            ambiguous cues, making it harder for Qwen2 to decide
                            on useful geographical patterns.
                        </p>
                        <p>
                            To further improve the performance, various prompts
                            should be tested to determine what’s the best way to
                            advise the model to look at smaller details.
                        </p>
                        <ul className="list-disc list-inside space-y-2 leading-relaxed">
                            <li>
                                Step 1: Sanitize the dataset (filter out values
                                w/o location)
                            </li>
                            <li>
                                Step 2: Run benchmarking of 4 different
                                pre-trained models on the test portion of the
                                dataset
                            </li>
                            <li>
                                Step 3: Fine-tune the 4 models using the
                                training portion of the dataset
                            </li>
                            <li>
                                Step 4: Run benchmarking of the 4 fine-tuned
                                models on the test portion
                            </li>
                            <li>
                                Step 5: Obtain comparative results for pre- and
                                post-fine-tuning (easy, medium, and hard cases)
                            </li>
                            <li>
                                Step 6: Obtain comparative results between all 4
                                fine-tuned models (easy, medium, and hard cases)
                            </li>
                        </ul>
                        <div className="flex justify-center items-center">
                            {["bigdata3.png", "bigdata5.png"].map(
                                (src, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full sm:w-1/2 lg:w-1/3"
                                    >
                                        <Image
                                            src={`/images/bigdata/${src}`}
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
