import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitcher = ({ toggleMenu }) => {
  const router = useRouter();

  const handleLanguageChange = () => {
    if (toggleMenu) {
      toggleMenu(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '6px 12px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Link
        href={`/${router.locale == 'en' ? 'ar' : ''}${router.asPath.replace('/', '')}`}
        onClick={handleLanguageChange}
        locale="en"
        style={{
          color:
            router.locale === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          padding: '4px 8px',
          borderRadius: '4px',
          background:
            router.locale === 'en' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          transition: 'all 0.2s ease',
        }}
      >
        EN
      </Link>
      <Link
        href={`/${router.locale == 'en' ? 'ar' : ''}${router.asPath.replace('/','')}`}
        onClick={handleLanguageChange}
        locale="ar"
        style={{
          color:
            router.locale === 'ar' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          padding: '4px 8px',
          borderRadius: '4px',
          background:
            router.locale === 'ar' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          transition: 'all 0.2s ease',
        }}
      >
        AR
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
