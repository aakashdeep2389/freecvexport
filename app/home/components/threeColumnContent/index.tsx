import React from 'react';

interface ThreeColumnContentProps {
    title: string;
    subtitle?: string;
    image?: string;
}

const ThreeColumnContent: React.FC<ThreeColumnContentProps> = ({ title, subtitle, image }) => {
    return (
        <section className="ThreeColumnContent flex justify-center items-center bg-lightrey-800 py-16 px-8">
            <div className="container text-center">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <img src={image} alt="" />
                        {title && <h1 className="mt-4 text-xl">{title}</h1>}
                        {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
                    </div>
                    <div>
                        <img src="" alt="" />
                        {title && <h1 className="mt-4 text-xl">{title}</h1>}
                        {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
                    </div>
                    <div>
                        <img src="" alt="" />
                        {title && <h1 className="mt-4 text-xl">{title}</h1>}
                        {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ThreeColumnContent;
