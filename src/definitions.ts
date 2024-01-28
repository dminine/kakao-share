export interface KakaoSharePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
