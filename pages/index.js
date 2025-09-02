import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Banner from '../src/modules/Banner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ParallaxSection from '@src/modules/ParallexFirst/parallex';
import { Light } from '@src/modules/lights';
import { SwiperSection } from '@src/modules/SwiperSection';
import ParallaxSecondSection from '@src/modules/ParallexSecond/parallex';
import ParallaxThirdSection from '@src/modules/ParallexThird/parallex';
import ParallaxFourSection from '@src/modules/ParallexFour/parallex';
import ScrollProgress from '@src/components/ScrollProgress';
import ParallaxFiveSection from '@src/modules/ParallexFive/parallex';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const isArabic = i18n?.language == 'ar'; // Replace with your actual language detection logic
  const [mounted, setMounted] = useState(false);

  
  const router = useRouter();
  const { locale, query } = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading state
  }



  return (
    <main className="relative">
      <ScrollProgress />

      <Head>
        {router.locale == 'ar' ? <title> كيا سونيت 2024  - البروشور الرقمي</title> : <title>Kia Sonet 2024 – Digital Brochure</title>}
        <link rel="icon" href="/kia.ico"  />
        <meta name="description" content={router?.locale == 'ar' ? content = "سونيت 2024 الجديدة سيارة تتناغم معك مع سونيت الجديدة، استشعر حرية الانطلاق سيارة لا يمكن مجاراتها، فهي مصنوعة من خامة غاية في المتانة والقوة،ومزودة بتكنولوجيا لا مثيل لها، مصممة لتمنحك تجربة قيادة فريدة من نوعها.استمتع بقيادتها وأطلق العنان لرغباتك. قد تختلف المواصفات حسب البلد التصميم الخارجي اكتشف المزيد أحمر مع سقف أسود أحمر أبيض مع" : "The new Sonet is here to set you free. Chiseled to perfection, raw in power, and loaded with tech."} />
      </Head>

      <Banner />
      <ParallaxSection />
      <Light />
      <SwiperSection />
      <ParallaxSecondSection />
      <ParallaxThirdSection />
      <ParallaxFourSection />
   <ParallaxFiveSection/>
     

    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
