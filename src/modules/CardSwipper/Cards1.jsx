"use client"
import { useRouter } from 'next/router';
import SwipeableCards from '../../components/SwipeableCards';
import { useTranslation } from 'next-i18next';
const FeaturesCards1 = () => {
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const cards = [
        {
            title: t('tiger_nose_grille'),
            description: t('tiger_nose_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/6eb388cd-6a76-4a75-6760-c5b880e9be00/public',
        },
      
        {
            title: t('rims'),
            description: t('rims_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d77dc558-0f21-4d16-a600-e60e7d56d400/public',
        },
        {
            title: t('hidden_door_handles'),
            description: t('hidden_door_handles_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/9beae70a-4130-4aa0-30f7-26b3974a2200/public',
        },
        {
            title: t('beltLine'),
            description: t('beltLine_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/028b7185-bfbc-4ff3-3443-eae01c357200/public',
        },
        {
            title: t('black_cladding'),
            description: t('black_cladding_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c5c0becf-8dd8-4158-efcb-f63a0dbf9100/public',
        },

    ];

    return (
        <div className="w-full px-4 py-4 h-full md:min-h-screen bg-[#05141F] cardsFeat" style={{ direction: 'ltr' }}>
            <SwipeableCards cards={locale === 'ar' ? cards.reverse() : cards} />
        </div>
    );
};

export default FeaturesCards1;
