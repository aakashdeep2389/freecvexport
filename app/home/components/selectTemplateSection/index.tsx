'use client';
import React from "react";
import Slider from "react-slick";
import ImagePaths from '../../constants';
import styles from "./styles.module.css";



export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "60px",
    };
    return (
        <div className={styles.bannerWrapper}>
            <Slider {...settings}>
                {
                    ImagePaths.map((imgUrl) => {

                        return <div>
                            <img src={imgUrl.src} alt={imgUrl.src} />
                        </div>
                    })
                }

            </Slider>
        </div>
    );
}