import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { OptionsList } from './styles';

export const HeaderOptions: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;

      setVisible(scrollPosition > currentPosition);
      setScrollPosition(currentPosition);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <OptionsList style={{ top: visible ? 0 : -98 }}>
      {[
        { name: 'Home', id: 'home' },
        { name: 'Historia', id: 'history' },
        { name: 'Objetivo', id: 'goal' },
        { name: 'Recrutamento', id: 'recruitment' }
      ].map((option, index) => (
        <Link
          to={option.id}
          smooth={true}
          duration={1000}
          key={index}
          className="option-item"
        >
          {option.name}
        </Link>
      ))}
    </OptionsList>
  );
};
