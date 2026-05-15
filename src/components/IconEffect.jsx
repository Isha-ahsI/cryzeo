import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { bgHeroIcon } from "../utils/Coins.data";

export default function HeroIconsAnimation() {
    useEffect(() => {
        const icons = document.querySelectorAll(".hero-icon");

        icons.forEach(icon => {
            icon.style.animationDelay = `${Math.random() * 3}s`;
            icon.style.animationDuration = `${10 + Math.random() * 10}s`;
        });
    }, []);
    return (
        <div className="hero-static-icons">
            {bgHeroIcon.map((icon, i) => (
                <div key={i} className={`avatar avatar-xxl hero-icon ${icon.name}`} >
                    <Image src={icon.src} alt={icon.name} fluid />
                </div>
            ))}
        </div>
    )
}