const bold = (text: string) => (
  <strong className="font-semibold">{text}</strong>
);

const profilebio = [
  <>
    I am a {bold("full stack software developer")} focused on building scalable, modern applications using JavaScript, Python, and Java.
    My work centers on {bold("web and Android development")}, with an emphasis on clean architecture, performance, and API driven systems.
  </>,

  <>
    I build scalable web apps with {bold("React & TypeScript")}, native Android apps with {bold("Java & Kotlin")}, and integrate third-party APIs for seamless digital experiences.
    My primary focus is {bold("native Android development")}, with openness to cross-platform solutions like {bold("Flutter")} and {bold("React Native")}, and I use {bold("Python")} for automation and backend tooling.
  </>,

  <>
    I am currently expanding my skills in {bold("AI integration")}, {bold("computer vision")}, and {bold("machine learning")}, exploring how these can be applied to real world applications.
  </>,
];

export default profilebio;