import { Box, Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box component="footer" padding={2} bgcolor="primary.main" color="white">
      <Container maxWidth="lg">
        <Typography>Copyright</Typography>
      </Container>
    </Box>
  );
}
