"use client"
import Footer from './components/footer';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Layout = ({ children }) => {
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
      <Header />
      <div className="z-[1000]">{children}</div>
   
      <Footer />

      {pathname.includes('configurator') ? null :
        <div dir='ltr' className={`fixed bottom-[1%] flex flex-col  items-end gap-4 right-[1%] z-[50000] `}>
      
          <button id='bookNowBtn' onClick={() => { onClickBookNow() }} className={` group py-3 px-6 cursor-pointer  z-[1100]  bg-white hover:bg-[#05141F] hover:text-white flex items-center gap-3 justify-center rounded-[4px]  ${showScrollTop
            ? 'opacity-100  translate-x-0'
            : 'opacity-0  translate-x-16'
          } transition-all duration-1000 ease-out`}>
            <img src='/assets/puzzleBlack.svg' className='group-hover:hidden' height={16} width={16} />
            <img src='/assets/puzzle.svg' height={16} width={16} className='hidden group-hover:flex' />
          <p className={`text-[14px] ${locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"}`}> {i18n?.language=='ar'?`خصص سيارتك الان`:'Build Yours Now'} </p>
        </button>
          <button
            onClick={scrollToTop}
            className={` w-[50px] h-[35px] cursor-pointer  bg-black/60 text-white flex items-center justify-center rounded-lg shadow-[5px] transition-all duration-300 hover:bg-black  ${showScrollTop
              ? 'opacity-100  translate-y-0'
              : 'opacity-0  translate-y-16'
          } transition-all duration-1000 ease-out`}
            style={{ zIndex: 1000 }}
          >
            <img src='/assets/arrowUp.png' width={20} height={30}/>
          </button>
      </div>}
     
      {/* Scroll to top button */}
   
    </div>
  );
};

export default Layout;
