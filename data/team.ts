// data/team.ts

export interface Member {
  id: number;
  name: string;
  role: string;
  category: "Faculty Advisor" | "Executive" | "Founding Member";
  photo: string; // path to image in public/team/
}

export const teamMembers: Member[] = [
  // Faculty Advisors
  {
    id: 1,
    name: "Dr. Md. Mehedi Hasan",
    role: "Assistant Professor, Department of Animal Science",
    category: "Faculty Advisor",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 2,
    name: "S.M. Rafi",
    role: "Assistant Professor, Department of English",
    category: "Faculty Advisor",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 3,
    name: "Md. Abu Sayem",
    role: "Assistant Professor, Department of Statistics",
    category: "Faculty Advisor",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 4,
    name: "Md. Mehedi Hasan Manik",
    role: "Lecturer, Department of Management",
    category: "Faculty Advisor",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 5,
    name: "Tawsif Anik",
    role: "Lecturer, Department of Law",
    category: "Faculty Advisor",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 6,
    name: "Md. Mosiur Rahman Sweet",
    role: "Lecturer, Department of CSE",
    category: "Faculty Advisor",
    photo: "/team/placeholder.jpg",
  },

  // Executive Members
  {
    id: 7,
    name: "Md Maruf Hasan",
    role: "President",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 8,
    name: "Abu Said Chowdhury",
    role: "Vice President",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 9,
    name: "Md. Jearul Islam",
    role: "Treasurer",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 10,
    name: "Md Iftekhar ul Haque",
    role: "General Secretary",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 11,
    name: "Md. Mahafuj Anam Shuvo",
    role: "Assistant General Secretary",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 12,
    name: "Most. Habiba Khatun",
    role: "Public Relations Officer",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 13,
    name: "Minaur Rahman",
    role: "Assistant Public Relations Officer",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 14,
    name: "Md. Rifat Raihan",
    role: "Events Coordinator",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 15,
    name: "Rownak Jahan Borsha",
    role: "Academic Coordinator",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 16,
    name: "Mahmuda Rahman",
    role: "Grammar and Writing Executive",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 17,
    name: "Sadia Islam",
    role: "Speaking and Linguistic Executive",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 18,
    name: "Tajrin Khatun",
    role: "Grammar and Writing Executive",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 19,
    name: "Md Sefat-Uz-Zaman",
    role: "Media and Design Officer",
    category: "Executive",
    photo: "/team/placeholder.jpg",
  },

  // Founding Members
  {
    id: 20,
    name: "Md Maruf Hasan",
    role: "Founder, BBA, Batch 24",
    category: "Founding Member",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 21,
    name: "Abu Said Chowdhury",
    role: "Co-Founder, Law, Batch 24",
    category: "Founding Member",
    photo: "/team/placeholder.jpg",
  },
  {
    id: 22,
    name: "Md. Jearul Islam",
    role: "Co-Founder, BBA, Batch 24",
    category: "Founding Member",
    photo: "/team/placeholder.jpg",
  },
];
