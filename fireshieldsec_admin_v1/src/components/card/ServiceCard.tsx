import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import Card from 'components/card';
import Image from 'next/image';
import { MdPerson } from 'react-icons/md';
import { IoMdEye, IoMdTrash } from 'react-icons/io';

const ServiceCard = (props: {
  image: string;
  title: string;
  content: string;
  category: string;
  author: string;
  avatar?: string;
  download?: string;
  extra?: string;
}) => {
  const { title, author, content, category, image, avatar, extra } = props;
  const [heart, setHeart] = useState(true);
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <Image
            width="2"
            height="20"
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              <IoMdEye />
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {content}
            </p>
          </div>

          <div className="flex flex-row-reverse items-center md:mt-2 lg:mt-0">
            <p className="text-sm font-medium text-gray-600">Par {author} </p>
            {avatar ? (
              <span className="h-8 w-8 rounded-full border border-white dark:!border-navy-800">
                <Image
                  width="2"
                  height="20"
                  className="h-full w-full rounded-full object-cover"
                  src={avatar}
                  alt=""
                />
              </span>
            ) : (
              <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
                <MdPerson className="h-4 w-4" />
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              {category}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="linear mr-2 rounded-[20px] bg-brand-900 px-4 py-2 text-base text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
              Afficher
            </button>
            <button className="linear mr-2 rounded-[20px] border-[1px] border-brand-800 px-4 py-2 text-base text-brand-800 transition duration-200 hover:bg-brand-800 hover:text-white active:bg-brand-700 dark:border-brand-500 dark:text-white dark:hover:bg-brand-300 dark:active:opacity-90">
              Modifier
            </button>
            <button className="linear rounded-[20px] border-[1px] px-2 py-2 text-base text-gray-600 transition duration-200  hover:border-red-500 hover:text-red-500">
              <IoMdTrash />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
