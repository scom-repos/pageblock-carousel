interface IConfig {
  autoplay?: boolean;
  controls?: boolean;
  indicators?: boolean;
  swipe?: boolean;
  data?: IData[]
}

interface PageBlock {
  // Properties
  getData: () => any;
  setData: (data: any) => Promise<void>;
  getTag: () => any;
  setTag: (tag: any) => Promise<void>
  validate?: () => boolean;
  defaultEdit?: boolean;
  tag?: any;

  // Page Events
  readonly onEdit: () => Promise<void>;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  // onClear: () => void;

  // Page Block Events
  edit: () => Promise<void>;
  confirm: () => Promise<void>;
  discard: () => Promise<void>;
  config: () => Promise<void>;
}

interface IData {
  title: string;
  description: string;
  image?: string;
  imageUrl?: string;
  color?: string;
  link?: string;
}

export { IConfig, PageBlock, IData };
