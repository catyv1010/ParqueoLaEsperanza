"use client";

import { useEffect, useRef } from "react";

/* ───────── SVG grasshopper (reused in preloader, nav, hero, footer) ───────── */
function GrasshopperSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none">
      <ellipse cx="55" cy="45" rx="18" ry="12" fill="#52B788" />
      <ellipse cx="40" cy="42" rx="10" ry="8" fill="#74C69D" />
      <circle cx="33" cy="37" r="4" fill="#2D6A4F" />
      <circle cx="34" cy="36" r="1.5" fill="#B7E4C7" />
      <path d="M70 35 Q85 15 90 20" stroke="#52B788" strokeWidth="2" fill="none" />
      <path d="M70 40 Q88 30 92 35" stroke="#52B788" strokeWidth="2" fill="none" />
      <path d="M42 50 Q30 70 20 72" stroke="#74C69D" strokeWidth="2.5" fill="none" />
      <path d="M42 50 Q25 65 18 60" stroke="#74C69D" strokeWidth="2.5" fill="none" />
      <path d="M55 52 Q50 68 55 75" stroke="#74C69D" strokeWidth="2" fill="none" />
      <path d="M60 52 Q65 68 60 74" stroke="#74C69D" strokeWidth="2" fill="none" />
      <path d="M32 38 Q20 28 15 30" stroke="#52B788" strokeWidth="1.5" fill="none" />
      <path d="M32 36 Q22 22 18 18" stroke="#52B788" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="tarifa-check">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WA_LINK = "https://wa.me/50688322660?text=Hola!%20Me%20interesa%20informaci%C3%B3n%20sobre%20Parqueo%20y%20Lavacar%20La%20Esperanza";

export default function Home() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const sparkleRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    /* ── Preloader ── */
    const t = setTimeout(() => preloaderRef.current?.classList.add("hidden"), 1200);

    /* ── Cursor glow ── */
    if (window.innerWidth > 768) {
      const onMouse = (e: MouseEvent) => {
        if (cursorRef.current) {
          cursorRef.current.style.left = e.clientX + "px";
          cursorRef.current.style.top = e.clientY + "px";
        }
      };
      document.addEventListener("mousemove", onMouse);
      return () => { clearTimeout(t); document.removeEventListener("mousemove", onMouse); };
    }
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    /* ── Nav scroll ── */
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 50) navRef.current.classList.add("scrolled");
      else navRef.current.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    /* ── Hamburger ── */
    const ham = hamburgerRef.current;
    const mob = mobileMenuRef.current;
    if (!ham || !mob) return;
    const toggle = () => {
      ham.classList.toggle("active");
      mob.classList.toggle("active");
      document.body.style.overflow = mob.classList.contains("active") ? "hidden" : "";
    };
    ham.addEventListener("click", toggle);
    const links = mob.querySelectorAll("a");
    links.forEach((l, i) => {
      (l as HTMLElement).style.transitionDelay = `${0.1 + i * 0.08}s`;
      l.addEventListener("click", () => {
        ham.classList.remove("active");
        mob.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
    return () => ham.removeEventListener("click", toggle);
  }, []);

  useEffect(() => {
    /* ── Particles ── */
    const pc = particlesRef.current;
    if (!pc) return;
    for (let i = 0; i < 50; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const s = Math.random() * 4 + 1;
      p.style.width = s + "px";
      p.style.height = s + "px";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = (Math.random() * 8 + 6) + "s";
      p.style.animationDelay = (Math.random() * 8) + "s";
      pc.appendChild(p);
    }
  }, []);

  useEffect(() => {
    /* ── Sparkles ── */
    const sc = sparkleRef.current;
    if (!sc) return;
    for (let i = 0; i < 15; i++) {
      const sp = document.createElement("div");
      sp.className = "sparkle";
      const s = Math.random() * 20 + 8;
      sp.style.width = s + "px";
      sp.style.height = s + "px";
      sp.style.left = Math.random() * 100 + "%";
      sp.style.top = Math.random() * 100 + "%";
      sp.style.animationDuration = (Math.random() * 3 + 1.5) + "s";
      sp.style.animationDelay = (Math.random() * 4) + "s";
      sp.innerHTML = '<svg viewBox="0 0 24 24" fill="rgba(183,228,199,0.8)"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>';
      sc.appendChild(sp);
    }
  }, []);

  useEffect(() => {
    /* ── Bubbles ── */
    const bc = bubbleRef.current;
    if (!bc) return;
    for (let i = 0; i < 20; i++) {
      const b = document.createElement("div");
      b.className = "bubble";
      const s = Math.random() * 30 + 5;
      b.style.width = s + "px";
      b.style.height = s + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.animationDuration = (Math.random() * 10 + 8) + "s";
      b.style.animationDelay = (Math.random() * 10) + "s";
      bc.appendChild(b);
    }
  }, []);

  useEffect(() => {
    /* ── Water ripples ── */
    const wr = rippleRef.current;
    if (!wr) return;
    const iv = setInterval(() => {
      const r = document.createElement("div");
      r.className = "water-ripple";
      r.style.left = Math.random() * 100 + "%";
      r.style.top = Math.random() * 100 + "%";
      r.style.animationDuration = (Math.random() * 3 + 3) + "s";
      wr.appendChild(r);
      setTimeout(() => r.remove(), 6000);
    }, 1500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    /* ── Scroll reveal ── */
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = entry.target.parentElement?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
            let delay = 0;
            siblings?.forEach((sib, i) => {
              if (sib === entry.target) delay = i * 0.1;
            });
            (entry.target as HTMLElement).style.transitionDelay = delay + "s";
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    /* ── Counter animation ── */
    const counters = document.querySelectorAll(".counter");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLElement;
            const target = parseInt(counter.getAttribute("data-target") || "0");
            const duration = 2000;
            const start = performance.now();
            function update(now: number) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              counter.textContent = Math.floor(eased * target).toLocaleString("es-CR");
              if (progress < 1) requestAnimationFrame(update);
              else counter.textContent = target.toLocaleString("es-CR");
            }
            requestAnimationFrame(update);
            obs.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    /* ── Smooth scroll ── */
    const handler = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href")!);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    /* ── Parallax ── */
    if (window.innerWidth <= 768) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled >= window.innerHeight) return;

      const gh = document.querySelector(".hero-grasshopper") as HTMLElement | null;
      if (gh) gh.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.02}deg)`;

      const mesh = document.querySelector(".hero-mesh") as HTMLElement | null;
      const grid = document.querySelector(".hero-grid") as HTMLElement | null;
      const content = document.querySelector(".hero-content") as HTMLElement | null;
      if (mesh) mesh.style.transform = `scale(${1 + scrolled * 0.0003}) rotate(${scrolled * 0.01}deg)`;
      if (grid) grid.style.transform = `translateY(${scrolled * 0.2}px)`;
      if (content) {
        content.style.transform = `translateY(${scrolled * 0.15}px)`;
        content.style.opacity = String(1 - scrolled / (window.innerHeight * 0.8));
      }
      document.querySelectorAll<HTMLElement>(".glow-orb").forEach((orb, i) => {
        orb.style.transform = `translateY(${scrolled * (i + 1) * 0.05}px)`;
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    /* ── Card tilt + glow follow ── */
    if (window.innerWidth <= 768) return;
    const cards = document.querySelectorAll<HTMLElement>(".service-card");
    const handlers: Array<() => void> = [];
    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.setProperty("--mouse-x", (x / rect.width) * 100 + "%");
        card.style.setProperty("--mouse-y", (y / rect.height) * 100 + "%");
      };
      const onLeave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      handlers.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => handlers.forEach((h) => h());
  }, []);

  useEffect(() => {
    /* ── Active nav link ── */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= (section as HTMLElement).offsetTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      navLinks.forEach((link) => {
        (link as HTMLElement).style.color = "";
        if (link.getAttribute("href") === "#" + current) {
          (link as HTMLElement).style.color = "var(--verde-claro)";
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    /* ── Mouse trail in hero ── */
    if (window.innerWidth <= 768) return;
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const onMove = (e: Event) => {
      const me = e as MouseEvent;
      const trail = document.createElement("div");
      trail.style.cssText = `
        position:fixed;width:6px;height:6px;border-radius:50%;
        background:rgba(82,183,136,0.5);pointer-events:none;z-index:100;
        left:${me.clientX}px;top:${me.clientY}px;transition:all 0.8s ease-out;
      `;
      document.body.appendChild(trail);
      setTimeout(() => { trail.style.opacity = "0"; trail.style.transform = "scale(0)"; }, 50);
      setTimeout(() => trail.remove(), 900);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const btn = formRef.current?.querySelector(".form-submit") as HTMLButtonElement | null;
    if (!btn) return;
    const orig = btn.textContent;
    btn.textContent = "Mensaje enviado!";
    btn.style.background = "#25D366";
    btn.style.color = "#fff";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = "";
      btn.style.color = "";
      formRef.current?.reset();
    }, 3000);
  };

  return (
    <>
      <style jsx global>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --verde-esperanza: #2D6A4F;
          --verde-claro: #52B788;
          --verde-brillante: #74C69D;
          --verde-suave: #B7E4C7;
          --verde-palido: #D8F3DC;
          --oscuro: #1B2A1F;
          --oscuro-suave: #2C3E34;
          --blanco: #FAFFF7;
          --blanco-puro: #FFFFFF;
          --acento: #40916C;
          --dorado-suave: #C9B037;
          --sombra: rgba(27, 42, 31, 0.12);
          --sombra-fuerte: rgba(27, 42, 31, 0.25);
        }
        ::selection { background: var(--verde-claro); color: var(--blanco); }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--oscuro); }
        ::-webkit-scrollbar-thumb { background: var(--verde-esperanza); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--verde-claro); }
        html { scroll-behavior: smooth; font-size: 16px; }
        body {
          font-family: 'Space Grotesk', sans-serif;
          background: var(--blanco); color: var(--oscuro);
          overflow-x: hidden; line-height: 1.6;
        }
        h1, h2, h3 { font-family: 'DM Serif Display', serif; line-height: 1.2; }

        /* PRELOADER */
        .preloader {
          position: fixed; inset: 0; z-index: 9999;
          background: var(--oscuro);
          display: flex; align-items: center; justify-content: center; flex-direction: column;
          transition: opacity 0.6s ease, visibility 0.6s ease;
        }
        .preloader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
        .preloader-text {
          color: var(--verde-claro); font-family: 'DM Serif Display', serif;
          font-size: 1.5rem; margin-top: 1rem;
          animation: pulse 1.2s ease-in-out infinite;
        }
        .preloader-bug { width: 60px; height: 60px; animation: hopLoader 0.8s ease-in-out infinite; }
        @keyframes hopLoader { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-25px) rotate(5deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        /* CURSOR */
        .cursor-glow {
          position: fixed; width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(82,183,136,0.08) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none; z-index: 1;
          transform: translate(-50%, -50%); transition: transform 0.1s ease-out;
        }

        /* NAV */
        nav.main-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        nav.main-nav.scrolled {
          background: rgba(27, 42, 31, 0.95); backdrop-filter: blur(20px);
          padding: 0.7rem 2rem; box-shadow: 0 4px 30px var(--sombra);
        }
        .nav-logo {
          display: flex; align-items: center; gap: 0.6rem;
          text-decoration: none; color: var(--blanco);
          font-family: 'DM Serif Display', serif; font-size: 1.3rem;
        }
        .nav-logo svg { width: 36px; height: 36px; transition: transform 0.3s ease; }
        .nav-logo:hover svg { transform: rotate(-10deg) scale(1.1); }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          font-size: 0.9rem; font-weight: 500; letter-spacing: 0.02em;
          position: relative; transition: color 0.3s ease;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px; background: var(--verde-claro); transition: width 0.3s ease;
        }
        .nav-links a:hover { color: var(--verde-claro); }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
          background: var(--verde-claro); color: var(--oscuro);
          padding: 0.6rem 1.4rem; border-radius: 50px; text-decoration: none;
          font-weight: 600; font-size: 0.85rem; transition: all 0.3s ease; letter-spacing: 0.02em;
        }
        .nav-cta:hover { background: var(--verde-brillante); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(82,183,136,0.4); }

        /* Hamburger */
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; z-index: 1001; background: none; border: none; padding: 5px; }
        .hamburger span { display: block; width: 26px; height: 2.5px; background: var(--blanco); border-radius: 2px; transition: all 0.35s ease; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.active span:nth-child(2) { opacity: 0; transform: translateX(-10px); }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        .mobile-menu {
          position: fixed; inset: 0; z-index: 999;
          background: rgba(27, 42, 31, 0.98); backdrop-filter: blur(20px);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem;
          opacity: 0; visibility: hidden; transition: all 0.4s ease;
        }
        .mobile-menu.active { opacity: 1; visibility: visible; }
        .mobile-menu a {
          color: var(--blanco); text-decoration: none;
          font-family: 'DM Serif Display', serif; font-size: 2rem;
          opacity: 0; transform: translateY(20px); transition: all 0.4s ease, color 0.3s ease;
        }
        .mobile-menu.active a { opacity: 1; transform: translateY(0); }
        .mobile-menu a:hover { color: var(--verde-claro); }

        /* HERO */
        .hero {
          min-height: 100vh; position: relative; background: var(--oscuro);
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .hero-particles { position: absolute; inset: 0; overflow: hidden; }
        .particle {
          position: absolute; border-radius: 50%; background: var(--verde-claro);
          opacity: 0; animation: floatParticle linear infinite;
        }
        @keyframes floatParticle {
          0% { opacity: 0; transform: translateY(100vh) scale(0); }
          10% { opacity: 0.6; } 90% { opacity: 0.6; }
          100% { opacity: 0; transform: translateY(-10vh) scale(1); }
        }
        .hero-mesh {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(45,106,79,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(82,183,136,0.15) 0%, transparent 40%),
            radial-gradient(ellipse at 60% 80%, rgba(64,145,108,0.2) 0%, transparent 45%);
          animation: meshMove 8s ease-in-out infinite alternate;
        }
        @keyframes meshMove { 0% { transform: scale(1) rotate(0deg); } 100% { transform: scale(1.05) rotate(1deg); } }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(82,183,136,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(82,183,136,0.05) 1px, transparent 1px);
          background-size: 60px 60px; animation: gridScroll 20s linear infinite;
        }
        @keyframes gridScroll { 0% { transform: translateY(0); } 100% { transform: translateY(60px); } }
        .hero-content { position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 900px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(82,183,136,0.15); border: 1px solid rgba(82,183,136,0.3);
          padding: 0.5rem 1.2rem; border-radius: 50px;
          color: var(--verde-claro); font-size: 0.85rem; font-weight: 500;
          margin-bottom: 1.5rem; letter-spacing: 0.05em;
          animation: fadeInUp 0.8s ease-out 0.5s both; overflow: hidden;
        }
        .hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--verde-claro); animation: blink 2s ease-in-out infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .hero h1 { font-size: clamp(2.8rem, 7vw, 5.5rem); color: var(--blanco); margin-bottom: 0.3rem; animation: fadeInUp 0.8s ease-out 0.7s both; }
        .hero h1 .green {
          background: linear-gradient(135deg, var(--verde-claro), var(--verde-brillante), var(--verde-suave), var(--verde-claro));
          background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; animation: gradientShift 4s ease-in-out infinite;
        }
        @keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem); color: rgba(255,255,255,0.6);
          margin-bottom: 2.5rem; max-width: 600px; margin-left: auto; margin-right: auto;
          animation: fadeInUp 0.8s ease-out 0.9s both;
        }
        .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; animation: fadeInUp 0.8s ease-out 1.1s both; }
        .btn-primary {
          background: var(--verde-claro); color: var(--oscuro);
          padding: 1rem 2.2rem; border-radius: 50px; border: none;
          font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative; overflow: hidden;
        }
        .btn-primary::after {
          content: ''; position: absolute; inset: -2px;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-100%);
        }
        .btn-primary:hover::after { animation: btnShine 0.6s ease forwards; }
        @keyframes btnShine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(82,183,136,0.4); }
        .btn-secondary {
          background: transparent; color: var(--blanco);
          padding: 1rem 2.2rem; border-radius: 50px;
          border: 1.5px solid rgba(255,255,255,0.3);
          font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 500;
          cursor: pointer; text-decoration: none; transition: all 0.3s ease;
        }
        .btn-secondary:hover { border-color: var(--verde-claro); color: var(--verde-claro); transform: translateY(-3px); }
        .hero-scroll-indicator {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          animation: fadeInUp 0.8s ease-out 1.5s both, gentleBounce 2s ease-in-out 3s infinite;
        }
        @keyframes gentleBounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-8px); } }
        .scroll-line { width: 1px; height: 50px; position: relative; overflow: hidden; background: rgba(255,255,255,0.15); }
        .scroll-line::after {
          content: ''; position: absolute; top: -50px; left: 0;
          width: 1px; height: 50px; background: var(--verde-claro);
          animation: scrollDown 2s ease-in-out infinite;
        }
        @keyframes scrollDown { 0% { top: -50px; } 100% { top: 50px; } }
        .scroll-text { color: rgba(255,255,255,0.4); font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; }
        .hero-grasshopper {
          position: absolute; bottom: 15%; right: 8%; width: 180px; height: 180px;
          opacity: 0.15; animation: grasshopperFloat 6s ease-in-out infinite, fadeInUp 1s ease-out 1.3s both;
        }
        @keyframes grasshopperFloat { 0%, 100% { transform: translateY(0) rotate(-2deg); } 33% { transform: translateY(-15px) rotate(1deg); } 66% { transform: translateY(-8px) rotate(-1deg); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(25px); } to { opacity: 1; transform: translateY(0); } }

        /* REVEAL */
        .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-60px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-right { opacity: 0; transform: translateX(60px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }

        /* GLOW ORBS */
        .glow-orb { position: absolute; border-radius: 50%; filter: blur(40px); animation: orbFloat 8s ease-in-out infinite alternate; pointer-events: none; z-index: 1; }
        @keyframes orbFloat { 0% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -40px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(10px, -10px) scale(1.05); } }

        /* SPARKLES */
        .sparkle { position: absolute; pointer-events: none; z-index: 2; animation: sparkleFade 2s ease-in-out infinite; }
        .sparkle svg { width: 100%; height: 100%; }
        @keyframes sparkleFade { 0%, 100% { opacity: 0.2; transform: scale(0.8) rotate(0deg); } 50% { opacity: 1; transform: scale(1.2) rotate(180deg); } }

        /* BUBBLES */
        .bubble {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(82,183,136,0.1));
          border: 1px solid rgba(82,183,136,0.2); animation: bubbleFloat linear infinite; pointer-events: none;
        }
        @keyframes bubbleFloat {
          0% { opacity: 0; transform: translateY(100vh) scale(0) rotate(0deg); }
          10% { opacity: 0.8; } 50% { opacity: 0.6; } 90% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-20vh) scale(1) rotate(360deg); }
        }

        /* WATER RIPPLE */
        .water-ripple { position: absolute; border-radius: 50%; border: 1px solid rgba(82,183,136,0.3); animation: ripple 4s ease-out infinite; pointer-events: none; }
        @keyframes ripple { 0% { width: 0; height: 0; opacity: 0.8; } 100% { width: 300px; height: 300px; opacity: 0; margin-top: -150px; margin-left: -150px; } }

        /* SECTION SHARED */
        section { position: relative; }
        .section-padding { padding: 6rem 2rem; }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-label { display: inline-block; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--verde-esperanza); margin-bottom: 0.8rem; }
        .section-title { font-size: clamp(2rem, 4vw, 3rem); color: var(--oscuro); }
        .section-title .accent { color: var(--verde-esperanza); }
        .section-line { width: 60px; height: 3px; background: var(--verde-claro); margin: 1rem auto 0; border-radius: 2px; }

        /* STATS BAR */
        .stats-bar { background: var(--blanco-puro); border-bottom: 1px solid rgba(45,106,79,0.1); padding: 3rem 2rem; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; max-width: 1000px; margin: 0 auto; text-align: center; }
        .stat-item { position: relative; }
        .stat-item:not(:last-child)::after { content: ''; position: absolute; right: -1rem; top: 20%; height: 60%; width: 1px; background: rgba(45,106,79,0.15); }
        .stat-number { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 4vw, 3rem); color: var(--verde-esperanza); line-height: 1; }
        .stat-label { font-size: 0.85rem; color: var(--oscuro-suave); margin-top: 0.3rem; letter-spacing: 0.02em; }

        /* SERVICES */
        .services { background: var(--blanco); }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .service-card {
          background: var(--blanco-puro); border: 1px solid rgba(45,106,79,0.08);
          border-radius: 16px; padding: 2.5rem 2rem; position: relative; overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important; cursor: default;
        }
        .service-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 4px; background: linear-gradient(90deg, var(--verde-esperanza), var(--verde-claro));
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
        }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover {
          transform: translateY(-12px) scale(1.02) !important;
          box-shadow: 0 25px 80px var(--sombra), 0 0 30px rgba(82,183,136,0.1) !important;
          border-color: transparent;
        }
        .service-card::after {
          content: ''; position: absolute; inset: 0; border-radius: 16px;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(82,183,136,0.08), transparent 60%);
          opacity: 0; transition: opacity 0.4s ease; pointer-events: none;
        }
        .service-card:hover::after { opacity: 1; }
        .service-icon {
          width: 56px; height: 56px;
          background: linear-gradient(135deg, var(--verde-palido), var(--verde-suave));
          border-radius: 14px; display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem; transition: transform 0.3s ease;
        }
        .service-card:hover .service-icon { transform: scale(1.1) rotate(-5deg); }
        .service-icon svg { width: 26px; height: 26px; color: var(--verde-esperanza); }
        .service-card h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.8rem; color: var(--oscuro); }
        .service-card p { font-size: 0.92rem; color: var(--oscuro-suave); line-height: 1.7; }
        .service-tag { display: inline-block; margin-top: 1.2rem; font-size: 0.75rem; font-weight: 600; color: var(--verde-esperanza); background: var(--verde-palido); padding: 0.3rem 0.8rem; border-radius: 20px; letter-spacing: 0.03em; }

        /* TARIFAS */
        .tarifas { background: var(--oscuro); position: relative; overflow: hidden; }
        .tarifas::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 10% 90%, rgba(82,183,136,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 10%, rgba(45,106,79,0.08) 0%, transparent 40%);
        }
        .tarifas .section-label { color: var(--verde-claro); }
        .tarifas .section-title { color: var(--blanco); }
        .tarifas .section-title .accent { color: var(--verde-claro); }
        .tarifas-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; position: relative; z-index: 2; }
        .tarifa-card {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(82,183,136,0.15);
          border-radius: 20px; padding: 2.5rem 2rem; text-align: center;
          position: relative; transition: all 0.4s ease; overflow: hidden;
        }
        .tarifa-card::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(82,183,136,0.05), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .tarifa-card:hover::after { opacity: 1; }
        .tarifa-card:hover { transform: translateY(-6px); border-color: rgba(82,183,136,0.4); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .tarifa-card.featured { background: rgba(82,183,136,0.1); border-color: var(--verde-claro); transform: scale(1.04); animation: featuredGlow 3s ease-in-out infinite alternate; }
        .tarifa-card.featured:hover { transform: scale(1.04) translateY(-6px); }
        @keyframes featuredGlow { 0% { box-shadow: 0 0 20px rgba(82,183,136,0.1); } 100% { box-shadow: 0 0 40px rgba(82,183,136,0.25), 0 20px 60px rgba(0,0,0,0.3); } }
        .tarifa-badge { position: absolute; top: -1px; right: 1.5rem; background: var(--verde-claro); color: var(--oscuro); font-size: 0.7rem; font-weight: 700; padding: 0.4rem 1rem; border-radius: 0 0 10px 10px; letter-spacing: 0.05em; text-transform: uppercase; }
        .tarifa-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
        .tarifa-name { font-family: 'DM Serif Display', serif; font-size: 1.5rem; color: var(--blanco); margin-bottom: 0.5rem; }
        .tarifa-desc { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-bottom: 1.5rem; }
        .tarifa-price { font-size: 2.8rem; font-weight: 700; color: var(--verde-claro); line-height: 1; margin-bottom: 0.3rem; }
        .tarifa-price span { font-size: 1rem; font-weight: 400; color: rgba(255,255,255,0.4); }
        .tarifa-period { font-size: 0.8rem; color: rgba(255,255,255,0.4); margin-bottom: 2rem; }
        .tarifa-features { list-style: none; text-align: left; margin-bottom: 2rem; }
        .tarifa-features li { padding: 0.5rem 0; font-size: 0.9rem; color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 0.7rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .tarifa-features li:last-child { border-bottom: none; }
        .tarifa-check { width: 18px; height: 18px; border-radius: 50%; background: rgba(82,183,136,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tarifa-check svg { width: 10px; height: 10px; color: var(--verde-claro); }
        .tarifa-btn { display: block; width: 100%; padding: 0.9rem; border-radius: 12px; font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem; font-weight: 600; cursor: pointer; text-decoration: none; text-align: center; transition: all 0.3s ease; }
        .tarifa-btn-outline { background: transparent; border: 1.5px solid rgba(82,183,136,0.4); color: var(--verde-claro); }
        .tarifa-btn-outline:hover { background: rgba(82,183,136,0.1); border-color: var(--verde-claro); }
        .tarifa-btn-solid { background: var(--verde-claro); border: none; color: var(--oscuro); }
        .tarifa-btn-solid:hover { background: var(--verde-brillante); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(82,183,136,0.3); }

        /* POR QUE NOSOTROS */
        .porque { background: var(--blanco); overflow: hidden; }
        .porque-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .porque-visual { position: relative; height: 450px; background: linear-gradient(135deg, var(--verde-palido), var(--verde-suave)); border-radius: 24px; overflow: hidden; }
        .porque-visual-inner { position: absolute; inset: 2rem; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .porque-big-number { font-family: 'DM Serif Display', serif; font-size: 8rem; color: var(--verde-esperanza); line-height: 1; opacity: 0.2; }
        .porque-big-text { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: var(--verde-esperanza); text-align: center; margin-top: -1rem; }
        .porque-float { position: absolute; border-radius: 16px; background: var(--blanco-puro); padding: 1rem 1.3rem; box-shadow: 0 10px 40px var(--sombra); display: flex; align-items: center; gap: 0.8rem; animation: floatCard 4s ease-in-out infinite; }
        .porque-float:nth-child(2) { top: 10%; right: -10px; animation-delay: 0s; }
        .porque-float:nth-child(3) { bottom: 15%; left: -10px; animation-delay: 1.5s; }
        @keyframes floatCard { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .porque-float-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--verde-palido); display: flex; align-items: center; justify-content: center; }
        .porque-float-text { font-size: 0.85rem; font-weight: 600; color: var(--oscuro); }
        .porque-float-sub { font-size: 0.75rem; color: var(--oscuro-suave); }
        .porque-content h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1.5rem; }
        .porque-content h2 .accent { color: var(--verde-esperanza); }
        .porque-list { list-style: none; display: flex; flex-direction: column; gap: 1.2rem; }
        .porque-item { display: flex; gap: 1rem; align-items: flex-start; padding: 1rem; border-radius: 12px; transition: all 0.3s ease; }
        .porque-item:hover { background: var(--verde-palido); }
        .porque-item-icon { width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, var(--verde-esperanza), var(--verde-claro)); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .porque-item-icon svg { width: 20px; height: 20px; color: white; }
        .porque-item h4 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1rem; margin-bottom: 0.2rem; }
        .porque-item p { font-size: 0.88rem; color: var(--oscuro-suave); }

        /* UBICACION */
        .ubicacion { background: var(--verde-palido); }
        .ubicacion-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .ubicacion-info h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1rem; }
        .ubicacion-info h2 .accent { color: var(--verde-esperanza); }
        .ubicacion-info > p { color: var(--oscuro-suave); margin-bottom: 2rem; font-size: 1.05rem; }
        .ubicacion-details { display: flex; flex-direction: column; gap: 1rem; }
        .ubicacion-detail { display: flex; align-items: center; gap: 1rem; background: var(--blanco-puro); padding: 1rem 1.2rem; border-radius: 12px; transition: transform 0.3s ease; }
        .ubicacion-detail:hover { transform: translateX(8px); }
        .ubicacion-detail-icon { width: 42px; height: 42px; border-radius: 10px; background: var(--verde-palido); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ubicacion-detail-icon svg { width: 20px; height: 20px; color: var(--verde-esperanza); }
        .ubicacion-detail strong { display: block; font-size: 0.9rem; }
        .ubicacion-detail span { font-size: 0.85rem; color: var(--oscuro-suave); }
        .ubicacion-map { border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px var(--sombra-fuerte); height: 400px; position: relative; background: var(--oscuro-suave); }
        .ubicacion-map iframe { width: 100%; height: 100%; border: none; filter: saturate(0.8) contrast(1.1); }

        /* CONTACTO */
        .contacto { background: var(--blanco); }
        .contacto-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .contacto-left h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1rem; }
        .contacto-left h2 .accent { color: var(--verde-esperanza); }
        .contacto-left > p { color: var(--oscuro-suave); margin-bottom: 2rem; font-size: 1.05rem; line-height: 1.7; }
        .whatsapp-btn {
          display: inline-flex; align-items: center; gap: 0.8rem;
          background: #25D366; color: white; padding: 1rem 2rem;
          border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 1.05rem;
          transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(37,211,102,0.3);
        }
        .whatsapp-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 30px rgba(37,211,102,0.4); }
        .whatsapp-btn svg { width: 24px; height: 24px; }
        .contacto-extra { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
        .contacto-extra-item { display: flex; align-items: center; gap: 0.8rem; font-size: 0.95rem; color: var(--oscuro-suave); }
        .contacto-extra-item svg { width: 18px; height: 18px; color: var(--verde-esperanza); }
        .contacto-form-card { background: var(--blanco-puro); border: 1px solid rgba(45,106,79,0.1); border-radius: 20px; padding: 2.5rem; box-shadow: 0 10px 40px var(--sombra); }
        .contacto-form-card h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.4rem; color: var(--oscuro); }
        .form-group input, .form-group textarea, .form-group select {
          width: 100%; padding: 0.8rem 1rem; border: 1.5px solid rgba(45,106,79,0.15);
          border-radius: 10px; font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem;
          background: var(--blanco); transition: all 0.3s ease; color: var(--oscuro);
        }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { outline: none; border-color: var(--verde-claro); box-shadow: 0 0 0 3px rgba(82,183,136,0.15); }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .form-submit {
          width: 100%; padding: 1rem; background: var(--verde-esperanza); color: var(--blanco);
          border: none; border-radius: 12px; font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;
        }
        .form-submit:hover { background: var(--verde-claro); color: var(--oscuro); transform: translateY(-2px); }

        /* FOOTER */
        .site-footer {
          background: var(--oscuro); color: rgba(255,255,255,0.6);
          padding: 4rem 2rem 2rem; position: relative; overflow: hidden;
        }
        .site-footer::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--verde-claro), transparent); }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto; }
        .footer-brand p { font-size: 0.9rem; line-height: 1.7; margin-top: 1rem; max-width: 300px; }
        .footer-col h4 { font-family: 'Space Grotesk', sans-serif; color: var(--blanco); font-size: 0.9rem; font-weight: 700; margin-bottom: 1.2rem; letter-spacing: 0.05em; text-transform: uppercase; }
        .footer-col a { display: block; color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.88rem; margin-bottom: 0.7rem; transition: color 0.3s ease; }
        .footer-col a:hover { color: var(--verde-claro); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); margin-top: 3rem; padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin-left: auto; margin-right: auto; font-size: 0.82rem; }
        .footer-bottom a { color: var(--verde-claro); text-decoration: none; }

        /* FLOATING WHATSAPP */
        .floating-wa {
          position: fixed; bottom: 2rem; right: 2rem; z-index: 900;
          width: 60px; height: 60px; border-radius: 50%;
          background: #25D366; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          transition: all 0.3s ease; text-decoration: none;
          animation: waPulse 3s ease-in-out infinite;
        }
        .floating-wa:hover { transform: scale(1.12); box-shadow: 0 6px 30px rgba(37,211,102,0.5); }
        .floating-wa svg { width: 32px; height: 32px; color: white; }
        @keyframes waPulse { 0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); } 50% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 15px rgba(37,211,102,0.08); } }
        .floating-wa-tooltip {
          position: absolute; right: 70px; top: 50%; transform: translateY(-50%);
          background: var(--blanco-puro); color: var(--oscuro);
          padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.82rem; font-weight: 600;
          white-space: nowrap; box-shadow: 0 4px 15px var(--sombra);
          opacity: 0; pointer-events: none; transition: all 0.3s ease;
        }
        .floating-wa:hover .floating-wa-tooltip { opacity: 1; right: 75px; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .services-grid, .tarifas-grid { grid-template-columns: repeat(2, 1fr); }
          .tarifa-card.featured { transform: scale(1); }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none !important; }
          .hamburger { display: flex; }
          .hero-grasshopper { width: 120px; height: 120px; right: 5%; bottom: 10%; }
          .services-grid { grid-template-columns: 1fr; }
          .tarifas-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
          .porque-grid { grid-template-columns: 1fr; }
          .porque-visual { height: 300px; }
          .ubicacion-wrapper { grid-template-columns: 1fr; }
          .ubicacion-map { height: 300px; }
          .contacto-wrapper { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-item:not(:last-child)::after { display: none; }
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
          .cursor-glow { display: none; }
        }
        @media (max-width: 480px) {
          .section-padding { padding: 4rem 1.2rem; }
          .hero-content { padding: 1rem; }
          .contacto-form-card { padding: 1.5rem; }
        }

        /* VIDEO BG */
        .hero-video-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
        .hero-video-bg video { width: 100%; height: 100%; object-fit: cover; opacity: 0.15; }
        .hero-video-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(27,42,31,0.85) 0%, rgba(27,42,31,0.7) 50%, rgba(27,42,31,0.9) 100%); }
      `}</style>

      {/* PRELOADER */}
      <div className="preloader" ref={preloaderRef}>
        <GrasshopperSVG className="preloader-bug" />
        <div className="preloader-text">Parqueo y Lavacar La Esperanza</div>
      </div>

      {/* CURSOR GLOW */}
      <div className="cursor-glow" ref={cursorRef} />

      {/* NAV */}
      <nav className="main-nav" ref={navRef}>
        <a href="#hero" className="nav-logo">
          <GrasshopperSVG />
          La Esperanza
        </a>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#tarifas">Tarifas</a></li>
          <li><a href="#porque">Nosotros</a></li>
          <li><a href="#ubicacion">Ubicaci&oacute;n</a></li>
        </ul>
        <a href="#contacto" className="nav-cta">Contactar</a>
        <button className="hamburger" ref={hamburgerRef} aria-label="Men&uacute;">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <a href="#servicios">Servicios</a>
        <a href="#tarifas">Tarifas</a>
        <a href="#porque">Nosotros</a>
        <a href="#ubicacion">Ubicaci&oacute;n</a>
        <a href="#contacto">Contacto</a>
      </div>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="https://videos.pexels.com/video-files/3173312/3173312-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="hero-mesh" />
        <div className="hero-grid" />
        <div className="hero-particles" ref={particlesRef} />

        {/* Glow Orbs */}
        <div className="glow-orb" style={{ width: 200, height: 200, background: "rgba(82,183,136,0.15)", top: "20%", left: "10%" }} />
        <div className="glow-orb" style={{ width: 150, height: 150, background: "rgba(45,106,79,0.12)", top: "60%", right: "15%", animationDelay: "3s" }} />
        <div className="glow-orb" style={{ width: 180, height: 180, background: "rgba(116,198,157,0.1)", bottom: "10%", left: "40%", animationDelay: "5s" }} />

        {/* Water Ripples */}
        <div ref={rippleRef} style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 2 }} />
        {/* Sparkle Stars */}
        <div ref={sparkleRef} style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 3 }} />
        {/* Bubbles */}
        <div ref={bubbleRef} style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 2 }} />

        {/* Grasshopper SVG animated */}
        <svg className="hero-grasshopper" viewBox="0 0 200 160" fill="none">
          <ellipse cx="110" cy="90" rx="36" ry="24" fill="#52B788" opacity="0.8" />
          <ellipse cx="80" cy="84" rx="20" ry="16" fill="#74C69D" opacity="0.9" />
          <circle cx="66" cy="74" r="8" fill="#2D6A4F" />
          <circle cx="68" cy="72" r="3" fill="#B7E4C7" />
          <path d="M140 70 Q170 30 180 40" stroke="#52B788" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M140 80 Q176 60 184 70" stroke="#52B788" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M84 100 Q60 140 40 144" stroke="#74C69D" strokeWidth="4" fill="none" opacity="0.7">
            <animate attributeName="d" values="M84 100 Q60 140 40 144;M84 100 Q55 135 38 140;M84 100 Q60 140 40 144" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M84 100 Q50 130 36 120" stroke="#74C69D" strokeWidth="4" fill="none" opacity="0.7">
            <animate attributeName="d" values="M84 100 Q50 130 36 120;M84 100 Q45 125 32 118;M84 100 Q50 130 36 120" dur="3.5s" repeatCount="indefinite" />
          </path>
          <path d="M110 104 Q100 136 110 150" stroke="#74C69D" strokeWidth="3" fill="none" opacity="0.5" />
          <path d="M120 104 Q130 136 120 148" stroke="#74C69D" strokeWidth="3" fill="none" opacity="0.5" />
          <path d="M64 76 Q40 56 30 60" stroke="#52B788" strokeWidth="2.5" fill="none" opacity="0.6">
            <animate attributeName="d" values="M64 76 Q40 56 30 60;M64 76 Q38 50 26 52;M64 76 Q40 56 30 60" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path d="M64 72 Q44 44 36 36" stroke="#52B788" strokeWidth="2.5" fill="none" opacity="0.6">
            <animate attributeName="d" values="M64 72 Q44 44 36 36;M64 72 Q40 40 30 30;M64 72 Q44 44 36 36" dur="2.8s" repeatCount="indefinite" />
          </path>
        </svg>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Parqueo y lavacar de confianza
          </div>
          <h1>Parqueo y Lavacar<br /><span className="green">La Esperanza</span></h1>
          <p className="hero-subtitle">Donde su veh&iacute;culo descansa tranquilo y sale reluciente. Seguridad, confianza y servicio profesional de lavado.</p>
          <div className="hero-actions">
            <a href={WA_LINK} className="btn-primary" target="_blank" rel="noopener noreferrer">Apartar mi campo</a>
            <a href="#tarifas" className="btn-secondary">Ver tarifas</a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-text">Explorar</span>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item reveal">
            <div className="stat-number"><span className="counter" data-target="24">0</span></div>
            <div className="stat-label">Espacios disponibles</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-number"><span className="counter" data-target="24">0</span>/7</div>
            <div className="stat-label">Vigilancia continua</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-number"><span className="counter" data-target="26">0</span>+</div>
            <div className="stat-label">A&ntilde;os de servicio</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-number"><span className="counter" data-target="2000">0</span>+</div>
            <div className="stat-label">Clientes satisfechos</div>
          </div>
        </div>
      </div>

      {/* SERVICIOS */}
      <section className="services section-padding" id="servicios">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Nuestros servicios</span>
            <h2 className="section-title">Todo lo que su <span className="accent">veh&iacute;culo necesita</span></h2>
            <div className="section-line" />
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3>Parqueo d&iacute;a o noche</h3>
              <p>Deje su carro seguro de d&iacute;a o de noche. Vigilancia las 24 horas con c&aacute;maras y personal de seguridad presente.</p>
              <span className="service-tag">Flexible</span>
            </div>
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </div>
              <h3>Plan mensual</h3>
              <p>Para quienes necesitan un espacio fijo. Su campo reservado todos los d&iacute;as, sin preocupaciones ni sorpresas.</p>
              <span className="service-tag">M&aacute;s popular</span>
            </div>
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3>Lavado Exterior</h3>
              <p>Lavado completo exterior con los mejores productos del mercado. Su veh&iacute;culo quedar&aacute; como nuevo.</p>
              <span className="service-tag">Calidad</span>
            </div>
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9h12M6 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2M6 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" /></svg>
              </div>
              <h3>Lavado Interior</h3>
              <p>Limpieza profunda del interior, aspirado y desinfecci&oacute;n. Aire fresco y limpio para su viaje.</p>
              <span className="service-tag">Detallado</span>
            </div>
            <div className="service-card reveal">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Parqueo de motos</h3>
              <p>Espacio seguro y vigilado para su moto. Acceso f&aacute;cil y r&aacute;pido con tarifa especial para motocicletas.</p>
              <span className="service-tag">Motos</span>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFAS */}
      <section className="tarifas section-padding" id="tarifas">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Tarifas</span>
            <h2 className="section-title">Planes a su <span className="accent">medida</span></h2>
            <div className="section-line" />
          </div>
          <div className="tarifas-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", maxWidth: "800px", margin: "0 auto" }}>
            {/* Día o Noche */}
            <div className="tarifa-card reveal">
              <span className="tarifa-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </span>
              <div className="tarifa-name">D&iacute;a o Noche</div>
              <div className="tarifa-desc">Parqueo por d&iacute;a o por noche</div>
              <div className="tarifa-price">&#8353;5,000<span>/d&iacute;a o noche</span></div>
              <div className="tarifa-period">Precio fijo, sin sorpresas</div>
              <ul className="tarifa-features">
                <li><CheckIcon /> Sin reserva previa</li>
                <li><CheckIcon /> Vigilancia 24/7 incluida</li>
                <li><CheckIcon /> Acceso inmediato</li>
                <li><CheckIcon /> C&aacute;maras CCTV activas</li>
                <li><CheckIcon /> Pago al salir</li>
              </ul>
              <a href="https://wa.me/50688322660?text=Hola!%20Quiero%20info%20sobre%20parqueo%20por%20d%C3%ADa%20o%20noche%20en%20Parqueo%20y%20Lavacar%20La%20Esperanza" className="tarifa-btn tarifa-btn-outline" target="_blank" rel="noopener noreferrer">Consultar</a>
            </div>
            {/* Mensual */}
            <div className="tarifa-card featured reveal">
              <div className="tarifa-badge">M&aacute;s popular</div>
              <span className="tarifa-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#52B788" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </span>
              <div className="tarifa-name">Mensual</div>
              <div className="tarifa-desc">Su campo reservado todo el mes</div>
              <div className="tarifa-price">&#8353;60,000<span>/mes</span></div>
              <div className="tarifa-period">Campo fijo garantizado</div>
              <ul className="tarifa-features">
                <li><CheckIcon /> Espacio reservado 24/7</li>
                <li><CheckIcon /> Entrada y salida libre</li>
                <li><CheckIcon /> SINPE M&oacute;vil aceptado</li>
                <li><CheckIcon /> Prioridad en campos techados</li>
                <li><CheckIcon /> Descuento por trimestre</li>
              </ul>
              <a href="https://wa.me/50688322660?text=Hola!%20Me%20interesa%20el%20plan%20mensual%20de%20Parqueo%20y%20Lavacar%20La%20Esperanza" className="tarifa-btn tarifa-btn-solid" target="_blank" rel="noopener noreferrer">Apartar mi campo</a>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE NOSOTROS */}
      <section className="porque section-padding" id="porque">
        <div className="container">
          <div className="porque-grid">
            <div className="porque-visual reveal-left">
              <div className="porque-visual-inner">
                <div className="porque-big-number">26+</div>
                <div className="porque-big-text">A&ntilde;os cuidando<br />su veh&iacute;culo</div>
              </div>
              <div className="porque-float">
                <div className="porque-float-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                  <div className="porque-float-text">100% Seguro</div>
                  <div className="porque-float-sub">Vigilancia permanente</div>
                </div>
              </div>
              <div className="porque-float">
                <div className="porque-float-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <div>
                  <div className="porque-float-text">5,000+ Clientes</div>
                  <div className="porque-float-sub">Conf&iacute;an en nosotros</div>
                </div>
              </div>
            </div>
            <div className="porque-content reveal-right">
              <span className="section-label">Por qu&eacute; elegirnos</span>
              <h2>M&aacute;s que un parqueo,<br /><span className="accent">su lugar de confianza</span></h2>
              <ul className="porque-list">
                <li className="porque-item">
                  <div className="porque-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div>
                    <h4>Seguridad real, no promesas</h4>
                    <p>C&aacute;maras, guardas y acceso controlado. Su carro queda en buenas manos.</p>
                  </div>
                </li>
                <li className="porque-item">
                  <div className="porque-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  </div>
                  <div>
                    <h4>Ubicaci&oacute;n estrat&eacute;gica</h4>
                    <p>Cerca de todo lo que importa. Acceso f&aacute;cil y r&aacute;pido desde las v&iacute;as principales.</p>
                  </div>
                </li>
                <li className="porque-item">
                  <div className="porque-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                  <div>
                    <h4>Trato pura vida</h4>
                    <p>Aqu&iacute; lo atendemos como se merece. Con respeto, amabilidad y una sonrisa tica.</p>
                  </div>
                </li>
                <li className="porque-item">
                  <div className="porque-item-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <div>
                    <h4>Precios justos</h4>
                    <p>Tarifas claras y competitivas. Sin letras peque&ntilde;as ni cobros sorpresa.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACION */}
      <section className="ubicacion section-padding" id="ubicacion">
        <div className="container">
          <div className="ubicacion-wrapper">
            <div className="ubicacion-info reveal-left">
              <span className="section-label">Ubicaci&oacute;n</span>
              <h2>F&aacute;cil de <span className="accent">encontrar</span></h2>
              <p>Estamos en una zona c&eacute;ntrica y accesible. Venga a conocernos &mdash; lo recibimos con gusto.</p>
              <div className="ubicacion-details">
                <div className="ubicacion-detail">
                  <div className="ubicacion-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <strong>Direcci&oacute;n</strong>
                    <span>Cartago, Costa Rica &mdash; Parqueo La Esperanza</span>
                  </div>
                </div>
                <div className="ubicacion-detail">
                  <div className="ubicacion-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div>
                    <strong>Horario</strong>
                    <span>Lunes a Domingo, 24 horas</span>
                  </div>
                </div>
                <div className="ubicacion-detail">
                  <div className="ubicacion-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <strong>Tel&eacute;fono</strong>
                    <span>+506 8832-2660</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ubicacion-map reveal-right">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5!2d-83.919!3d9.864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e1eec24555c1%3A0x9bbf4c34e384c70e!2sParqueo%20La%20Esperanza!5e0!3m2!1ses!2scr!4v1" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contacto section-padding" id="contacto">
        <div className="container">
          <div className="contacto-wrapper">
            <div className="contacto-left reveal-left">
              <span className="section-label">Contacto</span>
              <h2>Hablemos por <span className="accent">WhatsApp</span></h2>
              <p>La forma m&aacute;s r&aacute;pida de apartar su campo o resolver cualquier duda. Le contestamos al toque.</p>
              <a href={WA_LINK} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Escribir por WhatsApp
              </a>
              <div className="contacto-extra">
                <div className="contacto-extra-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  <span>Respondemos en menos de 15 minutos</span>
                </div>
                <div className="contacto-extra-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>Tambi&eacute;n puede llamar al +506 8832-2660</span>
                </div>
              </div>
            </div>
            <div className="contacto-form-card reveal-right">
              <h3>O d&eacute;jenos un mensaje</h3>
              <form ref={formRef} onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id="nombre" placeholder="Su nombre completo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electr&oacute;nico</label>
                  <input type="email" id="email" placeholder="correo@ejemplo.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="servicio">Servicio de inter&eacute;s</label>
                  <select id="servicio" defaultValue="">
                    <option value="">Seleccione una opci&oacute;n</option>
                    <option value="dia-noche">Parqueo d&iacute;a o noche</option>
                    <option value="mensual">Plan mensual</option>
                    <option value="motos">Parqueo de motos</option>
                    <option value="lavado">Lavacar</option>
                    <option value="otro">Otro / Consulta general</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" placeholder="Cu&eacute;ntenos en qu&eacute; podemos ayudarle..." />
                </div>
                <button type="submit" className="form-submit">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo" style={{ marginBottom: "0.5rem" }}>
              <GrasshopperSVG />
              La Esperanza
            </a>
            <p>Donde su veh&iacute;culo descansa tranquilo. M&aacute;s de 26 a&ntilde;os brindando seguridad y confianza a nuestros clientes en Costa Rica.</p>
          </div>
          <div className="footer-col">
            <h4>Servicios</h4>
            <a href="#tarifas">D&iacute;a o Noche</a>
            <a href="#tarifas">Mensual</a>
            <a href="#servicios">Lavacar</a>
            <a href="#servicios">Motos</a>
          </div>
          <div className="footer-col">
            <h4>Navegaci&oacute;n</h4>
            <a href="#hero">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#tarifas">Tarifas</a>
            <a href="#ubicacion">Ubicaci&oacute;n</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="https://wa.me/50688322660" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="tel:+50688322660">+506 8832-2660</a>
            <a href="mailto:info@parqueolaesperanza.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Parqueo La Esperanza. Todos los derechos reservados.</span>
          <span>Hecho con cari&ntilde;o en Cartago, Costa Rica</span>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/50688322660?text=Hola!%20Necesito%20informaci%C3%B3n%20sobre%20Parqueo%20y%20Lavacar%20La%20Esperanza" className="floating-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
        <span className="floating-wa-tooltip">Chateemos por WhatsApp</span>
      </a>
    </>
  );
}
