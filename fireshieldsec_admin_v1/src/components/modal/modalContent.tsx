import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import {
  MdOutlineDangerous,
  MdCheckCircle,
  MdWarning,
  MdInfo,
} from 'react-icons/md';

interface ModalContentProps {
  type?: 'danger' | 'success' | 'warning' | 'info' | 'default';
  title: string;
  message: string;
  titleConfirm?: string;
  onConfirm?: () => void;
  cancel?: boolean;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const typeStyles = {
  danger: {
    icon: <MdOutlineDangerous className="size-6 text-red-600" />,
    bgColor: 'bg-red-100',
    titleColor: 'text-red-600',
    buttonColor: 'bg-red-600 hover:bg-red-500',
  },
  success: {
    icon: <MdCheckCircle className="size-6 text-green-600" />,
    bgColor: 'bg-green-100',
    titleColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-500',
  },
  warning: {
    icon: <MdWarning className="size-6 text-yellow-600" />,
    bgColor: 'bg-yellow-100',
    titleColor: 'text-yellow-600',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-500',
  },
  info: {
    icon: <MdInfo className="size-6 text-blue-600" />,
    bgColor: 'bg-blue-100',
    titleColor: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-500',
  },
  default: {
    icon: undefined,
    bgColor: 'bg-gray-100',
    titleColor: 'text-gray-800',
    buttonColor: 'bg-gray-800 hover:bg-gray-700',
  },
};

export default function ModalContent({
  type = 'default',
  title,
  message,
  titleConfirm = 'Confirmer',
  onConfirm,
  cancel = true,
  openModal,
  setOpenModal,
}: ModalContentProps) {
  const { icon, bgColor, titleColor, buttonColor } = typeStyles[type];

  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-navy-800/75 transition-opacity dark:bg-gray-800/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all dark:bg-navy-800 sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 dark:bg-navy-800 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {icon && (
                  <div
                    className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${bgColor} sm:mx-0 sm:size-10`}
                  >
                    {icon}
                  </div>
                )}
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className={`text-base font-semibold ${titleColor} dark:text-white`}
                  >
                    {title}
                  </DialogTitle>
                  <div className="mb-4 mt-2">
                    <p className="text-sm text-gray-800 dark:text-white">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 dark:bg-gray-900 sm:flex sm:flex-row-reverse sm:px-6">
              {onConfirm && (
                <button
                  type="button"
                  onClick={() => {
                    onConfirm();
                    setOpenModal(false);
                  }}
                  className={`shadow-xs inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white ${buttonColor} sm:ml-3 sm:w-auto`}
                >
                  {titleConfirm}
                </button>
              )}
              {cancel && (
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="shadow-xs mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-white  sm:mt-0 sm:w-auto"
                >
                  Annuler
                </button>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
