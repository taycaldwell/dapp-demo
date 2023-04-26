import { useAddress  } from "@thirdweb-dev/react";
import { Container, Center, Title, createStyles, rem } from "@mantine/core";
import MintCard from "./mintCard";

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: 'left',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  }
}));

function Mint() {
  const { classes } = useStyles();

  const contractAddress = "0xa254dcf210727c64478C87cA0044c4689c8B77b9";
  const address = useAddress();

  const name="Demo NFT"
  const author="Coinbase"
  const description="An on-chain NFT deployed on Base."
  const image="/image/dot.png"

  return (
      <Center>
        <Container fluid>
          <Title className={classes.title}>
            Mint an NFT
          </Title>
          {!address &&
            <div>No wallet connected</div>
          }
          {address &&
          <div>
            <MintCard
              image={image}
              description={description}
              name={name}
              author={author}
              contractAddress={contractAddress}
              address={address}
                />
          </div>
          }
        </Container>
      </Center>
  );
}

export default Mint;
