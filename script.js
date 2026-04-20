// --- CAREER DATA ---
const careerData = {
  '10th': [
    {
      category: 'Polytechnic Diploma',
      icon: 'box',
      description: '3-year professional course after 10th standard.',
      paths: ['Aeronautical', 'Agriculture', 'Apparel Design', 'Architecture', 'Automobile', 'Bio Medical', 'Biotechnology', 'Civil', 'Computer Science', 'Electrical', 'Electronics & Communication', 'Fashion Technology', 'Marine Engineering', 'Mechanical', 'Mechatronics', 'Software Engineering', 'Fire Engineering', 'Interior Decoration']
    },
    {
      category: 'Paramedical Diploma',
      icon: 'heart-pulse',
      description: 'Medical support roles and technician training.',
      paths: ['Dialysis Technician', 'Health Inspector', 'Medical Lab Tech', 'Medical X-Ray Tech', 'Nursing Aid', 'Operation Theatre Tech', 'Ophthalmic Technician', 'Dental Mechanic', 'Sanitary Inspector']
    },
    {
      category: 'ITI Courses',
      icon: 'wrench',
      description: 'Industrial training for technical trades (2 Years).',
      paths: ['Electrician', 'Fitter', 'Machinist', 'Motor Vehicle Mechanic', 'Radio & TV Mechanic', 'Refrigeration & AC', 'Sheet Metal Worker', 'Surveyor', 'Tool and Die Making', 'Turner', 'Vessel Navigator']
    },
    {
      category: 'Job Oriented Courses',
      icon: 'briefcase',
      description: 'Short-term skill development (6-12 Months).',
      paths: ['3D Animation', 'Cyber Security', 'Graphic Designing', 'Hotel Management', 'Photography', 'Cyber Security', 'Cosmetology', 'Air Ticketing', 'Networking']
    },
    {
      category: 'Govt & Defense',
      icon: 'shield',
      description: 'Direct entry roles in government sectors.',
      paths: ['Soldier (GD)', 'Railway Clerk', 'Insurance Advisor', 'Personal Assistant', 'Stenographer', 'Police Constable']
    }
  ],
  '12th': [
    {
      category: 'Medical & Allied Health',
      icon: 'stethoscope',
      description: 'Professional healthcare careers (4-5 Years).',
      paths: ['MBBS', 'BDS (Dental)', 'BAMS (Ayurveda)', 'BHMS (Homeopathy)', 'B.Pharma', 'B.Sc Nursing', 'Physiotherapy', 'Lab technician', 'Radiology', 'Operation Theater Tech']
    },
    {
      category: 'Engineering',
      icon: 'cpu',
      description: 'Technical innovation and infrastructure (4 Years).',
      paths: ['Computer Science', 'Data Science', 'AI & Robotics', 'Aeronautical', 'Aerospace', 'Civil', 'Mechanical', 'Chemical', 'Electronics', 'Biotechnology', 'Marine Engineering']
    },
    {
      category: 'Commerce & CA',
      icon: 'trending-up',
      description: 'Finance, Banking, and Business Management.',
      paths: ['Chartered Accountant (CA)', 'Company Secretary (CS)', 'B.Com Professional', 'BBA', 'Finance Management', 'Investment Banking', 'Actuarial Science']
    },
    {
      category: 'Humanities & Arts',
      icon: 'palette',
      description: 'Creative and Social Science careers.',
      paths: ['Psychology', 'Clinical Psychology', 'Journalism', 'Mass Communication', 'Fine Arts', 'Interior Designing', 'Social Work', 'Literature', 'Archaeology']
    },
    {
      category: 'Law & Management',
      icon: 'scale',
      description: 'Administrative and Legal professions.',
      paths: ['BA LLB (Integrated)', 'BBA LLB', 'Corporate Law', 'Hospital Management', 'Event Management', 'Logistics & Supply Chain', 'Human Resource Mgmt']
    }
  ]
};

// --- QUIZ DATA ---
const quizQuestions = [
  { q: "Do you enjoy solving complex math problems or logic puzzles?", type: "engineering" },
  { q: "Are you interested in how the human body works and helping people recover?", type: "medical" },
  { q: "Do you like drawing, designing graphics, or creating digital art?", type: "arts" },
  { q: "Does the world of stocks, accounting, and business fascinate you?", type: "commerce" },
  { q: "Do you enjoy public speaking and debating on social issues?", type: "law" },
  { q: "Are you curious about building apps, coding, or managing data?", type: "engineering" },
  { q: "Do you prefer working with machines, tools, or building physical models?", type: "polytechnic" },
  { q: "Are you interested in organizing events or managing teams of people?", type: "management" },
  { q: "Do you have a keen interest in laboratory experiments and research?", type: "medical" },
  { q: "Do you like writing stories, blogs, or reporting news?", type: "arts" }
];

// --- EXAM DATA ---
const examData = [
  // Engineering
  { name: 'JEE Main', cat: 'Engineering', site: 'https://jeemain.nta.nic.in/', detail: 'Gateway to NITs, IIITs and GFTIs (NTA).' },
  { name: 'JEE Advanced', cat: 'Engineering', site: 'https://jeeadv.ac.in/', detail: 'Mandatory for IIT admissions.' },
  { name: 'BITSAT', cat: 'Engineering', site: 'https://www.bitsadmission.com/', detail: 'Admission to BITS Pilani campuses.' },
  { name: 'VITEEE', cat: 'Engineering', site: 'https://viteee.vit.ac.in/', detail: 'VIT University entrance.' },
  { name: 'COMEDK UGET', cat: 'Engineering', site: 'https://www.comedk.org/', detail: 'Private colleges in Karnataka.' },
  { name: 'MHT-CET', cat: 'Engineering', site: 'https://cetcell.mahacet.org/', detail: 'Maharashtra State CET.' },
  { name: 'KCET', cat: 'Engineering', site: 'https://cetonline.karnataka.gov.in/', detail: 'Karnataka Common Entrance Test.' },
  
  // Medical & Allied
  { name: 'NEET UG', cat: 'Medical', site: 'https://neet.nta.nic.in/', detail: 'Common entrance for MBBS/BDS/AYUSH (NTA).' },
  { name: 'AIIMS Nursing', cat: 'Medical', site: 'https://aiimsexams.ac.in/', detail: 'Nursing and BSC courses at AIIMS.' },
  { name: 'GPAT', cat: 'Allied Health', site: 'https://gpat.nta.nic.in/', detail: 'Graduate Pharmacy Aptitude Test (NTA).' },
  
  // Design & Architecture
  { name: 'NATA', cat: 'Design', site: 'https://www.nata.in/', detail: 'National Aptitude Test in Architecture.' },
  { name: 'NIFT', cat: 'Design', site: 'https://nift.ac.in/', detail: 'For Fashion Tech & Design (NTA).' },
  { name: 'NID DAT', cat: 'Design', site: 'https://admissions.nid.edu/', detail: 'National Institute of Design entrance.' },
  { name: 'UCEED', cat: 'Design', site: 'https://www.uceed.iitb.ac.in/', detail: 'Design entrance by IIT Bombay.' },
  
  // Management & Hotel Mgmt
  { name: 'CMAT', cat: 'Management', site: 'https://cmat.nta.nic.in/', detail: 'Common Management Admission Test (NTA).' },
  { name: 'NCHM JEE', cat: 'Management', site: 'https://nchmjee.nta.nic.in/', detail: 'B.Sc in Hotel Management (NTA).' },
  { name: 'IPMAT', cat: 'Management', site: 'https://www.iimidr.ac.in/', detail: 'IIM Indore 5-year Integrated Management.' },
  
  // General & Degre
  { name: 'CUET (UG)', cat: 'General', site: 'https://cuet.samarth.ac.in/', detail: 'Common entrance for 45+ Central Universities (NTA).' },
  { name: 'ICAR AIEEA (UG)', cat: 'General', site: 'https://icar.nta.nic.in/', detail: 'Agriculture and Allied Sciences entrance (NTA).' },
  
  // Special
  { name: 'CLAT', cat: 'General', site: 'https://consortiumofnlus.ac.in/', detail: 'Combined Law Admission Test for NLUs.' },
  { name: 'NDA', cat: 'Defense', site: 'https://upsc.gov.in/', detail: 'National Defence Academy by UPSC.' }
];

// --- SCHOLARSHIP DATA ---
const scholarshipData = [
  { name: 'National Scholarship Portal (NSP)', provider: 'Govt of India', desc: 'Gateway for various scholarship schemes of Central/State Govts.' },
  { name: 'Inspire Scholarship', provider: 'DST', desc: 'For students pursuing Basic and Natural Science courses.' },
  { name: 'AICTE Pragati', provider: 'AICTE', desc: 'Specially for Girl Students pursuing Technical Education.' },
  { name: 'Reliance Foundation', provider: 'Private', desc: 'Support for undergraduate students across all streams.' }
];

// --- TESTIMONIAL DATA ---
const testimonialData = [
  { name: 'Aditya R.', text: 'CareerQuest helped me navigate the complex NEET and JEE confusion. The explorer is a lifesaver!', school: 'DPS Bangalore' },
  { name: 'Sneha M.', text: 'I found my passion for Fine Arts through the assessment test. Highly recommend the counseling sessions!', school: 'St. Marys, Mumbai' },
  { name: 'Rahul K.', text: 'The scholarship finder helped me secure the Inspire scholarship. Thank you for the guidance!', school: 'KV Delhi' }
];

// --- DETAILED CAREER DATA ---
const detailedCareerData = {
  'Aeronautical': {
    eligibility: [
      'Must have completed SSLC (10th Class) from a recognized board',
      'Minimum 35–50% marks (varies by state/polytechnic)',
      'Strong foundation in Mathematics & Science preferred'
    ],
    entranceExams: [
      'State Polytechnic Entrance Exams (like POLYCET – Telangana/Andhra Pradesh)',
      'Merit-based admission (10th marks in some states)'
    ],
    roadmap: [
      { step: 'Polytechnic Diploma', detail: '3 years. Core subjects: Aerodynamics, Aircraft Structure, Propulsion, Maintenance.' },
      { step: 'Lateral Entry to B.Tech/B.E.', detail: 'Direct entry to 2nd year. Exams: AP ECET, TS ECET.' },
      { step: 'Bachelor Degree', detail: 'B.Tech/B.E. in Aeronautical / Aerospace Engineering.' },
      { step: 'Specialization (Optional)', detail: 'M.Tech / M.E., Aircraft Maintenance Engineering (AME) certification.' },
      { step: 'Career Opportunities', detail: 'Airlines, Defence (Air Force, DRDO), ISRO, Private aviation.' }
    ],
    jobRoles: ['Aircraft Maintenance Technician', 'Junior Aeronautical Engineer', 'Quality Control Inspector', 'Ground Engineer', 'Drone Operator'],
    futureScope: ['High demand in aviation & defense sectors', 'Growing field due to drone technology & space missions']
  },
  'MBBS': {
    eligibility: [
      'Must have completed 10+2 (PUC) with Physics, Chemistry, and Biology (PCB)',
      'Minimum 50% aggregate in PCB (40% for reserved categories)',
      'Minimum age of 17 years by December 31st of the admission year'
    ],
    entranceExams: [
      'NEET UG (National Eligibility cum Entrance Test) - Mandatory for all medical colleges in India including AIIMS & JIPMER'
    ],
    roadmap: [
      { step: 'MBBS Degree', detail: '4.5 years of academic study covering anatomy, physiology, pathology, pharmacology.' },
      { step: 'Compulsory Internship', detail: '1 year of mandatory rotational clinical internship in a hospital setting.' },
      { step: 'NEET PG Exam', detail: 'Clear postgraduate entrance for specialization (MD/MS).' },
      { step: 'Specialization (MD/MS)', detail: '3 years of residency in specialties like Surgery, Medicine, Pediatrics.' },
      { step: 'Super Specialization', detail: 'Optional: DM/MCh for highly specialized fields like Cardiology or Neurosurgery.' }
    ],
    jobRoles: ['General Physician', 'Surgeon', 'Medical Officer', 'Specialist Doctor', 'Clinical Researcher'],
    futureScope: ['Evergreen profession with zero unemployment', 'High demand for specialists in tier-2 and tier-3 cities', 'Opportunities in telemedicine and healthcare administration']
  },
  'Computer Science': {
    eligibility: [
      'Complete 10+2 (PUC) with Physics, Chemistry, and Mathematics (PCM)',
      'Minimum 60% aggregate in PCM preferred for top colleges'
    ],
    entranceExams: [
      'JEE Main (for NITs, IIITs, GFTIs)',
      'JEE Advanced (mandatory for IITs)',
      'State level CETs (KCET, MHT-CET, WBJEE)',
      'University specific exams (BITSAT, VITEEE, SRMJEEE)'
    ],
    roadmap: [
      { step: 'B.Tech / B.E.', detail: '4-year degree covering programming, data structures, algorithms, AI, networks.' },
      { step: 'Internships', detail: 'Crucial practical experience during 3rd and 4th years in tech companies.' },
      { step: 'Campus Placements / GATE', detail: 'Secure a job via campus drives or clear GATE for M.Tech/PSU jobs.' },
      { step: 'Professional Career', detail: 'Start as Software Engineer, Data Analyst, or Cloud Engineer.' },
      { step: 'Advanced Roles', detail: 'Transition to Senior Developer, Architect, or Engineering Manager.' }
    ],
    jobRoles: ['Software Developer', 'Data Scientist', 'Cloud Architect', 'Cybersecurity Analyst', 'AI/ML Engineer'],
    futureScope: ['Fastest growing sector globally', 'Massive demand for AI, Blockchain, and Cybersecurity skills', 'High starting salaries and remote work opportunities']
  },
  'Chartered Accountant (CA)': {
    eligibility: [
      'Can enroll for Foundation course after passing class 10th',
      'Can appear for Foundation exam after appearing in class 12th exams',
      'Students from any stream (Commerce, Science, Arts) can apply, though Commerce background helps'
    ],
    entranceExams: [
      'CA Foundation Exam (Entry level test conducted by ICAI)'
    ],
    roadmap: [
      { step: 'CA Foundation', detail: 'Clear the entry-level exam covering accounting, laws, economics, and math.' },
      { step: 'CA Intermediate', detail: '8 papers divided into 2 groups. Must clear at least one group to start articleship.' },
      { step: 'Articleship Training', detail: '3 years of mandatory practical training under a practicing Chartered Accountant.' },
      { step: 'CA Final', detail: 'Clear the 8 final papers (2 groups) during the last 6 months of articleship.' },
      { step: 'ICAI Membership', detail: 'Become a certified Chartered Accountant and start practice or join corporate.' }
    ],
    jobRoles: ['Statutory Auditor', 'Tax Consultant', 'Financial Controller', 'Investment Banker', 'Chief Financial Officer (CFO)'],
    futureScope: ['Statutory requirement for all major businesses in India', 'High demand in consulting firms (Big 4)', 'Excellent global mobility and high earning potential']
  },
  'Actuarial Science': {
    eligibility: [
      'Must have completed PUC / 10+2 (any stream)',
      'Mathematics is highly recommended',
      'Minimum 60% or above (preferred for top institutes)',
      'Strong analytical and problem-solving skills required'
    ],
    entranceExams: [
      'Institute of Actuaries of India: ACET (Actuarial Common Entrance Test)',
      'International Pathways: Society of Actuaries, Institute and Faculty of Actuaries'
    ],
    roadmap: [
      { step: 'Initial Qualification', detail: 'Register with IAI and clear ACET or meet exemption criteria.' },
      { step: 'Core Education', detail: 'Pursue B.Sc. in Actuarial Science / Mathematics / Statistics / Finance (3–4 years). Simultaneously clear actuarial papers.' },
      { step: 'Professional Exams', detail: 'Clear multiple actuarial levels (Core Principles, Practices, Specialist) alongside degree/job.' },
      { step: 'Skill Development', detail: 'Internships in Insurance or Finance. Build skills in Data analysis, Risk management, R, Python.' },
      { step: 'Professional Career', detail: 'Progress from Actuarial Analyst → Associate Actuary → Fellow Actuary.' }
    ],
    jobRoles: ['Actuarial Analyst', 'Risk Analyst', 'Data Analyst', 'Insurance Underwriter', 'Fellow Actuary'],
    futureScope: ['One of the highest-paying careers in commerce field', 'Global career opportunities', 'High integration with advanced data science and risk modeling']
  },
  'Company Secretary (CS)': {
    eligibility: [
      'Must have completed PUC / 10+2 (any stream)',
      'Students from Commerce stream are preferred',
      'Minimum percentage as per institute norms',
      'Strong interest in law, business, and corporate governance'
    ],
    entranceExams: [
      'CSEET (Company Secretary Executive Entrance Test) conducted by ICSI'
    ],
    roadmap: [
      { step: 'Initial Qualification', detail: 'Register for CSEET after 12th and clear the entrance test.' },
      { step: 'Core Education', detail: 'Complete the Executive Programme and Professional Programme (3–4 years).' },
      { step: 'Practical Training', detail: 'Mandatory internship under a practicing Company Secretary or corporate firm.' },
      { step: 'Skill Development', detail: 'Develop skills in Corporate Law & Governance, Compliance Management, and Financial Analysis.' },
      { step: 'Entry-Level Job', detail: 'Start as Junior CS, Compliance Officer, or Corporate Legal Advisor.' }
    ],
    jobRoles: ['Company Secretary', 'Compliance Officer', 'Legal Advisor (Corporate)', 'Corporate Governance Executive'],
    futureScope: ['Can become key managerial personnel in companies', 'High demand in corporate sector globally', 'Progress to Senior CS or top managerial positions']
  },
  'Psychology': {
    eligibility: [
      'Must have completed PUC / 10+2 (any stream)',
      'Students from Arts / Science (Biology) background preferred',
      'Minimum 50–60% marks (varies by college)',
      'Interest in human behavior, emotions, and mental health'
    ],
    entranceExams: [
      'Merit (12th marks) in many colleges',
      'University-level entrance exams such as CUET',
      'Other university-specific tests'
    ],
    roadmap: [
      { step: 'Initial Qualification', detail: 'Apply for undergraduate courses after 12th. Clear entrance/merit-based admissions.' },
      { step: 'Core Education', detail: 'Pursue B.A. / B.Sc. in Psychology (3–4 years). Learn basics of behavior, cognition, and mental processes.' },
      { step: 'Specialization (Recommended)', detail: 'Pursue M.A. / M.Sc. in fields like Clinical, Counseling, or Industrial Psychology.' },
      { step: 'Skill Development', detail: 'Internships in Hospitals, Schools, or NGOs. Develop skills in communication, observation, and counseling.' },
      { step: 'Entry-Level Job', detail: 'Start as a Counselor, Psychology Assistant, HR Executive, or Behavioral Trainer.' }
    ],
    jobRoles: ['Counselor', 'Psychology Assistant', 'HR Executive', 'Behavioral Trainer', 'Clinical Psychologist'],
    futureScope: ['Psychologist → Senior Psychologist → Specialist', 'Option to become licensed Clinical Psychologist (with further certification)', 'Growing demand due to increased mental health awareness']
  },
  'BA LLB (Integrated)': {
    eligibility: [
      'Must have completed PUC / 10+2 in any stream (Arts/Science/Commerce)',
      'Minimum 45-50% aggregate marks in 12th board exams',
      'No strict age limit for most national level exams currently'
    ],
    entranceExams: [
      'CLAT (Common Law Admission Test) for National Law Universities',
      'AILET (All India Law Entrance Test) for NLU Delhi',
      'LSAT India for various private colleges',
      'State level exams like MH-CET Law, AP LAWCET'
    ],
    roadmap: [
      { step: 'Entrance Preparation', detail: 'Prepare for exams like CLAT focusing on Legal Aptitude, GK, and Reasoning.' },
      { step: '5-Year Degree', detail: 'Complete the integrated BA LLB program covering both arts and core law subjects.' },
      { step: 'Internships', detail: 'Mandatory internships under practicing advocates, law firms, or NGOs.' },
      { step: 'Bar Council Registration', detail: 'Clear the All India Bar Examination (AIBE) to practice in courts.' },
      { step: 'Professional Career', detail: 'Start as Junior Advocate, Legal Advisor, or join Corporate Law firms.' }
    ],
    jobRoles: ['Litigation Lawyer', 'Corporate Lawyer', 'Legal Advisor', 'Judge / Judiciary', 'Legal Analyst'],
    futureScope: ['High demand in the corporate sector for firm compliance and mergers', 'Opportunities to enter the judiciary through judicial services exams', 'Lucrative career in prominent law firms']
  },
  'Data Science': {
    eligibility: [
      'Must have completed 10+2 with Mathematics/Computer Science',
      'Strong analytical and mathematical skills',
      'Some institutions accept any stream provided the student has a strong math foundation'
    ],
    entranceExams: [
      'JEE Main / Advanced (for B.Tech Data Science at premier institutes)',
      'CUET (for B.Sc / BA Data Science in central universities)',
      'Institute-specific entrances like BITSAT, VITEEE'
    ],
    roadmap: [
      { step: 'Undergraduate Degree', detail: 'B.Tech / B.Sc in Data Science, Computer Science, or Statistics (3-4 years).' },
      { step: 'Skill Building', detail: 'Master Python, R, SQL, Machine Learning algorithms, and data visualization tools.' },
      { step: 'Projects & Internships', detail: 'Build a strong portfolio of data projects and intern at tech companies.' },
      { step: 'Entry Level Role', detail: 'Start as a Data Analyst, Junior Data Scientist, or Business Intelligence Analyst.' },
      { step: 'Advanced Path', detail: "Pursue Master's (M.Tech/MS) or advance to Senior Data Scientist / ML Engineer roles." }
    ],
    jobRoles: ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst', 'Data Engineer', 'Business Intelligence Analyst'],
    futureScope: ['Voted as the "Sexiest Job of the 21st Century" with immense global demand', 'High earning potential across various industries including tech, finance, and healthcare', 'Rapid growth into AI and deep learning fields']
  },
  'Journalism': {
    eligibility: [
      'Completed 10+2 / PUC in any stream',
      'Excellent communication and writing skills',
      'Awareness of current affairs and strong analytical thinking'
    ],
    entranceExams: [
      'CUET for central universities (B.A. in Journalism/Mass Comm)',
      'IIMC Entrance Exam (for PG programs later)',
      'University-specific tests (e.g., Christ University, Symbiosis SET)'
    ],
    roadmap: [
      { step: 'Undergraduate Degree', detail: 'Complete B.A. / B.Sc. in Journalism and Mass Communication (3 years).' },
      { step: 'Practical Exposure', detail: 'Write for college magazines, start a blog, and build a writing portfolio.' },
      { step: 'Internships', detail: 'Intern at news agencies, media houses, or digital content platforms.' },
      { step: 'Entry Level Job', detail: 'Start as a Cub Reporter, Content Writer, or Junior Copy Editor.' },
      { step: 'Career Advancement', detail: 'Become a Senior Correspondent, Editor, or News Anchor.' }
    ],
    jobRoles: ['Journalist / Reporter', 'News Anchor', 'Content Writer / Editor', 'Public Relations Executive', 'Digital Media Specialist'],
    futureScope: ['Shift towards digital media and independent journalism offers new avenues', 'Opportunities in corporate communications and public relations', 'Global reach through digital platforms and social media']
  },
  'BDS (Dental)': {
    eligibility: [
      'Must have completed 10+2 (PUC) with Physics, Chemistry, and Biology (PCB)',
      'Minimum 50% aggregate in PCB (40% for reserved categories)',
      'Minimum age of 17 years by December 31st of admission year'
    ],
    entranceExams: [
      'NEET UG (National Eligibility cum Entrance Test) - Mandatory'
    ],
    roadmap: [
      { step: 'BDS Degree', detail: '4 years of academic study on dental sciences and basic medical subjects.' },
      { step: 'Compulsory Internship', detail: '1 year of mandatory rotational internship to gain clinical experience.' },
      { step: 'State Dental Council', detail: 'Register with the State Dental Council to begin practice as a Dentist.' },
      { step: 'MDS (Optional)', detail: 'Appear for NEET MDS for specialization (e.g., Orthodontics, Oral Surgery).' },
      { step: 'Career / Practice', detail: 'Set up a private clinic, join a hospital, or enter academia.' }
    ],
    jobRoles: ['General Dentist', 'Orthodontist (MDS)', 'Oral and Maxillofacial Surgeon', 'Public Health Dentist', 'Cosmetic Dentist'],
    futureScope: ['High potential in private practice and private clinics', 'Growing demand for cosmetic dentistry and specialized treatments', 'Opportunities abroad with additional licensing exams']
  },
  'Mechanical': {
    eligibility: [
      'Must have completed 10+2 (PUC) with Physics, Chemistry, and Mathematics (PCM)',
      'Minimum 50-60% aggregate in PCM (varies by college)'
    ],
    entranceExams: [
      'JEE Main (NITs/IIITs)',
      'JEE Advanced (IITs)',
      'KCET / MHT-CET / WBJEE (State Colleges)',
      'VITEEE / BITSAT / SRMJEEE (Private Universities)'
    ],
    roadmap: [
      { step: 'B.E. / B.Tech', detail: '4-year degree focusing on thermodynamics, mechanics, design, and manufacturing.' },
      { step: 'Skill Acquisition', detail: 'Learn CAD/CAM tools (AutoCAD, SolidWorks) and coding (Python/MATLAB).' },
      { step: 'Internships', detail: 'Practical experience in automotive, power plants, or manufacturing units.' },
      { step: 'GATE / GRE (Optional)', detail: 'For higher studies (M.Tech/MS) or PSU jobs in India.' },
      { step: 'Professional Career', detail: 'Start as Field Engineer, Design Engineer, or Production Manager.' }
    ],
    jobRoles: ['Design Engineer', 'Production Engineer', 'Maintenance Engineer', 'Automotive Engineer', 'Robotics Specialist'],
    futureScope: ['Crucial for Industry 4.0 and Electric Vehicle (EV) revolution', 'Opportunities in renewable energy and aerospace', 'Core sector stability with global demand']
  },
  'B.Sc Nursing': {
    eligibility: [
      '10+2 (PUC) with Physics, Chemistry, and Biology (PCB)',
      'Minimum 45-50% aggregate marks',
      'Should be medically fit'
    ],
    entranceExams: [
      'AIIMS Nursing Entrance',
      'Indian Army B.Sc Nursing (MNS)',
      'State-level nursing CETs',
      'JIPMER Nursing'
    ],
    roadmap: [
      { step: 'B.Sc Nursing Degree', detail: '4-year professional course including clinical training and community health.' },
      { step: 'Registration', detail: 'Register as a Nurse and Midwife with the State Nursing Council (RNRM).' },
      { step: 'Clinical Experience', detail: 'Work in multi-specialty hospitals to gain hands-on expertise.' },
      { step: 'Specialization (Optional)', detail: 'M.Sc Nursing in Pediatrics, Psychiatry, or Critical care.' },
      { step: 'Advanced Path', detail: 'Nursing Superintendent, Clinical Instructor, or Nurse Educator.' }
    ],
    jobRoles: ['Staff Nurse', 'Registered Nurse', 'Nurse Educator', 'Community Health Officer', 'Military Nurse'],
    futureScope: ['High demand globally (UK, Canada, Gulf countries)', 'Expansion of private healthcare in India ensures steady growth', 'Emerging roles in telehealth and home-based care']
  },
  'BBA': {
    eligibility: [
      '10+2 (PUC) in any stream (Commerce, Science, or Arts)',
      'Minimum 50% aggregate marks in 12th board'
    ],
    entranceExams: [
      'IPMAT (IIM Indore/Rohtak)',
      'JIPMAT (IIM Jammu/Bodh Gaya)',
      'CUET (Central Universities)',
      'SET (Symbiosis), NPAT (NMIMS)'
    ],
    roadmap: [
      { step: 'BBA Degree', detail: '3-year undergraduate degree in Business Administration/Management.' },
      { step: 'Specialization', detail: 'Focus on Finance, Marketing, HR, or Digital Business in the final year.' },
      { step: 'Internships', detail: 'Gain corporate exposure in sales, marketing, or operations roles.' },
      { step: 'CAT / GMAT / XAT', detail: 'Prepare for top-tier MBA programs after gaining some work experience.' },
      { step: 'Management Career', detail: 'Join as Management Trainee, Business Analyst, or Marketing Executive.' }
    ],
    jobRoles: ['Business Development Executive', 'Marketing Manager', 'Human Resource Manager', 'Financial Analyst', 'Operations Lead'],
    futureScope: ['Foundation for leadership roles in any industry', 'High potential for entrepreneurship and startups', 'Strong salaries for graduates from premier institutes']
  },
  'Fine Arts': {
    eligibility: [
      '10+2 (PUC) in any stream',
      'Artistic aptitude and portfolio (often required during admission)'
    ],
    entranceExams: [
      'BFA Entrance (College specific)',
      'CUET (for BFA in Central Universities)',
      'State-level Fine Arts CETs'
    ],
    roadmap: [
      { step: 'BFA Degree', detail: '4-year Bachelor of Fine Arts specializing in Painting, Sculpture, or Applied Art.' },
      { step: 'Portfolio Building', detail: 'Participate in exhibitions and create a diverse body of original work.' },
      { step: 'Skill Diversification', detail: 'Learn digital tools like Adobe Creative Suite (Photoshop, Illustrator).' },
      { step: 'Freelancing / Agency', detail: 'Start as an Illustrator, Graphic Designer, or Art Teacher.' },
      { step: 'Artist Career', detail: 'Exhibit in galleries, work in advertising, or join the film/gaming industry.' }
    ],
    jobRoles: ['Professional Artist', 'Graphic Designer', 'Art Director', 'Illustrator', 'Visualizer'],
    futureScope: ['Growing digital economy needs visual storytellers', 'High demand in gaming, UI/UX, and advertising', 'Ability to build a global brand through social media']
  },
  'Interior Designing': {
    eligibility: [
      '10+2 (PUC) in any stream',
      'Creativity and spatial awareness'
    ],
    entranceExams: [
      'NID DAT',
      'UCEED',
      'NATA (for B.Arch / Interior focus)',
      'Institutional tests (UID, CEPT, Pearl Academy)'
    ],
    roadmap: [
      { step: 'B.Des / B.Voc', detail: '3 or 4-year degree in Interior Design/Space Planning.' },
      { step: 'Software Mastery', detail: 'Learn SketchUp, 3ds Max, V-Ray, and AutoCAD.' },
      { step: 'Internships', detail: '6-month mandatory internship with design firms or architects.' },
      { step: 'Professional Practice', detail: 'Start as Junior Interior Designer or Site Supervisor.' },
      { step: 'Consultancy', detail: 'Launch private practice or lead design in corporate real estate.' }
    ],
    jobRoles: ['Residential Designer', 'Commercial Interior Designer', 'Set Designer', 'Furniture Designer', 'Space Planner'],
    futureScope: ['Booming real estate and luxury living demand expert designers', 'Shift towards sustainable and smart home design', 'Increasing focus on commercial and retail aesthetics']
  },
  'Fashion Technology': {
    eligibility: [
      '10+2 (PUC) with Science (PCM) preferred for B.FTech; any stream for B.Des Fashion'
    ],
    entranceExams: [
      'NIFT Entrance Exam (B.Des / B.FTech)',
      'NID DAT',
      'AIEED (Arch College of Design)'
    ],
    roadmap: [
      { step: 'B.Des / B.FTech', detail: '4-year program at NIFT or similar premier design institutes.' },
      { step: 'Technical Skills', detail: 'Learn garment construction, textile science, and CAD for fashion.' },
      { step: 'Graduation Project', detail: 'Design and showcase a complete fashion collection.' },
      { step: 'Industry Placement', detail: 'Join export houses, retail giants, or luxury brands.' },
      { step: 'Fashion Career', detail: 'Become a Fashion Designer, Merchandiser, or Stylist.' }
    ],
    jobRoles: ['Fashion Designer', 'Garment Technologist', 'Fashion Merchandiser', 'Textile Analyst', 'Fashion Stylist'],
    futureScope: ['India is a global hub for textile and garment manufacturing', 'Rise of sustainable fashion and e-commerce brands', 'Global opportunities in luxury fashion capitals']
  },
  'BAMS (Ayurveda)': {
    eligibility: [
      '10+2 (PUC) with Physics, Chemistry, and Biology (PCB)',
      'Minimum 50% aggregate in PCB'
    ],
    entranceExams: [
      'NEET UG (Mandatory national entrance)'
    ],
    roadmap: [
      { step: 'BAMS Degree', detail: '5.5 years including 1 year of internship. Study Ayurvedic principles and modern medicine.' },
      { step: 'Internship', detail: 'Mandatory clinical rotations in Ayurvedic and General hospitals.' },
      { step: 'Registration', detail: 'Register with the State/Central Council of Indian Medicine.' },
      { step: 'Specialization (MD/MS)', detail: 'Pursue PG in specialties like Kayachikitsa, Shalya Tantra.' },
      { step: 'Practice / Research', detail: 'Start clinical practice, join wellness centers, or enter Ayurvedic research.' }
    ],
    jobRoles: ['Ayurvedic Doctor (Vaidya)', 'Medical Officer', 'Wellness Consultant', 'Ayurvedic Pharmacist', 'Researcher'],
    futureScope: ['Global resurgence in holistic and natural healing (Ayush)', 'Government support for integrated medicine in India', 'Expansion of wellness tourism and herbal industry']
  },
  'B.Pharma': {
    eligibility: [
      '10+2 (PUC) with Physics, Chemistry, and Mathematics/Biology (PCM/PCB)'
    ],
    entranceExams: [
      'MHT-CET / KCET / AP EAPCET (State-level)',
      'BITSAT (for BITS campuses)',
      'GPAT (for PG later)'
    ],
    roadmap: [
      { step: 'B.Pharmacy Degree', detail: '4-year program covering pharmacology, pharmaceutics, and medicinal chemistry.' },
      { step: 'R&D / Quality Lab', detail: 'Internships in pharmaceutical production or research labs.' },
      { step: 'Registration', detail: 'Register as a Pharmacist with the State Pharmacy Council.' },
      { step: 'M.Pharma / MBA (Optional)', detail: 'Specialize in Drug Discovery, Quality Assurance, or Pharma Management.' },
      { step: 'Career', detail: 'Join Pfizer, Cipla, Sun Pharma or start a retail/wholesale pharmacy.' }
    ],
    jobRoles: ['Pharmacist', 'Drug Inspector', 'Quality Control Analyst', 'Medical Representative', 'Research Scientist'],
    futureScope: ['India is "Pharmacy of the World" with massive export growth', 'Continuous demand for clinical research and drug safety (Pharmacovigilance)', 'Steady growth in retail pharmacy chains']
  },
  'Interior Decoration': {
    eligibility: [
      'SSLC (10th) from a recognized board',
      'Creative mindset and interest in home styling'
    ],
    entranceExams: [
      'State Polytechnic Entrance Exams (in some states)',
      'Direct Admission in many institutes'
    ],
    roadmap: [
      { step: 'Polytechnic Diploma', detail: '3-year course focusing on upholstery, color schemes, and lighting.' },
      { step: 'Apprenticeship', detail: 'Work under established decorators or furniture showrooms.' },
      { step: 'Project Portfolios', detail: 'Execute small residential projects to build a visual track record.' },
      { step: 'Degree Transition (Optional)', detail: 'Direct 2nd year entry into B.Des Interior Design via Lateral Entry.' },
      { step: 'Independent Practice', detail: 'Start a styling consultancy or joint venture with architects.' }
    ],
    jobRoles: ['Interior Decorator', 'Visual Merchandiser', 'Event Decorator', 'Furniture Stylist', 'Consultant'],
  },
  'Agriculture': {
    eligibility: [
      'Must have completed SSLC (10th) from a recognized board',
      'Minimum required marks as specified by the state board or polytechnic college',
      'Interests in farming techniques and rural development prefered'
    ],
    entranceExams: [
      'State-level Polytechnic Entrance Exams (e.g., POLYCET)',
      'Direct Merit-based admission (based on 10th marks in some states)',
      'Contact our counselors for specific guidance in your state'
    ],
    roadmap: [
      { step: 'Initial Qualification', detail: 'Enroll in a Diploma in Agriculture (2–3 years) after 10th.' },
      { step: 'Core Education', detail: 'Study subjects like Agronomy, Soil Science, Horticulture, Plant Protection, and Farm Management.' },
      { step: 'Skill Development', detail: 'Gain hands-on experience through field training, farm visits, and internships in agri-farms or NGOs.' },
      { step: 'Entry Level Job', detail: 'Start your career as an Agriculture Assistant, Field Officer, or Farm Supervisor.' },
      { step: 'Higher Education', detail: 'Pursue B.Sc Agriculture or B.Tech in Agricultural Engineering for advanced growth.' }
    ],
    jobRoles: ['Agriculture Assistant', 'Field Officer', 'Farm Supervisor', 'Agri Technician', 'Farm Manager'],
    futureScope: [
      'B.Sc Agriculture / B.Tech in Agricultural Engineering',
      'Specialized certifications in Organic Farming or Agri-Business',
      'Opportunities in Govt Depts, Fertilizer companies, and Agri-Tech startups',
      'High scope for Self-employment (Modern Farming / Agri-business)'
    ]
  },
  'Electronics & Communication': {
    eligibility: [
      'Must have completed SSLC (10th) from a recognized board',
      'Minimum required marks (varies by state/college)',
      'Strong logical thinking and interest in gadgets and circuits preferred'
    ],
    entranceExams: [
      'State-level polytechnic entrance exams (like POLYCET)',
      'Merit-based admission (based on 10th marks)',
      'Contact our counselors for specific exam guidance in your state'
    ],
    roadmap: [
      { step: 'Initial Qualification', detail: 'Enroll in a Diploma in Electronics & Communication Engineering (2–3 years) after 10th.' },
      { step: 'Core Education', detail: 'Study Electronic Devices, Digital Electronics, Communication Systems, Microprocessors, and Embedded Systems.' },
      { step: 'Skill Development', detail: 'Gain exposure through lab work, circuit design, PCB design, IoT training, and telecom internships.' },
      { step: 'Entry Level Job', detail: 'Start as an Electronics Technician, Junior Engineer, Service Engineer, or Telecom Technician.' },
      { step: 'Higher Education', detail: 'Pursue B.Tech / B.E. via lateral entry (direct 2nd year) or specialized certifications in VLSI/Robotics.' }
    ],
    jobRoles: ['Electronics Technician', 'Junior Engineer', 'Service Engineer', 'Telecom Technician', 'Embedded Systems Trainee'],
    futureScope: [
      'B.Tech / B.E. in Electronics & Communication (Lateral Entry)',
      'Certifications in Embedded Systems, IoT, VLSI, or Robotics',
      'Roles in Telecom (Airtel, Jio), Manufacturing, and Automation industries',
      'Opportunities in Government Depts and Public Sector Units (PSUs)'
    ]
  },
  'Medical Lab Tech': {
    eligibility: [
      'Must have completed SSLC (10th) from a recognized board',
      'Minimum required marks (varies by state/college)',
      'Interest in biological sciences and laboratory work'
    ],
    entranceExams: [
      'State-level Paramedical Board Entrance Exams',
      'Merit-based admission (based on 10th marks)',
      'Institutional specific entrance tests for private colleges'
    ],
    roadmap: [
      { step: 'Initial Qualification', detail: 'Enroll in a Diploma in Medical Laboratory Technology (DMLT) after 10th.' },
      { step: 'Core Education', detail: 'Study Hematology, Microbiology, Clinical Biochemistry, and Pathology.' },
      { step: 'Practical Training', detail: '6-month mandatory internship in a recognized hospital or diagnostic lab.' },
      { step: 'Entry Level Job', detail: 'Start as a Lab Technician, Phlebotomist, or Laboratory Assistant.' },
      { step: 'Advanced Path', detail: 'Pursue B.Voc or B.Sc in MLT for senior roles and management positions.' }
    ],
    jobRoles: ['Medical Lab Technician', 'Phlebotomist', 'Lab Manager (Advanced)', 'Research Assistant', 'Quality Control Technician'],
    futureScope: [
      'High demand in hospitals, diagnostic chains (Pathkind, Dr Lal PathLabs), and blood banks',
      'Opportunities in pharmaceutical research and diagnostic equipment manufacturing',
      'Option to start own private diagnostic collection center with certifications'
    ]
  },
  'Electrician': {
    eligibility: [
      'Must have completed SSLC (10th) from a recognized board',
      'Should have studied Science and Mathematics in 10th',
      'Physical fitness and technical aptitude preferred'
    ],
    entranceExams: [
      'All India Trade Test (AITT) for ITI certification',
      'State level ITI entrance exams in some regions'
    ],
    roadmap: [
      { step: 'Core Training', detail: 'Complete the 2-year ITI Electrician course covering domestic and industrial wiring.' },
      { step: 'Apprenticeship', detail: 'Complete 1 year of mandatory apprenticeship in industries like Power, Railways, or Manufacturing.' },
      { step: 'Certification', detail: 'Obtain a Wireman License from the State Licensing Board.' },
      { step: 'Entry Level Job', detail: 'Start as an Electrician, Maintenance Technician, or Panel Wireman.' },
      { step: 'Growth', detail: 'Progress to Electrical Supervisor, Government Contractor, or seek Lateral Entry to Diploma.' }
    ],
    jobRoles: ['Domestic Electrician', 'Industrial Electrician', 'Maintenance Technician', 'Electrical Supervisor', 'Service Engineer'],
    futureScope: [
      'Stability in construction, power plants, and renewable energy (Solar/Wind) sectors',
      'High demand in Indian Railways and Public Works Departments (PWD)',
      'Excellent scope for self-employment as a licensed electrical contractor'
    ]
  },
  'Civil': {
    eligibility: [
      'Must have completed 10+2 with Physics, Chemistry, and Mathematics (PCM)',
      'Minimum 50-60% aggregate in PCM (varies by college)'
    ],
    entranceExams: [
      'JEE Main (for NITs and Central Universities)',
      'JEE Advanced (for IITs)',
      'State-level Engineering Entrance (like WBJEE, KCET, MHT-CET)'
    ],
    roadmap: [
      { step: 'B.E. / B.Tech', detail: '4-year degree focusing on Structural Engineering, Concrete Technology, and Geotechnical Engineering.' },
      { step: 'Skill Building', detail: 'Master software tools like AutoCAD, Revit, and STAAD Pro.' },
      { step: 'Field Experience', detail: 'Site internships during final years to understand material management and labor coordination.' },
      { step: 'Professional Role', detail: 'Start as a Junior Engineer, Site Engineer, or Quantity Surveyor.' },
      { step: 'Advanced Growth', detail: 'Pursue M.Tech in Structural/Transportation Engineering or clear IES/GATE for elite PSU jobs.' }
    ],
    jobRoles: ['Civil Engineer', 'Structural Designer', 'Site Supervisor', 'City Planner', 'Project Manager'],
    futureScope: [
      'Massive expansion in National Highways (NHAI) and Smart City missions',
      'Sustainable construction and Green Building design is a rising niche',
      'Global demand in infrastructure-intensive regions like the Middle East'
    ]
  },
  'Physiotherapy': {
    eligibility: [
      'Must have completed 10+2 (PUC) with Physics, Chemistry, and Biology (PCB)',
      'Minimum 50% aggregate in 12th board exams'
    ],
    entranceExams: [
      'NEET UG (required for some government medical colleges)',
      'State/University specific entrance exams (like CET)',
      'Merit-based admission in many private universities'
    ],
    roadmap: [
      { step: 'BPT Degree', detail: '4-year academic course followed by a 6-month mandatory internship.' },
      { step: 'Skill Mastery', detail: 'Clinical training in exercise therapy, electrotherapy, and manual techniques.' },
      { step: 'Registration', detail: 'Register with the Indian Association of Physiotherapists (IAP).' },
      { step: 'Career Start', detail: 'Join a Multi-specialty hospital, Sports Rehab center, or Home-healthcare provider.' },
      { step: 'Specialization (Optional)', detail: 'Pursue MPT in Orthopedics, Neurology, or Sports Physiotherapy.' }
    ],
    jobRoles: ['Physiotherapist', 'Sports Therapist', 'Rehabilitation Specialist', 'Ergonomic Consultant', 'Home Health Aide'],
    futureScope: [
      'Increasing focus on sports medicine and fitness recovery in India',
      'Geriatric (elderly) care and post-surgery rehab are high-growth areas',
      'Flexible career with options for home-visiting or setting up a private clinic'
    ]
  },
  'B.Com Professional': {
    eligibility: [
      'Must have completed 10+2 in any stream (Commerce preferred)',
      'Minimum 50-60% aggregate (varies by university)'
    ],
    entranceExams: [
      'CUET (for Central Universities)',
      'Direct Merit-based admission in top colleges',
      'University specific tests (e.g., Christ University, NMIMS)'
    ],
    roadmap: [
      { step: '3-Year Degree', detail: 'Focus on Accountancy, Finance, Business Law, and Taxation.' },
      { step: 'Professional Certs', detail: 'Simultaneously clear Tally Prime, GST Practitioner, or foundation levels of CA/CS.' },
      { step: 'Internships', detail: 'Audit/Finance internships in CA firms or corporate finance departments.' },
      { step: 'Early Career', detail: 'Join as an Account Executive, Financial Analyst, or Audit Assistant.' },
      { step: 'Advanced Path', detail: 'Pursue MBA Finance, M.Com, or professional courses like CFA or ACCA.' }
    ],
    jobRoles: ['Finance Executive', 'Accountant', 'Tax Consultant', 'Auditor', 'Investment Banker (with MBA)'],
    futureScope: [
      'Critical roles in Fintech and corporate auditing (Big 4 firms)',
      'Growth in e-commerce and retail finance management',
      'Solid foundation for transitioning into Management and Entrepreneurship'
    ]
  },
  'Fitter': {
    eligibility: [
      'Must have completed SSLC (10th) from a recognized board',
      'Should have studied Science and Mathematics in 10th',
      'Physical stamina and manual dexterity preferred'
    ],
    entranceExams: [
      'All India Trade Test (AITT)',
      'State-level ITI Entrance Exams'
    ],
    roadmap: [
      { step: 'Core Training', detail: 'Complete the 2-year ITI Fitter course focusing on machine components, assembly, and maintenance.' },
      { step: 'Industrial Internship', detail: 'Gain 1 year of practical training in a heavy industry or manufacturing unit (Apprenticeship).' },
      { step: 'Skill Certification', detail: 'Obtain NCVT / SCVT certifications to be eligible for PSU jobs.' },
      { step: 'Entry Level Job', detail: 'Start as an Assembly Fitter, Pipe Fitter, or Machine Operator.' },
      { step: 'Advanced Path', detail: 'Progress to Maintenance Lead, Production Supervisor, or seek Lateral Entry to Mechanical Diploma.' }
    ],
    jobRoles: ['Assembly Fitter', 'Maintenance Fitter', 'Pipe Fitter', 'Machine Technician', 'Production Supervisor'],
    futureScope: [
      'Critical roles in Public Sector Units (ONGC, BHEL, SAIL, Indian Railways)',
      'High demand in global manufacturing hubs and oil & gas industries',
      'Scope for starting small-scale fabrication or machine maintenance workshops'
    ]
  },
  'Medical X-Ray Tech': {
    eligibility: [
      'Must have completed SSLC (10th) from a recognized board',
      'Interest in physics, human anatomy, and medical technology'
    ],
    entranceExams: [
      'State Paramedical Board Entrance Exams',
      'Direct Merit-based admission in many institutes'
    ],
    roadmap: [
      { step: 'Diploma Course', detail: 'Complete a 2-year Diploma in X-Ray Technology (DXRT) or Radiography.' },
      { step: 'Clinical Training', detail: '6 months of mandatory internship in a hospital radiology department.' },
      { step: 'Certification', detail: 'Register with the State Paramedical Council/Atomic Energy Regulatory Board (AERB).' },
      { step: 'Entry Level Job', detail: 'Start as an X-Ray Technician, Radiography Assistant, or Junior Imaging Tech.' },
      { step: 'Advanced Growth', detail: 'Specialize in MRI/CT Scan or pursue B.Sc in Medical Imaging Technology.' }
    ],
    jobRoles: ['X-Ray Technician', 'Radiology Assistant', 'CT/MRI Technician (with extra training)', 'Lead Imaging Technician'],
    futureScope: [
      'Steady growth in diagnostic centers and multi-specialty hospitals',
      'Increasing demand for imaging specialists in specialized trauma and cardiac centers',
      'Opportunities to move into sales and application of medical imaging equipment'
    ]
  },
  'AI & Robotics': {
    eligibility: [
      'Must have completed 10+2 with Physics, Chemistry, and Mathematics (PCM)',
      'Strong logical reasoning and aptitude for coding and mathematics'
    ],
    entranceExams: [
      'JEE Main / Advanced',
      'University-level Entrance Exams (BITSAT, VITEEE, SRMJEEE)'
    ],
    roadmap: [
      { step: 'B.E. / B.Tech', detail: '4-year degree in AI & Robotics, Mechatronics, or Computer Science with AI specialization.' },
      { step: 'Project Development', detail: 'Build portfolios in machine learning, sensor integration, and robot control systems.' },
      { step: 'Research/Internships', detail: 'Join high-tech labs or internships in companies focusing on automation or autonomous vehicles.' },
      { step: 'Professional Career', detail: 'Start as a Robotics Engineer, AI Specialist, or Automation Developer.' },
      { step: 'Advanced Roles', detail: 'Transition to AI Architect, Senior Robotics Scientist, or Mechatronics Consultant.' }
    ],
    jobRoles: ['Robotics Engineer', 'AI/ML Specialist', 'Automation Engineer', 'Mechatronics Developer', 'Computer Vision Scientist'],
    futureScope: [
      'Frontier field for Industry 4.0, autonomous drones, and surgical robotics',
      'Explosive growth in AI applications across finance, healthcare, and logistics',
      'Highest compensation brackets in the engineering sector globally'
    ]
  }
};

// --- NAVIGATION ---
let currentExplorerMode = '10th';

function navigateTo(pageId, extra = null) {
  // Update UI
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === pageId);
  });

  // Handle specific section resets or updates
  if (pageId === 'explorer') {
    if (extra) setExplorerMode(extra);
    else renderExplorerSidebar();
  }

  // Reload icons
  lucide.createIcons();
  window.scrollTo(0, 0);
}

// --- RENDER EXAMS & SCHOLARSHIPS ---
function renderExams(data = examData) {
  const grid = document.getElementById('examsGrid');
  if(!grid) return;
  
  grid.innerHTML = data.map(exam => `
    <div class="glass-card exam-card">
      <div class="exam-header">
        <span class="exam-tag">${exam.cat}</span>
        <h3 style="margin-top: 10px;">${exam.name}</h3>
      </div>
      <p style="margin: 15px 0; color: var(--text-muted); font-size: 0.9rem;">${exam.detail}</p>
      <a href="${exam.site}" target="_blank" class="link-arrow">Official Site <i data-lucide="external-link"></i></a>
    </div>
  `).join('');
  lucide.createIcons();
}

function filterExams(category) {
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.innerText.includes(category) || (category === 'All' && tab.innerText === 'All'));
  });

  // Since text varies (Pharmacy/Allied vs Allied Health), we handle it:
  let filtered = examData;
  if(category !== 'All') {
    filtered = examData.filter(e => e.cat.includes(category) || category.includes(e.cat));
  }
  
  renderExams(filtered);

  // Manual update for active class if buttons text doesn't match perfectly
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.remove('active');
    if(category === 'All' && tab.innerText === 'All') tab.classList.add('active');
    if(tab.innerText.includes(category)) tab.classList.add('active');
  });
}

function renderScholarships() {
  const grid = document.getElementById('scholarshipsList');
  grid.innerHTML = scholarshipData.map(s => `
    <div class="glass-card">
      <div class="card-icon"><i data-lucide="graduation-cap"></i></div>
      <h3>${s.name}</h3>
      <p style="color:var(--text-muted); margin: 10px 0;">Provided by: ${s.provider}</p>
      <p style="font-size: 0.9rem;">${s.desc}</p>
      <button class="btn-secondary small" style="margin-top: 20px;">Check Eligibility</button>
    </div>
  `).join('');
  lucide.createIcons();
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsList');
  grid.innerHTML = testimonialData.map(t => `
    <div class="glass-card">
      <div class="card-icon"><i data-lucide="quote"></i></div>
      <p style="font-style: italic; margin-bottom: 20px;">"${t.text}"</p>
      <div class="testimonial-user">
        <h4 class="gradient-text">${t.name}</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted);">${t.school}</p>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// --- EXPLORER LOGIC ---
function setExplorerMode(mode) {
  currentExplorerMode = mode;
  document.getElementById('toggle10').classList.toggle('active', mode === '10th');
  document.getElementById('toggle12').classList.toggle('active', mode === '12th');
  renderExplorerSidebar();
}

function renderExplorerSidebar() {
  const sidebar = document.getElementById('explorerSidebar');
  const data = careerData[currentExplorerMode];
  
  sidebar.innerHTML = data.map((item, index) => `
    <div class="sidebar-item ${index === 0 ? 'active' : ''}" onclick="showPaths(${index}, this)">
      <i data-lucide="${item.icon}"></i>
      <span>${item.category}</span>
    </div>
  `).join('');
  
  lucide.createIcons();
  if (data.length > 0) showPaths(0);
}

function showPaths(index, element = null) {
  if (element) {
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
    element.classList.add('active');
  }

  const content = document.getElementById('explorerContent');
  const catData = careerData[currentExplorerMode][index];

  content.innerHTML = `
    <div class="category-info">
      <h2 class="gradient-text">${catData.category}</h2>
      <p style="margin-bottom: 30px; color: var(--text-muted);">${catData.description}</p>
      <div class="career-grid">
        ${catData.paths.map(path => `
          <div class="career-tag clickable" onclick="openModal('${path}', '${catData.category}')">
            <span>${path}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// --- MODAL & SEARCH ---
function openModal(title, category) {
  document.getElementById('modalTitle').innerText = title;
  const info = document.getElementById('modalInfo');
  
  const data = detailedCareerData[title];
  
  if (data) {
    // Render detailed rich view
    info.innerHTML = `
      <div class="detail-section">
        <h4><i data-lucide="folder"></i> Category</h4>
        <p>${category}</p>
      </div>
      <div class="detail-section">
        <h4><i data-lucide="check-square"></i> Eligibility</h4>
        <ul class="modal-list">
          ${data.eligibility.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="detail-section">
        <h4><i data-lucide="edit-3"></i> Entrance Exams</h4>
        <ul class="modal-list">
          ${data.entranceExams.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
    
    // Additional detail sections below roadmap
    renderRoadmap(data.roadmap);
    
    // Inject Jobs and Scope after roadmap
    const roadmapContainer = document.querySelector('.roadmap-container');
    
    // Clean up any existing extra sections first to avoid duplicates
    document.querySelectorAll('.extra-detail').forEach(e => e.remove());
    
    roadmapContainer.insertAdjacentHTML('afterend', `
      <div class="detail-section extra-detail" style="margin-top: 30px;">
        <h4><i data-lucide="briefcase"></i> Top Job Roles</h4>
        <div class="career-grid small">
          ${data.jobRoles.map(role => `<div class="career-tag small">${role}</div>`).join('')}
        </div>
      </div>
      <div class="detail-section extra-detail">
        <h4><i data-lucide="trending-up"></i> Future Scope</h4>
        <ul class="modal-list">
          ${data.futureScope.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <button class="btn-primary full-width extra-detail" style="margin-top: 20px;" onclick="navigateTo('counseling'); closeModal();">Book Consultation for ${title}</button>
    `);

  } else {
    // Generate fallback template based on broad category context
    const is10th = currentExplorerMode === '10th';
    const fallbackEligibility = is10th ? 'Must have completed SSLC (10th) from a recognized board with passing marks.' : 'Must have completed PUC (12th) in the relevant stream with minimum required percentage.';
    const fallbackExams = 'Entrance requirements vary. Contact our counselors for specific exam details related to this path.';
    const defaultRoadmap = [
      { step: 'Initial Qualification', detail: is10th ? 'Complete 10+2 or Diploma' : 'Clear Entrance/Admissions' },
      { step: 'Core Education', detail: 'Complete the primary degree or course (3-4 years).' },
      { step: 'Skill Development', detail: 'Internships and practical training in the field.' },
      { step: 'Entry Level Job', detail: 'Start career as a junior professional.' }
    ];

    info.innerHTML = `
      <div class="detail-section">
        <h4><i data-lucide="folder"></i> Category</h4>
        <p>${category}</p>
      </div>
      <div class="detail-section">
        <h4><i data-lucide="check-square"></i> Eligibility</h4>
        <p>${fallbackEligibility}</p>
      </div>
      <div class="detail-section">
        <h4><i data-lucide="edit-3"></i> Entrance Exams</h4>
        <p>${fallbackExams}</p>
      </div>
    `;
    
    document.querySelectorAll('.extra-detail').forEach(e => e.remove());
    renderRoadmap(defaultRoadmap);
    
    const roadmapContainer = document.querySelector('.roadmap-container');
    roadmapContainer.insertAdjacentHTML('afterend', `
      <button class="btn-primary full-width extra-detail" style="margin-top: 20px;" onclick="navigateTo('counseling'); closeModal();">Book Consultation for ${title}</button>
    `);
  }
  
  document.getElementById('careerModal').style.display = 'flex';
  lucide.createIcons();
}

function renderRoadmap(roadmapArray) {
  const container = document.getElementById('careerRoadmap');
  
  container.innerHTML = roadmapArray.map(node => `
    <div class="roadmap-node">
      <h5>${node.step}</h5>
      <p>${node.detail}</p>
    </div>
  `).join('');
}

function closeModal() {
  document.getElementById('careerModal').style.display = 'none';
}

function handleSearch() {
  const query = document.getElementById('careerSearch').value.toLowerCase();
  if(!query) return;

  // Search over categories and paths
  let results = [];
  for(let m in careerData) {
    careerData[m].forEach(cat => {
      cat.paths.forEach(p => {
        if(p.toLowerCase().includes(query)) {
          results.push({ title: p, mode: m, category: cat.category });
        }
      });
    });
  }

  if(results.length === 1) {
    const found = results[0];
    setExplorerMode(found.mode);
    navigateTo('explorer');
    const idx = careerData[found.mode].findIndex(c => c.category === found.category);
    showPaths(idx);
    openModal(found.title, found.category);
  } else if(results.length > 1) {
    // Show a small results overlay or just the first matching category
    const found = results[0];
    setExplorerMode(found.mode);
    navigateTo('explorer');
    const idx = careerData[found.mode].findIndex(c => c.category === found.category);
    showPaths(idx);
    alert(`Found ${results.length} matches. Showing the best one!`);
  } else {
    alert('No direct match found. Try exploring the categories below!');
  }
}

// --- AI CHATBOT LOGIC ---
function toggleChat() {
  const window = document.getElementById('chatWindow');
  const isHidden = window.style.display === 'none' || !window.style.display;
  window.style.display = isHidden ? 'flex' : 'none';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  appendMessage('user', message);
  input.value = '';

  // Simulate Bot Response
  setTimeout(() => {
    handleBotResponse(message);
  }, 1000);
}

function handleQuickAction(action) {
  let response = '';
  if(action === 'Top Exams') {
    navigateTo('exams');
    response = "I've opened the <b>Entrance Exam Tracker</b>. You can filter by Engineering, Medical, or Defense to see the latest schedules and direct links.";
  } else if(action === 'Polytechnic') {
    setExplorerMode('10th');
    navigateTo('explorer');
    response = "I've navigated you to <b>Diploma & Polytechnic</b> paths. These are excellent 3-year programs that lead quickly to technical careers or engineering degrees.";
  } else if(action === 'ITI Trades') {
    setExplorerMode('10th');
    navigateTo('explorer');
    response = "<b>ITI Trades</b> offer focused vocational training in fields like Electrician, Fitter, and Mechanics. I've opened the explorer for you.";
  } else if(action === 'Medical/Paramedical') {
    setExplorerMode('12th');
    navigateTo('explorer');
    response = "Explore <b>Medical and Allied Health</b> sciences. I've loaded paths like MBBS, Physiotherapy, and Lab Technology for you.";
  } else if(action === 'Advanced Tech') {
    setExplorerMode('12th');
    navigateTo('explorer');
    response = "The future is here! Check out <b>AI & Robotics</b> and <b>Data Science</b> paths. I've updated the roadmap explorer for you.";
  }
  
  appendMessage('user', action);
  showTypingIndicator();
  setTimeout(() => {
    hideTypingIndicator();
    appendMessage('bot', response);
  }, 800);
}

function showTypingIndicator() {
  const chatMessages = document.getElementById('chatMessages');
  const indicator = document.createElement('div');
  indicator.id = 'typingIndicator';
  indicator.className = 'typing-indicator';
  indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  chatMessages.appendChild(indicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

function appendMessage(sender, text) {
  const chatMessages = document.getElementById('chatMessages');
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.innerHTML = text; // Support rich text
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleBotResponse(query) {
  const q = query.toLowerCase();
  showTypingIndicator();

  setTimeout(() => {
    hideTypingIndicator();
    let response = "That's a great question. Based on current trends in India, that career path is growing rapidly. Would you like me to book a counselor for specific college advice?";

    // Knowledge Search in detailedCareerData
    let matchedCareer = Object.keys(detailedCareerData).find(key => 
      key.toLowerCase().includes(q) || q.includes(key.toLowerCase())
    );

    if (matchedCareer) {
      const data = detailedCareerData[matchedCareer];
      response = `I found details about <b>${matchedCareer}</b>!<br><br>
                  <b>Eligibility:</b> ${data.eligibility}<br><br>
                  <b>Next Step:</b> ${data.roadmap[0].title}.<br><br>
                  Would you like me to show the full roadmap?`;
    } else if (q.includes('college')) {
      response = "Top colleges depend on your stream. For Engineering, <b>IITs and NITs</b> are premier. For Medical, <b>AIIMS</b> leads. What's your current score or rank?";
    } else if (q.includes('exam')) {
      response = "National entrance exams like <b>JEE, NEET, and CUET</b> are the key gateways. You can find detailed tracking links in our Exams section!";
    } else if (q.includes('hello') || q.includes('hi')) {
      response = "Hello! I'm your CareerQuest AI. I can guide you through 30+ career paths, entrance exams, and scholarships. What's on your mind today?";
    }

    appendMessage('bot', response);
  }, 1000);
}

// Update search input to trigger on Enter
document.getElementById('careerSearch')?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSearch();
});

document.getElementById('userInput')?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// --- QUIZ ENGINE ---
let currentQuestionIndex = 0;
let scores = { engineering: 0, medical: 0, arts: 0, commerce: 0, law: 0, management: 0, polytechnic: 0 };

function startQuiz() {
  currentQuestionIndex = 0;
  scores = { engineering: 0, medical: 0, arts: 0, commerce: 0, law: 0, management: 0, polytechnic: 0 };
  document.getElementById('quizIntro').style.display = 'none';
  document.getElementById('quizContent').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = quizQuestions[currentQuestionIndex];
  document.getElementById('quizQuestion').innerText = q.q;
  document.getElementById('quizProgressBar').style.width = `${(currentQuestionIndex / quizQuestions.length) * 100}%`;
  
  const options = [
    { text: "Strongly Agree", val: 3 },
    { text: "Agree", val: 2 },
    { text: "Neutral", val: 1 },
    { text: "Disagree", val: 0 }
  ];

  document.getElementById('quizOptions').innerHTML = options.map(opt => `
    <button class="option-btn" onclick="answerQuestion(${opt.val})">${opt.text}</button>
  `).join('');
}

function answerQuestion(val) {
  const type = quizQuestions[currentQuestionIndex].type;
  scores[type] += val;

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quizContent').style.display = 'none';
  document.getElementById('quizResult').style.display = 'block';
  
  // Sort and show top 3
  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]).slice(0, 3);
  
  document.getElementById('matchList').innerHTML = sorted.map(([key, val]) => `
    <div class="match-item">
      <span style="text-transform: capitalize; font-weight: 600;">${key} Stream</span>
      <span class="gradient-text">${Math.round((val / 6) * 100)}% Match</span>
    </div>
  `).join('');

  // Celebration!
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#2c7be5', '#00f2ff', '#7048e8']
  });
}

function resetQuiz() {
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizIntro').style.display = 'block';
}

// --- FORM HANDLING ---
function handleBooking(e) {
  e.preventDefault();
  alert('Success! Your counseling session has been requested. Our expert will contact you within 24 hours.');
  e.target.reset();
}

// --- INITIAL LOAD ---
window.onload = () => {
  renderExplorerSidebar();
  renderExams();
  renderScholarships();
  renderTestimonials();
  
  // Close modal on outside click
  window.onclick = (e) => {
    if (e.target.className === 'modal-overlay') closeModal();
  };
};

function switchLegalTab(tabId) {
  // Update buttons
  document.querySelectorAll('.legal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(tabId));
  });

  // Update panes
  document.querySelectorAll('.legal-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `legal-${tabId}`);
  });
}

function openLegalTab(tabId) {
  // Navigate to the dedicated legal page section
  navigateTo('legal');
  
  // Switch to the requested tab
  switchLegalTab(tabId);
  
  // Scroll to top of page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
