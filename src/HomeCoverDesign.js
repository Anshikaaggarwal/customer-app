import React, { useState } from "react";

import Home from './components/Home.js'
import Footer from './components/Footer.js'

import {
  FaShoppingCart,
  FaApple,
  FaBreadSlice,
  FaFish,
  FaTshirt,
  FaShoePrints,
  FaUtensils,
  FaSoap,
  FaLaptop,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HomeCoverDesign = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
      color: "#fff",
      padding: "20px",
      borderRadius: "8px",
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden", // To hide the icons when they move out of the screen
    },
    hamburger: {
      position: "absolute",
      top: "20px",
      left: "20px",
      fontSize: "40px",
      cursor: "pointer",
      color: "#fff",
      zIndex: 20, // Ensure it's on top of other elements
    },
    fullScreenMenu: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      color: "#000",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9, // Ensure it's below the hamburger icon
    },
    closeIcon: {
      position: "absolute",
      top: "20px",
      right: "20px",
      fontSize: "40px",
      cursor: "pointer",
    },
    menuItem: {
      fontSize: "2em",
      margin: "20px 0",
      cursor: "pointer",
    },
    textSection: {
      textAlign: "center",
      marginBottom: "10px",
    },
    heading: {
      fontSize: "3em",
      marginBottom: "5px",
    },
    paragraph: {
      fontSize: "1.2em",
      marginBottom: "5px",
    },
    iconSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    iconWrapper: {
      width: "50px",
      height: "50px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      fontSize: "40px",
    },
    apple: {
      color: "#A2AAAD",
    },
    bread: {
      color: "#FFA500",
    },
    fish: {
      color: "#1E90FF",
    },
    tshirt: {
      color: "#FF6347",
    },
    shoeprints: {
      color: "#4682B4",
    },
    utensils: {
      color: "#FFD700",
    },
    soap: {
      color: "#32CD32",
    },
    laptop: {
      color: "#0000FF",
    },
  };

  const iconVariants = {
    animate: {
      x: [0, 1000], // Move from left to right
      transition: {
        x: {
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: "loop", // Loop the animation
          duration: 10, // Duration for one full loop (adjust as needed)
          ease: "linear", // Linear movement for a constant speed
        },
      },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const icons = [
    { component: FaApple, style: styles.apple, link: "#" },
    { component: FaBreadSlice, style: styles.bread, link: "#" },
    { component: FaFish, style: styles.fish, link: "#" },
    { component: FaTshirt, style: styles.tshirt, link: "#" },
    { component: FaShoePrints, style: styles.shoeprints, link: "#" },
    { component: FaUtensils, style: styles.utensils, link: "#" },
    { component: FaSoap, style: styles.soap, link: "#" },
    { component: FaLaptop, style: styles.laptop, link: "#" },
    { component: FaShoppingCart, style: styles.laptop, link: "#" },
  ];

  return (
    <div style={styles.container}>
      <FaBars style={styles.hamburger} onClick={toggleMenu} />
      {menuOpen && (
        <motion.div
          style={styles.fullScreenMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaTimes style={styles.closeIcon} onClick={toggleMenu} />
          <a
            href="/"
            style={{
              ...styles.menuItem,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            HOME
          </a>
{/* spread operator (...). The spread operator is useful when you want to apply a base style and then override or add additional styles.
           */}

          {/* <div style={styles.menuItem}>VIRTUAL TRY-ON</div> */}
          <a
            href="/tryon"
            style={{
              ...styles.menuItem,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            VIRTUAL TRY ON
          </a>


          <a
            href="/order-list"
            style={{
              ...styles.menuItem,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            CART
          </a>
          
          <a
            href="/order-history"
            style={{
              ...styles.menuItem,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            ORDER HISTORY
          </a>
        </motion.div>
      )}
      <motion.div
        style={styles.textSection}
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h1 style={styles.heading} variants={textVariants}>
          You don’t need to reinvent the wheel.
        </motion.h1>
        <motion.p style={styles.paragraph} variants={textVariants}>
          We are on a mission to transform the retail stores.
        </motion.p>
      </motion.div>
      <div style={styles.iconSection}>
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <motion.a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconWrapper}
              custom={index}
              animate="animate"
              variants={iconVariants}
            >
              <IconComponent style={{ ...styles.icon, ...icon.style }} />
            </motion.a>
          );
        })}
      </div>

      <Home/>
      <Footer/>

    </div>
  );
};


export default HomeCoverDesign;

export default HomeCoverDesign;

