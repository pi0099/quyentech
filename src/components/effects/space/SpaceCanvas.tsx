"use client";

import { useEffect, useRef } from "react";

type Star3D = {
  x: number;
  y: number;
  z: number;
  baseSize: number;
  baseOpacity: number;
  twinklePhase: number;
  twinkleSpeed: number;
  tier: "small" | "medium" | "large";
};

type ShootingStar = {
  x: number;
  y: number;
  angle: number;
  length: number;
  speed: number;
  progress: number;
  opacity: number;
};

type SpaceCanvasProps = {
  intensity?: number;
  enableShootingStars?: boolean;
  paused?: boolean;
};

const STAR_COUNTS = {
  hero: 1600,
  medium: 1000,
  subtle: 600,
};

function randomInSphere(radius: number): [number, number, number] {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = radius * Math.cbrt(Math.random());
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  ];
}

/** Stars on outer shell — read clearer at a distance */
function randomOnShell(radius: number): [number, number, number] {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  ];
}

function rotateX(p: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0], p[1] * c - p[2] * s, p[1] * s + p[2] * c];
}

function rotateY(p: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c];
}

export function SpaceCanvas({
  intensity = 1,
  enableShootingStars = true,
  paused = false,
}: SpaceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star3D[]>([]);
  const rotationRef = useRef({ x: 0, y: 0 });
  const shootingRef = useRef<ShootingStar | null>(null);
  const nextShootRef = useRef(3000 + Math.random() * 2000);
  const elapsedRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastTime = performance.now();

    const starCount = Math.floor(
      (intensity >= 0.8 ? STAR_COUNTS.hero : intensity >= 0.45 ? STAR_COUNTS.medium : STAR_COUNTS.subtle) *
        Math.max(0.35, intensity)
    );

    const sphereRadius = 2;
    const focal = 2.6;

    const initStars = () => {
      const stars: Star3D[] = [];
      for (let i = 0; i < starCount; i++) {
        const roll = Math.random();
        let tier: Star3D["tier"];
        let baseSize: number;
        let baseOpacity: number;
        let pos: [number, number, number];

        // Axis-like: mostly tiny stars, subtle size variation for depth
        if (roll < 0.78) {
          tier = "small";
          pos = randomOnShell(sphereRadius * (0.8 + Math.random() * 0.2));
          baseSize = 0.42 + Math.random() * 0.48;
          baseOpacity = 0.24 + Math.random() * 0.3;
        } else if (roll < 0.96) {
          tier = "medium";
          pos = randomInSphere(sphereRadius);
          baseSize = 0.75 + Math.random() * 0.57;
          baseOpacity = 0.39 + Math.random() * 0.3;
        } else {
          tier = "large";
          pos = randomInSphere(sphereRadius * 0.9);
          baseSize = 1.23 + Math.random() * 0.6;
          baseOpacity = 0.51 + Math.random() * 0.27;
        }

        stars.push({
          x: pos[0],
          y: pos[1],
          z: pos[2],
          baseSize,
          baseOpacity,
          tier,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: tier === "large" ? 0.35 + Math.random() * 0.5 : 0.5 + Math.random() * 1.2,
        });
      }
      starsRef.current = stars;
    };

    const spawnShootingStar = () => {
      const edge = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;
      let angle = 0;

      if (edge === 0) {
        x = Math.random() * width;
        y = -20;
        angle = Math.PI / 4 + Math.random() * 0.4;
      } else if (edge === 1) {
        x = width + 20;
        y = Math.random() * height * 0.6;
        angle = Math.PI * 0.85 + Math.random() * 0.3;
      } else if (edge === 2) {
        x = Math.random() * width;
        y = height + 20;
        angle = -Math.PI / 4 - Math.random() * 0.4;
      } else {
        x = -20;
        y = Math.random() * height * 0.5;
        angle = Math.random() * 0.35;
      }

      shootingRef.current = {
        x,
        y,
        angle,
        length: 40 + Math.random() * 70,
        speed: 420 + Math.random() * 180,
        progress: 0,
        opacity: 0.35 + Math.random() * 0.25,
      };
      nextShootRef.current = 3000 + Math.random() * 2000;
      elapsedRef.current = 0;
    };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (starsRef.current.length === 0) initStars();
    };

    const draw = (time: number) => {
      animationId = requestAnimationFrame(draw);

      if (pausedRef.current) return;

      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      elapsedRef.current += delta * 1000;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Axis-style continuous sphere rotation (useFrame delta / 10, / 15)
      const rotSpeed = 0.85 + intensity * 0.35;
      rotationRef.current.x -= (delta / 10) * rotSpeed;
      rotationRef.current.y -= (delta / 15) * rotSpeed;

      const mouseRotY = (mx - 0.5) * 0.35 * intensity;
      const mouseRotX = (my - 0.5) * 0.25 * intensity;
      const rotX = rotationRef.current.x + mouseRotX;
      const rotY = rotationRef.current.y + mouseRotY;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const spread = Math.min(width, height) * 0.44;
      const sizeBoost = 0.72 + intensity * 0.3;

      const projected: {
        sx: number;
        sy: number;
        size: number;
        alpha: number;
        z: number;
        bright: boolean;
        tier: Star3D["tier"];
      }[] = [];

      for (const star of starsRef.current) {
        let p: [number, number, number] = [star.x, star.y, star.z];
        p = rotateY(p, rotY);
        p = rotateX(p, rotX);

        const depth = focal + p[2];
        if (depth < 0.15) continue;

        const perspective = focal / depth;
        const sx = cx + p[0] * perspective * spread;
        const sy = cy + p[1] * perspective * spread;

        if (sx < -30 || sx > width + 30 || sy < -30 || sy > height + 30) continue;

        star.twinklePhase += star.twinkleSpeed * delta;
        const twinkle = 0.88 + Math.sin(star.twinklePhase) * 0.12;

        const depthFade = Math.min(1, 0.35 + perspective * 0.5);
        const alpha = Math.min(
          0.78,
          star.baseOpacity * twinkle * depthFade * (0.55 + intensity * 0.4)
        );

        const depthSize =
          star.tier === "large"
            ? perspective * 1.05
            : star.tier === "medium"
              ? perspective * 0.9
              : perspective * 0.78;

        const size = star.baseSize * depthSize * sizeBoost;

        projected.push({
          sx,
          sy,
          size: Math.max(0.5, Math.min(2.6, size)),
          alpha,
          z: p[2],
          bright: star.tier === "large" && size > 1.05 && alpha > 0.32,
          tier: star.tier,
        });
      }

      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        if (p.bright) {
          const glowR = p.size * 2.2;
          const grad = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, glowR);
          grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha * 0.18})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, glowR, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      }

      if (enableShootingStars && intensity > 0.4) {
        if (!shootingRef.current && elapsedRef.current >= nextShootRef.current) {
          spawnShootingStar();
        }

        const ss = shootingRef.current;
        if (ss) {
          ss.progress += ss.speed * delta;
          const headX = ss.x + Math.cos(ss.angle) * ss.progress;
          const headY = ss.y + Math.sin(ss.angle) * ss.progress;

          const fade = Math.max(0, 1 - ss.progress / (ss.length * 1.2));
          const grad = ctx.createLinearGradient(ss.x, ss.y, headX, headY);
          grad.addColorStop(0, "rgba(255, 255, 255, 0)");
          grad.addColorStop(0.6, `rgba(200, 240, 255, ${ss.opacity * fade * intensity})`);
          grad.addColorStop(1, `rgba(0, 217, 255, ${ss.opacity * fade * intensity * 0.8})`);

          ctx.beginPath();
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(headX, headY);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.lineCap = "round";
          ctx.stroke();

          if (ss.progress >= ss.length) {
            shootingRef.current = null;
            elapsedRef.current = 0;
          }
        }
      }

    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [intensity, enableShootingStars]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
