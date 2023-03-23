module.exports = {
  title: `minseoky.me`,
  description: `개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `http://minseoky.me/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `minseoky/gatsby-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-J50ZWK04V2', // Google Analytics Tracking ID
  author: {
    name: `최민석`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/minseoky`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `minseok184@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.03 ~',
        activity: '단국대학교 소프트웨어학과 재학',
        links: {
        }
      }
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};
