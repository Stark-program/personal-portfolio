import { motion } from "framer-motion";

const Title = (props: Props) => {
  let title = props.title.split("");
  return (
    <h4 className="text-[30px] font-Calistoga md:text-[40px] ">
      {title.map((letter, index) => {
        return (
          <motion.span
            key={index}
            className="inline-block"
            whileHover={{ scale: 1.1 }}
          >
            {letter}
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
