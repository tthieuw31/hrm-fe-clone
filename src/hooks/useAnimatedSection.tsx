import React, { useEffect, useRef, useState } from 'react';

interface Props {
  className: string;
  children: any;
}

const AnimatedSection: React.FC<Props> = ({ className, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current as Element);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? 'slide-in-left' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
