import LanguageSwitcher from '../LanguageSwitcher';
import { X } from 'lucide-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SideMenu = ({ toggleMenu, isOpen }) => {
  const { locale } = useRouter();
  const isRTL = locale === 'ar';
  const [skipAnimation, setSkipAnimation] = useState(false);

  const handleClose = (skipAnim = false) => {
    setSkipAnimation(skipAnim);
    toggleMenu(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          skipAnimation ? '' : 'duration-500'
        } ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => handleClose(false)}
      />
      <div
        className={`fixed inset-y-0 ${
          isRTL ? 'start-0' : 'start-0'
        } bg-[#05141F] shadow-lg p-4 w-64 h-full z-50 transition-transform ${
          skipAnimation ? '' : 'duration-500'
        } ease-in-out ${
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
              <a href="#design" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${locale == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                Design
              </a>
            </li>
            <li>
              <a href="#styling" onClick={() => handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${locale == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                Styling
              </a>
            </li>
            <li>
              <a href="#technology" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${locale == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                Technology
              </a>
            </li>
            <li>
              <a href="#comfort" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${locale == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                Comfort
              </a>
            </li>
            <li>
              <a href="#safety" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${locale == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                Safety
              </a>
            </li>
           
            <li>
              <a href="#specs" onClick={()=>handleClose(true)} className={`block p-2 hover:bg-[#081f30]   ${locale == 'en' ? 'font-["InterRegular]' : 'font-["GSSMedium"]'} text-[17px]`}>
                Specifications
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
