import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

const GITHUB_URL = "https://github.com/priyansh-pixel";
const PAGE_TITLE = "Priyansh Srivastava | Business Transformation & Technology Consulting";
const PAGE_DESCRIPTION =
  "Portfolio of Priyansh Srivastava — consultant focused on business transformation, process improvement, O2C, analytics, and operations.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Priyansh Srivastava",
          jobTitle: "Consultant — Business Transformation & Technology Consulting",
          url: "/",
          sameAs: [GITHUB_URL],
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Kalinga Institute of Industrial Technology" },
            { "@type": "CollegeOrUniversity", name: "Great Lakes Institute of Management, Gurgaon" },
          ],
        }),
      },
    ],
  }),
});


function Index() {
  return <Portfolio />;
}
