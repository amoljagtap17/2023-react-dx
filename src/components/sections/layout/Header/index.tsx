import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { LoginButton } from "./LoginButton";

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
          <Link
            color="inherit"
            href="/"
            underline="none"
            component={NextLink}
            sx={{ flexGrow: 1 }}
          >
            <Typography variant="h6">React DX</Typography>
          </Link>
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
