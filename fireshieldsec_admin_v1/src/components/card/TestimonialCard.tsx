import { IoMdTrash } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Card from "components/card";
import Image from "next/image";
import { FaStar } from "react-icons/fa"; // Importation de l'icône des étoiles

const TestimonialCard = (props: {
  id: string;
  image: string;
  title: string;
  content: string;
  category: string;
  author: string;
  avatar?: string;
  published: boolean;
  rating: number; // Ajout de la note de l'utilisateur
  onDelete: (id: string) => void;
  onTogglePublish: (id: string, published: boolean) => void;
  onEdit: (id: string) => void;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  const { id, title, author, content, category, avatar, published, rating, onDelete, onTogglePublish, onEdit, onPrevious, onNext } = props;

  return (
    <Card extra="flex flex-col w-full h-full !p-4 bg-white">
      <div className="h-full w-full flex flex-col justify-between">
        
        {/* Auteur et Avatar */}
        <div className="flex items-center space-x-3">
          {avatar ? (
            <span className="h-10 w-10 rounded-full border border-white dark:!border-navy-800">
              <Image
                width="40"
                height="40"
                className="h-full w-full rounded-full object-cover"
                src={avatar}
                alt="avatar"
              />
            </span>
          ) : (
            <span className="h-10 w-10 flex items-center justify-center rounded-full border border-white bg-[#E0E5F2] text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
              <MdPerson className="h-5 w-5" />
            </span>
          )}
          <div>
            <p className="text-sm font-medium text-gray-600">Par {author}</p>
            <div className="flex space-x-1">
              {/* Ajout des étoiles pour la note */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={`text-yellow-500 ${index < rating ? 'fill-current' : ''}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Contenu et Icône Quote */}
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <p className="text-lg font-bold text-navy-700 dark:text-white">{title}</p>
            <p className="mt-2 text-sm font-medium text-gray-600">{content}</p>
          </div>
          {/* Quote Icon à côté du contenu */}
          <div className="ml-4">
            <Image
              alt="icon"
              src="/img/avatars/quoteIcon.png"
              width="50"
              height="37"
            />
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-between mt-4">
          <button onClick={onPrevious} className="slider-arrow snbp2 style2 d-lg-block d-none">
            <FaArrowLeftLong size={18} className="text-gray-700 hover:text-black transition" />
          </button>
          <button onClick={onNext} className="slider-arrow snbn2 style2 slider-next d-lg-block d-none">
            <FaArrowRightLong size={18} className="text-gray-700 hover:text-black transition" />
          </button>
        </div>

        {/* Actions */}
        <div className="mt-3 flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(id)}
              className="px-4 py-2 text-sm border rounded-md text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              Modifier
            </button>
            <button
              onClick={() => onTogglePublish(id, !published)}
              className={`px-4 py-2 text-sm border rounded-md ${
                published
                  ? "text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                  : "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
              } transition`}
            >
              {published ? "Dépublier" : "Publier"}
            </button>
            <button
              onClick={() => onDelete(id)}
              className="px-3 py-2 text-sm text-gray-600 border rounded-md hover:border-red-500 hover:text-red-500 transition"
            >
              <IoMdTrash />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
