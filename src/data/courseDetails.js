// Detailed content for each course page, keyed by course id.
// Cleaned up from the course descriptions on madchemclasses.online.

const NVS_PATTERN = [
  {
    title: "NVS Tier 1 Exam Pattern 2026",
    notes: ["100 questions · 300 marks · 120 minutes", "Negative marking: 1/3 mark (1 mark) per wrong answer"],
    head: ["Part", "Subject", "Questions", "Marks"],
    rows: [
      ["Part I", "General Reasoning", "20", "60"],
      ["Part II", "Numeric Ability", "20", "60"],
      ["Part III", "Basic Computer Literacy", "20", "60"],
      ["Part IV", "General Knowledge", "20", "60"],
      ["Part V", "Language Competency Test (English)", "10", "30"],
      ["Part VI", "Language Competency Test (one other modern Indian language)", "10", "30"],
      ["Total", "", "100", "300"],
    ],
  },
  {
    title: "NVS Tier 2 Exam Pattern 2026",
    notes: ["Negative marking: 1/4 mark", "Combination of pen-paper and OMR-based"],
    head: ["Type", "Questions", "Marks", "Duration"],
    rows: [
      ["Objective", "60", "60", "2.5 hours"],
      ["Descriptive", "10", "40", ""],
      ["Total", "70", "100", ""],
    ],
  },
];

const UPHESC_PATTERN = [
  {
    title: "UPHESC Assistant Professor Chemistry – Exam Pattern",
    notes: ["Objective type – multiple choice questions (MCQs)"],
    head: ["Section", "Subject", "Questions", "Marks"],
    rows: [
      ["Part I", "General Knowledge", "30", "60"],
      ["Part II", "Optional Subject (Chemistry)", "70", "140"],
      ["Total", "", "100", "200"],
    ],
  },
];

const ASST_PROF_HIGHLIGHTS = [
  "Complete syllabus coverage – in-depth lectures on Organic, Inorganic and Physical Chemistry plus General Studies, as per the latest exam pattern",
  "Expert-led classes from IITians and experienced educators who guide Assistant Professor aspirants",
  "Concise study material – high-quality notes, PDFs and key concepts for efficient revision",
  "Mock tests & PYQs – topic-wise tests, full-length mocks and previous year questions",
  "Doubt-solving sessions with one-on-one mentorship to strengthen weak areas",
  "Exam-focused strategy – latest exam trends, paper analysis and scoring techniques",
];

export const COURSE_DETAILS = {
  458: {
    tagline: "Tier 1 + Tier 2 + Interview — one complete batch",
    overview: [
      "Crack KVS/NVS PGT Chemistry with a well-structured, exam-oriented batch designed to cover the entire syllabus from zero to advanced level.",
      "This batch is perfect for aspirants who want clear concepts, strong practice and consistent guidance from expert faculty.",
    ],
    highlights: [
      "Complete syllabus coverage – every chapter of Physical, Organic and Inorganic Chemistry",
      "Live + recorded classes – attend live and revise from recordings anytime",
      "Topic-wise practice sheets – daily and weekly sets based on the latest KVS/NVS patterns",
      "PYQs & mock tests – full-length tests, topic-wise tests and PYQ discussions",
      "Exclusive study material – PDFs, notes and mind-maps on the MadChem Classes app",
      "Doubt-solving support – during live classes or through the app",
      "Exam-oriented strategy – high-scoring topics, expected questions and smart techniques",
    ],
    idealFor: ["Students preparing for KVS PGT Chemistry and NVS PGT Chemistry in the 2025–26 recruitment cycle"],
    patterns: NVS_PATTERN,
  },
  477: {
    tagline: "Exam-level mocks built on the latest UPSESSB syllabus",
    overview: [
      "Master the UP PGT Chemistry recruitment exam with a comprehensive, exam-oriented online test series.",
      "Designed strictly to the latest UPSESSB syllabus and question trends, it helps you strengthen core concepts, improve time management and cut negative marking.",
    ],
    highlights: [
      "Complete syllabus coverage – topic-wise and full-length mocks across Physical, Organic and Inorganic Chemistry",
      "Exam-level practice – statement-based questions and numericals that mirror UP PGT difficulty",
      "Detailed step-by-step solutions for every question",
      "Solved UP PGT PYQs plus relevant questions from GIC, KVS and NVS exams",
      "Performance analytics – instant rank, percentile and section-wise accuracy",
      "Bilingual support – English interface with Hindi reference for key terms",
    ],
    idealFor: ["UP PGT Chemistry aspirants who want exam-level practice and analysis"],
  },
  22: {
    tagline: "Complete online course for the RPSC Assistant Professor exam",
    overview: [
      "Aspiring to become an Assistant Professor in Chemistry through RPSC? Your preparation needs expert guidance and structured study material to crack this highly competitive exam.",
      "This comprehensive online course is designed by top educators and subject experts to help you succeed.",
    ],
    highlights: ASST_PROF_HIGHLIGHTS,
    idealFor: ["RPSC Assistant Professor (Chemistry) aspirants", "Candidates who want a structured plan with mentor support"],
  },
  438: {
    tagline: "Smart learning. Anytime. Anywhere.",
    overview: [
      "The UPPSC (GDC) Chemistry Assistant Professor batch is designed for serious GDC aspirants.",
      "With comprehensive recorded lectures, expert-curated study material and a structured preparation strategy, it gives you maximum flexibility without compromising on quality.",
    ],
    highlights: [
      "Complete syllabus coverage – all units of GDC Chemistry with conceptual depth",
      "Topic-wise practice sets & assignments",
      "Previous year questions discussion – trends, exam pattern and solving techniques",
      "In-depth theory + numerical solving sessions",
      "Telegram/WhatsApp group support for quick doubt resolution",
    ],
    idealFor: [
      "Working professionals and college students who learn at their own pace",
      "Self-motivated learners who want to repeat and revise anytime",
    ],
  },
  450: {
    tagline: "Crash course — maximum results in minimal time",
    overview: [
      "Get exam-ready with an exclusive crash course for the UPPSC Government Degree College (GDC) Chemistry Assistant Professor exam.",
      "It provides complete syllabus coverage, conceptual clarity and exam-focused problem solving.",
    ],
    highlights: [
      "Complete & updated syllabus coverage as per the latest UPPSC pattern",
      "HD recorded lectures – learn anytime, valid till the exam",
      "Topic-wise concept + numerical practice",
      "Previous year questions discussion",
      "Chapter-wise tests & assignments",
      "PDF notes & summary sheets for quick revision",
      "Telegram/WhatsApp doubt support with direct mentor guidance",
    ],
    idealFor: ["UPPSC GDC Chemistry aspirants preparing for the prelims"],
  },
  456: {
    tagline: "General Studies for the RPSC Assistant Professor exam",
    overview: [
      "Complete video lectures, PDF notes, assignments and PYQs in Hindi + English for the General Studies section of the RPSC Assistant Professor exam.",
    ],
    highlights: [
      "Full General Studies syllabus coverage",
      "Video lectures with PDF notes",
      "Assignments for practice",
      "Previous year questions (PYQs)",
      "Bilingual – Hindi + English",
    ],
    idealFor: ["RPSC Assistant Professor aspirants who need a GS module"],
  },
  473: {
    tagline: "Maximise your GATE score and rank — at no cost",
    overview: [
      "Ace GATE Chemistry 2026 with the Free Rank Booster Program by Madchem Classes, designed for serious aspirants who want to maximise their score and rank.",
      "It focuses on high-weightage topics, advanced problem solving and exam-oriented strategies that make the real difference in the final rank list.",
    ],
    highlights: [
      "High-weightage topic focus",
      "Advanced problem-solving sessions",
      "Exam-oriented strategies for the final push",
    ],
    idealFor: [
      "Final-year students targeting top GATE ranks",
      "Droppers looking for rank improvement",
      "Aspirants aiming for IITs, IISc, PSUs and research careers",
    ],
  },
  474: {
    tagline: "Targeted preparation for Organic Chemistry aspirants",
    overview: [
      "A complete, focused programme for aspirants aiming to crack CSIR NET (Chemical Sciences) with specialisation in Organic Chemistry.",
      "It combines in-depth theory, advanced problem solving, smart revision strategies and personalised mentorship to help you secure a top rank in December 2026.",
    ],
    highlights: [
      "Expert video lectures focused exclusively on Organic Chemistry",
      "Complete syllabus – GOC, named reactions, stereochemistry, pericyclics, mechanism, spectroscopy and more",
      "Detailed notes & PDFs for every topic",
      "Structured study plan aligned with the CSIR NET-JRF pattern",
      "Unit-wise tests, practice sheets & mock exams",
      "Strategy sessions for Part B & Part C",
      "PYQ discussions – topic-wise analysis of the last 10 years",
      "Bilingual delivery, live doubt sessions and crash revision before the exam",
    ],
    idealFor: ["Chemistry majors aiming for a high CSIR NET rank in Organic Chemistry"],
  },
  475: {
    tagline: "Targeted preparation for Physical Chemistry aspirants",
    overview: [
      "A comprehensive, focused course for aspirants aiming to crack CSIR NET (Chemical Sciences) with a stronghold in Physical Chemistry.",
      "Built around core principles, application-based question solving and exam-specific strategies to help you secure a JRF or LS in December 2026.",
    ],
    highlights: [
      "High-quality video lectures from fundamentals to advanced concepts",
      "Full syllabus – thermodynamics, quantum chemistry, electrochemistry, kinetics, surface chemistry, statistical thermodynamics, solid state and more",
      "Detailed class notes & downloadable PDFs",
      "Structured weekly study plan",
      "Topic-wise assignments, numerical practice & concept tests",
      "Solved PYQs (2011–2024) with concept mapping",
      "Full-length mock tests in the latest CSIR NET format",
      "Bilingual teaching, live doubt clearing and 1-on-1 mentorship",
    ],
    idealFor: ["CSIR NET aspirants who want to master Physical Chemistry"],
  },
  476: {
    tagline: "Specialised preparation for Inorganic Chemistry aspirants",
    overview: [
      "A focused, result-oriented course for aspirants aiming to crack CSIR NET (Chemical Sciences) with specialisation in Inorganic Chemistry.",
      "It covers the complete Inorganic syllabus through conceptual learning, mechanism-based problem solving and intensive practice.",
    ],
    highlights: [
      "Topic-focused video lectures from fundamentals to advanced",
      "Full syllabus – coordination chemistry, bioinorganic, organometallics, group theory, solid state, main group, transition metals and more",
      "Detailed notes & chapter-wise PDFs",
      "Topic-wise tests & practice assignments on the CSIR pattern",
      "PYQ analysis (2012–2024) solved with tricks and logic",
      "Strategy sessions for Parts B & C",
      "Full-length mock tests",
      "Bilingual teaching, live doubt solving and mentorship till exam day",
    ],
    idealFor: ["CSIR NET aspirants targeting a top JRF or LS rank via Inorganic Chemistry"],
  },
  430: {
    tagline: "Prelims + Mains · All subjects",
    overview: [
      "A comprehensive programme for GIC teacher vacancy aspirants, covering all subjects with conceptual clarity, numerical problem solving and exam-oriented strategies.",
      "With 100% recorded HD lectures, expert notes and practice sheets, it's ideal for learners who want flexibility without compromising quality.",
    ],
    highlights: [
      "Complete syllabus coverage",
      "HD recorded lectures – watch anytime, valid for 12 months",
      "Numerical problem-focused teaching",
      "Chapter-wise assignments & practice sheets",
      "Previous year question solving",
      "PDF notes + summary sheets for quick revision",
      "Telegram/WhatsApp doubt support with mentors",
    ],
    idealFor: [
      "GIC exam aspirants targeting Prelims + Mains",
      "Focus on Chemistry, Hindi, GS and more",
      "Learners seeking flexibility with expert guidance",
    ],
  },
  11: {
    tagline: "Complete online course for the MPPSC Assistant Professor exam",
    overview: [
      "Aspiring to become an Assistant Professor in Chemistry through MPPSC? Your preparation needs expert guidance and structured study material to crack this highly competitive exam.",
      "This comprehensive online course is designed by top educators and subject experts to help you succeed.",
    ],
    highlights: ASST_PROF_HIGHLIGHTS,
    idealFor: ["MPPSC Assistant Professor (Chemistry) aspirants", "Candidates who want a structured plan with mentor support"],
  },
  40: {
    tagline: "General Studies for the MPPSC Assistant Professor exam",
    overview: [
      "Prepare comprehensively for the MPPSC Assistant Professor exam with a specialised General Studies online course.",
      "It's designed to align with the latest MPPSC syllabus and exam pattern, with a structured and strategic learning pathway.",
    ],
    highlights: [
      "History – Ancient, Medieval, Modern India and Madhya Pradesh",
      "Geography – Physical, Human and Indian, with a focus on Madhya Pradesh",
      "Polity & governance – Constitution, Panchayati Raj, public policy",
      "Economy – Indian economy, budgeting, planning and the MP economy",
      "Science & technology, environment & ecology, current affairs",
      "General mental ability – reasoning, analytical ability, basic numeracy",
      "Video lectures, downloadable PDFs, live doubt sessions and mock tests",
      "Special focus on Madhya Pradesh GK",
    ],
    idealFor: [
      "Aspirants targeting the Assistant Professor post via MPPSC",
      "Students seeking a structured, strategic preparation plan",
      "Working professionals who need flexible study options",
    ],
  },
  435: {
    tagline: "GS + Science in one complete batch",
    overview: [
      "A dedicated full course covering General Studies + Science for UPPSC LT Grade aspirants.",
      "It gives you complete preparation in one place — perfect for those who want to become a GIC teacher (Science) with strong GS support.",
    ],
    highlights: [
      "Complete coverage of GS + Chemistry in one batch",
      "Designed for Prelims + Mains preparation",
      "IITian faculty with 10+ years of teaching experience",
      "Conceptual clarity + numerical problem-solving approach",
      "Previous year question discussions & strategies",
      "HD recorded lectures valid for 12 months",
      "PDF notes + assignments for revision",
      "Telegram/WhatsApp group doubt support",
    ],
    idealFor: ["UPPSC LT Grade aspirants who want GS and Science in one course"],
  },
  367: {
    tagline: "Master the syllabus. Build concepts. Crack the exam.",
    overview: [
      "A complete course for the UPHESC Assistant Professor Chemistry exam, covering the full PG-level syllabus with live and recorded lectures, notes, practice and tests.",
      "“Our goal isn’t just to cover the syllabus, but to make sure you’re 100% exam-ready with strong concepts and smart strategy.”",
    ],
    highlights: [
      "Complete coverage of the UPHESC Chemistry syllabus (PG level)",
      "Live + recorded lectures",
      "PDF & handwritten notes for quick revision",
      "Topic-wise practice sets and weekly assignments",
      "Unit tests + mock tests with analysis",
      "PYQ discussions – last 10 years of UPHESC and other state exams",
      "Performance tracker dashboard",
      "Doubt solving via Telegram/WhatsApp",
    ],
    idealFor: [
      "Aspirants preparing for UPHESC / UP GDC Assistant Professor Chemistry",
      "Candidates targeting state PSC lecturer exams (RPSC, MPPSC, HPSC)",
      "Students who want structured revision with expert guidance",
    ],
    patterns: UPHESC_PATTERN,
  },
};

export const MENTORS = [
  { name: "Vimal Sir", from: "IIT Guwahati", badge: "GATE AIR 57", text: "Physical Chemistry expert with 10+ years of experience." },
  { name: "Tej Sir", from: "IIT Guwahati", badge: "CSIR NET JRF AIR 07", text: "Strategy and concept-simplification specialist." },
];
