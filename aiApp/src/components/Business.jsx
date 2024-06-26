import { features, projectLinks } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index, projectLink }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
      <ButtonLink url={projectLink.id} name={title} />
    </div>
  </div>
);

const ButtonLink = ({ url, name }) => (
  <button
    type="button"
    className={`py-2 px-4 mt-2 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[8px] outline-none w-auto`}
    onClick={() => window.location.href = `/${url}`}
    style={{ minWidth: '10px' }}  // Set minimum width
  >
    Use {name}
  </button>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You innovate with AI, <br className="sm:block hidden" /> we’ll enhance your capabilities.</h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        With our AI solutions, you can streamline your operations, enhance decision-making, and unlock new opportunities for growth. Whether you need an AI helper, an image generator, or a financial assistant, we have the tools to take your business to the next level.
      </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          content={feature.content}
          index={index}
          projectLink={projectLinks[index]}
        />
      ))}
    </div>
  </section>
);

export default Business;
