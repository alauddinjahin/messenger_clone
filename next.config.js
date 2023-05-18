/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracing: false,
    reactStrictMode: true,
    swcMinify: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        appDir: true,
        swcPlugins: [["next-superjson-plugin", {}]]
    },
    images: {
        domains: [
            'res.cloudinary.com', 
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com'
        ]
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

module.exports = nextConfig
