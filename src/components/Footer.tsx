import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.p
          className="text-center text-sm text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {currentYear} Tubagus Panji Anugrah
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
