'use client';
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import { FcGoogle } from 'react-icons/fc';
import Checkbox from 'components/checkbox';
import TextField from 'components/fields/TextField';
import Upload from 'components/admin/profile/Upload';
import SelectField from 'components/fields/SelectField';
import { useState } from 'react';

function CreateService() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="mb-16 mt-3 flex h-full w-full rounded-[20px] bg-white bg-clip-border !p-4 px-2 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start ">
      <form method="" action="" className="">
        <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Ajouter un service
        </h3>
        <p className="mb-6 ml-1 text-base text-gray-600">
          Remplissez les champs ci-dessous pour ajouter un service.
        </p>
        {/* Sign in section */}
        <SelectField
          variant="auth"
          id="category"
          label="Sélectionner une catégorie*"
          options={options}
          state={selectedOption ? '' : ''}
          onChange={handleSelectChange}
          disabled={false}
          extra="mb-3"
        />

        {/* Name */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Nom du service*"
          placeholder="Entrez le nom du service"
          id="name"
          type="text"
        />

        {/* Description */}
        <TextField
          variant="auth"
          label="Description*"
          extra="mb-3"
          placeholder="Entrez la description du service"
          id="textarea"
          cols={30}
          rows={7}
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="mt-2 flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Ne pas afficher le service
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href="/admin/service"
          >
            Liste des services
          </a>
        </div>
        <Upload />

        <button className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Ajouter le service
        </button>

        <div className="mt-4">
          <span className="mr-1 text-sm font-medium text-brand-500 dark:text-white">
            (*)
          </span>
          <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
            Champs obligatoires
          </span>
        </div>
      </form>
    </div>
  );
}

export default CreateService;
