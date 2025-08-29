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

  return (
    <>
      {router.pathname.includes('configurator') ? null : (
        <header className="top-0 fixed z-[20000] left-0 w-full shadow-md  p-4 flex items-center justify-between border-y h-[58px] border--solid border-[#FFFFFF42] !bg-black/20" dir='ltr'>
          <div className="w-full  items-center hidden md:flex justify-between px-5">
            <img
              src="/assets/images/logoWhite.png"
              width={80}
              height={20}
              alt="Logo"
              className="h-[20px]"
            />
            <div className='flex gap-2 items-center ' dir={locale == 'ar' ? 'rtl' : 'ltr'}>
              <p className={`cursor-pointer ${router?.asPath =='/#highlights' ?"text-white":'text-[#FFFFFFAD]'} ps-4 text-center   hover:text-white ${locale == 'en' ? 'font-["InterRegular"]' : 'font-["GSSMedium"]'} text-lg  font-semibold `} onClick={() => router.push('/#highlights')}>{t('Highlights')}</p>
              <p className='text-white'>|</p>
              <p className={`cursor-pointer ${router?.asPath =='/#exterior'?"text-white":'text-[#FFFFFFAD]'} ps-4 text-center   hover:text-white ${locale == 'en' ? 'font-["InterRegular"]' : 'font-["GSSMedium"]'} text-lg  font-semibold `} onClick={() => router.push('/#exterior')}>{locale == 'ar'?'التصميم الخارجي': 'Exterior'} </p>
              <p className='text-white'>|</p>

              <p className={`cursor-pointer ${router?.asPath =='/#interior'?"text-white":'text-[#FFFFFFAD]'} ps-4 text-center   hover:text-white ${locale == 'en' ? 'font-["InterRegular"]' : 'font-["GSSMedium"]'} text-lg  font-semibold `} onClick={() => router.push('/#interior')}>{locale == 'ar' ?'التصميم الداخلي': 'Interior'} </p>
              <p className='text-white'>|</p>

              <p className={`cursor-pointer ${router?.asPath =='/#performance'?"text-white":'text-[#FFFFFFAD]'} ps-4 text-center   hover:text-white ${locale == 'en' ? 'font-["InterRegular"]' : 'font-["GSSMedium"]'} text-lg  font-semibold `} onClick={() => router.push('/#performance')}>{locale == 'ar' ? 'الأداء':'Performance'}</p>
              <p className='text-white'>|</p>
              <p className={`cursor-pointer ${router?.asPath =='/#safety'?"text-white":'text-[#FFFFFFAD]'} ps-4 text-center   hover:text-white ${locale == 'en' ? 'font-["InterRegular"]' : 'font-["GSSMedium"]'} text-lg  font-semibold `} onClick={() => router.push('/#safety')}>{t('Safety')}</p>
              <p className='text-white'>|</p>

              <p className={`cursor-pointer ${router?.asPath =='/#kiaConnect'?"text-white":'text-[#FFFFFFAD]'} ps-4 text-center   hover:text-white  !font-["InterRegular"]  text-lg  font-semibold `} onClick={() => router.push('/#kiaConnect')}>{ 'Kia Connect'}</p>
              <p className='text-white'>|</p>

              <p className={`cursor-pointer ${router?.asPath =='/#specs'?"text-white":'text-[#FFFFFFAD]'} ps-4 text-center   hover:text-white ${locale == 'en' ? 'font-["InterRegular"]' : 'font-["GSSMedium"]'} text-lg  font-semibold `} onClick={() => router.push('/#specs')}>{t('specso')}</p>

            </div>
            <a href={`/${locale == 'en' ? 'ar' : ''}${router.asPath.replace('/', '')}`} className={`!text-[#FFFFFFAD] text-[17px] font-semibold ${locale == 'ar' ? 'font-["InterBold"]' : 'font-["GSSMedium"]'} `}> {locale=='en'?"العربية":"English"}</a>
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


