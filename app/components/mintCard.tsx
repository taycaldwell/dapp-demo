import { createStyles, Card, Button, Image, Text, Group, Title, rem, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  name: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
    margin: theme.spacing.md
  },

  imageWrapper: {
    padding: theme.spacing.xl,
    marginRight: theme.spacing.lg,
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  author: {
    gap: rem(5),
  },
}));

interface MintCardProps {
  image: string;
  name: string;
  author: string;
  description: string;
}

export default function MintCard({
  image,
  name,
  author,
  description,
}: MintCardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card withBorder shadow="md" radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <div className={classes.imageWrapper}>
          <Image src={image} height={350} width={350} withPlaceholder/>
        </div>
        <div className={classes.body}>
          <Title order={1} className={classes.name} mt="sm">
            {name}
          </Title>
          <Group >
            <Text color="dimmed" weight={600} size="lg" className={classes.author} mt="xs" mb="md">By: {author}</Text>
          </Group>
          <Text weight={600} size="xl" mb="lg">
            {description}
          </Text>
          <Button
            variant="gradient"
            gradient={{ from: '#0052FF', to: '#538afc' }}>
          Mint
          </Button> 
        </div>
      </Group>
    </Card>
  );
}