import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

//Formats the number for later use.
// Sets the number to an array of strings each containing a single digit.
function formatForDisplay(number: number) {
  return number.toFixed(0).split('');
}
function NumberColumn({ digit }: { digit: number }) {
  const [position, setPosition] = useState(0);
  const columnContainer = useRef<HTMLDivElement>(null);

  const setColumnToNumber = (number: number) => {
    setPosition(columnContainer.current?.clientHeight! * number);
  };

  useEffect(() => setColumnToNumber(digit), [digit]);

  return (
    <div className="relative" ref={columnContainer}>
      <motion.div
        animate={{ y: position }}
        className=" h-[1000%] bottom-[0] absolute"
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={num} className="h-[10%]">
            <span>{num}</span>
          </div>
        ))}
      </motion.div>
      <span className="invisible">0</span>
    </div>
  );
}

export default function AnimatingNumber({ value }: { value: number }) {
  const numArray = formatForDisplay(value);
  return (
    <div className="h-full mx-auto flex relative overflow-hidden justify-center">
      {numArray.map((num, index) => (
        <NumberColumn digit={parseInt(num)} key={index} />
      ))}
    </div>
  );
}
