import { Card, Text, Group, Badge, createStyles, Button, rem } from '@mantine/core';
import { ThirdwebNftMedia } from "@thirdweb-dev/react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  section: {
    padding: theme.spacing.xs,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const truncateDescription = (str) => {
  const length = 126;
  const ending = '...'
  if (str && str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

export default function NFTCard({nft}) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      
      <Card.Section className={classes.imageSection}>
        <ThirdwebNftMedia style={{height: "auto", width: "100%"}} metadata={nft.metadata} />
      </Card.Section>


      <Group position="apart" mt="md">
          <Group position="apart">
            <Text fw={500}>{nft.metadata.name}</Text>
            <Badge variant="outline">#{nft.metadata.id}</Badge>
          </Group>
          
          <Text fz="xs" c="dimmed" >
          {truncateDescription(nft.metadata.description)}
          </Text>
      </Group>

      <Card.Section className={classes.section}  mt="md">
        <Group spacing={30}>

          <Button radius="xl" style={{ flex: 1 }}>
            View Details
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}