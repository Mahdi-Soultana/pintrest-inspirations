import { motion, useSpring } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { useX, useY } from './hooks';
function Handle({
  setActive,
  active,
  className,
}: {
  className?: string;

  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  const [hover, setHover] = useState(false);
  const { y } = useY();
  const ySpring = useSpring(y, { stiffness: 100, damping: 10, duration: 2 });
  const { x: positionX } = useX();
  const xSpring = useSpring(positionX, { duration: 1 });
  useEffect(() => {
    ySpring.set(active ? y - 60 : y);
    xSpring.set(positionX - 20);
  }, [y, positionX]);
  return (
    <>
      <motion.span
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => setActive((s) => !s)}
        className={` handle block w-12 h-12 rounded-full ${
          active ? 'bg-white' : 'bg-black'
        } border-l-2 border-r-2  border-t-2  p-1 border-r-blue-600  border-l-red-400  border-b-blue-600  border-t-red-500  border-b-2  absolute   z-[100]  `}
        style={{
          y: ySpring,
          x: positionX - 25,
        }}
      >
        <motion.span
          style={{ y: '-50%' }}
          animate={{
            x: hover && !active ? '0%' : !active ? '100%' : '0%',
            opacity: hover && !active ? 1 : !active ? 0 : 1,
            scale:
              hover && !active
                ? [0, 1.5, 1]
                : !active
                ? [1, 1.5, 0]
                : [0, 1.5, 0.7],
            transition: {
              type: 'spring',
              stiffness: 200,
              bounce: 0.2,
            },
          }}
          className="absolute -left-1/2 text-white text-2xl top-1/2 -translate-y-1/2"
        >
          <MdArrowBackIosNew />
        </motion.span>
        <motion.span
          style={{ y: '-50%' }}
          animate={{
            x: hover && !active ? '0%' : !active ? '100%' : '0%',
            opacity: hover && !active ? 1 : !active ? 0 : 1,
            scale:
              hover && !active
                ? [0, 1.5, 1]
                : !active
                ? [1, 1.5, 0]
                : [0, 1.5, 0.7],
            transition: {
              type: 'spring',
              stiffness: 200,
              bounce: 0.2,
            },
          }}
          className="absolute -left-1/2 text-white text-2xl top-1/2 -translate-y-1/2"
        >
          <MdArrowBackIosNew />
        </motion.span>
        <motion.span
          style={{ y: '-50%' }}
          animate={{
            x: hover && !active ? '0%' : !active ? '-100%' : '0%',
            opacity: hover && !active ? 1 : !active ? 0 : 1,
            scale:
              hover && !active
                ? [0, 1.5, 1]
                : !active
                ? [1, 1.5, 0]
                : [0, 1.5, 0.7],
            transition: {
              type: 'spring',
              stiffness: 200,
              bounce: 0.2,
            },
          }}
          className="absolute -right-1/2 text-white text-2xl top-1/2 -translate-y-1/2"
        >
          <MdArrowForwardIos />
        </motion.span>
      </motion.span>
    </>
  );
}

export default Handle;
