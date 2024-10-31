import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "frontend",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "backend",
        1500,
        "DevOps",
        1500,
        "Enroll Now",
        1500,
      ]}
      speed={50}
      className="text-[3rem] mb-7 md:text-[3rem] text-[#f4f6f5] font-bold  uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
