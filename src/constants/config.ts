type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Fouzan Asif — Portfolio",
    fullName: "Fouzan Asif",
    email: "mfouzan.asif@gmail.com",
  },
  hero: {
    name: "Fouzan Asif",
    p: ["A Junior Software Engineer and a Deep Learning Enthusiast"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Hey mates 👋 This is Fouzan Asif, a full stack web developer following Angular for web interfaces development and Microsoft Technologies i.e. .NET Core for backend, SQL for database, and Azure for cloud hosting operations and services, 
      enabling me to develop dynamic, quick, robust, secure, and highly available applications. Simultaneously, I have followed another vertical related to Data Science, Machine Learning, and Deep Learning, expanding my skills in Data Analytics, 
      and providing valuable practical experience and understanding of AI, ML, and DL including data, distributions, decision boundaries, detection and recognition, and generative AI. Lastly, I have also been practicing Automation Testing using Selenium and Playwright via NUnit and Specflow in C#, allowing me to regressively test my own web applications as well.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
