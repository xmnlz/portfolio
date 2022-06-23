/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    swcMinify: false,

    compiler: {
        styledComponents: true,
    },

    images: {
        domains: ['github.com'],
    },
};
