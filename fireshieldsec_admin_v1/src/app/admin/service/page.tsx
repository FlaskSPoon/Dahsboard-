'use client';
import Banner from 'components/admin/nft-marketplace/Banner';
import NFt2 from '/public/img/nfts/Nft2.png';
import NFt4 from '/public/img/nfts/Nft4.png';
import NFt3 from '/public/img/nfts/Nft3.png';
import avatar1 from '/public/img/avatars/avatar1.png';
import avatar2 from '/public/img/avatars/avatar2.png';

import ServiceCard from 'components/card/ServiceCard';
import { MdModeEditOutline } from 'react-icons/md';
import image1 from '/public/img/profile/image1.png';
import Card from 'components/card';
import Image from 'next/image';

const Service = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner
          title={'Centre de gestion des services'}
          content={
            'Ajouter, modifier, supprimer et gérer l état des services, formations, certifications et des plateformes'
          }
          buttonOne={{
            title: 'Ajouter un service',
            link: 'service/create',
          }}
          buttonTwo={{
            title: 'Ajouter une catégorie de service',
            link: 'service/category/',
          }}
        />
        {/* Liste des catégories */}
        <div className="mb-5 mt-10 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Catégories
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Catégorie 1
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Catégorie 2
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Catégorie 3
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Catégorie 4
              </a>
            </li>
          </ul>
        </div>

        {/* Liste des services */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <ServiceCard
            avatar={avatar1}
            title="Abstract Colors"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
            author="Esthera Jackson"
            category="category"
            image={NFt3}
          />
          <ServiceCard
            title="ETH AI Brain"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
            author="Nick Wilson"
            category="category"
            image={NFt2}
          />
          <ServiceCard
            avatar={avatar2}
            title="Mesh Gradients"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
            author="Will Smith"
            category="category"
            image={NFt4}
          />
        </div>

        {/* Liste des catégories*/}
        <div className="mt-4 grid h-full w-full grid-cols-1 gap-5 lg:!grid-cols-12">
          <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:col-span-4">
            <Card extra={'w-full p-4 h-full'}>
              <div className="mb-8 w-full">
                <p className="text-xl font-bold text-navy-700 dark:text-white">
                  Catégorie des services
                </p>
                <p className="mt-2 text-base text-gray-600">
                  Ici, vous pouvez trouver plus de détails sur vos catégories de
                  services.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-2 ">
                <CategoryService
                  id={1}
                  image={image1}
                  title={'Technology fireshield'}
                  description={'Category description for users #1'}
                />
                <CategoryService
                  id={1}
                  image={image1}
                  title={'Technology fireshield'}
                  description={'Category description for users #1'}
                />
                <CategoryService
                  id={1}
                  image={image1}
                  title={'Technology fireshield'}
                  description={'Category description for users #1'}
                />
                <CategoryService
                  id={1}
                  image={image1}
                  title={'Technology fireshield'}
                  description={'Category description for users #1'}
                />
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

const CategoryService = ({
  id,
  image,
  title,
  description,
}: CategoryServiceProps) => {
  return (
    <div
      key={id}
      className="mb-3 flex w-full items-center justify-between rounded-2xl border border-gray-50 bg-white p-3 shadow-2xl shadow-gray-200 dark:border-navy-800 dark:!bg-navy-700 dark:shadow-none"
    >
      <div className="flex items-center">
        <div className="">
          <Image
            width="2"
            height="20"
            className="h-[83px] w-[83px] rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="ml-4">
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {title}
          </p>
          <p className="mb-2 text-sm text-gray-600">{description}</p>
          <a
            className="font-medium text-brand-500 transition duration-300 hover:text-brand-700 dark:text-brand-500"
            href=" "
          >
            Consulter les services
          </a>
        </div>
      </div>
      <button className="linear mr-4 flex items-center justify-center rounded-[20px] border-[1px] px-2 py-2 text-base text-gray-600 transition duration-200  hover:border-brand-500 hover:text-brand-500">
        <MdModeEditOutline />
      </button>
    </div>
  );
};

export default Service;
