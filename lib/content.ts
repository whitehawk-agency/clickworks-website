/**
 * Copy and listings shared across the inner pages. Everything here is content
 * rather than layout, so the pages stay about structure and this is the one
 * file to edit when the real material lands.
 */

export type Project = {
  client: string;
  discipline: string;
  summary: string;
  /** Cover photo. Drop the file in /public and reference it here. */
  photo?: string;
};

export const PROJECTS: Project[] = [
  {
    client: "Northwind Coffee",
    discipline: "Website",
    summary: "A new ordering flow built around repeat customers.",
  },
  {
    client: "Halo Fitness",
    discipline: "Social Media",
    summary: "A class-led content engine running across three channels.",
  },
  {
    client: "Meridian Dental",
    discipline: "Branding",
    summary: "An identity that reads as care rather than clinic.",
  },
  {
    client: "Fern & Oak",
    discipline: "Website",
    summary: "A storefront rebuilt for the way the range actually sells.",
  },
  {
    client: "Studio Verve",
    discipline: "Branding",
    summary: "A studio mark and system that scales past the founder.",
  },
  {
    client: "Harbour & Co",
    discipline: "Social Media",
    summary: "A local audience grown from the harbour out.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  /** Portrait. Drop the file in /public and reference it here. */
  photo?: string;
};

/**
 * Only the founder is filled in. The rest are deliberately left as roles with
 * a placeholder name, so nobody is invented — swap each `name` as the team is
 * confirmed.
 */
export const TEAM: TeamMember[] = [
  { name: "Samandeep Singh", role: "Founder" },
  { name: "Name to come", role: "Strategy Lead" },
  { name: "Name to come", role: "Creative Director" },
  { name: "Name to come", role: "Social Lead" },
  { name: "Name to come", role: "Web Engineer" },
  { name: "Name to come", role: "Client Partner" },
];

export type NewsPost = {
  title: string;
  body: string;
  /** Rendered as written, so the format stays under editorial control. */
  date: string;
  /** Cover photo. Drop the file in /public and reference it here. */
  photo?: string;
};

const PLACEHOLDER_BODY =
  "Description Description Description Description Description Description " +
  "Description Description Description Description Description Description " +
  "Description Description";

export const NEWS: NewsPost[] = [
  {
    title:
      "The Clickworks Team go out with Midlands Langar Seva Society to feed the homeless",
    body: PLACEHOLDER_BODY,
    date: "Monday, 17 August 2021",
  },
  {
    title: "Story title goes here",
    body: PLACEHOLDER_BODY,
    date: "Date to come",
  },
  {
    title: "Story title goes here",
    body: PLACEHOLDER_BODY,
    date: "Date to come",
  },
];

export type ServiceDetail = {
  title: string;
  blurb: string;
  includes: string[];
};

export const SERVICE_DETAIL: ServiceDetail[] = [
  {
    title: "Websites",
    blurb:
      "Sites built to sell, not to win awards. Fast, measurable and yours to run.",
    includes: [
      "Design and build",
      "Copy and content structure",
      "Analytics and conversion tracking",
      "Ongoing iteration",
    ],
  },
  {
    title: "Social Media",
    blurb:
      "A content engine with a point of view, scheduled against what actually performs.",
    includes: [
      "Channel strategy",
      "Content production",
      "Community management",
      "Monthly reporting",
    ],
  },
  {
    title: "Branding",
    blurb:
      "An identity that holds up everywhere it lands, from a shopfront to a story.",
    includes: [
      "Positioning and naming",
      "Identity and art direction",
      "Brand guidelines",
      "Launch assets",
    ],
  },
];
