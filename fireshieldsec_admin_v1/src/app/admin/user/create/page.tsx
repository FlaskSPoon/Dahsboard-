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

  const optionsRole = [
    { value: 'USER', label: 'Utilisateur' },
    { value: 'ADMIN', label: 'Administrateur' },
    { value: 'NONE', label: 'Aucun' },
  ];

  const optionsStatus = [
    { value: 'Approved', label: 'Approved' },
    { value: 'Disable', label: 'Disable' },
    { value: 'Error', label: 'Error' },
  ];

  return (
    <div className="mb-16 mt-3 flex h-full w-full rounded-[20px] bg-white bg-clip-border !p-4 px-2 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start ">
      <form method="" action="" className="">
        <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Ajouter un utilisateur
        </h3>
        <p className="mb-6 ml-1 text-base text-gray-600">
          Remplissez les champs ci-dessous pour ajouter un utilisateur.
        </p>
        {/* Select section */}
        <div className="mb-3 flex items-center justify-between gap-x-2">
          <SelectField
            variant="auth"
            id="role"
            label="Sélectionner un role*"
            options={optionsRole}
            state={selectedOption ? '' : ''}
            onChange={handleSelectChange}
            disabled={false}
            extra="w-full"
          />
          <SelectField
            variant="auth"
            id="role"
            label="Sélectionner un status*"
            options={optionsStatus}
            state={selectedOption ? '' : ''}
            onChange={handleSelectChange}
            disabled={false}
            extra="w-full"
          />
        </div>

        {/* Name */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Nom de l'utilisateur*"
          placeholder="Entrez le nom de l'utilisateur"
          id="name"
          type="text"
        />

        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email de l'utilisateur*"
          placeholder="Entrez l'email de l'utilisateur"
          id="email"
          type="email"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Mot de passe de l'utilisateur*"
          placeholder="Entrez mot de passe de l'utilisateur"
          id="password"
          type="password"
        />

        <button className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Ajouter l'utilisateur
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
