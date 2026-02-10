// data/notices.ts

export interface Notice {
  id: number;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
}

export const notices: Notice[] = [
  {
    id: 1,
    title: "Module-1 Completion Deadline",
    description:
      "Deadline for completion of Module-1 is 10 January 2026. Make sure to submit all tasks before the deadline.",
    date: "2026-01-10",
  },
  {
    id: 2,
    title: "New Workshop Announcement",
    description:
      "We are organizing a Public Speaking Workshop on 20 February 2026. All members are encouraged to participate.",
    date: "2026-02-20",
  },
  // Add more notices here
];
