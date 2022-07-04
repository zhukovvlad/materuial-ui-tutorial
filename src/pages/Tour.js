import { Container, Typography, Box } from "@mui/material";
import ImageCollage from "../components/ImageCollage";

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
    </Box>
  </Container>
);

export default Tour;
