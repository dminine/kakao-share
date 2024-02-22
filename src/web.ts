import { WebPlugin } from '@capacitor/core';

import type {
  ButtonSettings,
  CustomSettings,
  DefaultCalendarSettings,
  DefaultCommerceSettings,
  DefaultFeedSettings,
  DefaultListSettings,
  DefaultLocationSettings,
  DefaultTextSettings,
  ImageInfos,
  KakaoSharePlugin,
  ScrapSettings
} from './definitions';

declare const Kakao: any;

export class KakaoShareWeb extends WebPlugin implements KakaoSharePlugin {
  initSDK(option: { appKey: string }): any {
    if(!Kakao.isInitialized()) {
      Kakao.init(option.appKey);
    }
  }

  cleanup(): void {
    Kakao.Share.cleanup();
  }

  createCustomButton(settings: ButtonSettings & CustomSettings): void {
    Kakao.Share.createCustomButton(settings);
  }

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
  ): void {
    Kakao.Share.createDefaultButton(settings);
  }

  createScrapButton(settings: ButtonSettings & ScrapSettings): void {
    Kakao.Share.createScrapButton(settings);
  }

  deleteImage(settings: { imageUrl: string; }): Promise<void> {
    return Kakao.Share.deleteImage(settings);
  }

  scrapImage(settings: { imageUrl: string; }): Promise<{ infos: ImageInfos; }> {
    return Kakao.Share.scrapImage(settings);
  }

  sendCustom(settings: CustomSettings): void {
    Kakao.Share.sendCustom(settings);
  }

  sendDefault(
    settings:
      DefaultFeedSettings |
      DefaultListSettings |
      DefaultLocationSettings |
      DefaultCommerceSettings |
      DefaultTextSettings |
      DefaultCalendarSettings
  ): void {
    Kakao.Share.sendDefault(settings);
  }

  sendScrap(settings: ScrapSettings): void {
    Kakao.Share.sendScrap(settings);
  }

  uploadImage(settings: { file: FileList; }): Promise<{ infos: ImageInfos; }> {
    return Kakao.Share.uploadImage(settings);
  }
}
