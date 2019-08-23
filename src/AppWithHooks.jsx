import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero.jsx";
import About from "./containers/About.jsx";
import Step from "./components/Step.jsx";
import Solution from "./components/Solution.jsx";
import { SOLUTION1 } from "./database/premade";

library.add(fab, faArrowRight);

const Gradient = `
45deg, rgba(131,58,180,.8) 0%, rgba(253,29,29,.8) 50%, rgba(252,176,69,.8) 100%
`;

const Section1 = styled.div`
  background-color: rgba(150, 150, 150, 0.02);
`;

const Section2 = styled.div`
  background-color: rgba(150, 150, 150, 0.04);
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: bolder;
  margin: 1em;
  background: linear-gradient(${Gradient});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: none;
  -webkit-text-fill-color: transparent;
  align-self: center;
  font-weight: bolder;
  font-size: 1.8em;
  min-width: 5em;
`;

function AppWithHooks() {
  return (
    <div>
      <Hero />
      <About />
      <Section1>
        <Title>Pre Made Solution</Title>
        <Solution data={SOLUTION1} />
      </Section1>
      <Section2>
        <Title>Try the challange</Title>
        <Solution data={[]} />
      </Section2>
    </div>
  );
}

render(<AppWithHooks />, document.getElementById("root"));
