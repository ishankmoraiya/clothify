// Title.js
import { useEffect } from 'react';

const Title = ({ title }) => {
  useEffect(() => {
    document.title = `Clothify${title}`;
  }, [title]);

  return null; // Since this component doesn't render anything, return null
};

export default Title;