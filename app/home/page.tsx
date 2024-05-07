import React from 'react'
import Banner from './components/banner'
import LandYourNextJobSection from './components/landYourNextJobSection'
import ThreeColumnContent from './components/threeColumnContent'
import SimpleSlider from './components/selectTemplateSection'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <Banner
                title="Build Your Impressive Resume"
                subtitle="Create a professional resume in minutes, and land your dream job."
                ctaText="Get Started Now"
                ctaHref="/" // Replace with your actual CTA link
            />
            <LandYourNextJobSection
                title="Create a resume to land your next jobe"
                subtitle="We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment."
                ctaText="Get Started Now"
                ctaHref="/" // Replace with your actual CTA link
            />
            <ThreeColumnContent
                image="/"
                title="Create a resume to land your next jobe"
                subtitle="We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment."
            />
            <SimpleSlider />
        </div>
    )
}

export default Home