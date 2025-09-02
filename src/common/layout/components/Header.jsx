'use client';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import SideMenu from './SideMenu';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.locale;
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Don't render content until client-side hydration is complete
  if (!mounted) {
    return null;
  }

  const sections = [
    {
      title: "#welcome",
      text: "welcome",
    },
    {
      title: "#exterior",
      text: "ext",
    },
    {
      title: "#interior",
      text: "interior",
    },
    {
      title: "#safty",
      text: "safety",
    },
    {
      title: "#performance",
      text: "performance",
    },
    {
      title: "#specifications",
      text: "specifications",
    }
  ]

  return (
    <>
      {router.pathname.includes('configurator') ? null : (
        <header className="top-0 fixed z-[20000] left-0 w-full shadow-md  p-4 flex items-center justify-between  h-[76px]  bg-[#05141f] " dir='ltr'>
          <div className="w-full  items-center hidden md:flex justify-between px-5">
            <img
              src="/assets/images/logoWhite.png"
              width={100}
              alt="Logo"
              className="h-[30px] w-[100px]"
            />
            <div className='flex gap-2 items-center ' dir={locale == 'ar' ? 'rtl' : 'ltr'}>
              {sections?.map((item, index) => (
                <div key={index} className='flex gap-1 items-center'>
                  <div className={`${locale=='ar'?'rotate-180':''}`}>
                    <SVG />
                  </div>
                  <p className={`!text-white text-[17px] font-semibold ${locale == 'en' ? 'font-["InterBold"]' : 'font-["GSSMedium"]'} `}>{t(item?.text)}</p>
                </div>
              ))}

            </div>
            <a href={`/${locale == 'en' ? 'ar' : ''}${router.asPath.replace('/', '')}`} className={`!text-white text-[17px] font-semibold ${locale == 'en' ? 'font-["GSSMedium"]' : 'font-["InterBold"]'} `}> {locale == 'en' ? "العربية" : "English"}</a>
          </div>
        
          <button onClick={toggleMenu} className="p-2 !cursor-pointer md:hidden">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1 flex justify-center md:hidden">
            <img
              src="/assets/images/logoWhite.png"
              width={'110px'}
              height={'50px'}
              alt="Logo"
              className="h-[30px]"
            />
          </div>
        </header>
      )}
     

      {/* Always render SideMenu but control visibility with isOpen prop */}
      {/* <SideMenu toggleMenu={toggleMenu} isOpen={isOpen} /> */}
    </>
  );
}



const SVG = () => {
  return (
    <svg aria-hidden="true" width="15px" height="15px" fill="#ea0029" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
    </svg>
  )
}