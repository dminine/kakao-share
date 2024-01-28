import { WebPlugin } from '@capacitor/core';

import type { KakaoSharePlugin } from './definitions';

export class KakaoShareWeb extends WebPlugin implements KakaoSharePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
