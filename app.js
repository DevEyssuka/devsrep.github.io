const projects = [
  {
    title: "S.U.B.J.E.C.T.S — Игра на Unity/Unreal",
    link: "#",
  },
  {
    title: "Трекер настроения (Unity 2D)",
    link: "#",
  },
  {
    title: "Терминал-симулятор (C#)",
    link: "#",
  },
];

const projectList = document.querySelector(".project-list");

projects.forEach(({ title, link }) => {
  const project = document.createElement("div");
  project.className = "project";
  project.innerHTML = `<h3>${title}</h3><a href="${link}" target="_blank">Посмотреть</a>`;
  projectList.appendChild(project);
});
