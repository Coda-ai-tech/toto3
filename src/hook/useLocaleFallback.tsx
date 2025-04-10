import { useRouter } from 'next/router';

export const GetLocaleFallback = () => {
  const router = useRouter();
  return router.locale || 'en';
};
