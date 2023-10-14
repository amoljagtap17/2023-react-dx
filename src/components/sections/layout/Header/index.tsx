import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export function Header() {
  return (
    <AppBar position="static" square elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React DX
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
