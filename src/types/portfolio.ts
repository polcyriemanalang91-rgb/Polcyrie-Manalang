export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Capstone' | 'Full-Stack' | 'Frontend' | 'Academic' | 'UI/UX';
  description: string;
  detailedDescription?: string;
  keyFeatures?: string[];
  learningOutcomes?: string[];
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpaOrHonors?: string;
  description?: string;
  relevantCoursework?: string[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Proficient';
    isTop?: boolean;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

export interface Activity {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlight?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    roleHeadline: string;
    heroSubtitle: string;
    bioIntro: string;
    fullBio: string[];
    careerGoals: string;
    location: string;
    avatarImage?: string;
    email: string;
    phone?: string;
    availability: string;
    socialLinks: {
      github: string;
      linkedin: string;
      twitter?: string;
      portfolio?: string;
    };
  };
  education: EducationItem[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  activities: Activity[];
  projects: Project[];
}
