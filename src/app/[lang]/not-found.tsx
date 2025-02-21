import { DataTypeProps } from '@/types';
import { Locale } from '@/app/i18n.config';
import { GetPageData } from '@/hook/useFetchData';
import Image from 'next/image';
import Header from '@@/Header';
import Footer from '@@/Footer';
import Button from '@@/Button';

import { ButtonElement, ButtonVariation, ButtonAction, ButtonColor, ButtonIconPosition } from '@/types';
import { IconList } from '@/types/icons';

const NotFound = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = ((await params)?.lang as Locale) || 'en';
  const globalData = await GetPageData(DataTypeProps.local, [lang, 'global']);
  const { dictionary } = globalData;

  const backHomeCta: ButtonElement<IconList> = {
    label: 'Back Home',
    variant: ButtonVariation.default,
    color: ButtonColor.primary,
    link: {
      type: ButtonAction.routeLink,
      href: '/',
    },
  };

  return (
    <body>
      <Header data={globalData} />
      <div className='notFound'>
        <title>{`${dictionary?.error.notFound.title} | ${dictionary?.siteTitle}`}</title>
        <div className='notFoundInner'>
          <div className={`notFoundText`}>
            <h5 className='notFoundTitle'>{dictionary?.error?.notFound?.title}</h5>
            <div
              className={'notFoundDescription richText'}
              dangerouslySetInnerHTML={{
                __html: dictionary?.error?.notFound?.description,
              }}
            />
            <div className='notFoundAction'>
              <Button content={backHomeCta} />
            </div>
          </div>

          <div className={`notfoundImg`}>
            <Image
              src={`/assets/img/content/404/0${Math.floor(Math.random() * 9) + 1}.jpg`}
              width={1024}
              height={768}
              alt='Not Found'
              draggable={false}
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <Footer data={globalData} />
    </body>
  );
};

export default NotFound;
