/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "drive.google.com",
            },
            {
                hostname: "https",
                hostname: "www.ookla.com",
            },
            {
                protocol: "http",
                hostname: "flowbite.s3.amazonaws.com"
            }
        ],
    },
};

export default nextConfig;
