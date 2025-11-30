// src/App.jsx
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Skills } from "./sections/Skills.jsx";
import { DeployGuide } from "./sections/DeployGuide.jsx";
import { DevJournal } from "./sections/DevJournal.jsx";
import { Contact } from "./sections/Contact.jsx";
import { JournalPage } from "./pages/Journal.jsx";
import { Projects } from "./sections/Projects.jsx";
import { deployGuideSteps as localDeployGuideSteps } from "./data/deployGuideSteps.js";
import { journalEntries as localJournalEntries } from "./data/journalEntries.js";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

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
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <DeployGuide steps={deployGuideSteps} isLoading={isContentLoading} />
              <DevJournal entries={journalEntries} />
              <Contact />
            </>
          }
        />
        <Route
          path="/journal"
          element={<JournalPage entries={journalEntries} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
