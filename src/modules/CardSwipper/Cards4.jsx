import { useRouter } from 'next/router';
import SwipeableCards from '../../components/SwipeableCards';
import { useTranslation } from 'next-i18next';
const FeaturesCards4 = () => {
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const cards = [
        {
            title: t('paddle_shifters'),
            description:t('paddle_shifters_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c046c1f4-b49d-436a-e9e1-aad903144800/public',
        },
      
       
        {
            title: t('epb'),
            description: t('epb_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2244a79a-b300-4ab2-763d-3aeb930d2c00/public',

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

export default FeaturesCards4;
