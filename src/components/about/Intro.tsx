import Header from '../Header';
import { INTRO_DATA } from '../../../constant/index';

const Intro = () => {
  return (
    <>
      <div className="space-y-6 max-w-4xl md:px-2 ">
        <Header underlineColor="#ff9400" emoji='' className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-8 text-left">
          {INTRO_DATA.title}
        </Header>
        {INTRO_DATA.paragraphs.map((paragraph, index) => (
          <p key={index} className="md:text-lg leading-relaxed tracking-wide font-sans text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};

export default Intro;
