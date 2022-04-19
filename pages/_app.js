import { createTheme, NextUIProvider, globalCss } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '@fontsource/inter';
import '@fontsource/inter/700.css';
import '@fontsource/inter/variable.css';

const globalStyles = globalCss({
  html: {
    backgroundColor: '#000', //fix blend-mode on mobile, has no effect in ui!
  },
});

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
};

const lightTheme = createTheme({
  type: 'light',
  className: 'light',
  theme: { fonts },
});

const darkTheme = createTheme({
  type: 'dark',
  className: 'dark',
  theme: { fonts },
});

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
      enableSystem={false}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
