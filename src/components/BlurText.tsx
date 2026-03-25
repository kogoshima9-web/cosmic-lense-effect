import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  stepDuration?: number;
}

const BlurText = ({ text, className = "", staggerDelay = 0.1, stepDuration = 0.35 }: BlurTextProps) => {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: stepDuration * 2,
            delay: i * staggerDelay,
            ease: "easeOut",
            opacity: {
              duration: stepDuration * 2,
              times: [0, 0.5, 1],
            },
            filter: {
              duration: stepDuration * 2,
              times: [0, 0.5, 1],
            },
            y: {
              duration: stepDuration * 2,
              times: [0, 0.5, 1],
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
