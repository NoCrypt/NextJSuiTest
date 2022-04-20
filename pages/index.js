import Head from 'next/head';
import Button from '@nextui-org/react/button';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Text, Container, Row, css } from '@nextui-org/react';

const App = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  );
};

export default function Home() {
  return (
    <Container
      fluid
      justifyContent="center"
      alignItems="center"
      css={{
        minHeight: '100vh',
        border: '$space$1 solid $blue500',
      }}
    >
      <Text
        h1
        size={90}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
          border: '$space$1 solid $blue500',
        }}
      >
        Form NextUI.
      </Text>
    </Container>
  );
}
