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
import { JournalEntryPage } from "./pages/JournalEntry.jsx";
import { Projects } from "./sections/Projects.jsx";
import { deployGuideSteps as localDeployGuideSteps } from "./data/deployGuideSteps.js";
import { journalEntries as localJournalEntries } from "./data/journalEntries.js";
import { mapPostToEntry } from "./utils/journal.js";

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
        // Load deploy guide + fallback journal entries
        const contentResponse = await fetch("/content");
        if (!contentResponse.ok) throw new Error("Failed to fetch content");
        const contentData = await contentResponse.json();

        if (Array.isArray(contentData.deployGuideSteps)) {
          setDeployGuideSteps(contentData.deployGuideSteps);
        }
        if (Array.isArray(contentData.journalEntries)) {
          setJournalEntries(contentData.journalEntries);
        }
      } catch (error) {
        console.warn("Falling back to local content", error);
      }

      try {
        // Prefer live posts from D1
        const postsResponse = await fetch("/posts");
        if (postsResponse.ok) {
          const postsData = await postsResponse.json();
          if (Array.isArray(postsData)) {
            const mapped = postsData.map((post) => mapPostToEntry(post));
            setJournalEntries(mapped);
          }
        }
      } catch (error) {
        console.warn("Failed to load posts; keeping existing entries", error);
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
        <Route
          path="/journal/:slug"
          element={<JournalEntryPage entries={journalEntries} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
