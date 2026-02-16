import { useEffect, useRef } from "react";

export default function Aurora({
    colorStops = ["#db2e0f", "#d95b17", "#ff3e29"], // Default orange/red preset
    amplitude = 1.0,
    blend = 0.5,
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        let t = 0;

        const render = () => {
            if (!canvas) return;
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            colorStops.forEach((color, index) => {
                gradient.addColorStop(index / (colorStops.length - 1), color);
            });

            // Draw aurora-like waves
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = gradient;

            // Simulate aurora with sine waves
            ctx.beginPath();
            ctx.moveTo(0, height);

            for (let x = 0; x <= width; x += 10) {
                const y = height / 2 +
                    Math.sin(x * 0.01 + t) * 50 * amplitude +
                    Math.sin(x * 0.02 + t * 0.5) * 30;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();

            // Add blur for "aurora" effect
            ctx.filter = `blur(${20 * blend}px)`;
            ctx.fill();
            ctx.filter = "none"; // Reset filter

            // Draw a second layer for depth
            ctx.globalCompositeOperation = "lighter";
            ctx.beginPath();
            ctx.moveTo(0, height);
            for (let x = 0; x <= width; x += 15) {
                const y = height / 1.8 +
                    Math.sin(x * 0.015 - t * 1.2) * 60 * amplitude +
                    Math.cos(x * 0.01 + t) * 40;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fillStyle = colorStops[0];
            ctx.filter = `blur(${30 * blend}px)`;
            ctx.fill();
            ctx.filter = "none";

            t += 0.02; // Animation speed
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [colorStops, amplitude, blend]);

    return <canvas ref={canvasRef} className="w-full h-full block" />;
}
