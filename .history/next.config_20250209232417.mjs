/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", // Apply CSP to all routes
          headers: [
            {
              key: "Content-Security-Policy",
              value: "frame-ancestors 'self' https://www.figma.com;",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  