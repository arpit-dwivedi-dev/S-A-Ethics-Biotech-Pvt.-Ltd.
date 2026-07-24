import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const spring = { stiffness: 200, damping: 15, mass: 0.4 };

export default function MagneticButton({ children, className, to, href, target, rel, onClick, type }: Props) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const handleMouseMove = (e: MouseEvent) => {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const style = { x: springX, y: springY };

  if (to) {
    return (
      <motion.div style={style} className="inline-block">
        <Link
          ref={ref as never}
          to={to}
          className={className}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div style={style} className="inline-block">
        <a
          ref={ref as never}
          href={href}
          target={target}
          rel={rel}
          className={className}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div style={style} className="inline-block">
      <button
        ref={ref as never}
        type={type ?? 'button'}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {children}
      </button>
    </motion.div>
  );
}
