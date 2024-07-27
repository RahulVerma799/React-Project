import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import Sidenav from "../../components/Sidenav"
import TopNav from "../../components/TopNav"
import LayoutCom from "../../components/LayoutCom"
import PortfolioSection from "./component/PortfolioSection"
import PriceSection from "./component/PriceSection"
import RecentTransaction from "./component/RecentTransaction"

const Dashboard = ({}) => {
  return <LayoutCom title="Dashboard">
    <Grid gridTemplateColumns={{
      base:"repeat(1 , 1fr)",
      md:"repeat(2, 1fr)",
      
    }}
    gap={6}
    >
      <GridItem colSpan={2}>
          <PortfolioSection/>
    </GridItem>

    <GridItem colSpan={1}>

          <PriceSection/>
    </GridItem>
    <GridItem>
        <RecentTransaction/>
    </GridItem>
    
    </Grid>
  </LayoutCom>
}

export default Dashboard