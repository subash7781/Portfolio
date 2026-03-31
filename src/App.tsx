/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BentoSection } from "./components/BentoSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ImpactSection } from "./components/ImpactSection";
import { Navigation } from "./components/Navigation";
import { ProjectsSection } from "./components/ProjectsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <Navigation />

      <main>
        <Hero />
        <ImpactSection />
        <BentoSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
