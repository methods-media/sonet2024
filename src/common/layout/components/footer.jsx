import { Linkedin, Facebook, Network, Youtube, Instagram, TwitterIcon, } from "lucide-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
export default function Footer () {
    const { locale, pathname } = useRouter()
    const { t, i18n } = useTranslation('common')
    const isArabic=i18n?.language=='ar'
    return (
        <>
          
{pathname.includes('configurator')?null:
<>
            
                    <div  className='!bg-[#05141F] w-full h-[50vh]  flex  flex-col justify-between gap-8   items-center py-10  px-10 relative  '>
                     
                        <div className=' flex flex-wrap justify-center  gap-4 items-center   '>
                            <a href='https://worldwide.kia.com/int/kia-global-websites' target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill: 'white'
                                }} aria-hidden="true" class="e-font-icon-svg e-fas-globe" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                                </svg>
                            </a>
                            <a href='https://www.facebook.com/KiaMiddleEastandAfrica/' target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill: 'white'
                                }}
                                    aria-hidden="true" class="e-font-icon-svg e-fab-facebook-f" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                            </a>
                            <a href='https://www.instagram.com/kia_mea/' target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill: 'white'
                                }} aria-hidden="true" class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </a>


                            <a href='https://x.com/KIA__MEA' target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill: 'white'
                                }} aria-hidden="true" class="e-font-icon-svg e-fab-x-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/company/kia-middle-east-africa/" target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill: 'white'
                                }} aria-hidden="true" class="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                            </a>
                            <a href='https://www.youtube.com/channel/UClAYWjFznLNw3saZHA5OkNw' target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill:'white'
                                }} aria-hidden="true" class="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                            </a>
                    
                            <a href='https://www.snapchat.com/add/kia-mea' target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill: 'white'
                                }} aria-hidden="true" class="e-font-icon-svg e-fab-snapchat-ghost" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"></path>
                                </svg>
                            </a>
                            <a href='https://www.tiktok.com/@kia.mea' target="_blank" rel="noopener">
                                <svg style={{
                                    width: '24px',
                                    height: '24px',
                                    fill: 'white'
                                }} aria-hidden="true" class="e-font-icon-svg e-fab-tiktok" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                </svg>
                            </a>




                        </div>
                        <p className={`text-xs text-[#828692] text-center max-w-[70%] ${isArabic ?'font-[GESSTwoMedium]':'font-[InterRegular]'}`}>
                          
                            {isArabic ? `كل المعلومات المدرجة في هذا الكتالوج تستند إلى البيانات المتوفرة وقت النشر. المواصفات صحيحة؛ شركة كيا تسعى للحفاظ على الدقة؛ ومع ذلك، لا يمكن ضمان الدقة في جميع الأوقات. أحياناً، تضطر شركة كيا لتحديث أو تعديل خصائص ومعلومات المركبة التي يمكن أن تكون قد ذُكرت مسبقاً في هذا الكتالوج (الكتيب). كل الصور والرسوم التوضيحية هي عبارة عن نماذج (هي مجرد محاكاة). من خلال نشر وتوزيع هذه المادة، لا تقدم شركة كيا أي ضمان، سواء كان صريحاً أو ضمنياً، لأي من منتجات كيا. تواصل مع أقرب وكيل معتمد لشركة كيا للحصول على المعلومات الحالية. ضمان مجموعة نقل الحركة: ٧ سنوات أو ١٥٠ ألف كم*. الضمان الأساسي، من الجناح إلى الجناح (من الرفرف إلى الرفرف): ٥ سنوات أو ١٠٠ ألف كم* (*أيهما يسبق أولاً). انظر إلى الشروط والأحكام. المركبة الجديدة تتوافق مع جميع المعايير القانونية والتجارية لبيع السيارات الجديدة وتلتزم بالتشريعات السارية (رقم ٥.١.٢ و ٥.١.٣). بعض الخصائص المعروضة قد لا تكون موجودة في بعض المناطق. قم باستشارة وكيل كيا المعتمد لديك بالنسبة للمعدات. “علامة تجارية ” /”M.R.”/”®” /”م. ر” /”®”. كل الحقوق محفوظة. النص، الصور، والرسوم البيانية المدرجة في هذا الكتالوج (الكتيّب) محمية بموجب حقوق الطبع والنشر وحقوق الملكية الصناعية. لا يُسمح بنسخ المحتوى، نشره، تعديله، أو إتاحته لأطراف ثالثة لأغراض تجارية. ما لم يذكر خلاف ذلك، جميع العلامات التجارية، أسماء الشركات، والإشعارات التجارية في هذا الكتالوج (الكتيّب) محمية بموجب قانون الملكية الصناعية. ينطبق الأمر نفسه على علامات كيا التجارية، أسماء الشركات، شعاراتها، وشاراتها. العلامات التجارية، أسماء الشركات، الهوية التجارية، وعناصر التصميم المستخدمة في هذا الكتالوج (الكتيّب) هي ملكية صناعية لشركة كيا. شركة كيا ٢٠٢٣. لا يسمح باستنستاخ محتويات هذه المادة بدون إذن من شركة كيا.` : `
                                                        All information contained in this catalog is based on data available at the time of publication. Descriptions are correct; Kia Corporation strives to maintain accuracy; however, accuracy cannot be guaranteed at all times. Occasionally, Kia Corporation needs to update or modify vehicle features and information already shown in this catalog. All photos and displays are simulated. Kia Corporation, through publication and distribution of this material, makes no warranty, express or implied, for any Kia products. Contact your nearest Authorized Kia Dealer for updated information. Some features shown may not be available in some regions. Consult your Authorized Kia Dealer for equipment. “Trademark”/”M.R.”/”®”. All rights reserved. The text, images, and graphics included in the catalog are protected by copyright and industrial property rights. Content may not be copied, disseminated, altered, or made commercially available to third parties. Unless otherwise specified, all trademarks, trade names, and trade notices in this catalog are protected under industrial property law. This applies to Kia trademarks, trade names, logos, and emblems. The trademarks, trade names, trade dress and design elements used in this catalog are the industrial property of Kia Corporation. 2023 Kia Corporation. Reproduction of the contents of this material without permission of Kia Corporation is prohibited.

                            
                            `}


                        </p>
                      

                     
                        <div className="flex flex-col gap-2 items-center">
                            <img src='/assets/logoWhite.png' width={150} height={50} />
                            <div className='flex justify-center gap-4  items-start   ' style={{ direction: 'ltr' }}>

                                <p><span style={{ fontSize: '11px', color: '#A3A8AD' }} className=" font-['InterRegular']">{isArabic ?`كافة الحقوق محفوظة, كيا كوربوريشن 2023 (C)`:'Copyright (C) 2023 Kia Corporation. All Rights Reserved.'}
</span></p>

                            </div>
                        </div>
                   

                    </div></>
              
}
</>


       )
}

const SvgDivider = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ zIndex: '150' }} height={250} viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="white" d="M0,6V0h1000v100L0,6z"></path>
    </svg>
);
