import React from 'react'
import Styled from 'styled-components'

const FadeSection = Styled.div`
  opacity: ${(props) => props.visible ? 1 : 0};
  transform: ${(props) => props.visible ?  'none' : 'translateX(20vh)'};
  visibility: ${(props) => props.visible ?  'visible' : 'hidden'} ;
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;

`


export default function FadeRight(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <FadeSection visible={isVisible} ref={domRef}>
        {props.children}
      </FadeSection>
    );
  }

