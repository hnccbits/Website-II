"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Cards from "../Cards";
import card from "@/public/constants/card";
import TracingBeam from "../Tr-Beam/tracing-beam";
import OpacityText from "../opacity/page";

export default function HorizontalScroll() {
  // console.log(data);
  return (
    <div className="bg-black">
      <HorizontalScrollCarousel card={card} />
    </div>
  );
}

const HorizontalScrollCarousel = ({ card }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <TracingBeam className={"px-6"}>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 w-auto flex h-[100vh] items-center overflow-hidden">
          {/* <div className="w-full pb-10"> */}
          {/* <OpacityText
              classNameForContainer={"font-squid text-3xl"}
              start={"top 80%"}
              end={"top 60%"}
              text={"Our Events"}
            /> */}
          {/* </div> */}
          <motion.div style={{ x }} className=" flex gap-4 cursor-pointer">
            {card.map((card) => {
              return <Cards data={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </TracingBeam>
  );
};
