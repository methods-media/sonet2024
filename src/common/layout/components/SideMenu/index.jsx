import LanguageSwitcher from '../LanguageSwitcher';
import { X } from 'lucide-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SideMenu = ({ toggleMenu, isOpen }) => {
  const {t, i18n } = useTranslation('common')
  const isRTL = i18n?.language === 'ar';
  const [skipAnimation, setSkipAnimation] = useState(false);

  const handleClose = (skipAnim = false) => {
    setSkipAnimation(skipAnim);
    toggleMenu(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0  bg-black/50 z-40 transition-opacity ${
          skipAnimation ? '' : 'duration-500'
        } ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => handleClose(false)}
      />
      <div
        className={`fixed inset-y-0 ${
          isRTL ? 'start-0' : 'start-0'
        } bg-[#05141F] shadow-lg p-4 w-64 h-full z-50 transition-transform ${
          skipAnimation ? '' : 'duration-500'
        } ease-in-out  z-[100000] ${
          isOpen
            ? `${isRTL ? 'translate-x-0' : 'translate-x-0'}`
            : `${isRTL ? 'translate-x-[100%]' : '-translate-x-[100%]'}`
        }`}
      >
        <div className="w-full flex justify-end cursor-pointer">
          <button onClick={() => handleClose(false)} className="cursor-pointer">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="mt-4 text-white">
          <ul className="space-y-2">
       
            <LanguageSwitcher toggleMenu={value => handleClose(true)} />
            <li>
              <a href="#welcome" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${i18n?.language == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                {t('welcome')}
              </a>
            </li>
            <li>
              <a href="#exterior" onClick={() => handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${i18n?.language == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                {t('ext')}
              </a>
            </li>
            <li>
              <a href="#interior" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${i18n?.language == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                {t('interior')}
              </a>
            </li>
            <li>
              <a href="#safety" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${i18n?.language == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                {t('safety')}
              </a>
            </li>
            <li>
              <a href="#performanceo" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${i18n?.language == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                {t('performance')}
              </a>
            </li>
           
            <li>
              <a href="#specifications" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${i18n?.language == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                {t('specifications')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
