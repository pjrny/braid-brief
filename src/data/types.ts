export type Section =
  | "mindset"
  | "habits"
  | "business"
  | "time"
  | "communication";

export type Domain = "career" | "health" | "money" | "people" | "craft" | "lead";

export type Stance = "support" | "challenge" | "qualify";

export type VizKind =
  | "split"
  | "compound"
  | "scale"
  | "essential"
  | "plusminus"
  | "flip"
  | "compare"
  | "pareto"
  | "grit"
  | "pain"
  | "mastery"
  | "stack"
  | "buffett"
  | "habit"
  | "map"
  | "amp"
  | "retrieve"
  | "loop"
  | "cue"
  | "seven"
  | "succinct"
  | "one"
  | "depth"
  | "inbox"
  | "praise"
  | "stick"
  | "intent"
  | "talk"
  | "negotiate"
  | "tiny";

export interface BookRule {
  id: string;
  name: string;
  principle: string;
}

export interface Play {
  action: string;
  why: string;
}

export interface BookPage {
  id: string;
  title: string;
  author: string;
  page: number;
  section: Section;
  quote: string;
  insight: string;
  rules: BookRule[];
  kbi: { key: string; label: string };
  viz: VizKind;
  further: { title: string; url: string; source: string }[];
  blocks: { label: string; text: string }[];
  plays: Record<Domain, Play>;
  trap: string;
}

export interface ScholarArticle {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  url: string;
  stance: Stance;
  dbeLink: string;
  abstract: string;
}

export interface CommunityLink {
  id: string;
  kind: "lab" | "company" | "school" | "oss" | "industry" | "news";
  name: string;
  url: string;
  blurb: string;
}

export interface LearningItem {
  id: string;
  kind: "lecture" | "course" | "product" | "essay";
  title: string;
  outlet: string;
  url: string;
  blurb: string;
}

export type TabId = "pages" | "sim" | "frontier" | "history";
