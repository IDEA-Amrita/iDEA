import { useState, useRef, useEffect } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Home, About, Roadmap, Github, Docs, Socials } from "../content";

function Landing() {
  const [isLight, setIsLight] = useState(true);
  const [constant, setConstant] = useState(0);
  const ref = useRef();

  // useEffect(() => {
  //   blockScroll();
  // }, [constant])

  const scroll = (to) => {
    if (ref.current) {
      ref.current.scrollTo(to);
    }
  };

  return (
    <Parallax
      pages={6}
      ref={ref}
      className={isLight ? "light" : "dark"}
      style={{ top: "0", left: "0" }}
    >
      <ParallaxLayer offset={0} speed={0.2}>
        <Home
          about={() => scroll(1)}
          roadmap={() => scroll(2)}
          github={() => scroll(3)}
          docs={() => scroll(4)}
          socials={() => scroll(5)}
          isLight={isLight}
          setIsLight={setIsLight}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.6}>
        <About up={() => scroll(0)} down={() => scroll(2)} />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.4}>
        <Roadmap up={() => scroll(1)} down={() => scroll(3)}  />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.3}>
        <Github up={() => scroll(2)} down={() => scroll(4)} />
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.2}>
        <Docs up={() => scroll(3)} down={() => scroll(5)}  />
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.2}>
        <Socials up={() => scroll(4)} />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Landing;
