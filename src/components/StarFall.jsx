
import React, { useEffect} from "react";

export default function SparkleEffect() {
    useEffect(() => {
        const container = document.querySelector(".hero-sec3 .sparkle-container");

        function createSparkle() {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";

            sparkle.style.left = Math.random() * 100 + "vw";
            sparkle.style.top = Math.random() * 100 + "vh";

            const fall = 12 + Math.random() * 12;
            const glow = 1 + Math.random() * 1;

            sparkle.style.animationDuration = `${fall}s, ${glow}s`;

            container.appendChild(sparkle);

            sparkle.addEventListener("animationend", () => sparkle.remove());
        }

        const interval = setInterval(createSparkle, 120);

        return () => clearInterval(interval);
    }, []);

    return <div className="sparkle-container"></div>;
}
