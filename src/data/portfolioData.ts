export interface Certificate {
  id: string;
  title: string;
  category: 'science' | 'academic' | 'milestone';
  categoryLabel: string;
  event: string;
  school: string;
  schoolSub: string;
  studentName: string;
  std: string;
  section: string;
  house?: string;
  score?: string;
  date: string;
  description: string;
  signatures: { role: string; name: string }[];
  accentColor: string;
  badgeEmoji: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  details: string;
  tagColor: string;
  current?: boolean;
}

export const STUDENT_INFO = {
  fullName: 'Heswanth . H',
  shortName: 'Heswanth',
  currentYear: '2026',
  standard: 'Std. V',
  section: 'Sec. B',
  gradeDisplay: 'Std. V - Sec B (Fifth Standard)',
  schoolName: "St. Bede's Anglo-Indian Higher Secondary School",
  schoolAffiliation: 'A Don Bosco Institution',
  schoolAddress: '37, Santhome High Road, Santhome, Chennai - 600 004, Tamil Nadu',
  motto: 'Teach Us The Right Way',
  house: 'House Rua',
  academicScore: '78.3% (Std. IV Merit)',
  academicTerm: 'First Terminal Examination Honors',
  bedexEvent: 'BEDEX Science Exhibition Awardee',
  titleSubtitle: 'Fifth Standard Scholar & Young Scientist (2026)',
  location: 'Chennai, Tamil Nadu, India',
  email: 'heswanth.bedes@student.school',
  aboutBio:
    "Hello! I am Heswanth . H, currently studying in the Fifth Standard (Std. V, Section B) at St. Bede's Anglo-Indian Higher Secondary School in Chennai for the 2026 academic year. In Std. IV, I earned the prestigious BEDEX 2025 Science Exhibition Certificate of Merit and achieved 78.3% distinction in the First Terminal Examination for House Rua. Now in Fifth Standard, I am continuing my passion for scientific exploration, mathematics, building innovative school project models, and sports!",
  skills: [
    { title: 'Fifth Standard STEM & Science Projects', desc: 'Active science curiosity and hands-on model creation for 2026 projects' },
    { title: 'Mathematics & Logical Thinking', desc: 'Consistent academic distinction with 78.3% top aggregate score' },
    { title: 'Creative Model Crafting & Innovation', desc: 'Crafting working mechanical and renewable energy models' },
    { title: 'House Rua Sports & Athletics', desc: 'Representing Rua House with passion in track and field and football' },
    { title: 'Presentation & Public Speaking', desc: 'Demonstrating science concepts clearly to teachers, classmates, and judges' },
  ],
  schoolHighlights: {
    history: 'Established in 1907 by the Salesians of Don Bosco, St. Bede’s is one of Chennai’s most revered Anglo-Indian educational institutions with over 115+ years of distinguished excellence.',
    values: 'Guided by the Don Bosco Preventive System grounded in Reason, Religion, and Loving-Kindness to shape young boys into leaders with strong moral character.',
    sportsHeritage: 'Famous across India for sporting legacy—alma mater of legendary international cricketers including Ravichandran Ashwin and Dinesh Karthik.',
    scienceCulture: 'Annual BEDEX Science Fair encourages students right from primary grades to showcase hands-on scientific curiosity and innovative engineering models.',
  }
};

export const CERTIFICATES: Certificate[] = [
  {
    id: 'bedex-2025',
    title: 'Certificate of Merit - BEDEX 2025',
    category: 'science',
    categoryLabel: 'Science & Innovation',
    event: 'BEDEX 2025 Annual Science Exhibition',
    school: "ST. BEDE'S ANGLO INDIAN HR. SEC. SCHOOL",
    schoolSub: 'Santhome, Chennai - 04',
    studentName: 'Heswanth . H',
    std: 'IV',
    section: 'B',
    date: '31-10-2025',
    description:
      'Awarded for Participating in the Annual Science Exhibition, BEDEX showcasing innovation, creativity, and scientific curiosity. Dedication to scientific exploration and contribution to the event is highly appreciated.',
    signatures: [
      { role: 'Dept. Incharge', name: 'J. Jwonatha' },
      { role: 'Headmaster', name: 'Headmaster' }
    ],
    accentColor: '#10b981',
    badgeEmoji: '🔬'
  },
  {
    id: 'terminal-merit-2025',
    title: 'Academic Merit Certificate (78.3%)',
    category: 'academic',
    categoryLabel: 'Academic Distinction',
    event: 'First Terminal Examination',
    school: "ST. BEDE'S ANGLO-INDIAN HIGHER SECONDARY SCHOOL",
    schoolSub: '(A Don Bosco Institution) • 37, Santhome High Road, Chennai - 600 004',
    studentName: 'Heswanth . H',
    std: 'IV',
    section: 'B',
    house: 'House Rua',
    score: '78.3%',
    date: '11-10-2025',
    description:
      'Merit Certificate awarded to Heswanth . H of Std. IV Sec. B, House Rua, for securing 78.3% in the First Terminal Examination.',
    signatures: [
      { role: 'Class Teacher', name: 'S. L. Jennifer' },
      { role: 'Headmaster', name: 'Headmaster' }
    ],
    accentColor: '#e11d48',
    badgeEmoji: '🏆'
  },
  {
    id: 'ukg-grad-2022',
    title: 'Certificate of Merit - UKG Graduation',
    category: 'milestone',
    categoryLabel: 'Kindergarten Milestone',
    event: 'Graduation of Std UKG',
    school: "ST. BEDE'S ANGLO INDIAN HR. SEC. SCHOOL",
    schoolSub: 'A Don Bosco Institution • Santhome, Chennai - 4',
    studentName: 'Master Heswanth . H',
    std: 'UKG',
    section: 'B',
    date: '25.04.2022',
    description:
      'Awarded to Master Heswanth . H for Graduation during the academic year 2021 - 2022 of Std UKG, Sec B.',
    signatures: [
      { role: 'Class Teacher', name: 'D. Alex Deepa' },
      { role: 'Headmaster', name: 'Headmaster' }
    ],
    accentColor: '#0284c7',
    badgeEmoji: '🎓'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2026',
    title: 'Fifth Standard (Std. V - Sec B)',
    institution: "St. Bede's Anglo-Indian Hr. Sec. School",
    details: 'Currently studying in 5th Standard, excelling in science projects, mathematics, and House Rua activities.',
    tagColor: '#10b981',
    current: true
  },
  {
    year: '2025',
    title: 'BEDEX Science Fair Innovator & Std. IV Merit',
    institution: "St. Bede's Anglo-Indian Hr. Sec. School",
    details: 'Earned Certificate of Merit in BEDEX 2025 Science Exhibition and scored 78.3% in First Terminal Exam.',
    tagColor: '#f59e0b'
  },
  {
    year: '2022',
    title: 'UKG Graduation of Merit',
    institution: "St. Bede's Kindergarten Section",
    details: 'Completed foundational kindergarten with distinction in Section B.',
    tagColor: '#3b82f6'
  }
];

