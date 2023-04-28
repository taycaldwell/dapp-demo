import { useState } from 'react';
import {
    createStyles,
    Container,
    Center,
    SegmentedControl,
    Group,
    rem
  } from '@mantine/core';
import Gallery from './gallery';
import Mint from './mint';
  
  
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: '#0052FF', to: '#538afc' }),
  },

  control: {
    border: '0 !important',
  },

  label: {
    '&, &:hover': {
      '&[data-active]': {
        color: theme.white,
      },
    },
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  }
}));
  
export default function Main() {
  const { classes } = useStyles();
  const [value, setValue] = useState('gallery');

  return (
    <Container size="lg" py="xl">
      <Center>
        <Group className={classes.group}>
          <SegmentedControl
          value={value}
          onChange={setValue}
          radius="xl"
          size="md"
          data={[
            { label: 'Gallery', value: 'gallery' },
            { label: 'Mint', value: 'mint' },
          ]}
          classNames={classes}
        />
        {value === 'gallery' &&
          <Gallery />
        }
        {value === 'mint' &&
          <Mint />
        }
        </Group>
      </Center>
    </Container>
  );
}