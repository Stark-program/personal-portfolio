import { motion } from "framer-motion";

const Name = (props: Props) => {
  const name = props.name.split("");
  return (
    <h1 className="text-[80px] font-Calistoga md:text-[130px] ">
      {name.map((letter, index) => {
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
    </h1>
  );
};

interface Props {
  name: string;
}

export default Name;
