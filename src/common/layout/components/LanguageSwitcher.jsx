import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ toggleMenu }) => {
  const router = useRouter();
  const { i18n } = useTranslation('common')

  const handleLanguageChange = () => {
    if (i18n?.language == 'en')
      router.replace('/ar').then(() => {
        toggleMenu(false);

      })
    else
      router.replace('/en').then(() => {
        toggleMenu(false);
})
 
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
      <button
        
        onClick={handleLanguageChange}
        locale="en"
        style={{
          cursor: 'pointer',

          color:
            i18n?.language === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          padding: '4px 8px',
          borderRadius: '4px',
          background:
            i18n?.language === 'en' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          transition: 'all 0.2s ease',
        }}
      >
        EN
      </button>
      <button
        onClick={handleLanguageChange}
        locale="ar"
        style={{
          cursor:'pointer',
          color:
            i18n?.language === 'ar' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          padding: '4px 8px',
          borderRadius: '4px',
          background:
            i18n?.language === 'ar' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          transition: 'all 0.2s ease',
        }}
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
