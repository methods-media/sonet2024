import { useTranslation } from "react-i18next";

export const useSpecs = () => {
    
    const { t, i18n } = useTranslation('common');
    const isArabic = i18n?.language == 'ar'
     const featureCategories = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? ["مصابيح أمامية LED MFR",
                "عجلات فولاذية مقاس 17 بوصة",
                "مصابيح LED خلفية",
                "واقي الطين",] : ["LED MFR headlights",
                `17" Steel wheels`,
                "Rear LED lights",
                "Mud guard",]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                "مقعد من القماش",
                "شاشة مركزية مقاس 12 بوصة",
                `fours "العدادات الرقمية`,
                `6 مكبرات صوت`,
                `فن. عجلة القيادة الجلدية`,
                `فن. مقبض جلد AT`


            ] : [
                `Cloth seat`,
                `12" Central Display`,
                `4" Digital Cluster`,
                `6 speakers`,
                `Art. leather steering wheel`,
                `Art. leather AT knob`,



            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ? [
                `ABS + ESC + DBC + HAC + TSA`,
                `وسائد هوائية أمامية`,
                `عجلة احتياطية بالحجم الكامل`,




            ] : [
                `ABS + ESC + DBC + HAC + TSA`,
                `Front airbags`,
                `Full-size spare wheel`,

            ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `قفل اختياري متفرق (للدفع الرباعي فقط)`,
                `عجلة قيادة تلسكوبية`,
                `فرامل الانتظار الإلكترونية`,
                `مرايا قابلة للتعديل كهربائيا`,
                `التحكم التلقائي في الإضاءة`,
                `مثبت السرعة مع محدد السرعة`,
                `مستشعرات وقوف السيارات الأمامية والخلفية`,
                `كاميرا الرؤية الخلفية`,
                `مكيف يدوي مع فتحات تهوية خلفية`,
                `xx قابلة للطي للمقعد الخلفي`,
                `قضبان جانبية للسرير`,



            ] : [
                `Mechanical Diffrential Lock (for 4WD only)`,
                `Telescopic Steering Wheel`,
                `Electronic Parking Brake`,
                `Electrically Adjustable Mirrors`,
                `Auto light control`,
                `Cruise Control with Speed Limiter`,
                `Front and Rear Parking Sensors`,
                `Rear View Camera`,
                `Manual AC with rear vents`,
                `xx rear seat folding`,
                `Bed side rails`,
            ],

        },
        {
            title: isArabic ? 'إكسسوارات' : 'Accessories',
            features: isArabic ? [
                `وصلة جر (بدون أسلاك)`,
                `التخزين الجانبي`,
                `درابزين مقبلات. لون الجسم`,
                `بطانة السرير`,
                `مكيف الهواء العاكس (220 فولت)`,
                `سبيكة 17 بوصة`,
                `عجلة احتياطية من السبائك بالحجم الكامل`,
            ] : [
                `Tow Hitch (W/O Wiring)`,
                `Side Storage`,
                "Fender Garnish. Body Color",
                `Bed Liner`,
                `A/C Inverter(220V)`,
                `Alloy 17 Inch`,
                `Full-size Alloy Spare Wheel`,
            ]
        }

    ];
     const featureCategories1 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                "مصابيح أمامية LED MFR",
                "عجلات معدنية مقاس 17 بوصة",
                "مصابيح LED خلفية",
                "واقي الطين",
                "رف سقف منخفض المستوى",
                "مصابيح الضباب الأمامية (LED)",
                "مصباح بركة"




            ]
                : [
                    "LED MFR headlights",
                    `17" Alloy wheels`,
                    "Rear LED lights",
                    "Mud guard",
                    "Low-profile roof rack",
                    "Front fog lamps (LED)",
                    "Puddle lamp",


                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                `مقاعد جلدية صناعية`,
                `شاشة مركزية مقاس 12 بوصة`,
                `fours "العدادات الرقمية`,
                `6 مكبرات صوت`,
                `عجلة قيادة من الجلد الصناعي`,
                `مقبض AT من الجلد الصناعي`,
                `مقاعد خلفية منزلقة وإمالة`,
                `مسند ذراع خلفي`,
                `إشارات انعطاف LED خلفية`,

            ] : [
                `Artificial leather seats`,
                `12" Central Display`,
                `4" Digital Cluster`,
                `6 speakers`,
                `Artificial leather steering wheel`,
                `Artificial leather AT knob`,
                `Sliding and reclining rear seats`,
                `Rear armrest`,
                `Rear LED turn signals`,




            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    `ABS + ESC + DBC + HAC + TSA`,
                    `وسائد هوائية أمامية`,
                    `عجلة احتياطية بالحجم الكامل`,
                    `وسائد هوائية جانبية وستائر`




                ] : [
                    `ABS + ESC + DBC + HAC + TSA`,
                    `Front airbags`,
                    `Full-size spare wheel`,
                    `Side and curtain airbags`

                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `قفل اختياري متفرق (للدفع الرباعي فقط)`,
                `عجلة قيادة تلسكوبية`,
                `فرامل الانتظار الإلكترونية`,
                `مرايا قابلة للتعديل كهربائيا`,
                `التحكم التلقائي في الإضاءة`,
                `مثبت السرعة مع محدد السرعة`,
                `مستشعرات وقوف السيارات الأمامية والخلفية`,
                `كاميرا الرؤية الخلفية`,
                `مكيف يدوي مع فتحات تهوية خلفية`,
                `xx قابلة للطي للمقعد الخلفي`,
                `قضبان جانبية للسرير`,
                `كيا كونيكت*`,
                `مفتاح ذكي`,
                `مكيف تلقائي (twoo منطقة)`,
                `شاحن لاسلكي (فردي)`,
                `بطانة السرير`,
                `مقعد السائق كهربائيا`,
                `مرايا قابلة للطي كهربائيا`,

            ] : [
                `Mechanical Diffrential Lock (for 4WD only)`,
                `Telescopic Steering Wheel`,
                `Electronic Parking Brake`,
                `Electrically Adjustable Mirrors`,
                `Auto light control`,
                `Cruise Control with Speed Limiter`,
                `Front and Rear Parking Sensors`,
                `Rear View Camera`,
                `Manual AC with rear vents`,
                `xx rear seat folding`,
                `Bed side rails`,
                `Kia Connect*`,
                `Smart key`,
                `Auto AC (2-zone)`,
                `Wireless charger (single)`,
                `Bedliner`,
                `Power Driver seat`,
                `Electrically Foldable Mirrors`,
            ]
        },
        {
            title: isArabic ? 'إكسسوارات' : 'Accessories',
            features: isArabic ? [
                `وصلة جر (بدون أسلاك)`,
                `التخزين الجانبي`,
                `درابزين مقبلات. لون الجسم`,
                `مكيف الهواء العاكس (220 فولت)`,
            ] : [
                `Tow Hitch (W/O Wiring)`,
                `Side Storage`,
                `Fender Garnish . Body Color`,
                `A/C Inverter(220V)`
            ]
        }

    ];
     const featureCategories2 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                "مصابيح أمامية LED للعرض",
                "عجلات معدنية مقاس 18 بوصة",
                "مصابيح LED خلفية",
                "واقي الطين",
                "رف سقف منخفض المستوى",
                "مصابيح الضباب الأمامية (LED)",
                "مصباح بركة",
            ] : ["Projection LED headlights",
                `18" Alloy wheels`,
                "Rear LED lights",
                "Mud guard",
                "Low-profile roof rack",
                "Front fog lamps (LED)",
                "Puddle lamp",]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                "نمط منقوش (مقاعد من الجلد الصناعي)",
                "شاشة مركزية مقاس 12 بوصة",
                `fours "العدادات الرقمية`,
                "6 مكبرات صوت",
                "عجلة قيادة من الجلد الصناعي",
                "مقبض AT من الجلد الصناعي",
                "مقاعد خلفية منزلقة وإمالة",
                "مسند ذراع خلفي",
                "إشارات انعطاف LED خلفية",
                "فتحة سقف",
                "مصباح الحالة المزاجية (المستوى onee)",
                `12 " لوحة عدادات رقمية`,

            ] : [
                "Embossed pattern (Artificial leather seats)",
                `12" Central Display`,
                `4" Digital Cluster`,
                "6 speakers",
                "Artificial leather steering wheel",
                "Artificial leather AT knob",
                "Sliding and reclining rear seats",
                "Rear armrest",
                "Rear LED turn signals",
                "Sunroof",
                "Mood lamp (Level xl1)",
                `12" Digital Cluster`,




            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    "ABS + ESC + DBC + HAC + TSA",
                    "وسائد هوائية أمامية",
                    "عجلة احتياطية بالحجم الكامل",
                    "وسائد هوائية جانبية وستائر",
                    "مساعد تجنب الاصطدام في الركن العكسي",
                    "مساعد تجنب الاصطدام الأمامي 1.5",
                    "نظام تثبيت السرعة الذكي مع التوقف والانطلاق",
                    "مساعد الحد الأقصى للسرعة الذكي",
                    "مساعد الحفاظ على المسار",
                    "مساعد تجنب الاصطدام في النقطة العمياء",
                    "مساعد تجنب الاصطدام الخلفي",





                ] : [
                    "ABS + ESC + DBC + HAC + TSA",
                    "Front airbags",
                    "Full-size spare wheel",
                    "Side and curtain airbags",
                    "Reverse Parking Collision-Avoidance Assist",
                    "Forward Collision-Avoidance Assist 1.5",
                    "Smart Cruise Control with Stop & Go",
                    "Intelligent Speed Limit Assist",
                    "Lane Keeping Assist",
                    "Blind-Spot Collision-Avoidance Assist",
                    "Rear Cross-Traffic Collision-Avoidance Assist",

                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                "قفل اختياري متفرق (للدفع الرباعي فقط)",
                "عجلة قيادة تلسكوبية",
                "فرامل الانتظار الإلكترونية",
                "مرايا قابلة للتعديل كهربائيا",
                "التحكم التلقائي في الإضاءة",
                "مثبت السرعة مع محدد السرعة",
                "مستشعرات وقوف السيارات الأمامية والخلفية",
                "كاميرا الرؤية الخلفية",
                "مكيف يدوي مع فتحات تهوية خلفية",
                "xx قابلة للطي للمقعد الخلفي",
                "قضبان جانبية للسرير",
                "كيا كونيكت*",
                "مفتاح ذكي",
                "مكيف تلقائي (twoo منطقة)",
                "شاحن لاسلكي (فردي)",
                "بطانة السرير",
                "مقعد السائق كهربائيا",
                "مرايا قابلة للطي كهربائيا",
                "شاشة الرؤية المحيطية",
                "شاشة الرؤية العمياء",
                "مقعد الراكب الكهربائي",
                "ألواح ظهر للمقعد مع جيوب",
                "منافذ USB للركاب الخلفيين",

            ] : [
                "Mechanical Diffrential Lock (for 4WD only)",
                "Telescopic Steering Wheel",
                "Electronic Parking Brake",
                "Electrically Adjustable Mirrors",
                "Auto light control",
                "Cruise Control with Speed Limiter",
                "Front and Rear Parking Sensors",
                "Rear View Camera",
                "Manual AC with rear vents",
                "60:40 rear seat folding",
                "Bed side rails",
                "Kia Connect*",
                "Smart key",
                "Auto AC (2-zone)",
                "Wireless charger (single)",
                "Bedliner",
                "Power Driver seat",
                "Electrically Foldable Mirrors",
                "Surround view monitor",
                "Blind View Monitor",
                "Power Passenger Seat",
                "Seat back panels with pockets",
                "USB ports for rear passengers",
            ]
        },
        {
            title: isArabic ? 'إكسسوارات' : 'Accessories',
            features: isArabic ? [
                "وصلة جر (بدون أسلاك)",
                "التخزين الجانبي",
                "درابزين مقبلات. لون الجسم",
                "مكيف الهواء العاكس (220 فولت)",
                "ملاحة. (تحويلة twlevee بوصة)+DAB",
                "ملاحة. (twlevee بوصة)",

            ] : [
                "Tow Hitch (W/O Wiring)",
                "Side Storage",
                "Fender Garnish ; Body Color",
                "A/C Inverter(220V)",
                `Navigation.(Ext. 12.3")+DAB`,
                `Navigation.(Int. 12.3")`,

            ]
        }

    ]
     const featureCategories3 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                "مصابيح أمامية LED للعرض",
                "عجلات معدنية مقاس 18 بوصة",
                "مصابيح LED خلفية",
                "واقي الطين",
                "رف سقف من نوع الجسر",
                "مصابيح الضباب الأمامية (LED)",
                "مصباح بركة",
                "باقة التصميم الخارجي للطرق الوعرة"
            ] : [
                "Projection LED headlights",
                `18" Alloy wheels`,
                "Rear LED lights",
                "Mud guard",
                "Bridge-type roof rack",
                "Front fog lamps (LED)",
                "Puddle lamp",
                "Off-road exterior design pack"]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                "نمط منقوش (مقاعد من الجلد الصناعي)",
                "شاشة مركزية مقاس 12 بوصة",
                `fours "العدادات الرقمية`,
                "مكبرات صوت 6",
                "عجلة قيادة من الجلد الصناعي",
                "مقبض AT من الجلد الصناعي",
                "مقاعد خلفية منزلقة وإمالة",
                "مسند ذراع خلفي",
                "إشارات انعطاف LED خلفية",
                "فتحة سقف",
                "مصباح الحالة المزاجية (المستوى onee)",
                ` لوحة عدادات رقمية " 12`,
                "التحول عن طريق الأسلاك وطاولة وحدة التحكم",
                "نظام الصوت المتميز Harman / Kardon",
                "دواسات معدنية"

            ] : [
                "Embossed pattern (Artificial leather seats)",
                `12 " Central Display`,
                `4" Digital Cluster`,
                "6 speakers",
                "Artificial leather steering wheel",
                "Artificial leather AT knob",
                "Sliding and reclining rear seats",
                "Rear armrest",
                "Rear LED turn signals",
                "Sunroof",
                "Mood lamp (Level 1)",
                `12 " Digital Cluster`,
                "Shift By Wire & console table",
                "Harman/Kardon premium sound system",
                "Metal pedals"



            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    "ABS + ESC + DBC + HAC + TSA",
                    "وسائد هوائية أمامية",
                    "عجلة احتياطية بالحجم الكامل",
                    "وسائد هوائية جانبية وستائر",
                    "مساعد تجنب الاصطدام في الركن العكسي",
                    "مساعد تجنب الاصطدام الأمامي 1.5",
                    "نظام تثبيت السرعة الذكي مع التوقف والانطلاق",
                    "مساعد الحد الأقصى للسرعة الذكي",
                    "مساعد الحفاظ على المسار",
                    "مساعد تجنب الاصطدام في النقطة العمياء",
                    "مساعد تجنب الاصطدام الخلفي",
                ] : [
                    "ABS + ESC + DBC + HAC + TSA",
                    "Front airbags",
                    "Full-size spare wheel",
                    "Side and curtain airbags",
                    "Reverse Parking Collision-Avoidance Assist",
                    "Forward Collision-Avoidance Assist 1.5",
                    "Smart Cruise Control with Stop & Go",
                    "Intelligent Speed Limit Assist",
                    "Lane Keeping Assist",
                    "Blind-Spot Collision-Avoidance Assist",
                    "Rear Cross-Traffic Collision-Avoidance Assist",

                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                "قفل اختياري متفرق (للدفع الرباعي فقط)",
                "عجلة قيادة تلسكوبية",
                "فرامل الانتظار الإلكترونية",
                "مرايا قابلة للتعديل كهربائيا",
                "التحكم التلقائي في الإضاءة",
                "مثبت السرعة مع محدد السرعة",
                "مستشعرات وقوف السيارات الأمامية والخلفية",
                "كاميرا الرؤية الخلفية",
                "مكيف يدوي مع فتحات تهوية خلفية",
                "قابلة للطي للمقعد الخلفي xx",
                "قضبان جانبية للسرير",
                "كيا كونيكت*",
                "مفتاح ذكي",
                "مكيف تلقائي (twoo منطقة)",
                "شاحن لاسلكي (فردي)",
                "بطانة السرير",
                "مقعد السائق كهربائيا",
                "مرايا قابلة للطي كهربائيا",
                "شاشة الرؤية المحيطية",
                "شاشة الرؤية العمياء",
                "مقعد الراكب الكهربائي",
                "الواح ظهر للمقعد مع جيوب",
                "منافذ USB للركاب الخلفيين",
                "مجسات وقوف السيارات الجانبية",
                "مساعد الركن الذكي عن بعد",
                "شاحن لاسلكي (مزدوج)",
                "المفتاح الرقمي 2.0",
                "مجداف شيفتر",
                "مقعد السائق بذاكرة",
                "مقاعد أمامية جيدة التهوية ومدفأة",
                "فرامل مقطورة مدمجة ITBC",
                "عجلة قيادة مدفأة"

            ] : [
                "Mechanical Diffrential Lock (for 4WD only)",
                "Telescopic Steering Wheel",
                "Electronic Parking Brake",
                "Electrically Adjustable Mirrors",
                "Auto light control",
                "Cruise Control with Speed Limiter",
                "Front and Rear Parking Sensors",
                "Rear View Camera",
                "Manual AC with rear vents",
                "60:40 rear seat folding",
                "Bed side rails",
                "Kia Connect*",
                "Smart key",
                "Auto AC (2-zone)",
                "Wireless charger (single)",
                "Bedliner",
                "Power Driver seat",
                "Electrically Foldable Mirrors",
                "Surround view monitor",
                "Blind View Monitor",
                "Power Passenger Seat",
                "Seat back panels with pockets",
                "USB ports for rear passengers",
                "Side Parking Sensors",
                "Remote Smart Parking Assist",
                "Wireless charger (dual)",
                "Digital key 2.0",
                "Paddle shifter",
                "Memory driver seat",
                "Ventilated and heated front seats",
                "ITBC (integrated trailer brake ctr.)",
                "Heated Steering Wheel"
            ]
        },
        {
            title: isArabic ? 'إكسسوارات' : 'Accessories',
            features: isArabic ? [
                "وصلة جر (ث / أسلاك )",
                "التخزين الجانبي",
                "درابزين مقبلات لون الجسم",
                "ملاحة. (تحويلة twlevee بوصة)+DAB",
                "ملاحة. (twlevee بوصة)",
                "مكيف الهواء العاكس 220 فولت"

            ] : [
                "Tow Hitch (W/ Wiring)",
                "Side Storage",
                "Fender Garnish; Body Color",
                `Navigation.(Ext. 12.3")+DAB`,
                `Navigation.(Int. 12.3")`,
                "A/C Inverter (220V)"

            ]
        }

    ]

     const featureCategories4 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                "مصابيح أمامية LED للعرض",
                "إطارات لجميع التضاريس مع عجلات معدنية مقاس17بوصة)",
                "مصابيح LED خلفية",
                "واقي الطين",
                "رف سقف من نوع الجسر",
                "مصابيح الضباب الأمامية (LED)",
                "مصباح بركة",
                "باقة التصميم الخارجي للطرق الوعرة",
                "سفيحة معدنية",
                "الخلوص الأرضي + 28 مم",
            ] : [
                "Projection LED headlights",
                `All-terrain tires (with 17" alloy wheel)`,
                "Rear LED lights",
                "Mud guard",
                "Bridge-type roof rack",
                "Front fog lamps (LED)",
                "Puddle lamp",
                "Off-road exterior design pack",
                "Metal underplate",
                "Ground Clearance: +28mm",
            ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                "نمط منقوش مقاعد من الجلد الصناعي)",
                "شاشة مركزية مقاس 12 بوصة",
                `fours "العدادات الرقمية`,
                "مكبرات صوت 6",
                "عجلة قيادة من الجلد الصناعي",
                "مقبض AT من الجلد الصناعي",
                "مقاعد خلفية منزلقة وإمالة",
                "مسند ذراع خلفي",
                "إشارات انعطاف LED خلفية",
                "فتحة سقف",
                "مصباح الحالة المزاجية (المستوى onee)",
                `لوحة عدادات رقمية" 12`,
                "التحول عن طريق الأسلاك وطاولة وحدة التحكم",
                "Harman / Kardon نظام الصوت المتميز",
                "دواسات معدنية",
                "مصباح الحالة المزاجية (المستوى twoo)",

            ] : [

                "Embossed pattern (Artificial leather seats)",
                `12" Central Display`,
                `4" Digital Cluster`,
                "6 speakers",
                "Artificial leather steering wheel",
                "Artificial leather AT knob",
                "Sliding and reclining rear seats",
                "Rear armrest",
                "Rear LED turn signals",
                "Sunroof",
                "Mood lamp (Level 1)",
                `12" Digital Cluster`,
                "Shift By Wire & console table",
                "Harman/Kardon premium sound system",
                "Metal pedals",
                "Mood lamp (Level 2)",


            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    "ABS + ESC + DBC + HAC + TSA",
                    "وسائد هوائية أمامية",
                    "عجلة احتياطية بالحجم الكامل",
                    "وسائد هوائية جانبية وستائر",
                    "مساعد تجنب الاصطدام في الركن العكسي",
                    "مساعد تجنب الاصطدام الأمامي 1.5",
                    "نظام تثبيت السرعة الذكي مع التوقف والانطلاق",
                    "مساعد الحد الأقصى للسرعة الذكي",
                    "مساعد الحفاظ على المسار",
                    "مساعد تجنب الاصطدام في النقطة العمياء",
                    "مساعد تجنب الاصطدام الخلفي"
                ] : [
                    "ABS + ESC + DBC + HAC + TSA",
                    "Front airbags",
                    "Full-size spare wheel",
                    "Side and curtain airbags",
                    "Reverse Parking Collision-Avoidance Assist",
                    "Forward Collision-Avoidance Assist 1.5",
                    "Smart Cruise Control with Stop & Go",
                    "Intelligent Speed Limit Assist",
                    "Lane Keeping Assist",
                    "Blind-Spot Collision-Avoidance Assist",
                    "Rear Cross-Traffic Collision-Avoidance Assist"

                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                'قفل اختياري متفرق (للدفع الرباعي فقط)',
                'عجلة قيادة تلسكوبية',
                'فرامل الانتظار الإلكترونية',
                'مرايا قابلة للتعديل كهربائيا',
                'التحكم التلقائي في الإضاءة',
                'مثبت السرعة مع محدد السرعة',
                'مستشعرات وقوف السيارات الأمامية والخلفية',
                'كاميرا الرؤية الخلفية',
                'مكيف يدوي مع فتحات تهوية خلفية',
                'قابلة للطي للمقعد الخلفي xx',
                'قضبان جانبية للسرير',
                'كيا كونيكت*',
                'مفتاح ذكي',
                'مكيف تلقائي (twoo منطقة) ',
                'شاحن لاسلكي (فردي)',
                'بطانة السرير',
                'مقعد السائق كهربائيا',
                'مرايا قابلة للطي كهربائيا',
                'شاشة الرؤية المحيطية',
                'شاشة الرؤية العمياء',
                'مقعد الراكب الكهربائي',
                'الواح ظهر للمقعد مع جيوب',
                'منافذ USB للركاب الخلفيين',
                'مجسات وقوف السيارات الجانبية',
                'مساعد الركن الذكي عن بعد',
                'شاحن لاسلكي (مزدوج)',
                'المفتاح الرقمي 2.0',
                'مجداف شيفتر',
                'مقعد السائق بذاكرة',
                'مقاعد أمامية جيدة التهوية ومدفاة',
                'فرامل مقطورة مدمجة ITBC (ctr)',
                'عجلة قيادة مدفأة',
                'قفل إلكتروني متفرق',
                'X-TREK وضع',
                'شاشة الرؤية الأرضية',
                'واجهة المستخدم الرسومية للطرق الوعرة'

            ] : [
                'Mechanical Differential Lock (for 4WD only)',
                'Telescopic Steering Wheel',
                'Electronic Parking Brake',
                'Electrically Adjustable Mirrors',
                'Auto light control',
                'Cruise Control with Speed Limiter',
                'Front and Rear Parking Sensors',
                'Rear View Camera',
                'Manual AC with rear vents',
                '60:40 rear seat folding',
                'Bed side rails',
                'Kia Connect*',
                'Smart key',
                'Auto AC (2-zone)',
                'Wireless charger (single)',
                'Bedliner',
                'Power Driver seat',
                'Electrically Foldable Mirrors',
                'Surround view monitor',
                'Blind View Monitor',
                'Power Passenger Seat',
                'Seat back panels with pockets',
                'USB ports for rear passengers',
                'Side Parking Sensors',
                'Remote Smart Parking Assist',
                'Wireless charger (dual)',
                'Digital key 2.0',
                'Paddle shifter',
                'Memory driver seat',
                'Ventilated and heated front seats',
                'ITBC (integrated trailer brake ctr.)',
                'Heated Steering Wheel',
                'Electronic Differential Lock',
                'X-TREK mode',
                'Ground view monitor',
                'Off-road GUI'
            ]
        },
        {
            title: isArabic ? 'إكسسوارات' : 'Accessories',
            features: isArabic ? [
                "وصلة جر (ث / أسلاك )",
                "التخزين الجانبي",
                "درابزين مقبلات لون الجسم",
                "ملاحة. (تحويلة twlevee بوصة)+DAB",
                "ملاحة. (twlevee بوصة)",
                "مكيف الهواء العاكس 220 فولت"

            ] : [
                "Tow Hitch (W/ Wiring)",
                "Side Storage",
                "Fender Garnish; Body Color",
                `Navigation.(Ext. 12.3")+DAB`,
                `Navigation.(Int. 12.3")`,
                "A/C Inverter (220V)"

            ]
        }

    ]
     const featureCategories5 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                'مصابيح أمامية LED للعرض',
                'إطارات لجميع التضاريس (مع عجلات معدنية مقاس 17 بوصة)',
                'مصابيح LED خلفية',
                'واقي الطين',
                'رف سقف من نوع الجسر',
                'مصابيح الضباب الأمامية (LED)',
                'مصباح بركة',
                'باقة التصميم الخارجي للطرق الوعرة',
                'سفيحة معدنية',
                'الخلوص الأرضي + 28 مم',
            ] : [
                'Projection LED headlights',
                'All-terrain tires (with 17" alloy wheel)',
                'Rear LED lights',
                'Mud guard',
                'Bridge-type roof rack',
                'Front fog lamps (LED)',
                'Puddle lamp',
                'Off-road exterior design pack',
                'Metal underplate',
                'Ground Clearance: +28mm',
            ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                'نمط منقوش (مقاعد من الجلد الصناعي)',
                'شاشة مركزية مقاس 12 بوصة',
                `fours "العدادات الرقمية`,
                'مكبرات صوت 6',
                'عجلة قيادة من الجلد الصناعي',
                'مقبض AT من الجلد الصناعي',
                'مقاعد خلفية منزلقة وإمالة',
                'مسند ذراع خلفي',
                'إشارات انعطاف LED خلفية',
                'فتحة سقف',
                'مصباح الحالة المزاجية (المستوى onee)',
                'لوحة عدادات رقمية" 12',
                'التحول عن طريق الأسلاك وطاولة وحدة التحكم',
                'نظام الصوت المتميز Harman / Kardon',
                'دواسات معدنية',
                'مصباح الحالة المزاجية (المستوى twoo)',
                'التحول عن طريق الأسلاك وطاولة وحدة التحكم',

            ] : [

                'Embossed pattern (Artificial leather seats)',
                '12" Central Display',
                '4" Digital Cluster',
                '6 speakers',
                'Artificial leather steering wheel',
                'Artificial leather AT knob',
                'Sliding and reclining rear seats',
                'Rear armrest',
                'Rear LED turn signals',
                'Sunroof',
                'Mood lamp (Level 1)',
                '12" Digital Cluster',
                'Shift By Wire & console table',
                'Harman/Kardon premium sound system',
                'Metal pedals',
                'Mood lamp (Level 2)',
                'Shift By Wire & console table',


            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    'ABS + ESC + DBC + HAC + TSA',
                    'وسائد هوائية أمامية',
                    'عجلة احتياطية بالحجم الكامل',
                    'وسائد هوائية جانبية وستائر',
                    'مساعد تجنب الاصطدام في الركن العكسي',
                    'مساعد تجنب الاصطدام الأمامي 1.5',
                    'نظام تثبيت السرعة الذكي مع التوقف والانطلاق',
                    'مساعد الحد الأقصى للسرعة الذكي',
                    'مساعد الحفاظ على المسار',
                    'مساعد تجنب الاصطدام في النقطة العمياء',
                    'مساعد تجنب الاصطدام الخلفي',
                    'مساعد تجنب الاصطدام الأمامي 2.0'
                ] : [
                    'ABS + ESC + DBC + HAC + TSA',
                    'Front airbags',
                    'Full-size spare wheel',
                    'Side and curtain airbags',
                    'Reverse Parking Collision-Avoidance Assist',
                    'Forward Collision-Avoidance Assist 1.5',
                    'Smart Cruise Control with Stop & Go',
                    'Intelligent Speed Limit Assist',
                    'Lane Keeping Assist',
                    'Blind-Spot Collision-Avoidance Assist',
                    'Rear Cross-Traffic Collision-Avoidance Assist',
                    'Forward Collision-Avoidance Assist 2.0'

                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                'قفل اختياري متفرق (للدفع الرباعي فقط)',
                'عجلة قيادة تلسكوبية',
                'فرامل الانتظار الإلكترونية',
                'مرايا قابلة للتعديل كهربائيا',
                'التحكم التلقائي في الإضاءة',
                'مثبت السرعة مع محدد السرعة',
                'مستشعرات وقوف السيارات الأمامية والخلفية',
                'كاميرا الرؤية الخلفية',
                'مكيف يدوي مع فتحات تهوية خلفية',
                'قابلة للطي للمقعد الخلفي xx',
                'قضبان جانبية للسرير',
                'كيا كونيكت*',
                'مفتاح ذكي',
                'مكيف تلقائي (twoo منطقة)',
                'شاحن لاسلكي (فردي)',
                'بطانة السرير',
                'مقعد السائق كهربائيا',
                'مرايا قابلة للطي كهربائيا',
                'شاشة الرؤية المحيطية',
                'شاشة الرؤية العمياء',
                'مقعد الراكب الكهربائي',
                'الواح ظهر للمقعد مع جيوب',
                'منافذ USB للركاب الخلفيين',
                'مجسات وقوف السيارات الجانبية',
                'مساعد الركن الذكي عن بعد',
                'شاحن لاسلكي (مزدوج)',
                'المفتاح الرقمي 2.0',
                'مجداف شيفتر',
                'مقعد السائق بذاكرة',
                'مقاعد أمامية جيدة التهوية ومدفأة',
                'ITBC (فرامل مقطورة مدمجة)',
                'عجلة قيادة مدفأة',
                'قفل إلكتروني متفرق',
                'وضع X-TREK',
                'شاشة الرؤية الأرضية',
                'واجهة المستخدم الرسومية للطرق الوعرة'

            ] : [
                'Mechanical Diffrential Lock (for 4WD only)',
                'Telescopic Steering Wheel',
                'Electronic Parking Brake',
                'Electrically Adjustable Mirrors',
                'Auto light control',
                'Cruise Control with Speed Limiter',
                'Front and Rear Parking Sensors',
                'Rear View Camera',
                'Manual AC with rear vents',
                '60:40 rear seat folding',
                'Bed side rails',
                'Kia Connect*',
                'Smart key',
                'Auto AC (2-zone)',
                'Wireless charger (single)',
                'Bedliner',
                'Power Driver seat',
                'Electrically Foldable Mirrors',
                'Surround view monitor',
                'Blind View Monitor',
                'Power Passenger Seat',
                'Seat back panels with pockets',
                'USB ports for rear passengers',
                'Side Parking Sensors',
                'Remote Smart Parking Assist',
                'Wireless charger (dual)',
                'Digital key 2.0',
                'Paddle shifter',
                'Memory driver seat',
                'Ventilated and heated front seats',
                'ITBC (integrated trailer brake ctr.)',
                'Heated Steering Wheel',
                'Electronic Diffrential Lock',
                'X-TREK mode',
                'Ground view monitor',
                'Off-road GUI'
            ]
        },
        {
            title: isArabic ? 'إكسسوارات' : 'Accessories',
            features: isArabic ? [
                "وصلة جر (ث / أسلاك )",
                "التخزين الجانبي",
                "درابزين مقبلات لون الجسم",
                "ملاحة. (تحويلة twlevee بوصة)+DAB",
                "ملاحة. (twlevee بوصة)",
                "مكيف الهواء العاكس 220 فولت"

            ] : [
                "Tow Hitch (W/ Wiring)",
                "Side Storage",
                "Fender Garnish; Body Color",
                `Navigation.(Ext. 12.3")+DAB`,
                `Navigation.(Int. 12.3")`,
                "A/C Inverter (220V)"

            ]
        }

    ]
    return {
        featureCategories,
        featureCategories1,
        featureCategories2,
        featureCategories3,
        featureCategories4,
        featureCategories5,
    }
}