import { useRouter } from 'next/router';
import SwipeableCards from '../../components/SwipeableCards';
import { useTranslation } from 'next-i18next';
const FeaturesCards5 = () => {
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const cards = [
        {
            title: t('wireless_charging'),
            description: t('wireless_charging_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/baa2da10-c48a-42f0-3813-2a70a0694900/public',
        },
      
        {
            title: t('chromic_mirror'),
            description: t('chromic_mirror_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/812c5f9a-48e7-40f2-bc7c-573896c80100/public',

        },
       
    ];

    return (
        <div
            className="relative z-10"
            style={{
                isolation: 'isolate',
                backgroundColor: '#fff',
            }}
        >
            <div className="w-full px-4 py-4 h-full md:min-h-screen bg-[#05141F]" style={{ direction: 'ltr' }}>
                <SwipeableCards cards={locale === 'ar' ? cards.reverse() : cards} />
            </div>
        </div>
    );
};

export default FeaturesCards5;
