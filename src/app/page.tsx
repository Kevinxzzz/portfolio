import { JsonLd } from "@/components/seo/JsonLd";
import { profile } from "@/data/profile";
import { SystemLayout } from "@/layouts/SystemLayout";
import { resolveAssets } from "@/lib/assets";
import { SITE_URL } from "@/lib/site";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { EducationSection } from "@/sections/EducationSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { StackSection } from "@/sections/StackSection";

export default function Home() {
  const assets = resolveAssets(profile.assets);
  const { github, linkedin } = profile.contact;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.fullName,
          alternateName: profile.name,
          jobTitle: profile.role,
          description: profile.description,
          url: SITE_URL,
          ...(assets.photo && { image: `${SITE_URL}${assets.photo}` }),
          sameAs: [github, linkedin].filter(Boolean),
        }}
      />

      <SystemLayout assets={assets}>
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection assets={assets} />
      </SystemLayout>
    </>
  );
}
