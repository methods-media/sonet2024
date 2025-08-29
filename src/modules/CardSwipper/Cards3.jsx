import { useRouter } from 'next/router';
import SwipeableCards from '../../components/SwipeableCards';
import { useTranslation } from 'next-i18next';
const FeaturesCards3 = ({ small }) => {
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const cards = [
        {
            title: t('carplay'),
            description: t('carplay_description'),
            image: '/assets/phoneprojection.jpg',
        },
        {
            title: t('bvm'),
            description: t('bvm_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/453ad065-1cdb-4bd8-fefc-8f0ff60bf100/public',
        },
        {
            title: t('svm'),
            description: t('svm_description'),
            image: '/assets/svm.png',
        },
        {
            title: t('paddle_shifters'),
            description: t('paddle_shifters_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c046c1f4-b49d-436a-e9e1-aad903144800/public',
        },


        {
            title: t('epb'),
            description: t('epb_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2244a79a-b300-4ab2-763d-3aeb930d2c00/public',

        },
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
            <div className="w-full px-4 py-4 h-full md:min-h-screen cardsFeat bg-[#05141F]" style={{ direction: 'ltr' }}>
                <SwipeableCards small={small} center={true} cards={locale === 'ar' ? cards.reverse() : cards} />
            </div>
        </div>
    );
};

export default FeaturesCards3;
