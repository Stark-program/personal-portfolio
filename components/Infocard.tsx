const InfoCard = (props: Props) => {
  const topic = props.topic;
  const githubUrl = props.githubUrl;
  const about = props.about;

  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#666666] dark:hover:bg-gray-700">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold font-Candal tracking-tight text-gray-900 dark:text-gray-300">
              {topic}
            </h5>
            <p className="mb-3 font-normal font-Outfit text-gray-700 dark:text-gray-300">
              {about}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

type Props = {
  topic: string;
  githubUrl?: string;
  about: string;
};

export default InfoCard;
