'use client';
import dynamic from 'next/dynamic';
import { useContext, useRef, useState, useEffect, useCallback } from 'react';
import { ConfigContext } from '@/context/config.context';
import { useParams } from 'next/navigation';
import {
  ModuleData,
  SectionTitle,
  MediaElement,
  ButtonElement,
  ButtonVariation,
  ButtonColor,
  ButtonAction,
  ButtonIconPosition,
  ButtonShape,
} from '@/types';
import { IconList } from '@/types/icons';
import { MatchMedia, BreakPoint, MatchMediaType } from '@/hook/useBreakPoint';
import styles from './Sandbox.module.scss';

// Set Necessary Components
const SvgIcon = dynamic(() => import('@@/SvgIcon'), { ssr: false });
const Button = dynamic(() => import('@@/Button'), { ssr: false });
const ShareButton = dynamic(() => import('@@/ShareButton'), { ssr: false });

interface SandboxProps extends SectionTitle {
  cta: ButtonElement<IconList>[];
  media: MediaElement;
}

interface ModuleOptionProps {
  isDark: boolean;
}

const Sandbox = ({ order, data }: ModuleData<SandboxProps, ModuleOptionProps>) => {
  const { lang } = useParams();
  const { screen, dictionary } = useContext(ConfigContext);

  const {
    id,
    content: { title, description, cta },
  } = data;

  const { isDark } = data.moduleOption || {};

  const buttonSamples: ButtonElement<IconList>[] = [
    {
      label: 'DOWNLOAD',
      variant: ButtonVariation.outline,
      color: ButtonColor.primary,
      shape: ButtonShape.horizontal,
      icon: {
        name: 'download',
        position: ButtonIconPosition.left,
      },
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
    {
      label: 'preview',
      variant: ButtonVariation.contain,
      color: ButtonColor.primary,
      shape: ButtonShape.horizontal,
      icon: {
        name: 'preview',
        position: ButtonIconPosition.left,
      },
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
    {
      label: 'Discover',
      variant: ButtonVariation.default,
      color: ButtonColor.primary,
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
    {
      label: 'Discover',
      variant: ButtonVariation.contain,
      color: ButtonColor.primary,
      shape: ButtonShape.square,
      icon: {
        name: 'learnMore',
        position: ButtonIconPosition.left, // ! nullable
      },
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
    {
      label: 'Discover',
      variant: ButtonVariation.contain,
      color: ButtonColor.overlay,
      shape: ButtonShape.horizontal,
      icon: null,
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
    {
      label: 'Discover',
      variant: ButtonVariation.outline,
      color: ButtonColor.overlay,
      shape: ButtonShape.horizontal,
      icon: null,
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
    {
      label: 'Read More',
      variant: ButtonVariation.default,
      color: ButtonColor.overlay,
      shape: ButtonShape.horizontal,
      icon: null,
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
    {
      label: 'Read More',
      variant: ButtonVariation.default,
      color: ButtonColor.overlay,
      shape: ButtonShape.square,
      icon: {
        name: 'learnMore',
        position: ButtonIconPosition.left, // ! nullable
      },
      link: {
        type: ButtonAction.callback,
        href: null,
      },
      callback: () => {
        alert('Custom Callback');
      },
    },
  ];

  // Video Play & Stop Test
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const videoHandler = (control: any) => {
    if (control === 'play') {
      if (!videoRef.current) return;
      videoRef.current.play();
      setPlaying(true);
      setVideoTime(videoRef.current.duration);
    } else if (control === 'pause') {
      if (!videoRef.current) return;
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const updateProgress = useCallback(() => {
    if (!videoRef.current) return;
    const progress = (Number(videoRef.current.currentTime.toFixed(1)) / videoTime) * 100;
    setProgress(Number(progress.toFixed(1)));
  }, [videoTime]);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.addEventListener('timeupdate', updateProgress);
  }, [videoTime, updateProgress]);

  const fastForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime += 5;
  };

  const restart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
  };

  const revert = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime -= 5;
  };

  return (
    <section id={id ? id : `section${order}`} className={`${styles.moduleSandbox} ${isDark ? styles.themeDark : ''}`}>
      <div className={`${styles.inner}`}>
        <hgroup className={`${styles.head}`}>
          {order === 0 ? <h1 className={styles.title}>{title}</h1> : <h2 className={styles.title}>{title}</h2>}
          <p className={styles.description}>{description}</p>
        </hgroup>
        <div className={`${styles.body}`}>
          <article>
            <div className={`${styles.info}`}>
              <ul>
                <li>
                  Screen: <h2>{screen}</h2>
                </li>
                <li> Order: {order}</li>
                <li> Module ID: {data.module}</li>
                <li> Language: {lang}</li>
              </ul>
            </div>
          </article>

          <article>
            <h4>SvgIcon</h4>
            <div className={`${styles.iconWrap}`}>
              <div className={`${styles.icon}`}>
                <SvgIcon name='linkedin' />
              </div>
              <div className={`${styles.icon}`}>
                <SvgIcon name='facebook' />
              </div>
              <div className={`${styles.icon}`}>
                <SvgIcon name='twitter' />
              </div>
              <div className={`${styles.icon}`}>
                <SvgIcon name='instagram' />
              </div>
              <div className={`${styles.icon}`}>
                <SvgIcon name='youtube' />
              </div>
            </div>
          </article>

          <article>
            <h4>Responsive</h4>
            <ul>
              {MatchMedia(BreakPoint.lg) && <li> Under BreakPoint.lg Showing Content (Default maxWidth)</li>}
              {MatchMedia(BreakPoint.lg, MatchMediaType.minWidth) && <li> Over BreakPoint.lg Showing Content</li>}
              {MatchMedia(BreakPoint.lg, MatchMediaType.only) && <li> Only BreakPoint.lg Showing Content</li>}
            </ul>
          </article>

          <article>
            <h4>Typographic</h4>
            <div className={`${styles.typoWrap}`}>
              <h1>
                H1 Toward a <mark>Dynamic</mark>, Vibrant, and Excellent TOTO
              </h1>
              <h2>H2 Charter of TOTO Group Corporate Behavior</h2>
              <h3>H3 Charter of TOTO Group Corporate Behavior</h3>
              <h4>H4 Charter of TOTO Group Corporate Behavior</h4>
              <h5>H5 Charter of TOTO Group Corporate Behavior</h5>
              <p>
                Body Medium - Based on the ideology conveyed in our corporate motto, we express to all stakeholders the
                purpose of our corporate existence, our business domains, and our aspirations.
              </p>
              <p className='bodyTextSm'>
                Body Small - The TOTO Group wants to be an entity that constantly assumes a leading role in the
                realization of a sustainable society by creating added value, which is useful for society, and
                employment, as well as by autonomous and responsible actions through fair and free competition. 
              </p>
              <p className='bodyTextRemark text-gray-dark'>
                Body Remark - The TOTO Group shall pursue customer satisfaction and provide products and services that
                are environmentally friendly, safe, and easy to use through innovation to realize sustainable economic
                growth and solve social issues.
              </p>
            </div>
          </article>

          <article>
            <h4>Button</h4>

            <div className={`${styles.btnWrap}`}>
              {cta?.map((item: ButtonElement<IconList>, index: number) => {
                return <Button key={index} content={item} />;
              })}
            </div>

            <div className={`${styles.btnWrap}`}>
              {buttonSamples?.map((item: ButtonElement<IconList>, index: number) => {
                if (item.color === ButtonColor.overlay) return;
                return <Button key={index} content={item} />;
              })}
            </div>

            <div className={`${styles.btnWrap}`}>
              {buttonSamples?.map((item: ButtonElement<IconList>, index: number) => {
                if (item.color === ButtonColor.overlay) return;
                return <Button key={index} content={item} isDisabled={true} />;
              })}
            </div>

            <div className={`${styles.btnWrap} ${styles.bgDark}`}>
              {buttonSamples?.map((item: ButtonElement<IconList>, index: number) => {
                if (item.color !== ButtonColor.overlay) return;
                return <Button key={index} content={item} />;
              })}
            </div>

            <div className={`${styles.btnWrap} ${styles.bgDark}`}>
              {buttonSamples?.map((item: ButtonElement<IconList>, index: number) => {
                if (item.color !== ButtonColor.overlay) return;
                return <Button key={index} content={item} isDisabled={true} />;
              })}
            </div>

            <br />
            <br />

            <ShareButton />
          </article>

          <article>
            <p className='controlsTime'>{progress}</p>
            <video width={300} height={250} id={'video01'} ref={videoRef} className='video' src='/assets/video/01.mp4'>
              <track kind='captions' />
            </video>
            <button onClick={() => videoHandler('play')}>play</button>
            <button onClick={() => videoHandler('pause')}>pause</button>
            <button onClick={() => fastForward()}>+5</button>
            <button onClick={() => revert()}>-5</button>
            <button onClick={() => restart()}>restart</button>
            Status: {playing ? 'playing' : 'stop'}
          </article>

          <pre>
            Dictionary
            <br />
            <br />
            {dictionary && <>{JSON.stringify(dictionary, null, 2)}</>}
          </pre>

          <article>
            <h4>Mixin Control</h4>
            <div className={`${styles.mobileOnlyContent}`}>Mobile only</div>
            <div className={`${styles.desktopOnlyContent}`}>Desktop only</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Sandbox;
