import { createStyles, Card, Image, Text, Group, Title, rem, useMantineTheme } from '@mantine/core';
import { useContract, useMintNFT, Web3Button  } from "@thirdweb-dev/react";

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
  contractAddress: string;
  address: string;
}

export default function MintCard({
  image,
  name,
  author,
  description,
  contractAddress,
  address
}: MintCardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const { contract } = useContract(contractAddress);
  const { mutateAsync: mintNft } = useMintNFT(contract);

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
          <Web3Button
            contractAddress={contractAddress}
            action={() =>
              mintNft({
                metadata: {
                  name: name,
                  description: description,
                },
                to: address,
              })
            }
            style={{background: theme.fn.primaryColor(), color: theme.white }}
          >
            Mint
          </Web3Button> 
        </div>
      </Group>
    </Card>
  );
}