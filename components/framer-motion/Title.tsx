import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Title = (props: Props) => {
  const controls = useAnimationControls();
  const [hover, setHover] = useState(false);

  let title = props.title.split("");

  const rubberTransition = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setHover(true);
  };

  return (
    <h4 className="text-[30px] font-Calistoga md:text-[40px] ">
      {title.map((letter, index) => {
        return (
          <motion.span
            key={index}
            className="inline-block"
            animate={controls}
            onMouseOver={() => {
              if (!hover) {
                rubberTransition();
              }
            }}
            onAnimationComplete={() => {
              setHover(false);
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </h4>
  );
};

interface Props {
  title: string;
}

export default Title;
