import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function formatForDisplay(number: number) {
  console.log(number.toFixed(0).split("").reverse());
  return number.toFixed(0).split("").reverse();
}
function NumberColumn({ digit }: { digit: number }) {
  const [position, setPosition] = useState(0);
  const columnContainer = useRef<HTMLDivElement>(null);

  const setColumnToNumber = (number: number) => {
    setPosition(columnContainer.current?.clientHeight! * number);
  };

  useEffect(() => setColumnToNumber(digit), [digit]);

  return (
    <div className='relative' ref={columnContainer}>
      <motion.div
        animate={{ y: position }}
        className=' h-[1000%] bottom-0 absolute'
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={num} className='h-[10%]'>
            <span>{num}</span>
          </div>
        ))}
      </motion.div>
      <span className='invisible'>0</span>
    </div>
  );
}

export default function AnimatingNumber({ value }: { value: number }) {
  const numArray = formatForDisplay(value);
  return (
    <div className='h-full mx-auto flex flex-row-reverse relative overflow-hidden'>
      {numArray.map((num, index) => (
        <NumberColumn digit={parseInt(num)} key={index} />
      ))}
    </div>
  );
}
