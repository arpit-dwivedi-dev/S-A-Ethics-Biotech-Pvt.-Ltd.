import { motion, useReducedMotion } from 'motion/react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  delay?: number;
};

export default function RevealImage({ src, alt, className, wrapperClassName, delay = 0 }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden ${wrapperClassName ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={shouldReduceMotion ? undefined : { clipPath: 'inset(0 0 100% 0)', scale: 1.15 }}
        animate={shouldReduceMotion ? undefined : { clipPath: 'inset(0 0 0% 0)', scale: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
