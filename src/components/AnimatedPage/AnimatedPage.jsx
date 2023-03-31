import { motion } from "framer-motion";

import React from "react";

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.1, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
