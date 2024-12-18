import { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // State for video playback
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Function to toggle video playback
  const toggleVideoPlayback = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Pass shared state and toggle function to NavBar and Hero */}
      <NavBar isVideoPlaying={isVideoPlaying} toggleVideoPlayback={toggleVideoPlayback} />
      <Hero isVideoPlaying={isVideoPlaying} />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
