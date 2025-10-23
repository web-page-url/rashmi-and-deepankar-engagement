import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "",
    message: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);

    toast({
      title: "You're Part of Our Love Story! 💖",
      description: "We can't wait to celebrate with you!",
      duration: 5000,
    });

    setTimeout(() => {
      setShowConfetti(false);
      setFormData({ name: "", email: "", attendance: "", guests: "", message: "" });
    }, 3000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: Math.random() * 360,
              }}
              animate={{
                y: window.innerHeight + 20,
                rotate: Math.random() * 360 + 360,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                ease: "linear",
              }}
            >
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </motion.div>
          ))}
        </div>
      )}

      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient-sunset mb-4">
            Join Our Celebration
          </h2>
          <p className="text-lg text-muted-foreground">
            Your presence would make our day even more special
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 shadow-romantic border border-border space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-3">
            <Label>Will you be joining us? *</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              required
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer">
                  Yes! Can't wait to celebrate! 💖
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer">
                  Unfortunately, I can't make it
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Special Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share your wishes or any dietary requirements..."
              className="focus:ring-primary focus:border-primary min-h-[100px]"
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
            Seal Our Love! 💖
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVP;
