"use client";
import Footer from './components/footer';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Layout = ({ children, lang }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { locale, pathname ,query} = useRouter()
  const { t ,i18n} = useTranslation('common');
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls 80% of the way down
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrolled > (totalHeight - viewportHeight) * 0.03);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  Object
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onClickBookNow = () => {
    if (query?.market == 'KSA-AlJaber')
      window.open('http://kia.com/aljabr/en/shopping-tools/request-a-quote.html', '_blank')
    else if (query?.market == 'KSA-NMC')
      window.open('https://6379093.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=15164&deploy=1&compid=6379093&ns-at=AAEJ7tMQ_CU52fLpebPShpbNok6vOdHYwklxK8cKttt50dtbr2w&camp=k4-rq', '_blank')

    else if (query?.market == 'UAE')
      window.open('https://www.kia-uae.com/request-a-test-drive/', '_blank')

    else if (query?.market == 'Kuwait')
      window.open('https://www.kia.com/kw/shopping-tools/request-a-test-drive.html', '_blank')

    else if (query?.market == 'Qatar')
      window.open('https://www.kiaqatar.com/quote-k4/', '_blank')

    else if (query?.market == 'South-Iraq')
      window.open('https://kiairaq.com/request-a-quote/', '_blank')

    else if (query?.market == 'North-Iraq')
      window.open('https://www.kiairaqnim.com/en/shopping-tools/request-a-quote.html', '_blank')
    else if (query?.market == 'oman')
      window.open('https://www.kia.com/om/en/shopping-tools/request-a-quote.html', '_blank')
    else 
      return null
    return 
  }

  return (
    <div>
      <Header lang={lang} />
      <div className="z-[1000]">{children}</div>
   
      <Footer />

      {pathname.includes('configurator') ? null :
        <div dir='ltr' className={`fixed bottom-[1%] flex flex-row justify-between w-full px-5  items-center gap-4 right-0 z-[50000] `}>
          <div className='relative group h-6 w-6 cursor-pointer'>
            <svg aria-hidden="true" class="e-font-icon-svg e-fas-info-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
            </svg>
            {/* Tooltip */}
            <div className="absolute bottom-0 start-0  mb-[30px] px-3 py-2 bg-[#05141f] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-[50001]">
              {i18n?.language == 'en' ? 'Specifications vary by region' : 'قد تختلف المواصفات حسب البلد'}
              {/* Arrow pointing down */}
            </div>
          </div>

          <button onClick={showScrollTop} className='w-[35px] h-[35px] rounded-sm rotate-270 bg-black/80 text-white text-lg'>{'>'}</button>

        </div>}
     
      {/* Scroll to top button */}
   
    </div>
  );
};

export default Layout;
