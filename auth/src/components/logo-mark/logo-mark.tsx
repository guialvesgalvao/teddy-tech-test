import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import TeddyLogo from '../../assets/image.png';

interface ILogoMarkProps {
  className?: string;
  isPulsing?: boolean;
}

export function LogoMark(props: Readonly<ILogoMarkProps>) {
  const { className, isPulsing = false } = props;

  if (isPulsing) {
    return (
      <motion.div
        className={cn("text-primary flex items-center gap-2 mb-12 pb-12", className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: [0, 1] }}
      >
        <img  alt="Teddy Logo" src={TeddyLogo}/>
      </motion.div>
    );
  }

  return (
    <img alt="Teddy Logo" src={TeddyLogo}/>
  );
}