import { useRouter } from 'next/router';
import SwipeableCards from '../../components/SwipeableCards';
import { useTranslation } from 'next-i18next';
const FeaturesCards2 = ({pb}) => {
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const cards = [
        {
            title: t('sliding_sunroof'),
            description: t('sliding_sunroof_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/11dbe639-c504-4393-d2d8-7e795e08a800/public'
        },
        {
            title: t('heated_ventilated_seats'),
            description: t('heated_ventilated_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/771673fb-2154-4a14-df01-e5f5f46b7c00/public'
        },
        {
            title: t('harman_kardon'),
            description: t('harman_kardon_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/34d377d4-c837-4703-334b-962e8e1a2d00/public'
        },
        {
            title: t('ambient_lighting'),
            description: t('ambient_lighting_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c0099b72-2a05-404a-de2a-610800fcf800/public'
        },
        {
            title: t('cupHolder'),
            description: t('cupHolder_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/0edab1f9-bd4c-4288-9702-26fda32e2600/public'
        },
        {
            title: t('usb_ports'),
            description: t('usb_ports_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/efb4621e-df7d-4476-bc74-c0674d68f600/public'
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
            <div className={`w-full px-4 py-4 h-full md:min-h-screen   bg-[#05141F] cardsFeat`} style={{ direction: 'ltr' }}>
                <SwipeableCards pb={pb} cards={locale === 'ar' ? cards.reverse() : cards} />
            </div>
        </div>
    );
};

export default FeaturesCards2;
