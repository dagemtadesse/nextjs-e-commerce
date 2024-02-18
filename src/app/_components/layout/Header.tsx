import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Stack,
  Divider,
  Button,
} from "@mui/material";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <AppBar position="relative" elevation={0} sx={{ bgcolor: "transparent" }}>
      <Container>
        <Toolbar>
          <Stack direction={"row"} gap={1.5} alignItems={"center"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Typography
                variant="h6"
                color="secondary.main"
                fontWeight={"bold"}
              >
                TestValley
              </Typography>
            </IconButton>
            <Button
              startIcon={<MenuIcon />}
              color="secondary"
              size="small"
              variant="text"
            >
              카테고리
            </Button>
          </Stack>
          <TextField
            InputProps={{
              sx: {
                width: 350,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="살까말까 고민된다면 검색해보세요!"
            variant="outlined"
            size="small"
            sx={{ mx: "auto", display: { xs: "none", md: "block" } }}
          />
          <Stack
            direction="row"
            alignItems="center"
            sx={{ ml: "auto" }}
            gap={2}
          >
            <IconButton>
              <object data="/home-event.svg"/>
            </IconButton>
            <Divider orientation="vertical" sx={{ minHeight: "1em" }} />
            <Button color="inherit">로그인 / 회원가입</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
