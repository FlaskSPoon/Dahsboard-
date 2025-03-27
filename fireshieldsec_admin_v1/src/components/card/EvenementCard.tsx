import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import Card from 'components/card';
import Image from 'next/image';
import { IoMdEye, IoMdTrash } from 'react-icons/io';


const EvenementCard = (props: {
  image: string;
  title: string;
  content: string;
  category: string;
  date: string;
  download?: string;
  extra?: string;
}) => {
  const { title, date, content, category, image, extra } = props;
  const [heart, setHeart] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // 🔹 Ajout du state

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        {/* Image */}
        <div className="relative w-full">
          <Image
            width="200"
            height="200"
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt={title}
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

        {/* Titre et Date */}
        <div className="mb-3 flex flex-col px-1">
          <p className="text-lg font-bold text-navy-700 dark:text-white">{title}</p>
          {date && <p className="text-sm text-gray-500">Publié le {date}</p>}
          
          {/* Gestion du contenu avec "Lire la suite" */}
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
            {isExpanded ? content : `${content.substring(0, 100)}...`}
          </p>
          <button 
            className="text-blue-500 text-sm mt-1 hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Réduire" : "Lire la suite"}
          </button>
        </div>

        {/* Catégorie et Actions */}
        <div className="flex items-center justify-between">
          <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
            {category}
          </p>
          
          <div className="flex items-center">
            <button className="linear mr-2 rounded-[20px] bg-brand-900 px-4 py-2 text-base text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
              Publier
            </button>
            <button className="linear mr-2 rounded-[20px] border-[1px] border-brand-800 px-4 py-2 text-base text-brand-800 transition duration-200 hover:bg-brand-800 hover:text-white active:bg-brand-700 dark:border-brand-500 dark:text-white dark:hover:bg-brand-300 dark:active:opacity-90">
              Modifier
            </button>
            <button className="linear rounded-[20px] border-[1px] px-2 py-2 text-base text-gray-600 transition duration-200 hover:border-red-500 hover:text-red-500">
              <IoMdTrash />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EvenementCard;
