import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-couple.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  const weddingDate = new Date(2025, 10, 3, 11, 0, 0); // November 3, 2025 at 11:00 AM
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hearts = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background" />
      </div>

      {/* Floating Hearts */}
      {hearts.map((i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          <Heart className="w-8 h-8 fill-current" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            className="flex items-center justify-center gap-4 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground">
              Deepankar
            </h1>
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary animate-heart-beat" />
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground">
              Rashmi
            </h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-primary-foreground/90 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Our Forever Begins...
          </motion.p>

          {/* Countdown */}
          <motion.div
            className="flex justify-center gap-4 md:gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-card/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-romantic min-w-[80px] md:min-w-[100px]"
              >
                <div className="text-3xl md:text-5xl font-bold text-gradient-romantic">
                  {value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground capitalize mt-2">
                  {unit}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-8"
          >
            <Button
              variant="hero"
              size="lg"
              className="text-lg"
              onClick={() => document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Details
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
