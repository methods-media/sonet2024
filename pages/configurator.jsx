import VRShowroom from "@src/modules/VRShowroom";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Configrator() {
    return <div className="h-screen overflow-hidden">
        <VRShowroom height={'full'} />
    </div>

}
export async function getStaticProps ({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
