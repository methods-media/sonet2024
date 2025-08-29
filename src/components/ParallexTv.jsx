import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const ParallaxSectionTV = ({
    image,
    text,
    height = '100vh',
    buttonText,
    isDangeroulyInnerHtml = false,
    id
}) => {
    const { t } = useTranslation('common');
    const { locale } = useRouter();

    return (
        <div
            id={id}
            className="relative w-screen overflow-hidden"
            style={{
                height,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-white text-center px-4">
                    <h2
                        className={`text-[35px] md:text-[62px] leading-[53px] md:leading-[72px] mb-[120px] md:mb-[230px] w-full ${locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"
                            }`}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ParallaxSectionTV;
