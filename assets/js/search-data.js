// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "An overview of my research publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Explore my professional experience, education, skills, and selected projects. You can also download a PDF version using the button above",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-at-centro-nacional-de-alta-tecnología-cenat-i-was-a-course-instructor-for-for-big-data-school-2020-delivering-a-workshop-on-machine-learning-and-deep-learning-with-images-and-helping-build-data-science-capacity-in-the-national-research-community",
          title: 'At Centro Nacional de Alta Tecnología (CeNAT), I was a Course Instructor for...',
          description: "",
          section: "News",},{id: "news-my-work-segment-anything-model-and-few-shot-models-for-object-detection-has-been-accepted-for-a-poster-presentation-at-the-eastern-european-machine-learning-summer-school-eeml-in-novi-sad-serbia",
          title: 'My work, “Segment Anything Model and Few Shot Models for Object Detection” has...',
          description: "",
          section: "News",},{id: "news-i-joined-the-centro-nacional-de-alta-tecnología-cenat-as-a-researcher-for-a-10-month-project-focused-on-video-object-detection-in-agricultural-environments-the-project-applies-computer-vision-and-deep-learning-techniques-to-analyze-drone-and-ground-based-video-data-aiming-to-improve-automated-agricultural-monitoring-and-yield-estimation",
          title: 'I joined the Centro Nacional de Alta Tecnología (CeNAT) as a researcher for...',
          description: "",
          section: "News",},{id: "news-our-work-simple-object-detection-framework-without-training-has-been-accepted-for-an-oral-presentation-at-the-6th-ieee-international-conference-on-bioinspired-processing-bip-2025-to-be-held-at-una-liberia-guanacaste",
          title: 'Our work, “Simple Object Detection Framework without Training,” has been accepted for an...',
          description: "",
          section: "News",},{id: "news-i-recently-joined-as-a-research-assistant-in-a-project-led-by-nelson-pérez-from-the-school-of-language-sciences-focused-on-the-study-of-automatic-spanish-text-simplification-to-improve-accessibility-for-people-with-visual-impairments",
          title: 'I recently joined as a research assistant in a project led by Nelson...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-for-the-ieee-computer-society-student-chapter-at-the-instituto-tecnológico-de-morelia-méxico-titled-how-can-computers-see-an-introduction-to-object-detection",
          title: 'Gave a talk for the IEEE Computer Society Student Chapter at the Instituto...',
          description: "",
          section: "News",},{id: "news-our-work-has-been-accepted-at-the-computer-vision-and-pattern-recognition-cvpr-latinx-workshop-in-nashville-united-states-titled-pinesort-a-simple-online-real-time-tracking-framework-for-drone-videos-in-agriculture",
          title: 'Our work has been accepted at the Computer Vision and Pattern Recognition (CVPR)...',
          description: "",
          section: "News",},{id: "news-delivered-a-talk-for-the-ieee-computer-society-student-chapter-at-the-instituto-tecnológico-de-costa-rica-titled-diffusion-models-creating-what-doesn-t-exist",
          title: 'Delivered a talk for the IEEE Computer Society Student Chapter at the Instituto...',
          description: "",
          section: "News",},{id: "news-our-work-has-been-accepted-at-the-conferencia-latinoamericana-de-informática-clei-in-valparaíso-chile-titled-squeeze-every-bit-of-insight-leveraging-few-shot-models-with-a-compact-support-set-for-domain-transfer-in-object-detection-from-pineapple-fields-for-oral-presentation",
          title: 'Our work has been accepted at the Conferencia Latinoamericana de Informática (CLEI) in...',
          description: "",
          section: "News",},{id: "news-gave-a-seminar-on-a-computer-vision-and-deep-learning-based-system-for-multi-object-tracking-with-drones-in-precision-agriculture-at-the-colaboratorio-nacional-de-computación-avanzada-cnca-of-the-centro-nacional-de-alta-tecnología-cenat",
          title: 'Gave a seminar on “A Computer Vision and Deep Learning-Based System for Multi-Object...',
          description: "",
          section: "News",},{id: "news-i-delivered-a-talk-on-ias-connect-2-0-organized-by-the-ieee-industrial-applications-society-in-el-salvador-titled-drone-based-video-monitoring-for-yield-estimation-using-deep-learning",
          title: 'I delivered a talk on IAS Connect 2.0, organized by the IEEE Industrial...',
          description: "",
          section: "News",},{id: "news-our-work-has-been-accepted-at-the-international-conference-of-the-chilean-computer-science-society-in-valparaíso-chile-titled-tracking-through-words-a-novel-framework-for-data-association-in-tracking-by-detection-using-large-language-models-for-oral-presentation",
          title: 'Our work has been accepted at the International Conference of the Chilean Computer...',
          description: "",
          section: "News",},{id: "news-i-recently-joined-the-university-of-ljubljana-in-slovenia-as-a-research-assistant-in-the-computer-vision-laboratory-led-by-professor-peter-peer-and-supervised-by-blaž-meden-my-current-work-focuses-on-diffusion-models-and-generative-modeling-for-biometric-de-identification",
          title: 'I recently joined the University of Ljubljana in Slovenia as a research assistant...',
          description: "",
          section: "News",},{id: "news-our-work-has-been-accepted-at-the-7th-ieee-international-conference-on-bioinspired-processing-in-universidad-nacional-campus-pérez-zeledón-costa-rica-titled-learning-compact-representations-of-agricultural-fields-a-study-of-variational-autoencoders-variants-for-aerial-drone-imagery-for-oral-presentation",
          title: 'Our work has been accepted at the 7th IEEE International Conference on BioInspired...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-master-s-thesis-object-detection-on-image-and-video-from-drone-agriculture-data-using-deep-learning-for-the-master-s-degree-in-computer-science-at-the-instituto-tecnológico-de-costa-rica-supervised-by-dr-fabián-fallas-moya-phd-the-work-received-the-highest-academic-distinction-summa-cum-laude",
          title: 'I successfully defended my Master’s thesis, “Object Detection on Image and Video from...',
          description: "",
          section: "News",},{id: "outreach-i-served-as-chair-of-the-student-activities-committee-sac-of-the-ieee-costa-rica-section-from-may-2022-to-december-2023-leading-and-coordinating-student-initiatives-events-and-activities-across-the-country-to-strengthen-student-engagement-within-ieee",
          title: 'I served as Chair of the Student Activities Committee (SAC) of the IEEE...',
          description: "",
          section: "Outreach",},{id: "outreach-i-was-appointed-as-the-ieee-student-activities-committee-sac-student-representative-for-region-9-latin-america-serving-from-december-2023-to-december-2024-in-this-role-i-represented-student-members-across-the-region-contributing-to-the-development-and-coordination-of-student-activities-within-ieee-latin-america",
          title: 'I was appointed as the IEEE Student Activities Committee (SAC) Student Representative for...',
          description: "",
          section: "Outreach",},{id: "projects-text-simplification-in-spanish",
          title: 'Text Simplification in Spanish',
          description: "Research and collaboration on automatic text simplification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dnnxl", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/926958762977822/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dnnxl", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1878-9460", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Danny-Xie-Li?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vipkAKEAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/Danny-Xie-Li/2278092358", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
