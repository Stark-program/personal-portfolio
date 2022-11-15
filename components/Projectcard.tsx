const ProjectCard = (props: Props) => {
  const projectLinks = props.projectLinks;

  return (
    <div className="grid grid-cols-3 justify-items-center">
      {projectLinks?.map((link: string, index) => {
        return (
          <a href={link} key={index}>
            {link}
          </a>
        );
      })}
    </div>
  );
};

type Props = {
  projectLinks?: string[];
};

export default ProjectCard;
