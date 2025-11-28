// src/App.jsx
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Skills } from "./sections/Skills.jsx";
import { DeployGuide } from "./sections/DeployGuide.jsx";
import { DevJournal } from "./sections/DevJournal.jsx";
import { Contact } from "./sections/Contact.jsx";
import { deployGuideSteps as localDeployGuideSteps } from "./data/deployGuideSteps.js";
import { journalEntries as localJournalEntries } from "./data/journalEntries.js";

function App() {
  const [deployGuideSteps, setDeployGuideSteps] = useState(
    localDeployGuideSteps
  );
  const [journalEntries, setJournalEntries] = useState(localJournalEntries);
  const [isContentLoading, setIsContentLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch("/content");
        if (!response.ok) throw new Error("Failed to fetch content");
        const data = await response.json();

        if (Array.isArray(data.deployGuideSteps)) {
          setDeployGuideSteps(data.deployGuideSteps);
        }
        if (Array.isArray(data.journalEntries)) {
          setJournalEntries(data.journalEntries);
        }
      } catch (error) {
        console.warn("Falling back to local content", error);
      } finally {
        setIsContentLoading(false);
      }
    };

    loadContent();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <DeployGuide steps={deployGuideSteps} isLoading={isContentLoading} />
      <DevJournal entries={journalEntries} />
      <Contact />
    </div>
  );
}

export default App;
