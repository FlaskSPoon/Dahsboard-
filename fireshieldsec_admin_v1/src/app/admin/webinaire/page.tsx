'use client';
import Banner from 'components/admin/nft-marketplace/Banner';
import NFt2 from '/public/img/nfts/Nft2.png';
import NFt4 from '/public/img/nfts/Nft4.png';
import NFt3 from '/public/img/nfts/Nft3.png';
import EvenementCard from 'components/card/EvenementCard';
import { MdModeEditOutline } from 'react-icons/md';
import image1 from '/public/img/profile/image1.png';
import Card from 'components/card';
import Image from 'next/image';

const Webinaire = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* Bannière */}
        <Banner
          title="Centre de gestion des webinaires"
          content="Ajouter, modifier, supprimer et gérer l'état des webinaires à publier"
          buttonOne={{
            title: 'Ajouter un webinaire',
            link: 'webbinaire/create',
          }}
          buttonTwo={{
            title: 'Ajouter une catégorie de webinaires',
            link: 'webbinaire/category/',
          }}
        />
        
        {/* Liste des catégories */}
        <div className="mb-5 mt-10 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Catégories
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            {['Catégorie 1', 'Catégorie 2', 'Catégorie 3', 'Catégorie 4'].map((cat, index) => (
              <li key={index}>
                <a className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white" href=" ">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Liste des événements */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <EvenementCard
          
            title="Abstract Colors"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            category="Art"
            image={NFt3}
            date={new Date(2024, 2, 15).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          />
          <EvenementCard
            title="ETH AI Brain"
            content="Sed cursus ante dapibus diam. Sed nisi."
            category="Technologie"
            image={NFt2}
            date={new Date(2024, 1, 10).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          />
          <EvenementCard
            title="Mesh Gradients"
            content="Integer nec odio. Praesent libero."
            category="Design"
            image={NFt4}
            date={new Date(2024, 0, 20).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          />
        </div>

        {/* Catégories d'événements */}
        <div className="mt-4 grid h-full w-full grid-cols-1 gap-5 lg:!grid-cols-12">
          <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:col-span-4">
            <Card extra="w-full p-4 h-full">
              <div className="mb-8 w-full">
                <p className="text-xl font-bold text-navy-700 dark:text-white">
                  Catégorie des webinaires
                </p>
                <p className="mt-2 text-base text-gray-600">
                  Ici, vous pouvez trouver plus de détails sur vos catégories de webinaires.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-2">
                {[1, 2, 3, 4].map((id) => (
                  <CategoryService
                    key={id}
                    id={id}
                    image={image1}
                    title={`Category ${id}`}
                    description={`Description de la catégorie ${id}`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CategoryServiceProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const CategoryService = ({ id, image, title, description }: CategoryServiceProps) => {
  return (
    <div
      key={id}
      className="mb-3 flex w-full items-center justify-between rounded-2xl border border-gray-50 bg-white p-3 shadow-2xl shadow-gray-200 dark:border-navy-800 dark:!bg-navy-700 dark:shadow-none"
    >
      <div className="flex items-center">
        <Image
          width="80"
          height="80"
          className="h-[83px] w-[83px] rounded-lg"
          src={image}
          alt={title}
        />
        <div className="ml-4">
          <p className="text-base font-medium text-navy-700 dark:text-white">{title}</p>
          <p className="mb-2 text-sm text-gray-600">{description}</p>
          <a className="font-medium text-brand-500 transition duration-300 hover:text-brand-700 dark:text-brand-500" href=" ">
            Consulter les webinaires
          </a>
        </div>
      </div>
      <button className="linear mr-4 flex items-center justify-center rounded-[20px] border-[1px] px-2 py-2 text-base text-gray-600 transition duration-200 hover:border-brand-500 hover:text-brand-500">
        <MdModeEditOutline  />
      </button>
    </div>
  );
};

export default Webinaire;
