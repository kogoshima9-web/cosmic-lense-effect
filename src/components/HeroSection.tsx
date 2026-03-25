import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import BlurText from "./BlurText";
import HeroVideo from "./HeroVideo";
import Navbar from "./Navbar";

const blurInVariants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
  visible: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const partners = ["NASA", "SpaceX", "ESA", "Blue Origin", "JAXA", "Roscosmos"];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <HeroVideo />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="liquid-glass rounded-full flex items-center gap-2 px-1.5 py-1 mb-8">
          <span className="bg-foreground text-primary-foreground text-xs font-body font-semibold rounded-full px-3 py-1">
            New
          </span>
          <span className="text-foreground text-sm font-body font-light pr-3">
            Maiden Crewed Voyage to Mars Arrives 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.8] tracking-[-4px] max-w-2xl font-heading italic text-foreground mb-6">
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            staggerDelay={0.1}
            stepDuration={0.35}
          />
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-sm md:text-base font-body font-light text-foreground max-w-2xl leading-tight mb-10"
          variants={blurInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          Pioneering humanity's journey beyond Earth — from orbital stations to interplanetary voyages, we make space accessible to all.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-6"
          variants={blurInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <button className="liquid-glass-strong rounded-full flex items-center gap-2 px-7 py-3 text-foreground font-body font-medium text-sm">
            Start Your Voyage
            <ArrowUpRight size={16} />
          </button>
          <button className="flex items-center gap-2 text-foreground font-body font-medium text-sm">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-primary-foreground">
              <Play size={14} fill="currentColor" />
            </span>
            View Liftoff
          </button>
        </motion.div>
      </div>

      {/* Partners Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-10 py-6 px-6">
        {partners.map((partner) => (
          <span
            key={partner}
            className="text-foreground/40 text-xs font-body font-medium tracking-widest uppercase"
          >
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
