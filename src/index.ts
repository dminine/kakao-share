import { registerPlugin } from '@capacitor/core';

import type { KakaoSharePlugin } from './definitions';

const KakaoShare = registerPlugin<KakaoSharePlugin>('KakaoShare', {
  web: () => import('./web').then(m => new m.KakaoShareWeb()),
});

export * from './definitions';
export { KakaoShare };
