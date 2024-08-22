"use client";
// import React from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ image }: any) => {
    return (
        <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
            <img className="flex justify-center items-center h-16 " src={image} />
        </div>
    );
};

function HomeCarousel() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return (
        <>
            <div className=" my-4 mx-10 ">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center text-2xl text-blue-600 font-semibold uppercase">
                        Our partners
                        <hr className="border-x-4 border-gray-800" />
                    </h1>
                </div>
                <Slider {...settings} className="">
                    <Card
                        image={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dahua_Technology_logo.svg/2560px-Dahua_Technology_logo.svg.png"
                        }
                    />
                    <Card
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VkffqvcxY2jI0eKAHdFUlpZWoAcmWBSZ8goKYP73&s"
                        }
                    />
                    <Card
                        image={
                            "https://www.freepnglogos.com/uploads/linux-png/linux-logo-linux-17.png"
                        }
                    />
                    <Card
                        image={
                            "https://www.hikvision.com/content/dam/hikvision/uk/marketing-portal/logos/hikvision/Hikvision%20Logo.PNG"
                        }
                    />
                    <Card
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kzsWcjMwN15Lj4pgmAFz1lrkG5ok_ESdz45WTXnt&s"
                        }
                    />
                    <Card
                        image={
                            "https://ccnytech.com/wp-content/uploads/2016/12/Fortinet-logo.png"
                        }
                    />
                    <Card
                        image={
                            "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sophos_logo.png"
                        }
                    />
                    <Card
                        image={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Symantec_logo10.svg/2560px-Symantec_logo10.svg.png"
                        }
                    />
                    <Card
                        image={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF9PggA4k79rtJEBQDpi0wX8HQFlgga6PwpoxY6jd&s"
                        }
                    />
                </Slider>
            </div>
        </>
    );
}

export default HomeCarousel;
