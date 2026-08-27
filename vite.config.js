import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const base = isGitHubActions ? '/like-a-model/' : '/';

function prefixPublicAssetUrls() {
  if (base === '/') return null;
  const rewrite = (source) =>
    String(source)
      .replaceAll('url("/assets/', `url("${base}assets/`)
      .replaceAll("url('/assets/", `url('${base}assets/`)
      .replaceAll('url(/assets/', `url(${base}assets/`);
  return {
    name: 'prefix-public-asset-urls',
    apply: 'build',
    generateBundle(_opts, bundle) {
      for (const item of Object.values(bundle)) {
        if (item.type === 'asset' && item.fileName.endsWith('.css')) {
          item.source = rewrite(item.source);
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), prefixPublicAssetUrls()].filter(Boolean),
  appType: 'spa',
  base,
});
