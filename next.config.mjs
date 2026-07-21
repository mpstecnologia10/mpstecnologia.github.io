const repoName = 'mpstecnologia.github.io';
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubPagesBuild ? `/${repoName}` : '',
  assetPrefix: isGithubPagesBuild ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
