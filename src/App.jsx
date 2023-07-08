import { useState } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./header_footer/Navbar";
import FirstLook from "./landing_page/FirstLook";
import Features from "./landing_page/Features";
import Templates from "./landing_page/Templates";
import VideoLoader from "./landing_page/Video";
import Blockquote from "./landing_page/Blockquote";
import Pricing from "./landing_page/Pricing";
import Signup from "./landing_page/SignUp";
import Footer from "./header_footer/Footer";

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div>
      <Navbar />
      <FirstLook />
      <Features />
      <Templates />
      <VideoLoader />
      <Blockquote />
      <Pricing />
      <Signup />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
