import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const EventDetails = () => {
  const openMap = () => {
    window.open("https://maps.google.com", "_blank");
  };

  return (
    <section id="details" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient-romantic mb-4">
            Event Details
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us as we celebrate our forever
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Venue Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-card rounded-2xl p-8 shadow-romantic border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Venue</h3>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-medium text-foreground">
                The Grand Celebration Hall
              </p>
              <p className="text-muted-foreground">
                123 Love Lane, Romance City, RC 12345
              </p>
              <Button onClick={openMap} variant="hero" className="mt-4">
                View on Map
              </Button>
            </div>
          </motion.div>

          {/* Date & Time Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-card rounded-2xl p-8 shadow-romantic border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-accent/10">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Date & Time</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <p className="text-lg text-foreground">December 15, 2025</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <p className="text-lg text-foreground">6:00 PM onwards</p>
              </div>
            </div>
          </motion.div>

          {/* Dress Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-card rounded-2xl p-8 shadow-romantic border border-border md:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-muted/50">
                <Sparkles className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Dress Code</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Evening Elegance - Join us in your finest attire to celebrate this magical evening.
              Think cocktail dresses, elegant suits, and a touch of romance in your style.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
