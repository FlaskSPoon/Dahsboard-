const Footer = () => {
  return (
    <div className="z-50 flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <p className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <span className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{new Date().getFullYear()} Fireshield Security. Tous droits reservés.
        </span>
      </p>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="mailto:hello@fireshieldsec.com"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Support
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://fireshieldsec.com"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Site Web
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://blog.fireshieldsec.com"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
