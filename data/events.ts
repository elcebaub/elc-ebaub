// data/events.ts

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
}

export const events: Event[] = [
  {
    id: 1,
    title: "Public Speaking Workshop",
    description: "A workshop to improve public speaking skills for all members.",
    date: "2026-02-20",
  },
  {
    id: 2,
    title: "Debate Competition",
    description: "Annual debate competition organized by EELC.",
    date: "2026-03-15",
  },
  {
    id: 3,
    title: "Module-1 Completion Ceremony",
    description: "Celebrating completion of Module-1 for all members.",
    date: "2026-01-12",
  },
  // Add more events here
];
