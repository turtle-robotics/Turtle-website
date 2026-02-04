import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = (targetValue, duration = 2) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    gsap.to(
      {},
      {
        duration,
        onUpdate: function () {
          const progress = this.progress();
          const currentCount = Math.floor(targetValue * progress);
          setCount(currentCount);
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [targetValue, duration]);

  return { count, counterRef };
};
