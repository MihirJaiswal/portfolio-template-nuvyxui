import Image from 'next/image';
import img from '../../../public/assests/mihir.webp'
import Header from '../Header';

const Intro = () => {
  return (
    <>
      <div className="space-y-6 max-w-4xl md:px-2 mt-4">
        <Image
          src={img}
          alt="Mihir Jaiswal"
          className="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-20 w-20 object-cover"
          quality={100}
          loading='lazy'
          placeholder="blur"
        />
        <Header underlineColor="#ff9400" emoji='' className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-8 text-left">
          About Me
        </Header>
        <p className="md:text-lg leading-relaxed tracking-wide font-sans text-justify">
          Since I was young, I&apos;ve loved computers. I&apos;ve also been pretty creative, spending my free time drawing and painting. 
        </p>
        <p className="md:text-lg leading-relaxed tracking-wide font-sans">
          Beyond software development, I enjoy playing video games, drawing, cooking, and listening to music. I also love to read books, write stories and meeting new people.✨
        </p>
      </div>
    </>
  );
};

export default Intro;
