import Link from 'next/link';

const FreeCard = () => {
  return (
    <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-brandLinear via-brand-500 to-brand-700 pb-4">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-brandLinear to-brand-500 text-white dark:!border-navy-800 dark:text-white">
        <h3>25</h3>
      </div>

      <div className="mt-16 flex h-fit flex-col items-center">
        <p className="text-lg font-bold text-white">Nombre d'abonnés</p>

        <Link
          href="/app/abonnes"
          className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 px-11 py-[12px] text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
        >
          Voir les abonnés
        </Link>
      </div>
    </div>
  );
};

export default FreeCard;
