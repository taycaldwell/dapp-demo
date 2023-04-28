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

  const name="NFT Name"
  const author="Author"
  const description="A description for the NFT."
  const image=""

  return (
      <Center>
        <Container fluid>
          <Title className={classes.title}>
            Mint an NFT
          </Title>
          <div>
            <MintCard
              image={image}
              description={description}
              name={name}
              author={author}
                />
          </div>
        </Container>
      </Center>
  );
}

export default Mint;
