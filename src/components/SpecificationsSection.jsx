'use client';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const SpecificationsSection = () => {
    const [openIndex, setOpenIndex] = useState(0); // Start with first accordion open
    const { t, i18n } = useTranslation('common');

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const accordionData = [
        {
            title: i18n?.language == 'ar' ? 'الراحة' :'Convenience',
            content: [
                "faa1",
               "faa2",
               "faa3",
               "faa4",
               "faa5",
               "faa6",
               "faa7",
               "faa8",
                "faa9",
                "faa10",
            ]
        },
        {
            title: t('ext'),
            content: [
                "Baa",
               "Baa1",
               "Baa2",
               "Baa3",
               "Baa4",
               "Baa5",
               "Baa6",
               "Baa7",
               "Baa8",
               "Baa9",
                "Baa10",
            ]
        },
        {
            title: t('interior'),
            content: [
                "Gaa",
                "Gaa1",
                "Gaa2",
                "Gaa3",
                "Gaa4",
                "Gaa5",
                "Gaa6",
                "Gaa7",
                "Gaa8",
                "Gaa9",
            ]
        },
        {
            title: t('safety'),
            content: [
                "zaa",
                "zaa1",
                "zaa2",
                "zaa3",
                "zaa4",
                "zaa5",
                "zaa6",
                "zaa7",
                "zaa8",
                "zaa9",
                "zaa10",
                "zaa11",
            ]
        }
    ];

    return (
        <div id='specifications' className="w-full min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className={`text-2xl md:text-4xl font-bold text-[#05141F] mb-4 ${i18n?.language === 'ar' ? 'font-[GSSBold]' : 'font-[InterBold]'
                        }`}>
                        {t('specifications')}
                    </h2>
                </div>

                {/* Key Specifications Icons */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                    <div className="text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 mx-auto mb-3   flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                <g id="Normal / 48 / Line / Vehicle / Engine Combustion">
                                    <path id="Vector 291" d="M13.3333 58.4615V31.5385H22.9293L28.6869 20H49.798L57.4747 31.5385H76.6667V54.6154H65.1515L55.5555 70H28.6869L22.9293 58.4615H13.3333Z" stroke="#05141F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path id="Vector 292" d="M11.6667 44.9997H3.33333M3.33333 33.333V56.6663" stroke="#05141F" stroke-width="2" stroke-linecap="square"></path>
                                    <path id="Vector 293" d="M38.3333 18.3333L38.3333 10M46.6667 10L30 10" stroke="#05141F" stroke-width="2" stroke-linecap="square"></path>
                                </g>
                            </svg>
                        </div>
                      
                        <p className={`text-base md:text-xl font-bold text-[#05141F] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}>
                            {t('liter')?.split('1.5')?.[0]}
                            <span className='font-[InterBold]'>1.5</span>
                            {t('liter')?.split('1.5')?.[1]}
                        
                        
                        </p>
                        <p className={`text-sm text-[#6D6E71] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>
                            {t('rpm')?.split('115')?.[0]}
                            <span className='font-[InterRegular]'>115</span>
                            {t('rpm')?.split('115')?.[1]?.split('6300')?.[0]}
                            <span className='font-[InterRegular]'>6300</span>
                            {t('rpm')?.split('115')?.[1]?.split('6300')?.[1]}

                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="dial">
                                <g>
                                    <path d="M44.52,26.42l2-2a2.24,2.24,0,0,0-3.17-3.17l-2,2a15.63,15.63,0,1,0,3.17,3.17ZM44,22a1.27,1.27,0,0,1,.88-.37,1.25,1.25,0,0,1,.88,2.12L41,28.56a1.29,1.29,0,0,1-1.76,0,1.26,1.26,0,0,1,0-1.76ZM42.35,46.12A14.64,14.64,0,1,1,40.64,24L38.5,26.09a2.26,2.26,0,0,0-.65,1.59,2.24,2.24,0,0,0,2.24,2.24,2.18,2.18,0,0,0,1.58-.66l2.13-2.13A14.61,14.61,0,0,1,42.35,46.12Z"></path>
                                    <path d="M42.44 34.13a.5.5 0 10-1 .15 9.58 9.58 0 11-8-8 .5.5 0 00.58-.42.51.51 0 00-.42-.57 10.57 10.57 0 108.8 8.81zM32 12.84a2.79 2.79 0 10-2.79-2.79A2.79 2.79 0 0032 12.84zm0-4.57a1.79 1.79 0 11-1.79 1.78A1.79 1.79 0 0132 8.27zM48.21 15.61a2.8 2.8 0 000 3.94 2.77 2.77 0 002 .82 2.74 2.74 0 002-.82 2.79 2.79 0 10-3.94-3.94zm3.24 3.24a1.8 1.8 0 01-2.53 0 1.79 1.79 0 012.53-2.53A1.8 1.8 0 0151.45 18.85zM57.71 33a2.79 2.79 0 102.79 2.79A2.79 2.79 0 0057.71 33zm0 4.57a1.79 1.79 0 111.79-1.78A1.78 1.78 0 0157.71 37.55zM48.21 52a2.78 2.78 0 002 4.75 2.78 2.78 0 10-2-4.75zm3.24 3.23a1.79 1.79 0 110-2.52A1.79 1.79 0 0151.45 55.21zM11.85 52a2.79 2.79 0 103.94 0A2.78 2.78 0 0011.85 52zm3.23 3.23a1.79 1.79 0 110-2.52A1.79 1.79 0 0115.08 55.21zM6.29 33a2.79 2.79 0 102.78 2.79A2.79 2.79 0 006.29 33zm0 4.57a1.79 1.79 0 111.78-1.78A1.79 1.79 0 016.29 37.55zM13.82 20.37a2.77 2.77 0 002-.82 2.79 2.79 0 10-3.94 0A2.74 2.74 0 0013.82 20.37zm-1.27-4.05a1.79 1.79 0 112.53 2.53 1.79 1.79 0 01-2.53-2.53z"></path>
                                </g>
                            </svg>
                        </div>
                      
                        <p className={`text-base md:text-xl font-bold text-[#05141F] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}>
{t('DM')}</p>
                        <p className={`text-sm text-[#6D6E71] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>{t('DM1')}</p>
                    </div>

                    <div className="text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="airbags">
                                <circle cx="121.069" cy="130.522" r="36.938" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="15"></circle>
                                <path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="15" d="   M135.549,192.955L135.549,192.955c16.584-7.446,36.004,0.717,42.288,17.775l20.008,54.309   c5.656,15.351,20.281,25.549,36.64,25.549h46.531c15.705,0,29.882,9.409,35.982,23.882l53.033,121.616   c6.787,16.102-5.036,33.915-22.51,33.915h0c-9.699,0-18.479-5.738-22.373-14.621l-38.46-85.135   c-6.224-14.199-20.259-23.371-35.762-23.371h-62.262c-16.316,0-30.911-10.144-36.598-25.436l-33.072-88.926   C113.234,217.023,120.474,199.723,135.549,192.955z"></path>
                                <path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="15" d="   M25.291,115.864l92.408,242.572c6.493,17.044,22.837,28.307,41.075,28.307h94.216"></path>
                                <g>
                                    <path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="15" d="   M449.639,113.137h-16.412c-27.078,0-52.342-13.599-67.269-36.192c-15.26-23.096-37.682-37.684-62.681-37.684   c-45.982,0-83.257,49.351-83.257,110.228s37.276,110.228,83.257,110.228c24.999,0,47.421-14.588,62.681-37.684   c14.927-22.593,40.191-36.192,67.269-36.192h33.047"></path>
                                    <line x1="478" x2="474.342" y1="113.137" y2="113.137" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="15"></line>
                                </g>
                            </svg>
                        </div>
                       
                        <p className={`text-base md:text-xl font-bold text-[#05141F] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}>
                            {t('airBags')?.split('6')?.[0]}
                            <span className='font-[InterBold]'>6</span>
                            {t('airBags')?.split('6')?.[1]}
                        
                        </p>
                        <p className={`text-sm text-[#6D6E71] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>{t('airBag1')}</p>
                    </div>

                    <div className="text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="car-tracking">
                                <path fill="#333" d="M95.076 138.528c42.631-38.269 97.678-59.344 154.999-59.344 58.765 0 114.841 22.018 157.899 61.996a12.454 12.454 0 0 0 8.503 3.34c3.354 0 6.701-1.343 9.163-3.995 4.697-5.059 4.404-12.968-.655-17.665-47.697-44.286-109.814-68.676-174.91-68.676-63.496 0-124.473 23.347-171.699 65.74-5.137 4.611-5.563 12.515-.952 17.651 4.613 5.141 12.515 5.566 17.652.953z"></path>
                                <path fill="#333" d="M373.088 187.908a12.47 12.47 0 0 0 9.269-4.109c4.634-5.116 4.243-13.021-.874-17.655-36.059-32.657-82.727-50.643-131.408-50.643-47.063 0-92.555 16.942-128.097 47.707-5.22 4.519-5.789 12.412-1.271 17.632 4.519 5.219 12.413 5.787 17.632 1.271 30.999-26.832 70.681-41.609 111.735-41.609 42.466 0 83.174 15.688 114.626 44.172a12.456 12.456 0 0 0 8.388 3.234z"></path>
                                <path fill="#333" d="M250.075 182.626c-29.389 0-57.063 9.652-80.031 27.913-5.404 4.296-6.301 12.159-2.005 17.563 4.296 5.403 12.158 6.302 17.564 2.005 18.499-14.707 40.794-22.481 64.473-22.481 24.682 0 48.595 8.822 67.335 24.843a12.448 12.448 0 0 0 8.117 2.999c3.528 0 7.035-1.485 9.507-4.377 4.486-5.248 3.869-13.139-1.378-17.624-23.265-19.888-52.948-30.841-83.582-30.841zM116.933 358.957c-25.604 0-46.434 20.834-46.434 46.442 0 25.604 20.83 46.436 46.434 46.436 25.609 0 46.443-20.831 46.443-46.436 0-25.608-20.834-46.442-46.443-46.442zm0 67.878c-11.819 0-21.434-9.616-21.434-21.436 0-11.823 9.615-21.442 21.434-21.442 11.824 0 21.443 9.619 21.443 21.442 0 11.82-9.62 21.436-21.443 21.436zm268.064-67.884c-25.608 0-46.441 20.829-46.441 46.433 0 25.609 20.833 46.443 46.441 46.443s46.442-20.834 46.442-46.443c0-25.604-20.834-46.433-46.442-46.433zm0 67.876c-11.823 0-21.441-9.619-21.441-21.443 0-11.818 9.619-21.433 21.441-21.433 11.823 0 21.442 9.614 21.442 21.433 0 11.824-9.619 21.443-21.442 21.443z"></path>
                                <path fill="#333" d="M467.176 344.6c-.08-.079-.16-.158-.242-.235-11.315-10.718-35.845-18.186-66.737-26.835-8.249-2.31-16.04-4.49-19.798-5.949-3.753-1.456-12.076-5.191-21.713-9.514-27.749-12.449-69.683-31.262-90.338-35.641-26.633-5.633-117.338-2.659-135.148 6.145l-5.053 2.5c-14.128 6.989-35.479 17.552-45.948 22.481-4.036 1.901-10.486 4.159-16.724 6.343-14.998 5.251-24.488 8.801-29.82 13.827-11.025 10.396-18.159 50.85-18.918 62.276-1.075 16.18-.248 30.755 2.213 38.989a12.499 12.499 0 0 0 11.484 8.912l28.842 1.137a61.978 61.978 0 0 1-4.668-23.637c0-.525.027-1.043.04-1.565l-13.025-.514c-.429-5.542-.515-13.01.06-21.666.935-14.08 7.788-40.199 11.362-45.894 3.214-2.152 14.085-5.958 20.691-8.271 7.153-2.505 13.91-4.87 19.116-7.322 10.686-5.032 32.167-15.659 46.381-22.69l4.973-2.462c10.97-4.789 93.105-9.602 118.964-4.134 18.037 3.824 60.133 22.709 85.284 33.992 10.363 4.649 18.548 8.321 22.901 10.011 4.892 1.898 12.487 4.024 22.103 6.717 16.884 4.728 48.236 13.505 56.163 20.797 6.496 6.683 9.111 24.779 9.299 39.737-3.281.254-7.287.467-11.656.634.036.873.067 1.748.067 2.629a61.975 61.975 0 0 1-4.245 22.564c13.315-.37 26.796-1.292 32.445-3.412a12.5 12.5 0 0 0 8.078-10.823c.353-5.037 2.913-49.785-16.433-69.127z"></path>
                                <path fill="#333" d="M322.694 404H179.233c.01.467.036.931.036 1.401 0 8.35-1.662 16.315-4.654 23.599h152.82c-3.066-7-4.768-15.429-4.768-23.888-.001-.373.021-.112.027-1.112z"></path>
                            </svg>
                        </div>
                       
                        <p className={`text-base md:text-xl font-bold text-[#05141F] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}>
{t('audio')}</p>
                        <p className={`text-sm text-[#6D6E71] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>{t('smart2')}</p>
                    </div>

                    <div className="text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="wireless-charging">
                                <path d="M41.8629 26.78891l-6.60072-.07436L36.77 14.89861a1.00217 1.00217 0 00-1.79841-.725L21.3445 32.48749a1.00751 1.00751 0 00.85227 1.5988l7.88444-.37572L27.66832 49.07344a1.00674 1.00674 0 001.84345.68094L42.70438 28.3163A1.00922 1.00922 0 0041.8629 26.78891zM30.42367 44.44922l1.82875-11.64275a1.00953 1.00953 0 00-1.03816-1.15653l-6.997.33364L34.29839 18.43576l-1.16633 9.14082a1.00908 1.00908 0 00.98239 1.12914l5.95591.06752zM19.9453 18.52872a1.00249 1.00249 0 00-1.41682.00587 19.163 19.163 0 00.00021 26.93125 1.002 1.002 0 001.42243-1.411 17.15019 17.15019 0 01.00024-24.10931A1.00177 1.00177 0 0019.9453 18.52872z"></path>
                                <path d="M5.94934 32.00022a25.89015 25.89015 0 017.6193-18.43134 1.00205 1.00205 0 00-1.41686-1.41675c-10.86916 10.42337-10.869 29.27312.00036 39.69623A1.00192 1.00192 0 0013.5686 50.4315 25.89007 25.89007 0 015.94934 32.00022zM51.84813 12.15206a1.002 1.002 0 00-1.41676 1.41687C60.523 23.24769 60.52274 40.753 50.431 50.43154a1.00216 1.00216 0 001.41716 1.41677C62.71734 41.42516 62.71722 22.575 51.84813 12.15206z"></path>
                                <path d="M45.47148,18.53459a1.002,1.002,0,0,0-1.42264,1.411,17.15019,17.15019,0,0,1-.00023,24.10931,1.00878,1.00878,0,0,0,.71157,1.70741.99852.99852,0,0,0,.7113-.29646A19.16317,19.16317,0,0,0,45.47148,18.53459Z"></path>
                            </svg>
                        </div>
                       
                        <p className={`text-base md:text-xl font-bold text-[#05141F] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}>
{t('chg')}</p>
                    </div>

                    <div className="text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center">
                            <svg aria-hidden="true" class="e-font-icon-svg e-fas-shield-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                            </svg>
                        </div>
                      
                        <p className={`text-base md:text-xl font-bold text-[#05141F] ${i18n?.language=='ar'?'font-[GSSMedium]':'font-[InterBold]'}`}>
                            {t('warranty')?.split('5')?.[0]}
                            <span className='font-[InterBold]'>5</span>
                            {t('warranty')?.split('5')?.[1]}
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Accordions */}
                    <div className="space-y-4">
                        {accordionData.map((item, index) => (
                            <div key={index} className="  overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`w-full cursor-pointer bg-[#05141F] flex justify-between  text-xl font-bold items-center p-6 h-[50px] text-left transition-colors ${openIndex === index
                                        ? ' text-white'
                                        : ' text-[#FFFFFF96]'
                                        }`}
                                >
                                    <span className={`text-lg font-semibold ${i18n?.language === 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'
                                        }`}>
                                        {item.title}
                                    </span>
                                    <span className={`transform transition-transform text-2xl  ${i18n?.language === 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'
                                        } ${openIndex === index ? 'rotate-180 text-white' : 'rotate-0 text-[#FFFFFF96]'
                                        }`}>
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="  p-2 md:p-6 bg-gray-50">
                                        <ul className="space-y-3">
                                            {item.content.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex gap-1 items-start">
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span className={`text-gray-700 ${i18n?.language === 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'
                                                        }`}>
                                                        {t(feature)?.includes('LED') ?
                                                            <>
                                                                {t(feature)?.split('LED')?.[0]}
                                                                <span className='font-[InterRegular]'>LED</span>
                                                                {t(feature)?.split('LED')?.[1]?.includes('Star Map') ?
                                                                    <>
                                                                        {t(feature)?.split('LED')?.[1]?.split('Star Map')?.[0]}
                                                                        <span className='font-[InterRegular]'>Star Map</span>
                                                                        {t(feature)?.split('LED')?.[1]?.split('Star Map')?.[1]}
                                                                    </>
                                                                : t(feature)?.split('LED')?.[1]}
                                                               
                                                              
                                                            </>
                                                            : t(feature)?.includes("TFT") ? <>
                                                                {t(feature)?.split('TFT')?.[0]}
                                                                <span className='font-[InterRegular]'>TFT</span>
                                                                {t(feature)?.split('TFT')?.[1]?.includes('10.25') ?
                                                                    <>
                                                                        {t(feature)?.split('TFT')?.[1]?.split('10.25')}
                                                                        <span className='font-[InterRegular]'>10.25</span>
                                                                        {t(feature)?.split('TFT')?.[1]?.split('10.25')}
                                                                        </>
                                                                : t(feature)?.split('TFT')?.[1]}
                                                            </> : t(feature)?.includes('6') ?
                                                                    <>
                                                                        {t(feature)?.split('6')?.[0]}
                                                                        <span className='font-[InterRegular]'>6</span>
                                                                        {t(feature)?.split('6')?.[1]}
                                                                    </>
                                                                    : t(feature)?.includes('TPMS') ?
                                                                        <>
                                                                            {t(feature)?.split('TPMS')?.[0]}
                                                                            <span className='font-[InterRegular]'>TPMS</span>
                                                                            {t(feature)?.split('TPMS')?.[1]}
                                                                        </>
                                                                        : t(feature)?.includes('ABS') ?
                                                                            <>
                                                                                {t(feature)?.split('ABS')?.[0]}
                                                                                <span className='font-[InterRegular]'>ABS</span>
                                                                                {t(feature)?.split('ABS')?.[1]}
                                                                            </>
                                                                            : t(feature)?.includes('ESC') ?
                                                                                <>
                                                                                    {t(feature)?.split('ESC')?.[0]}
                                                                                    <span className='font-[InterRegular]'>ESC</span>
                                                                                    {t(feature)?.split('ESC')?.[1]}
                                                                                </>
                                                                                : t(feature)?.includes('HAC') ?
                                                                                    <>
                                                                                        {t(feature)?.split('HAC')?.[0]}
                                                                                        <span className='font-[InterRegular]'>HAC</span>
                                                                                        {t(feature)?.split('HAC')?.[1]}
                                                                                    </>
                                                                                    : t(feature)?.includes('LKA') ?
                                                                                        <>
                                                                                            {t(feature)?.split('LKA')?.[0]}
                                                                                            <span className='font-[InterRegular]'>LKA</span>
                                                                                            {t(feature)?.split('LKA')?.[1]}
                                                                                        </>
                                                                                    :
                                                                                        t(feature)?.includes('FCA') ?
                                                                                            <>
                                                                                                {t(feature)?.split('FCA')?.[0]}
                                                                                                <span className='font-[InterRegular]'>FCA</span>
                                                                                                {t(feature)?.split('FCA')?.[1]}
                                                                                            </>
                                                                                            : t(feature)?.includes('LFA') ?
                                                                                                <>
                                                                                                    {t(feature)?.split('LFA')?.[0]}
                                                                                                    <span className='font-[InterRegular]'>LFA</span>
                                                                                                    {t(feature)?.split('LFA')?.[1]}
                                                                                                </>
                                                                                                :
                                                                                    
                                                                                    t(feature)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Dimensions */}
                    <div className='flex flex-col gap-5'>
                        <button
                            className={`w-full bg-[#05141F] flex justify-between  text-xl font-bold items-center p-6 h-[50px] text-left transition-colors text-white`}
                        >
                            <span className={`text-lg font-semibold ${i18n?.language === 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'
                                }`}>
                                {i18n?.language == 'ar' ? 'الأبعاد (مم)':'Dimensions'}
                            </span>
                            <span className={`transform transition-transform text-2xl  ${i18n?.language === 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'
                                } rotate-180 text-white`}>
                                {'−'}
                            </span>
                        </button>

                        {/* Car Images Grid */}
                        <img src='https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/85a80b54-03d5-4815-6575-0c083d657400/semi' width={'100%'} className='w-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificationsSection;
