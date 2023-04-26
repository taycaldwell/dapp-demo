import { useState } from "react";
import { useContract, useNFTs, useMetadata, useTotalCount } from "@thirdweb-dev/react";
import { createStyles, Pagination, Container, Grid, Title, Text, LoadingOverlay, rem, Center } from "@mantine/core";
import NFTCard from './nftCard';

const ITEMS_PER_PAGE = 4;

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

function Gallery() {
  const { classes } = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const { contract } = useContract("0xac6564f3718837caadd42eed742d75c12b90a052");
  const { data: metadata } = useMetadata(contract);
  const { data: totalCount } = useTotalCount(contract);
  
  const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const end = start + ITEMS_PER_PAGE - 1;
  const { data: nfts, isLoading } = useNFTs(contract, {start: start, count: end });

  return (
    <Center>
      <Container className={classes.container} fluid>
          <LoadingOverlay visible={isLoading} overlayBlur={2} />
          <Title className={classes.title}>
              {metadata ? metadata.name : ''}
          </Title>
          <Text color="dimmed" mt="md" mb="md">
            <b>Items: {totalCount ? totalCount.toNumber().toLocaleString('en') : 0}</b>
          </Text>
          <Grid columns={4} gutter="lg">
            {nfts && nfts.map((nft, index) => (
              <Grid.Col span={1} key={index}>
                <NFTCard nft={nft}/>
              </Grid.Col>
            ))}
          </Grid>
          {nfts &&
            <Pagination
              mt="xl"
              total={Math.ceil(nfts.length / ITEMS_PER_PAGE)}
              value={currentPage}
              onChange={setCurrentPage}
            />
          }
    </Container>
    </Center>
  );
}

export default Gallery;
