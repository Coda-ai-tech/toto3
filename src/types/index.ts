export enum DataTypeProps {
  local = 'local', // use local i18n data
  cms = 'cms', // fetch from CMS API
}

export interface Module<C, O> {
  id: string;
  module: string;
  moduleOption: O;
  content: C;
}

export interface ModuleData<D, O> {
  order: number;
  data: Module<D, O>;
}

export enum ButtonVariation {
  contain = 'contain', // with color bg
  outline = 'outline', // with transparent bg & outline
  default = 'default', // with no bg & no outline
}

export enum ButtonSize {
  md = 'md',
  sm = 'sm',
  lg = 'lg',
}

export enum ButtonColor {
  primary = 'primary',
  overlay = 'overlay',
}

export enum ButtonShape {
  horizontal = 'horizontal',
  square = 'square',
}

export enum ButtonIconPosition {
  left = 'left',
  right = 'right',
}

export enum ButtonAction {
  routeLink = 'routeLink',
  external = 'external',
  callback = 'callback',
  newWindow = 'newWindow',
  submit = 'submit',
  modal = 'modal',
}

export interface ButtonLinkElement {
  type: ButtonAction | string;
  href: string | null;
}

export interface ButtonElementDefault {
  label: string;
  link: ButtonLinkElement;
}

export interface TopNavListItem {
  image?: string;
  label: string;
  link: ButtonLinkElement;
}

export interface ButtonElement<IconList> extends ButtonElementDefault {
  variant?: ButtonVariation | string;
  color?: ButtonColor | string;
  shape?: ButtonShape | string;
  icon?: {
    name: IconList;
    position?: ButtonIconPosition;
  } | null;
  callback?: () => void;
  callBackData?: any;
}

export enum MediaFormat {
  image = 'image',
  video = 'video',
}

export type Source = {
  desktop: string;
  mobile: string;
};

export interface MediaElement {
  type: MediaFormat;
  src: Source;
  alt: string;
  poster: MediaElement;
}

export interface SectionTitle {
  title: string;
  subTitle?: string;
  description?: string;
}

export type HouseType = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7' | 'p8';
