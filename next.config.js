/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1zPoU_TYWAA84uZKhkZo91gT70_AnCwlB/view?usp=sharing',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
