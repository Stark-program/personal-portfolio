import ProjectCard from "../components/Projectcard";

const Projects = () => {
  const websiteData = [
    {
      title: "Discord Wiki",
      description:
        "Discord Wiki is a community driven server browser aimed to give users an ability to see what communities are like, and what they have to offer. You can checkout text channels and browse the content posted by that server.",
      image: "https://i.imgur.com/p4PixhK.png",
      url: "https://www.discordwiki.app/",
    },
    {
      title: "The Dashbord Of Many Things",
      description:
        "Check weather status for the day, look up some movie information, checkout your favorite books, and laugh at a good joke!",
      image: "https://i.imgur.com/IpHpWpn.png",
      url: "https://dashboard-of-many-things.web.app/",
    },
    {
      title: "Shopify Intern Challenge",
      description:
        "An assessment project for an internship application to Shopify where I utilized OpenAI to generate responses based on user input.",
      image: "",
      url: "https://stark-shopify-internchallenge.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#999999]">
      <div className="flex flex-col mx-2 pt-4 md:grid md:grid-cols-3 justify-items-center">
        {websiteData.map((website) => {
          return (
            <ProjectCard
              title={website.title}
              description={website.description}
              image={website.image}
              url={website.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
