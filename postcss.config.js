export default {
  plugins: {
    '@tailwindcss/postcss': {
      // Ensure CSS is properly injected in development
      inject: true,
    },
  },
}