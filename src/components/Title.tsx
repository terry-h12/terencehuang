import { useEffect, useState } from 'react';

const Title = ({ text, delay }: { text: string; delay: number }) => {
  const [currText, setCurrText] = useState<string>('');
  const [currIndex, setCurrIndex] = useState<number>(0);
  const cursor = '>';
  const [animationFinished, setAnimationFinished] = useState<boolean>(false);

  // Displays text character by character depending on delay provided
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currIndex < text.length) {
        setCurrText((prevText) => prevText + text[currIndex]);
        setCurrIndex((prevIndex) => prevIndex + 1);
      } else {
        // After the entire string has been displayed, the cursor will blink
        setAnimationFinished(true);
        // Reset all states back to original
        const animationTimeout = setTimeout(() => {
          setCurrIndex(0);
          setCurrText('');
          setAnimationFinished(false);
        }, 4000);
        return () => clearTimeout(animationTimeout);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [currIndex, delay, text, animationFinished]);

  return (
    <div>
      {currText}
      {animationFinished ? <span className="animate-ping">{cursor}</span> : cursor}
    </div>
  );
};

export default Title;
