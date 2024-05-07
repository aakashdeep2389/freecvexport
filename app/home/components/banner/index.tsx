import React from 'react';

interface BannerProps {
    title: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, ctaText, ctaHref }) => {
    return (
        <section className="banner flex justify-center items-center bg-gray-800 text-white py-16 px-8">
            <div className="container text-center">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
                        {ctaText && ctaHref && (
                            <a href={ctaHref} className="mt-8 inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
                                {ctaText}
                            </a>
                        )}
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

export default Banner;
