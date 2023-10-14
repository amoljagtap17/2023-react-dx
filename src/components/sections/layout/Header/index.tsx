import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { LoginButton } from "./LoginButton";

const pages = [
  {
    label: "Posts",
    href: "/posts",
  },
];

export function Header() {
  return (
    <Box>
      <AppBar component="nav" position="fixed" square elevation={0}>
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
            <Box display="flex">
              {pages.map((page) => (
                <Link
                  color="inherit"
                  href={page.href}
                  underline="none"
                  component={NextLink}
                >
                  <Button color="inherit">{page.label}</Button>
                </Link>
              ))}
              <LoginButton />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box padding={2}>
        <Toolbar />
      </Box>
    </Box>
  );
}
