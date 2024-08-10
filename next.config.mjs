/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['www.istockphoto.com', 'www.pexels.com', 'www.shorturl.at'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
        ],
    }
};

// module.exports = {
//     reactStrictMode: true,
//     env: {
//       BASE_URL: process.env.BASE_URL,
//     }
//   }

export default nextConfig;
