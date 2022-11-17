import ProjectCard from "../components/Projectcard";

const Projects = () => {
  const websiteData = {
    discordWiki: {
      title: "Discord Wiki",
      description:
        "Discord Wiki is a community driven server browser aimed to give users an ability to see what communities are like, and what they have to offer. You can checkout text channels and browse the content posted by that server.",
      image: "https://i.imgur.com/p4PixhK.png",
      url: "https://www.discordwiki.app/",
    },
    dashboard: {
      title: "The dashbord of many things",
      description:
        "Check weather status for the day, look up some movie information, checkout your favorite books, and laugh at a good joke!",
      image: "https://i.imgur.com/IpHpWpn.png",
      url: "https://dashboard-of-many-things.web.app/",
    },
    shopify: {
      title: "Shopify intern challenge",
      description:
        "An assesement project for an internship application to Shopify where I utlizied OpenAI to generate responses based on user input.",
      image: "",
      url: "https://stark-shopify-internchallenge.vercel.app/",
    },
  };

  return (
    <div className="min-h-screen bg-[#999999]  ">
      <div className="flex flex-col mx-2 pt-4 md:grid md:grid-cols-3 justify-items-center">
        <ProjectCard
          title={websiteData.discordWiki.title}
          description={websiteData.discordWiki.description}
          image={websiteData.discordWiki.image}
          url={websiteData.discordWiki.url}
        />
        <ProjectCard
          title={websiteData.dashboard.title}
          description={websiteData.dashboard.description}
          image={websiteData.dashboard.image}
          url={websiteData.dashboard.url}
        />
        <ProjectCard
          title={websiteData.shopify.title}
          description={websiteData.shopify.description}
          image={websiteData.shopify.image}
          url={websiteData.shopify.url}
        />
      </div>
    </div>
  );
};

export default Projects;
