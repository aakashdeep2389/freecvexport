import React from 'react';

interface LandYourNextJobSectionProps {
    title: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
}

const LandYourNextJobSection: React.FC<LandYourNextJobSectionProps> = ({ title, subtitle, ctaText, ctaHref }) => {
    return (
        <section className="LandYourNextJobSection flex justify-center items-center bg-lightrey-800 py-16 px-8">
            <div className="container text-center">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
                        {ctaText && ctaHref && (
                            <a href={ctaHref} className="mt-8 inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
                                {ctaText}
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LandYourNextJobSection;
