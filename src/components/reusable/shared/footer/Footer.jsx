import { footerData } from "~/constants/footerData";
import AgeIcon from "~/assets/icons/age-plus.svg";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-8 bg-black py-8 px-5">
      <div className="flex items-start justify-center flex-wrap gap-4">
        {footerData.map((section) => (
          <div
            key={section.id}
            className="w-[312px] flex flex-col items-center text-center gap-2"
          >
            <h2 className="text-base text-white font-bold">{section.title}</h2>
            <div className="flex flex-col gap-2">
              {section.links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-800 text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center text-center gap-2">
        <div className="h-10 w-10 shrink-0">
          <img
            src={AgeIcon}
            alt="18+Icon"
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-contain"
          />
        </div>
        <p className="text-sm font-normal text-gray-800">
          {`Copyright © ${currentYear} - All Rights Reserved. Only 21+ individuals allowed to register.`}
        </p>
        <p className="text-sm font-normal text-gray-800">Version: 1.0.10</p>
      </div>
    </div>
  );
};

export default Footer;
