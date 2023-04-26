import {
    createStyles,
    Header as MantineHeader,
    Container,
    Group,
    rem,
    useMantineColorScheme 
  } from '@mantine/core';
import { ConnectWallet } from "@thirdweb-dev/react";

import ThemeToggle from './themeToggle'

const HEADER_HEIGHT = rem(75);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export default function Header() {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <MantineHeader height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group>
          <ConnectWallet 
              theme={colorScheme}/>
          <ThemeToggle />
        </Group>
      </Container>
    </MantineHeader>
  );
}