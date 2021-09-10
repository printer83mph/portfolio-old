export default {
  mount: {
    src: '/dist',
    public: '/',
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    }
  ],
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  plugins: [
    '@snowpack/plugin-postcss',
  ],
}