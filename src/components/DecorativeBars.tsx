import { motion } from "framer-motion";

interface Bar {
  width: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color: "orange" | "navy";
  delay: number;
  duration: number;
}

const bars: Bar[] = [
  { width: "150px", left: "5%", top: "15%", color: "orange", delay: 0, duration: 8 },
  { width: "220px", left: "3%", top: "20%", color: "orange", delay: 0.1, duration: 10 },
  { width: "120px", left: "2%", top: "28%", color: "navy", delay: 0.2, duration: 9 },
  { width: "190px", left: "4%", top: "33%", color: "orange", delay: 0.3, duration: 11 },
  { width: "95px", left: "2%", top: "40%", color: "orange", delay: 0.4, duration: 7 },
  
  { width: "180px", right: "3%", bottom: "8%", color: "orange", delay: 0.5, duration: 10 },
  { width: "200px", right: "5%", bottom: "13%", color: "orange", delay: 0.6, duration: 9 },
  { width: "130px", right: "6%", bottom: "18%", color: "navy", delay: 0.7, duration: 11 },
  { width: "170px", right: "4%", bottom: "23%", color: "orange", delay: 0.8, duration: 8 },
];

export function DecorativeBars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: bar.delay },
            x: { duration: 0.6, delay: bar.delay },
            y: { 
              duration: bar.duration, 
              delay: bar.delay + 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className={`absolute h-2 rounded-full ${
            bar.color === "orange" 
              ? "bg-accent" 
              : "bg-primary"
          }`}
          style={{
            width: bar.width,
            left: bar.left,
            right: bar.right,
            top: bar.top,
            bottom: bar.bottom,
          }}
        />
      ))}
    </div>
  );
}
