import { useState, useRef, useEffect } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Home, About, Roadmap, Team, Contribute } from "../content";
import Projects from "../content/projects";

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
    <>
      <Parallax
        pages={6}
        ref={ref}
        className={isLight ? "light" : "dark"}
        style={{ top: "0", left: "0" }}
      >
        <ParallaxLayer offset={0} speed={2.5}>
          <Home
            about={() => scroll(1)}
            roadmap={() => scroll(2)}
            team={() => scroll(3)}
            projects={() => scroll(4)}
            contribute={() => scroll(5)}
            isLight={isLight}
            setIsLight={setIsLight}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <About
            up={() => scroll(0)}
            roadmap={() => scroll(2)}
            team={() => scroll(3)}
            projects={() => scroll(4)}
            contribute={() => scroll(5)}
            isLight={isLight}
            setIsLight={setIsLight}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <Roadmap
            about={() => scroll(1)}
            team={() => scroll(3)}
            projects={() => scroll(4)}
            contribute={() => scroll(5)}
            isLight={isLight}
            setIsLight={setIsLight}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.3}>
          <Team
            about={() => scroll(1)}
            roadmap={() => scroll(2)}
            projects={() => scroll(4)}
            contribute={() => scroll(5)}
            isLight={isLight}
            setIsLight={setIsLight}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.3}>
          <Projects
            about={() => scroll(1)}
            roadmap={() => scroll(2)}
            team={() => scroll(3)}
            contribute={() => scroll(5)}
            isLight={isLight}
            setIsLight={setIsLight}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.3}>
          <Contribute
            about={() => scroll(1)}
            roadmap={() => scroll(2)}
            team={() => scroll(3)}
            projects={() => scroll(4)}
            isLight={isLight}
            setIsLight={setIsLight}
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Landing;
