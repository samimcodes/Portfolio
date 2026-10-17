"use client";

import React, { useEffect, useRef } from "react";

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Crisp, subtle ambient light blobs (clean opacity, no foggy haze)
    const blobs = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.2,
        vx: 0.25,
        vy: 0.18,
        size: Math.max(canvas.width, canvas.height) * 0.38,
        darkColor: "rgba(59, 130, 246, 0.07)", // Clean luminous blue
        lightColor: "rgba(59, 130, 246, 0.03)",
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.6,
        vx: -0.2,
        vy: -0.22,
        size: Math.max(canvas.width, canvas.height) * 0.35,
        darkColor: "rgba(147, 51, 234, 0.06)", // Soft purple
        lightColor: "rgba(147, 51, 234, 0.025)",
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.9,
        vx: 0.18,
        vy: -0.15,
        size: Math.max(canvas.width, canvas.height) * 0.3,
        darkColor: "rgba(99, 102, 241, 0.05)", // Indigo
        lightColor: "rgba(99, 102, 241, 0.02)",
      },
    ];

    // Sharp stardust particles
    const particleCount = Math.min(Math.floor(window.innerWidth * 0.04), 45);
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.6,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.35 + 0.15,
      });
    }

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");

      // Draw subtle ambient glow
      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.size * 0.3 || blob.x > canvas.width + blob.size * 0.3) blob.vx *= -1;
        if (blob.y < -blob.size * 0.3 || blob.y > canvas.height + blob.size * 0.3) blob.vy *= -1;

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.size);
        const color = isDark ? blob.darkColor : blob.lightColor;
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw sharp, clear particles
      const particleColor = isDark ? "255, 255, 255" : "71, 85, 105";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${isDark ? p.opacity : p.opacity * 0.4})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* 1. Ultra-clean fluid canvas (zero hazy CSS blur filters) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 2. Top Focused Ambient Glow (Subtle and sharp, not cloudy) */}
      <div
        className="absolute top-[-8vw] left-1/2 -translate-x-1/2 w-[60vw] h-[35vw] max-w-[800px] max-h-[400px] rounded-full blur-[80px] opacity-35 dark:opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* 3. Razor-sharp subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_15%,#000_70%,transparent_100%)] pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;
