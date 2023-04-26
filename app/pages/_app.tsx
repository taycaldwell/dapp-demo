import { useState } from 'react';
import type { AppProps } from 'next/app';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { ThirdwebProvider,coinbaseWallet, metamaskWallet } from "@thirdweb-dev/react";
import { BaseGoerli } from "@thirdweb-dev/chains";
import themeColors from '../theme/colors'

function MyApp({ Component, pageProps }: AppProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
  return (
    <ThirdwebProvider
    activeChain={BaseGoerli}
    supportedWallets={[
      coinbaseWallet(),
      metamaskWallet(),
    ]}
    >
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{
          colorScheme,
          colors: {
            dark: themeColors.dark as any,
            brand: themeColors.brand as any,
          },
          primaryColor: 'brand',
          }} withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
