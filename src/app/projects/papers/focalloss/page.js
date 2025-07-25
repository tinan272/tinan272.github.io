"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import WorkHeader from "../../../components/WorkHeader";

export default function OnlineC() {
    const links = {
        Google: "https://docs.google.com/presentation/d/1rOwVlNRykT4Ohe5cU-HzeLLP2THH8QDNjspvHsbhwb4/edit?usp=sharing",
    };
    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-20 py-10 text-gray-900 bg-white">
            <div className="my-10">
                <Navbar />
            </div>
            <div className="text-4xl font-bold text-center mb-12">
                <WorkHeader
                    title={
                        "Improving Calibration in Unbalanced Datasets with Focal Loss over Cross Entropy"
                    }
                    links={links}
                />
            </div>

            <SectionTitle title={"Paper (CS8813)"} />

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex lg:flex-row gap-10 justify-center items-center">
                        {["focalloss.jpg", "focalloss8.png"].map((src, idx) => (
                            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
                                <Image
                                    src={`/images/focalloss/${src}`}
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
                            I worked alongside a graduate student in Metz,
                            France to review her work in using Machine Learning
                            to classify the large Atlas Diatoms Dataset with 166
                            classes with 30 to 185 samples each. In many large
                            datasets, there exists an imbalance in the number of
                            data samples collected for different species. When
                            training a model to learn the attributes of such
                            datasets, its vital to ensure that the model doesn’t
                            overfit that dominating classes and overlook the
                            rare ones. This issue can lead to unpredictable
                            results and poor generalization. My partners,
                            Ricardo Modrego and Vivek Vallurupalli, worked
                            together to research methods to improve the
                            classification performance of models trained on
                            these unbalanced datasets. Specifically, Modrego and
                            Vallurupalli completed a detailed review of popular
                            methodologies for improving the performance of
                            unbalanced data sets in regards to calibration and
                            performance in the least represented classes. They
                            explored the state-of-the-art methods on the
                            Oxford-IIIT Pet Dataset as testing rounds to provide
                            insights into the behavior of neural networks on
                            balanced vs unbalanced datasets. I focused on
                            applying focal-loss, a modified cross-entropy
                            formula designed to handle class imbalance, on the
                            Atlas Diatoms Dataset and reviewing the performance.
                        </p>
                        <p>
                            The current training model utilized a cross-entropy
                            function in the training process of the neural
                            network. To implement focal loss, I utilized the
                            public Focal loss torch algorithm from PyPI (Python
                            Package Index). There are two key parameters, gamma
                            and alpha, that were important aspects to the
                            function that differentiated the function from
                            weighted cross-entropy. Focal loss includes a
                            scaling factor that multiplies the predicted
                            probability by gamma. If the predicted probability
                            for a correct class is low, as in the model was
                            uncertain, the scaling factor would be large, making
                            the loss higher for the sample. So, as a result, it
                            directs the focus of the model onto misclassified
                            samples. If gamma is 0, then focal loss function
                            essentially becomes the cross-entropy function. When
                            the parameter gamma is increased, the loss assigned
                            to well-classified samples shrinks while harder
                            samples are given more weight and thus more focus.
                        </p>
                        <p>
                            Switching to using focal loss for this imbalanced
                            dataset improved the calibration error of the model
                            overall. Calibration error measures how well a
                            model’s predicted probabilities match the true
                            likelihood of those predictions being correct.
                        </p>
                    </div>
                    <div className="flex lg:flex-row gap-10 justify-center">
                        {[
                            "focalloss2.png",
                            "focalloss3.png",
                            "focalloss4.png",
                            "focalloss5.png",
                            "focalloss6.png",
                            "focalloss7.png",
                        ].map((src, idx) => (
                            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
                                <Image
                                    src={`/images/focalloss/${src}`}
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

            <div className="mt-10 h-0.5 bg-black" />
        </main>
    );
}
