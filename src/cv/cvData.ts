export type CvSkillGroup = {
  label: string
  items: string[]
}

export type CvTimelineItem = {
  title: string
  date: string
  bullets: string[]
}

export type CvData = {
  header: {
    name: string
    title: string
    location: string
    email: string
    github: string
    facebook: string
    youtube: string
    zaloPhone: string
  }
  summary: string
  skills: CvSkillGroup[]
  experience: CvTimelineItem[]
  projects: CvTimelineItem[]
  education: {
    school: string
    date: string
    major: string
    gpa: string
  }
  softSkills: string[]
}

export type CvLanguage = 'vi' | 'en'

export type CvLabels = {
  navAria: string
  brandAria: string
  socialAria: string
  emailAria: string
  youtubeAria: string
  zaloAria: string
  zaloTitle: string
  switchLabel: string
  nav: {
    top: string
    summary: string
    skills: string
    experience: string
    projects: string
    education: string
    softSkills: string
  }
  sections: {
    summary: string
    skills: string
    experience: string
    projects: string
    education: string
    softSkills: string
  }
}

export const cvLabels: Record<CvLanguage, CvLabels> = {
  vi: {
    navAria: 'Dieu huong CV',
    brandAria: 'Ve dau trang',
    socialAria: 'Lien he va mang xa hoi',
    emailAria: 'Gui email toi',
    youtubeAria: 'Kenh YouTube',
    zaloAria: 'Goi Zalo',
    zaloTitle: 'Goi Zalo',
    switchLabel: 'English',
    nav: {
      top: 'Dau trang',
      summary: 'Tom tat',
      skills: 'Ky nang',
      experience: 'Kinh nghiem',
      projects: 'Du an',
      education: 'Hoc van',
      softSkills: 'Ky nang mem',
    },
    sections: {
      summary: 'TOM TAT BAN THAN',
      skills: 'KY NANG',
      experience: 'KINH NGHIEM LAM VIEC',
      projects: 'DU AN',
      education: 'HOC VAN',
      softSkills: 'KY NANG MEM',
    },
  },
  en: {
    navAria: 'CV navigation',
    brandAria: 'Back to top',
    socialAria: 'Contact and social links',
    emailAria: 'Send email to',
    youtubeAria: 'YouTube channel',
    zaloAria: 'Call Zalo',
    zaloTitle: 'Call Zalo',
    switchLabel: 'Tieng Viet',
    nav: {
      top: 'Top',
      summary: 'Summary',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      softSkills: 'Soft skills',
    },
    sections: {
      summary: 'PROFESSIONAL SUMMARY',
      skills: 'TECHNICAL SKILLS',
      experience: 'WORK EXPERIENCE',
      projects: 'PROJECTS',
      education: 'EDUCATION',
      softSkills: 'SOFT SKILLS',
    },
  },
}

const sampleHeader: CvData['header'] = {
  name: 'Your Name',
  title: 'Your Target Role',
  location: 'Your City, Country',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  facebook: '',
  youtube: '',
  zaloPhone: '',
}

export const cvDataByLanguage: Record<CvLanguage, CvData> = {
  vi: {
    header: sampleHeader,
    summary:
      'Viet mot doan tom tat ngan gon ve kinh nghiem, the manh ky thuat, linh vuc ban muon phat trien va gia tri ban co the mang lai cho cong ty. Nen giu doan nay trong 3-5 cau de nha tuyen dung doc nhanh.',
    skills: [
      { label: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
      { label: 'FRONTEND', items: ['React.js', 'Next.js', 'Redux Toolkit'] },
      { label: 'BACKEND', items: ['Node.js', 'Express.js', 'RESTful API'] },
      { label: 'DATABASES', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
      { label: 'TOOLS', items: ['Git', 'GitHub', 'Docker', 'Vercel'] },
      { label: 'OTHER', items: ['Authentication', 'API Integration', 'Testing'] },
    ],
    experience: [
      {
        title: 'Job Title - Company Name',
        date: 'MM/YYYY - MM/YYYY',
        bullets: [
          'Mo ta nhiem vu chinh bang mot cau ro rang, tap trung vao tac dong thuc te.',
          'Neu cong nghe, quy trinh hoac he thong ban da truc tiep xay dung hoac cai tien.',
          'Dua so lieu neu co, vi du: giam 30% thoi gian xu ly hoac tang 20% hieu nang.',
        ],
      },
      {
        title: 'Intern Developer - Example Company',
        date: 'MM/YYYY - MM/YYYY',
        bullets: [
          'Tham gia phat trien tinh nang cho ung dung web voi vai tro cu the.',
          'Lam viec voi API, database va giao dien nguoi dung theo yeu cau san pham.',
          'Phoi hop voi team de review code, sua loi va hoan thien tinh nang.',
        ],
      },
    ],
    projects: [
      {
        title: 'Project Name - Personal Project',
        date: 'MM/YYYY - MM/YYYY',
        bullets: [
          'Mo ta bai toan san pham va vai tro cua ban trong du an.',
          'Liet ke cac tinh nang chinh, cong nghe su dung va ket qua dat duoc.',
          'GitHub: https://github.com/your-username/project-name',
        ],
      },
      {
        title: 'Team Project - Product Name',
        date: 'YYYY',
        bullets: [
          'Mo ta du an nhom va pham vi cong viec ban phu trach.',
          'Neu cach ban thiet ke API, database, UI hoac quy trinh deploy.',
          'Demo: https://example.com',
        ],
      },
    ],
    education: {
      school: 'School or University Name',
      date: 'MM/YYYY - MM/YYYY',
      major: 'Major: Your Major',
      gpa: 'GPA: Optional',
    },
    softSkills: [
      'Lam viec nhom va giao tiep ro rang trong moi truong du an.',
      'Chu dong hoc cong nghe moi va thich nghi voi yeu cau thay doi.',
      'Phan tich van de, tim nguyen nhan va de xuat giai phap thuc te.',
      'Quan ly thoi gian va uu tien cong viec theo muc tieu san pham.',
    ],
  },
  en: {
    header: sampleHeader,
    summary:
      'Write a concise professional summary about your experience, technical strengths, target role, and the value you can bring to a team. Keep this section within 3-5 sentences so recruiters can scan it quickly.',
    skills: [
      { label: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
      { label: 'FRONTEND', items: ['React.js', 'Next.js', 'Redux Toolkit'] },
      { label: 'BACKEND', items: ['Node.js', 'Express.js', 'RESTful API'] },
      { label: 'DATABASES', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
      { label: 'TOOLS', items: ['Git', 'GitHub', 'Docker', 'Vercel'] },
      { label: 'OTHER', items: ['Authentication', 'API Integration', 'Testing'] },
    ],
    experience: [
      {
        title: 'Job Title - Company Name',
        date: 'MM/YYYY - MM/YYYY',
        bullets: [
          'Describe your main responsibility in one clear sentence, focusing on real impact.',
          'Mention the technology, workflow, or system you directly built or improved.',
          'Add measurable results when possible, such as reducing processing time or improving performance.',
        ],
      },
      {
        title: 'Intern Developer - Example Company',
        date: 'MM/YYYY - MM/YYYY',
        bullets: [
          'Contributed to web application features with a clearly defined role.',
          'Worked with APIs, databases, and user interfaces based on product requirements.',
          'Collaborated with the team on code review, bug fixing, and feature completion.',
        ],
      },
    ],
    projects: [
      {
        title: 'Project Name - Personal Project',
        date: 'MM/YYYY - MM/YYYY',
        bullets: [
          'Describe the product problem and your role in the project.',
          'List key features, technologies used, and the outcome of the project.',
          'GitHub: https://github.com/your-username/project-name',
        ],
      },
      {
        title: 'Team Project - Product Name',
        date: 'YYYY',
        bullets: [
          'Describe the team project and the scope of work you owned.',
          'Mention how you designed the API, database, UI, or deployment workflow.',
          'Demo: https://example.com',
        ],
      },
    ],
    education: {
      school: 'School or University Name',
      date: 'MM/YYYY - MM/YYYY',
      major: 'Major: Your Major',
      gpa: 'GPA: Optional',
    },
    softSkills: [
      'Team collaboration and clear communication in project environments.',
      'Proactive learning and quick adaptation to changing requirements.',
      'Problem analysis, root cause investigation, and practical solution design.',
      'Time management and prioritization based on product goals.',
    ],
  },
}

export const cvData = cvDataByLanguage.vi
