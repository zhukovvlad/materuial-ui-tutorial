import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import Accordian from "../components/Accordian";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://media.timeout.com/images/105124791/750/422/image.jpg"
        alt=""
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this Ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginY={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptates
        rem quos delectus debitis earum modi, ipsum veritatis. Perferendis
        officiis nobis, aut hic praesentium nulla vero, possimus omnis
        reprehenderit blanditiis quis incidunt minima voluptatibus illum quam
        corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Exercitationem officiis commodi beatae
        animi incidunt necessitatibus aut provident ad ex. Saepe!
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginBottom={3}>
        Frequently Asked Questions
      </Typography>
      <Accordian />
    </Box>
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels><BasicModal /></BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
