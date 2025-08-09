import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/my-astro-site/',  // 這裡要和你的 repo 名稱完全一樣（含前後斜線）
  outDir: 'docs',           // 輸出資料夾
});
