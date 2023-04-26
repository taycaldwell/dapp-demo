import Header from './header'
import Footer from './footer'
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  main: {
    height: '100vh',
    overflow: 'hidden'
  },
}));

export default function Layout({ children }) {
  
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  )
}