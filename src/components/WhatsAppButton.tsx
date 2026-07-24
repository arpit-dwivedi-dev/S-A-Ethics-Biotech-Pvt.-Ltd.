import { motion, useReducedMotion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../data/content';

export default function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: shouldReduceMotion ? 'tween' : 'spring' }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20"
    >
      <FaWhatsapp size={28} aria-hidden="true" />
    </motion.a>
  );
}
