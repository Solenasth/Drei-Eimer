import React from "react";
import { render } from "react-dom";
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

function AppWithHooks() {
  return (
    <div>
      <Hero />
      <About />
      <Solution steps={SOLUTION1.steps} finished={SOLUTION1.finished} />
      <Solution />
    </div>
  );
}

render(<AppWithHooks />, document.getElementById("root"));
