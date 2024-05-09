/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites: async () => {
    return [
      {
        source: '/movies',
        destination: '/aaaa',
      },
    ];
  },
  /*rewrites: async () => {
    return [
      {
        source: '/movies/:path*',
        destination: 'https://api.themoviedb.org/3/discover/movies/:path*',
        /*has: [
          {
            type: "host",
            key: 'method',
            value: 'GET',
          },
          {
            type: "header",
            key: 'accept',
            value: 'application/json',
          },
          {
            type: "header",
            key: 'Authorization',
            value: 'Bearer ' + process.env.API_KEY,
          },
        ],*/
          
      /*},
    ];
  },*/
};

export default nextConfig;
