"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Youtube, MessageCircle } from "lucide-react"; // Changed import: Removed 'Twitter', kept 'X'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const showNav = gsap
      .from(".site-header", {
        yPercent: -110,
        paused: true,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showNav.play();
        } else {
          showNav.reverse();
        }
      },
    });

    // --- MOUSE TRAIL LOGIC ---
    const xTo = gsap.quickTo("#custom-cursor", "x", {
      duration: 0.4,
      ease: "power3",
    });
    const yTo = gsap.quickTo("#custom-cursor", "y", {
      duration: 0.4,
      ease: "power3",
    });
    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);

    // --- SET INITIAL STATES ---
    gsap.set(
      [
        ".hero-logo",
        ".hero-p2e-tag",
        ".hero-title",
        ".hero-tagline",
        ".hero-buttons",
        ".hero-add",
        ".about-title",
        ".about-subtitle",
        ".about-block-1-image",
        ".about-block-1-text",
        ".about-block-2-image",
        ".about-block-2-text",
        ".about-block-3-image",
        ".about-block-3-text",
        ".trailer-title", // Added for trailer section
        ".trailer-video", // Added for trailer section
        ".online-title",
        ".online-block-1-image", // Added for more robust online animations
        ".online-block-1-text", // Added for more robust online animations
        ".online-block-2-image", // Added for more robust online animations
        ".online-block-2-text", // Added for more robust online animations
        ".online-block-3-image", // Added for more robust online animations
        ".online-block-3-text", // Added for more robust online animations
        ".roadmap-title",
        ".roadmap-timeline",
        ".roadmap-item",
        ".footer-content",
      ],
      { opacity: 0, y: 50 } // Set initial y for new elements
    );

    // Override initial y for items that should animate differently
    gsap.set(".hero-logo", { scale: 0.8 });
    gsap.set(".roadmap-timeline", { scaleY: 0, y: 0 }); // timeline animates scaleY

    // --- ANIMATION TIMELINES ---
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTimeline
      .to(".hero-logo", { opacity: 1, scale: 1, duration: 1.0, y: 0 })
      .to(".hero-p2e-tag", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(".hero-title", { opacity: 1, y: 0, duration: 1.2 }, "-=0.5")
      .to(".hero-tagline", { opacity: 1, y: 0, duration: 0.8 }, "-=0.8")
      .to(
        ".hero-buttons",
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.25 },
        "-=0.5"
      )
      .to(".hero-add", { opacity: 1, y: 0, duration: 0.8 }, "-=0.8");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(".about-title", { opacity: 1, y: 0, duration: 1 })
      .to(".about-subtitle", { opacity: 1, y: 0, duration: 1 }, "-=0.7");

    // About blocks animations, setting initial x for left/right animations
    gsap.set(".about-block-1-image", { x: -50 });
    gsap.set(".about-block-1-text", { x: 50 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-block-1",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(".about-block-1-image", { opacity: 1, x: 0, duration: 1 })
      .to(".about-block-1-text", { opacity: 1, x: 0, duration: 1 }, "-=0.7");

    gsap.set(".about-block-2-image", { x: 50 });
    gsap.set(".about-block-2-text", { x: -50 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-block-2",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(".about-block-2-image", { opacity: 1, x: 0, duration: 1 })
      .to(".about-block-2-text", { opacity: 1, x: 0, duration: 1 }, "-=0.7");

    gsap.set(".about-block-3-image", { x: -50 });
    gsap.set(".about-block-3-text", { x: 50 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-block-3",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(".about-block-3-image", { opacity: 1, x: 0, duration: 1 })
      .to(".about-block-3-text", { opacity: 1, x: 0, duration: 1 }, "-=0.7");

    // --- NEW: Trailer Section Animation ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".trailer-section",
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })
      .to(".trailer-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        ".trailer-video",
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.7"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".online-section",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(".online-title", { opacity: 1, y: 0, duration: 1 });

    // --- More robust GSAP .from() animations for online features (using .to with initial y:50 for consistency) ---
    gsap.set(".online-block-1-image", { x: -50 });
    gsap.set(".online-block-1-text", { x: 50 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".online-block-1",
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })
      .to(".online-block-1-image", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        ".online-block-1-text",
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.7"
      );

    gsap.set(".online-block-2-image", { x: 50 });
    gsap.set(".online-block-2-text", { x: -50 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".online-block-2",
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })
      .to(".online-block-2-image", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        ".online-block-2-text",
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.7"
      );

    gsap.set(".online-block-3-image", { x: -50 });
    gsap.set(".online-block-3-text", { x: 50 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".online-block-3",
          start: "top 70%",
          toggleActions: "play none none none",
        },
      })
      .to(".online-block-3-image", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        ".online-block-3-text",
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.7"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".roadmap-section",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      })
      .to(".roadmap-title", { opacity: 1, y: 0, duration: 1 })
      .to(
        ".roadmap-timeline",
        { opacity: 1, scaleY: 1, duration: 1, y: 0 },
        "-=0.5"
      )
      .to(
        ".roadmap-item",
        { opacity: 1, x: 0, y: 0, duration: 0.8, stagger: 0.3 },
        "-=0.5"
      );

    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".site-footer",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out", duration: 1.2 },
    });
    footerTimeline.to(".footer-content", { opacity: 1, y: 0 });

    // --- CLEANUP ---
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#trailer", label: "Trailer" }, // Added Trailer to navigation
    { href: "#online", label: "CryptoHeist Online" },
    { href: "#community", label: "Community" },
    { href: "#market", label: "Marketplace" },
  ];

  const otherLinks = [
    { href: "https://docs.chsolanabeach-whitepaper.world/", label: "Whitepaper" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-use", label: "Terms of Use" },
  ];

  const socialLinks = [
    { href: "https://x.com/cryptoheistsb", icon: X }, // Changed to X icon and placeholder link
    { href: "#", icon: MessageCircle },
    { href: "https://www.youtube.com/watch?v=UDe0AZYnafg", icon: Youtube },
  ];

  const onlineFeatures = [
    {
      title: "True Asset Ownership",
      description:
        "Your cars, gear, and hideouts are not just in-game items; they are verifiably scarce NFTs on the Solana blockchain. If you own it in-game, you own it for real. Trade, sell, or hodl your assets in a marketplace free from central control.",
      imageSrc: "/cards.png",
      alt: "An NFT Card",
    },
    {
      title: "Player-Driven Economy",
      description:
        "Forget static vendors. In Crypto Heist, you are the economy. Run contraband, craft high-tech gear, manipulate markets, and build a financial empire that ripples across the city. Every transaction shapes the world, creating opportunities for the shrewd and pitfalls for the unwary.",
      imageSrc: "/alone.png",
      alt: "An in-game marketplace",
    },
    {
      title: "Form Your Syndicate",
      description:
        "The streets of Solana Beach are dangerous alone. Crew up with other players to form powerful syndicates. Plan and execute coordinated heists, wage war over territory, and pool your resources to dominate the criminal underworld together. Your strength lies in numbers—and loyalty.",
      imageSrc: "/syndicate.png",
      alt: "A crew of players planning a heist",
    },
  ];

  const roadmapItems = [
    {
      phase: "Phase 1: Concept and Foundation",
      timeline: "Q4 2025 – Q1 2026",
      objective:
        "Establish the project’s core framework and build community trust.",
      milestones: [
        "Whitepaper Release: Publish a detailed whitepaper outlining the project’s vision.",
        "Community Building: Launch Discord, Telegram, and X channels to engage early adopters.",
        "Testnet Alpha: Launch an alpha version on Solana’s testnet for early testing.",
        "NFT Concept Art: Reveal initial NFT designs for in-game assets.",
        "Launch Coin: Coin will be launched on Pump.fun.",
      ],
      deliverables:
        "Whitepaper, initial website, social media presence, Coin, and a public GitHub repository.",
    },
    {
      phase: "Phase 2: Development",
      timeline: "Q2 2026 – Q4 2026",
      objective: "Develop core gameplay.",
      milestones: [
        "Core Game Development: Build an open-world environment with dynamic heist missions.",
        "Implement NFT-based assets (vehicles, tools, safehouses) as SPL tokens, tradable on marketplaces.",
        "Develop a play-to-earn system where players earn $HEIST tokens through missions, staking, or PvP competitions.",
      ],
      deliverables: null,
    },
    {
      phase: "Phase 3: Mainnet Launch and Ecosystem Integration",
      timeline: "Q1 2027 – Q4 2027",
      objective:
        "Launch the full game and integrate with the broader ecosystem.",
      milestones: [
        "NFT Marketplace: Launch an in-game marketplace for trading NFT assets.",
        "Game Modes: Introduce PvP heist battles, cooperative missions, and a story-driven campaign.",
      ],
      deliverables: "Live game, NFT marketplace.",
    },
    {
      phase: "Phase 4: Expansion and Community Governance",
      timeline: "Q1 2028 – Q2 2028",
      objective: "Expand gameplay features and empower the community.",
      milestones: [
        "New Content: Add new heist missions, maps, and rare NFT drops.",
        "DAO Governance: Introduce a $HEIST token-based DAO for community-driven decisions.",
        "Analytics Dashboard: Real-time analytics for NFT rarity and staking rewards.",
        "Global Tournaments: Host global PvP tournaments with $HEIST and NFT prizes.",
      ],
      deliverables:
        "Expanded game content, mobile app, DAO framework, analytics dashboard.",
    },
    {
      phase: "Phase 5: Long-Term Growth and Innovation",
      timeline: "2028 Onward",
      objective: "Ensure sustainability and push technological boundaries.",
      milestones: [
        "AI-Driven Heists: Integrate AI to create dynamic, adaptive missions.",
        "Sustainability Focus: Optimize energy efficiency with Solana’s proof-of-stake model.",
      ],
      deliverables: "AI-enhanced gameplay.",
    },
  ];

  const buyNowLink = { href: "#buy", label: "BUY $HEIST" };
  const downloadLink = { href: "https://chsolanabeach.online/downloads/Crypto%20Heist%20(Solana%20Beach).exe", label: "DOWNLOAD NOW" };
  const trailerVideoId = "UDe0AZYnafg"; // Extracted video ID
  return (
    <main className="bg-black overflow-x-hidden">
      <div id="custom-cursor" className="hidden lg:block"></div>

      {/* ---------- HEADER ---------- */}
      <header className="site-header fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 max-w-7xl 3xl:max-w-[1920px] 4xl:max-w-[2560px]">
          <div
            className="
              flex items-center justify-between
              h-24 lg:h-28
              3xl:h-32 4xl:h-40
              px-0 lg:px-8 xl:px-16
              3xl:px-24 4xl:px-40
            "
          >
            <div className="flex items-center space-x-6 3xl:space-x-10">
              <a href="#home" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Crypto Heist Logo"
                  width={56}
                  height={56}
                  className="h-10 w-auto lg:h-12 3xl:h-16 4xl:h-20"
                />
              </a>

              <nav className="hidden lg:flex items-center space-x-6 3xl:space-x-10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-pp text-sm lg:text-base 3xl:text-lg text-gray-300 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="animated-underline absolute bottom-[-6px] left-0 w-full h-0.5 bg-white"></span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={buyNowLink.href}
                className="hidden lg:inline-block bg-primary text-white border-white border-2 font-pp font-bold px-4 py-2 lg:px-8 lg:py-3 rounded-md hover:text-gray-300 hover:border-gray-300 transition-colors duration-300 text-sm lg:text-base 3xl:px-12 3xl:py-4 3xl:text-lg 4xl:px-16 4xl:py-5"
              >
                {buyNowLink.label}
              </a>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none relative h-8 w-8"
                aria-label="Toggle menu"
              >
                <X
                  size={28}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
                <Menu
                  size={28}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`lg:hidden absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md transition-transform duration-500 ease-in-out ${
            isMenuOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center p-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-pp text-xl text-gray-200 hover:text-primary transition-colors duration-300 py-4 w-full text-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buyNowLink.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-primary text-white border-white border-2 font-pp font-bold mt-4 px-6 py-4 rounded-md hover:text-gray-300 hover:border-gray-300 transition-colors duration-300"
            >
              {buyNowLink.label}
            </a>
          </nav>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
     <section
  id="home"
  className="relative min-h-screen flex items-center bg-cover bg-center"
  style={{ backgroundImage: "url('/background.png')" }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* widened container */}
  <div className="relative container mx-auto z-10 max-w-6xl lg:max-w-7xl 3xl:max-w-[1400px] 4xl:max-w-[1800px] px-6 lg:px-12 xl:px-20 pt-16">
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="hero-logo pt-16">
        <Image
          src="/logo.png"
          alt="Crypto Heist Logo"
          width={160}
          height={160}
          className="h-60 w-auto 3xl:h-80 4xl:h-96"
        />
      </div>

      <p className="hero-p2e-tag bg-black border border-white/50 text-white font-bold tracking-widest text-lg font-pp px-3 py-1 rounded mb-4 3xl:text-xl 4xl:text-2xl">
        PLAY TO EARN
      </p>

      <img
        className="hero-title w-[100px] md:w-[200px] lg:w-[330px] xl:w-[430px] 3xl:w-[530px] 4xl:w-[700px] mx-auto md:mx-0"
        src="/title.png"
        alt="Crypto Heist Title"
      />

      <p className="hero-tagline font-pp text-lg md:text-xl text-gray-300 mt-4 mb-8 tracking-wider 3xl:text-3xl 4xl:text-4xl">
        <span className="text-yellow-500">1 </span>TOKEN,{" "}
        <span className="text-yellow-500">1</span> GAME, EPIC{" "}
        <span className="text-yellow-500">HEISTS</span>
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href={buyNowLink.href}
          className="hero-buttons w-full sm:w-auto bg-primary text-white border-white border-2 font-pp font-bold px-8 py-3 rounded-md hover:text-gray-300 hover:border-gray-300 transition-colors duration-300 text-base text-center 3xl:px-12 3xl:py-5 3xl:text-lg 4xl:px-16 4xl:py-6 4xl:text-2xl"
        >
          {buyNowLink.label}
        </a>
        <a
          href={downloadLink.href}
          className="hero-buttons w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white border-2 font-pp font-bold px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300 text-base text-center 3xl:px-12 3xl:py-5 3xl:text-lg 4xl:px-16 4xl:py-6 4xl:text-2xl"
        >
          {downloadLink.label}
        </a>
      </div>

      <div className="hero-add w-full flex flex-col md:justify-start justify-center pb-12">
        <p className="font-pp text-gray-400 mt-4 gap-4 3xl:text-lg 4xl:text-xl">
          AVAILABLE ON <span className="text-yellow-500">WINDOWS</span>
        </p>
        <p className="md:w-fit w-full bg-black/10 border border-white/50 text-white tracking-widest text-md mt-4 font-pp px-3 py-1 rounded mb-4 3xl:text-lg">
          CA: COMING SOON
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="bg-gradient-to-b from-[#1e151c] to-black">
        <section
          id="about"
          className="about-section py-20 md:py-32 px-4 3xl:px-24"
        >
          <div className="container mx-auto px-4 max-w-7xl 3xl:max-w-[1920px] 4xl:max-w-[2560px]">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="about-title font-dd text-4xl md:text-6xl 3xl:text-7xl font-bold text-white uppercase">
                About Crypto Heist
              </h2>
              <p className="about-subtitle font-pp text-lg md:text-2xl text-gray-400 mt-2 3xl:text-3xl">
                Welcome to Solana Beach
              </p>
            </div>

            <div className="space-y-20 md:space-y-32">
              <div className="about-block-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="about-block-1-image lg:w-1/2">
                  <Image
                    src="/about1.png"
                    alt="Digital Underworld"
                    width={1920}
                    height={1080}
                    className="rounded-lg object-cover 3xl:scale-105"
                  />
                </div>
                <div className="about-block-1-text lg:w-1/2">
                  <h3 className="font-dd text-2xl md:text-3xl 3xl:text-4xl text-white font-bold mb-4">
                    Forge Your Legacy.
                  </h3>
                  <p className="font-pp text-sm md:text-lg 3xl:text-xl text-gray-300 leading-relaxed">
                    Crypto Heist drops you into the neon-drenched streets of
                    Solana Beach, a sprawling, rain-slicked metropolis where
                    fortunes are made and lost in the flicker of a transaction.
                    This world runs on a decentralized pulse, where every
                    customized ride and piece of high-tech gear is a unique
                    digital asset, secured on the blockchain and truly under
                    your control.
                  </p>
                </div>
              </div>

              <div className="about-block-2 flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                <div className="about-block-2-image lg:w-1/2">
                  <Image
                    src="/about2.jpg"
                    alt="Team up or go lone wolf"
                    width={1920}
                    height={1080}
                    className="rounded-lg object-cover 3xl:scale-105"
                  />
                </div>
                <div className="about-block-2-text lg:w-1/2">
                  <h3 className="font-dd text-2xl md:text-3xl 3xl:text-4xl text-white font-bold mb-4">
                    Team Up or Go Lonewolf.
                  </h3>
                  <p className="font-pp text-sm md:text-lg 3xl:text-xl text-gray-300 leading-relaxed">
                    Assemble your crew or operate as a lone wolf, planning
                    high-stakes heists against monolithic corporations and rival
                    syndicates. Success isn't just about firepower; it's about
                    strategy, stealth, and outsmarting the system. Your choices
                    matter, and your reputation precedes you.
                  </p>
                </div>
              </div>

              <div className="about-block-3 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="about-block-3-image lg:w-1/2">
                  <Image
                    src="/about1.png"
                    alt="A living city"
                    width={1920}
                    height={1080}
                    className="rounded-lg object-cover 3xl:scale-105"
                  />
                </div>
                <div className="about-block-3-text lg:w-1/2">
                  <h3 className="font-dd text-2xl md:text-3xl 3xl:text-4xl text-white font-bold mb-4">
                    A City That Breathes.
                  </h3>
                  <p className="font-pp text-sm md:text-lg 3xl:text-xl text-gray-300 leading-relaxed">
                    Explore a vast open world filled with opportunities, from
                    back-alley deals to high-tech corporate espionage. Every
                    district has its own story, its own risks, and its own
                    rewards. In Solana Beach, AI-driven NPCs adapt to your
                    actions, creating a dynamic and immersive world where every
                    character remembers your choices, forging alliances or
                    sparking rivalries that ripple across the city. Whatever you
                    do—whether a whispered deal or a daring betrayal—carries
                    consequences that shape the streets, the stories, and your
                    legacy. Only the boldest will claim the ultimate prize and
                    write their name into the code of the city itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- TRAILER SECTION ---------- */}
        <section
          id="trailer"
          className="trailer-section py-20 md:py-32 px-4 3xl:px-24 bg-gradient-to-t from-black to-[#1e151c]"
        >
          <div className="container mx-auto px-4 max-w-7xl 3xl:max-w-[1920px] 4xl:max-w-[2560px]">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="trailer-title font-dd text-4xl md:text-6xl 3xl:text-7xl font-bold text-white uppercase">
                Official Game Trailer
              </h2>
              <p className="font-pp text-lg md:text-2xl text-gray-400 mt-2 3xl:text-3xl">
                Get a glimpse of the action
              </p>
            </div>

            <div className="trailer-video relative w-full overflow-hidden rounded-lg shadow-lg aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${trailerVideoId}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* ---------- ONLINE / FEATURES ---------- */}
        <section
          id="online"
          className="online-section py-20 md:py-32 px-4 3xl:px-24"
        >
          <div className="container mx-auto px-4 max-w-7xl 3xl:max-w-[1920px] 4xl:max-w-[2560px]">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="online-title font-dd text-4xl md:text-6xl 3xl:text-7xl font-bold text-white uppercase">
                Crypto Heist Online
              </h2>
            </div>

            <div className="space-y-20 md:space-y-32">
              {onlineFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`online-block-${
                    index + 1
                  } flex flex-col items-center gap-8 lg:gap-16 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`online-block-${index + 1}-image lg:w-1/2`}>
                    <Image
                      src={feature.imageSrc}
                      alt={feature.alt}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover 3xl:scale-105"
                    />
                  </div>
                  <div className={`online-block-${index + 1}-text lg:w-1/2`}>
                    <h3 className="font-dd text-2xl md:text-3xl 3xl:text-4xl text-white font-bold mb-4">
                      {feature.title}
                    </h3>
                    <p className="font-pp text-sm md:text-lg 3xl:text-xl text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------- ROADMAP ---------- */}
            <div className="roadmap-section text-center mt-20 md:mt-32">
              <h2 className="roadmap-title font-dd text-3xl md:text-4xl 3xl:text-5xl font-bold text-white uppercase mb-12">
                Roadmap
              </h2>
              <div className="relative max-w-2xl mx-auto">
                <div className="roadmap-timeline absolute top-0 left-1/2 w-0.5 h-full bg-white/20 transform -translate-x-1/2 scale-y-0 origin-top z-0"></div>
                <div className="relative space-y-8 md:space-y-16">
                  {roadmapItems.map((item, index) => (
                    <div
                      key={item.phase}
                      className="roadmap-item relative z-30"
                    >
                      <div
                        className={`flex items-center ${
                          index % 2 === 0
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                        }`}
                      >
                        <div className="hidden md:block w-1/2"></div>
                        <div
                          className={`w-full md:w-1/2 ${
                            index % 2 === 0
                              ? "md:pl-8 lg:pl-12"
                              : "md:pr-8 lg:pr-12"
                          }`}
                        >
                          <div className="bg-[#141113] border border-white/10 p-6 rounded-lg text-left">
                            {/* Phase */}
                            <p className="font-pp text-sm text-primary tracking-widest mb-1">
                              {item.phase}
                            </p>

                            {/* Timeline */}
                            <h3 className="font-dd text-xl text-white mb-2">
                              {item.timeline}
                            </h3>

                            {/* Objective */}
                            <p className="text-gray-300 text-sm mb-3">
                              {item.objective}
                            </p>

                            {/* Milestones */}
                            {item.milestones && (
                              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-3">
                                {item.milestones.map((milestone, i) => (
                                  <li key={i}>{milestone}</li>
                                ))}
                              </ul>
                            )}

                            {/* Deliverables */}
                            {item.deliverables && (
                              <p className="text-gray-400 text-xs">
                                <strong>Deliverables:</strong>{" "}
                                {item.deliverables}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- RATING / BADGE ---------- */}
        <div className="flex justify-center mt-16 md:my-24 w-full px-4">
          <div className="flex justify-center p-4 border-white border-2 w-fit rounded-2xl gap-4">
            <Image
              src="/RP.svg"
              alt="ESRB Rating: Rating Pending"
              width={80}
              height={120}
              className="h-28 w-auto 3xl:h-36 4xl:h-44"
            />
            <p className="font-pp text-sm md:text-base 3xl:text-lg">
              Strong Language <br />
              Violence <br />
              Mature Humor <br />
              In-Game Purchases <br />
              Users Interact
            </p>
          </div>
        </div>

        {/* ---------- FOOTER ---------- */}
        <footer className="site-footer border-t border-white/10 py-12 md:py-20 px-4 3xl:px-24">
          <div className="footer-content container mx-auto px-4 max-w-7xl 3xl:max-w-[1920px] 4xl:max-w-[2560px]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-3 lg:col-span-1">
                <a href="#home" className="inline-block">
                  <Image
                    src="/logo.png"
                    alt="Crypto Heist Logo"
                    width={120}
                    height={120}
                    className="h-20 w-auto 3xl:h-28 4xl:h-32"
                  />
                </a>
              </div>

              <div className="col-span-1">
                <h4 className="font-dd text-lg text-white mb-4">QUICK LINKS</h4>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-pp text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <h4 className="font-dd text-lg text-white mb-4">OTHER</h4>
                <ul className="space-y-3">
                  {otherLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-pp text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <h4 className="font-dd text-lg text-white mb-4">
                  SOCIAL MEDIA
                </h4>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 mb-8">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <link.icon size={24} />
                      </a>
                    ))}
                  </div>
                  <img src="/solana.svg" alt="Solana Logo" className="w-36" />
                </div>
              </div>
            </div>

            <div className="text-center text-gray-500 font-pp text-sm mt-16 border-t border-white/10 pt-8">
              &copy; {new Date().getFullYear()} Crypto Heist. All rights
              reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
