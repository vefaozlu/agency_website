import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import "../node_modules/tailwindcss/lib/css/preflight.css";
import "tailwindcss/lib/css/preflight.css";

import Hero from "components/hero/TwoColumnWithInput";
import Features from "components/features/TwoColSingleFeatureWithStats2";
import Cards from "components/cards/ThreeColContactDetails";
import Testimonial from "components/testimonials/SimplePrimaryBackground";

import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";

function App() {
  return (
    <div className="App">
      <AnimationRevealPage disabled>
        <GlobalStyles />
        <Hero />
        <Features />
        <Cards />
        <Testimonial />
      </AnimationRevealPage>
    </div>
  );
}

export default App;
