/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        source: '/getMovies1',
        destination: 'https://636de0e191576e19e3326ef1.mockapi.io/all/Collection',
      },
    ];
  }
};

export default nextConfig;

