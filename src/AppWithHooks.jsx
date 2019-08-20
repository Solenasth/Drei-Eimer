import React from "react";
import { render } from "react-dom";
//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero.jsx";
import About from "./containers/About.jsx";

library.add(fab, faArrowAltCircleDown);

function AppWithHooks() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}

render(<AppWithHooks />, document.getElementById("root"));
