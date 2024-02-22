export interface KakaoSharePlugin {
  initSDK(option: { appKey: string }): any;
  cleanup(): void;
  createCustomButton(settings: ButtonSettings & CustomSettings): void;
  createDefaultButton(
    settings:
      ButtonSettings & (
        DefaultFeedSettings |
        DefaultListSettings |
        DefaultLocationSettings |
        DefaultCommerceSettings |
        DefaultTextSettings |
        DefaultCalendarSettings
      )
  ): void;
  createScrapButton(settings: ButtonSettings & ScrapSettings): void;
  deleteImage(settings: { imageUrl: string }): Promise<void>;
  scrapImage(settings: { imageUrl: string }): Promise<{ infos: ImageInfos }>;
  sendCustom(settings: CustomSettings): void;
  sendDefault(
    settings:
      DefaultFeedSettings |
      DefaultListSettings |
      DefaultLocationSettings |
      DefaultCommerceSettings |
      DefaultTextSettings |
      DefaultCalendarSettings
  ): void;
  sendScrap(settings: ScrapSettings): void;
  uploadImage(settings: { file: FileList }): Promise<{ infos: ImageInfos }>;
}

export interface ButtonSettings {
  container: string | HTMLElement;
}

export interface CustomSettings {
  templateId: number;
  templateArgs?: Record<string, unknown>;
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface DefaultFeedSettings {
  objectType: 'feed';
  content: Content;
  itemContent?: ItemContent;
  social?: Social;
  buttonTitle?: string;
  buttons?: Button[];
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface DefaultListSettings {
  objectType: 'list';
  headerTitle: string;
  headerLink: Link;
  contents: Content[];
  buttonTitle?: string;
  buttons?: Button[];
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface DefaultLocationSettings {
  objectType: 'location';
  content: Content;
  address: string;
  addressTitle?: string;
  social?: Social;
  buttonTitle?: string;
  buttons?: Button[];
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface DefaultCommerceSettings {
  objectType: 'commerce';
  content: Content;
  commerce: Commerce;
  buttonTitle?: string;
  buttons?: Button[];
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface DefaultTextSettings {
  objectType: 'text';
  text: string;
  link: Link;
  buttonTitle?: string;
  buttons?: Button[];
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface DefaultCalendarSettings {
  objectType: 'calendar';
  idType: 'event' | 'calendar';
  id: string;
  content: Content;
  buttons?: Button[];
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface ScrapSettings {
  requestUrl: string;
  templateId?: number;
  templateArgs?: Record<string, unknown>;
  installTalk?: boolean;
  serverCallbackArgs?: Record<string, unknown> | string;
}

export interface Content {
  title: string;
  imageUrl: string;
  link: Link;
  imageWidth?: number;
  imageHeight?: number;
  description?: string;
}

export interface Link {
  webUrl?: string;
  mobileWebUrl?: string;
  androidExecutionParams?: string;
  iosExecutionParams?: string;
}

export interface ItemContent {
  profileText?: string;
  profileImageUrl?: string;
  titleImageText?: string;
  titleImageUrl?: string;
  titleImageCategory?: string;
  items?: Item[];
  sum?: string;
  sumOp?: string;
}

export interface Item {
  item: string;
  itemOp?: string;
}

export interface Social {
  likeCount?: number;
  commentCount?: number;
  sharedCount?: number;
  viewCount?: number;
  subscriberCount?: number;
}

export interface Button {
  title: string;
  link: Link;
}

export interface Commerce {
  regularPrice: number;
  discountPrice?: number;
  discountRate?: number;
  fixedDiscountPrice?: number;
  currencyUnit?: string;
  currencyUnitPosition?: number;
  productName?: string;
}

export interface ImageInfos {
  original: {
    url: string;
    length: number;
    content_type: string;
    width: number;
    height: number;
  };
}