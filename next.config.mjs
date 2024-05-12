/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites: async () => {
    return [
      {
        source: '/movie/:path*',
        destination: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY_SH}&/:path*`,
      },
      {
        source: '/genres',
        destination: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY_SH}&language=en`,
      },
    ];
  },
};

export default nextConfig;
