import { motion, VariantLabels, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Name = (props: Props) => {
  const [hover, setHover] = useState(false);

  const name = props.name.split("");
  const controls = useAnimationControls();

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
      {name.map((letter, index) => {
        console.log(letter);
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
  name: string;
}

export default Name;
