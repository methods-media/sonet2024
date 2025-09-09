'use client';;
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import SideMenu from './SideMenu';

export default function Header (lang) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t ,i18n} = useTranslation();
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => { 
    console.log("router", router.asPath)
    setIsOpen(false)
  }, [router])
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
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
      title: "#safety",
      text: "safety",
    },
    {
      title: "#performanceo",
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
              src="/assets/logoWhite.png"
              width={100}
              alt="Logo"
              className="h-[30px] w-[100px]"
            />
            <div className='flex gap-2 items-center ' dir={i18n?.language == 'ar' ? 'rtl' : 'ltr'}>
              {sections?.map((item, index) => (
                <div key={index} className='flex gap-1 items-center'>
                  <div className={`${i18n?.language=='ar'?'rotate-180':''}`}>
                    <SVG />
                  </div>
                  <a
                    href={item?.title}
                    onClick={(e) => handleSmoothScroll(e, item?.title)}
                    className={`!text-white text-[17px] font-semibold ${i18n?.language == 'en' ? 'font-["InterBold"]' : 'font-["GSSMedium"]'} `}
                  >
                    {t(item?.text)}
                  </a>
                </div>
              ))}

            </div>
            <button onClick={() => {
              if (i18n?.language == 'en')
                router.replace('/ar')
              else
                router.replace('/en')
            }}
              className={`!text-white text-[17px] cursor-pointer font-semibold ${i18n?.language == 'en' ? 'font-["GSSMedium"]' : 'font-["InterBold"]'} `}> {i18n?.language == 'en' ? "العربية" : "English"}</button>
          </div>
        
          <button onClick={toggleMenu} className="p-2 !cursor-pointer md:hidden">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1 flex justify-center md:hidden">
            <img
              src="/assets/logoWhite.png"
              width={'110px'}
              height={'50px'}
              alt="Logo"
              className="h-[30px]"
            />
          </div>
        </header>
      )}
     

      {/* Always render SideMenu but control visibility with isOpen prop */}
      {isOpen ? <SideMenu sections={sections} toggleMenu={toggleMenu} isOpen={isOpen} />:null}
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