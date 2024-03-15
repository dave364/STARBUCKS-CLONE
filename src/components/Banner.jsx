import React, { useEffect } from 'react';
import './Banner.css';

const Banner = () => {
    useEffect(() => {
        const handleScroll = () => {
            const banner = document.querySelector(".banner");
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                banner.style.top = "0px";
                banner.style.position = "fixed";
                
            } else {
                banner.style.top = "100px";
                banner.style.position = "absolute";
                
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="banner">
            <h1>STARBUCKS® REWARDS</h1>
        </div>
    );
}

export default Banner;

