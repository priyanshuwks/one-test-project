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

export default nextConfig;
