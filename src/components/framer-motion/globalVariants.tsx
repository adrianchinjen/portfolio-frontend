// Parent container animation: stagger children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between children
      when: 'beforeChildren'
    }
  }
};

// Left content animation: slide in from the left
export const leftVariants = {
  hidden: { opacity: 0, x: -200 }, // Start off-screen to the left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.3 }
  }
};

// Right content animation: slide in from the right
export const rightVariants = {
  hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.3 }
  }
};

// Center content animation: fade in from the center
export const centerVariants = {
  hidden: { opacity: 0 }, // Start smaller and invisible
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 }
  }
};

export const imageVariants = {
  hidden: { clipPath: 'inset(0 0% 0 100%)' }, // Initially hide the left side of the image
  visible: {
    clipPath: 'inset(0 0% 0 0%)', // Gradually reveal the left side of the image
    transition: { duration: 2, ease: 'easeOut' }
  }
};

// Top content animation: slide in from the left
export const topVariants = {
  hidden: { opacity: 0, y: -200 }, // Start off-screen to the left
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.3 }
  }
};

// bottom content animation: slide in from the right
export const bottomVariants = {
  hidden: { opacity: 0, y: 200 }, // Start off-screen to the right
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.3 }
  }
};
