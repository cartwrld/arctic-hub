import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Convert file URL to __dirname equivalent when using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    webpackDevMiddleware: config => {
        config.watchOptions.poll = 300; // Check for changes every 300ms
        return config;
    },
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    },
    // Your other Next.js configurations...
};

export default nextConfig;
