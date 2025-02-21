export const GetLocaleFallback = () => {
  const languageCodeFallback =
    typeof window !== 'undefined' ? new URL(window?.location.href).pathname.split('/')[1] : 'en';
  return languageCodeFallback;
};
