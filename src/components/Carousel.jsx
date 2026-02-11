import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FiCalendar,
  FiCode,
  FiUsers,
  FiTool,
  FiBookOpen,
} from "react-icons/fi";

import "./Carousel.css";

const PROGRAM_ITEMS = [
  {
    title: "Week 1-3",
    description:
      "Foundational skills: Introduction to robotics, programming basics, and safety protocols.",
    details:
      "Learn Python programming fundamentals, Arduino basics, electrical safety, and team collaboration. Hands-on workshops with basic sensors and actuators.",
    id: 1,
    icon: <FiBookOpen className="carousel-icon" />,
  },
  {
    title: "Week 4-6",
    description:
      "Intermediate modules: Electronics, soldering, and solid modeling in Solidworks.",
    details:
      "Master circuit design, component soldering, PCB layout, and 3D modeling. Build functional electronic circuits and create mechanical designs.",
    id: 2,
    icon: <FiTool className="carousel-icon" />,
  },
  {
    title: "Week 7-8",
    description:
      "Project initiation: Students form teams and begin planning their capstone projects.",
    details:
      "Form interdisciplinary teams, brainstorm project ideas, create project proposals, and develop timelines. Learn project management and documentation.",
    id: 3,
    icon: <FiUsers className="carousel-icon" />,
  },
  {
    title: "Week 9-10",
    description:
      "Project development: Hands-on building and coding of the final robotics project.",
    details:
      "Implement full robotics systems, integrate hardware and software, conduct testing and optimization, and prepare for final demonstrations.",
    id: 4,
    icon: <FiCode className="carousel-icon" />,
  },
  {
    title: "Ongoing",
    description:
      "Mentorship and career guidance from faculty and industry partners.",
    details:
      "Regular mentorship sessions, industry networking events, career workshops, and ongoing support for continued learning and professional development.",
    id: 5,
    icon: <FiCalendar className="carousel-icon" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = PROGRAM_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: "50%" }),
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? "round" : ""}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={`carousel-item-header ${round ? "round" : ""}`}>
                <span className="carousel-icon-container">{item.icon}</span>
              </div>
              <div className="carousel-item-content">
                <div className="carousel-item-title">{item.title}</div>
                <p className="carousel-item-description">{item.description}</p>
                <p className="carousel-item-details">{item.details}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${
                currentIndex % items.length === index ? "active" : "inactive"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
