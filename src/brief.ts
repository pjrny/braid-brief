import { BOOKS } from "./data/books";
import { COMMUNITIES, LEARNING, SCHOLAR } from "./data/frontier";
import { hashDate, mulberry32, pickN } from "./rng";

const THESES = [
  "Four pages. One life. A processor that treats physics as computation.",
  "Small choices braid into a trajectory; anyons braid into a gate.",
  "Master one rule deeply enough and the day still compounds.",
  "Error correction for qubits. Habit correction for a life.",
  "The essential few pages; the essential few anyons.",
];

export function buildBrief(date: string) {
  const rng = mulberry32(hashDate(date));
  const books = pickN(BOOKS, 4, rng);
  const scholar = pickN(SCHOLAR, 6, rng);
  const communities = pickN(COMMUNITIES, 8, rng);
  const learning = pickN(LEARNING, 6, rng);
  const thesis = THESES[Math.floor(rng() * THESES.length)] ?? THESES[0];
  return { date, books, scholar, communities, learning, thesis };
}
