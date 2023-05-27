import { ProjectCard } from "../components/ProjectCard/ProjectCard";

const projectItems = {
  projectTitle: "پروژه اول",
  taskTitle: "این یک تیتر برای این تسک است.",
  date: "۵ مهر - فردا",
  time: "۲ / ۱۲",
  id: 1,
  tags: [
    {
      id: 1,
      tagTitle: "درس",
      tagColor: "#BFFDE3",
    },
    { id: 2, tagTitle: "پروژه", tagColor: "#EEDFF7" },
  ],
  userName: "NA",
};

const Home = () => {
  return <ProjectCard {...projectItems}></ProjectCard>;
};
export default Home;
