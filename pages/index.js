import Head from 'next/head';
import Button from '@nextui-org/react/button';
import { useTheme as useNextTheme } from 'next-themes';
import {
  Switch,
  useTheme,
  Text,
  Container,
  Input,
  Grid,
} from '@nextui-org/react';

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
      w="100%"
      display="flex"
      direction="column"
      justify="center"
      alignItems="middle"
      css={{
        minHeight: '100vh',
      }}
    >
      <Text
        h1
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
          fontWeight: '700',
          fontSize: '40',
          pb: '$10',
          '@sm': {
            fontSize: '60',
          },
        }}
      >
        thatcardmaker
      </Text>
      <Grid.Container gap={4} justify="center">
        <Grid>
          <Input labelPlaceholder="Default" color="default" />
        </Grid>
        <Grid>
          <Input labelPlaceholder="Primary" color="primary" />
        </Grid>
        <Grid>
          <Input labelPlaceholder="Secondary" color="secondary" />
        </Grid>
        <Grid>
          <Input labelPlaceholder="Success" color="success" />
        </Grid>
        <Grid>
          <Input labelPlaceholder="Warning" color="warning" />
        </Grid>
        <Grid>
          <Input labelPlaceholder="Error" color="error" />
        </Grid>
        <Button shadow color="primary">
          Has
        </Button>
      </Grid.Container>
    </Container>
  );
}
