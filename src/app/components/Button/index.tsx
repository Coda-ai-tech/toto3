'use client';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import {
  ButtonElement,
  ButtonShape,
  ButtonAction,
  ButtonSize,
  ButtonColor,
  ButtonIconPosition,
  ButtonVariation,
} from '@/types';
import { IconList } from '@@/SvgIcon';
import Link from 'next/link';
import styles from './Button.module.scss';

// Set Necessary Components
const SvgIcon = dynamic(() => import('@@/SvgIcon'), { ssr: false });

const ButtonIcon = ({ name }: { name: IconList }) => {
  return (
    <div className={`${styles.buttonIconWrap}`}>
      <SvgIcon name={name} />
    </div>
  );
};

const Button = ({
  content,
  size = ButtonSize.md,
  className,
  isDisabled = false,
  ref,
  isLoading = false,
}: {
  content: ButtonElement<IconList>;
  size?: ButtonSize;
  className?: string;
  isDisabled?: boolean;
  ref?: any;
  isLoading?: boolean;
}) => {
  const {
    label,
    variant = ButtonVariation.contain,
    shape = ButtonShape.horizontal,
    color = ButtonColor.primary,
    icon,
    link,
    callback,
    callBackData,
  } = content;
  const { lang } = useParams();

  const onClickHandler = () => {
    if (!callback) return;
    if (callBackData) {
      console.log(callBackData);
    }
    callback();
  };

  if (!link || !link.type) {
    return <>Empty Link Data</>;
  }

  return (
    <>
      {(link.type === ButtonAction.external ||
        link.type === ButtonAction.routeLink ||
        link.type === ButtonAction.newWindow) && (
        <Link
          href={`${link.href}`}
          className={`${styles.btn} ${styles[lang as string]} ${styles[size]} ${styles[color]} ${styles[variant]} ${
            styles[shape]
          } ${icon ? styles.hasIcon : ''} ${
            icon?.position === ButtonIconPosition.left ? styles.iconLeft : styles.iconRight
          } ${isDisabled ? styles.disabled : ''} ${className ? className : ''}`}
          target={link.type === ButtonAction.external || link.type === ButtonAction.newWindow ? '_blank' : undefined}
          aria-label={label}
          tabIndex={isDisabled ? -1 : undefined}
        >
          {label && <span className={styles.btnLabel}>{label}</span>}
          {icon && link.type !== ButtonAction.external && <ButtonIcon name={icon.name} />}
          {link.type === ButtonAction.external && (
            <div className={`${styles.buttonIconWrap} ${styles.iconExternal}`}>
              <SvgIcon name='arrowExternal' />
            </div>
          )}
        </Link>
      )}

      {link.type === ButtonAction.callback && (
        <button
          ref={ref}
          className={`${styles.btn} ${styles[lang as string]} ${styles[size]} ${styles[color]} ${styles[variant]} ${
            styles[shape]
          } ${icon ? styles.hasIcon : ''} ${
            icon && icon?.position === ButtonIconPosition.left ? styles.iconLeft : styles.iconRight
          } ${isDisabled ? styles.disabled : ''} ${className ? className : ''}`}
          onClick={(e) => {
            e.preventDefault();
            if (link.type === ButtonAction.callback) {
              onClickHandler();
            }
          }}
          aria-label={label}
          disabled={isDisabled || isLoading}
        >
          {label && <span className={styles.btnLabel}>{label}</span>}
          {icon && <ButtonIcon name={icon.name} />}
        </button>
      )}

      {link.type === ButtonAction.submit && (
        <button
          className={`${styles.btn} ${styles[lang as string]} ${styles[size]} ${styles[color]} ${styles[variant]} ${
            styles[shape]
          } ${icon ? styles.hasIcon : ''} ${
            icon && icon?.position === ButtonIconPosition.left ? styles.iconLeft : styles.iconRight
          } ${isDisabled ? styles.disabled : ''} ${className ? className : ''}`}
          onClick={() => {
            onClickHandler();
          }}
          aria-label={label}
          disabled={isDisabled || isLoading}
          type='submit'
        >
          {label && <span className={styles.btnLabel}>{label}</span>}
          {icon && <ButtonIcon name={icon.name} />}
        </button>
      )}
    </>
  );
};

export default Button;
