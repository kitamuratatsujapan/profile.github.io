const translations = {
  ja: {
    profileLabel: "研究者",
    name: "Your Name",
    affiliation: "○○大学大学院 情報学研究科",
    profileDescription:
      "自然言語処理・音声処理・大規模言語モデルを中心に、人とAIの対話に関する研究を行っています。",
    tabResearch: "研究",
    tabEducation: "教育",
    tabEngineer: "エンジニア",
    researchEyebrow: "RESEARCH",
    researchTitle: "研究業績",
    educationEyebrow: "EDUCATION",
    educationTitle: "教育",
    engineerEyebrow: "ENGINEERING",
    engineerTitle: "エンジニア",
    education1: "プログラミング、情報科学、AIに関する講義・演習を担当。",
    education2: "数学・アルゴリズム・データサイエンスなどの指導を担当。",
    education3: "学生向けの演習支援、研究指導、教材作成など。",
    project1: "大規模言語モデルを利用した対話システムの研究・開発。",
    project2: "Webアプリケーションの設計、実装、API連携を担当。",
    project3: "データ処理・分析・可視化のためのツールを開発."
  },
  en: {
    profileLabel: "RESEARCHER",
    name: "Your Name",
    affiliation: "Graduate School of Informatics, ○○ University",
    profileDescription:
      "My research focuses on natural language processing, speech processing, large language models, and human-AI interaction.",
    tabResearch: "Research",
    tabEducation: "Education",
    tabEngineer: "Engineering",
    researchEyebrow: "RESEARCH",
    researchTitle: "Publications",
    educationEyebrow: "EDUCATION",
    educationTitle: "Teaching",
    engineerEyebrow: "ENGINEERING",
    engineerTitle: "Projects",
    education1: "Teaching lectures and practical sessions in programming, information science, and AI.",
    education2: "Teaching mathematics, algorithms, and data science.",
    education3: "Supporting student exercises, research supervision, and educational material development.",
    project1: "Research and development of dialogue systems using large language models.",
    project2: "Design and development of web applications and API integrations.",
    project3: "Development of tools for data processing, analysis, and visualization."
  },
  zh: {
    profileLabel: "研究人员",
    name: "Your Name",
    affiliation: "○○大学 信息学研究科",
    profileDescription:
      "主要研究自然语言处理、语音处理、大语言模型以及人与AI之间的对话。",
    tabResearch: "研究",
    tabEducation: "教育",
    tabEngineer: "工程",
    researchEyebrow: "RESEARCH",
    researchTitle: "研究成果",
    educationEyebrow: "EDUCATION",
    educationTitle: "教育",
    engineerEyebrow: "ENGINEERING",
    engineerTitle: "项目",
    education1: "负责编程、信息科学和人工智能相关课程及实践教学。",
    education2: "负责数学、算法和数据科学等方面的教学。",
    education3: "提供学生实践指导、研究指导以及教材制作支持。",
    project1: "使用大语言模型进行对话系统的研究与开发。",
    project2: "负责Web应用程序的设计、开发以及API集成。",
    project3: "开发用于数据处理、分析和可视化的工具。"
  }
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.ja;

  document.documentElement.lang = lang === "ja" ? "ja" : lang === "en" ? "en" : "zh";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });

  localStorage.setItem("siteLanguage", lang);
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    document.querySelectorAll(".tab-btn").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active);
    });

    document.querySelectorAll(".tab-panel").forEach((panel) => {
      const active = panel.id === `${target}-panel`;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
  });
});

const savedLanguage = localStorage.getItem("siteLanguage") || "ja";
setLanguage(savedLanguage);
