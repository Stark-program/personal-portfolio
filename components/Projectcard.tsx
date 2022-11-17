const ProjectCard = (props: Props) => {
  const title = props.title;
  const description = props.description;
  const image = props.image;
  const url = props.url;
  return (
    <>
      <a
        href={url}
        className="flex flex-col my-2 mx-2 items-center bg-white rounded-lg border shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#666666] dark:hover:bg-gray-700"
      >
        {image ? (
          <img
            className="object-cover w-full rounded-t-lg h-[100px]"
            src={image}
            alt=""
          />
        ) : (
          <div className="bg-gray-700 object-cover h-[150px] rounded-t-lg w-full"></div>
        )}

        <div className="flex flex-col p-4 h-full justify-end">
          <h5 className="mb-2 text-2xl font-bold font-Candal tracking-tight text-gray-900 dark:text-gray-300">
            {title}
          </h5>
          <p className="mb-3 font-normal font-Outfit text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </a>
    </>
  );
};

type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export default ProjectCard;
