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


export const Header = () => {
  return (
    <AppBar position="relative" elevation={0} sx={{ bgcolor: "transparent" }}>
      <Container>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" color="#31d39b" fontWeight={"bold"}>
              TestValley
            </Typography>
          </IconButton>
          <TextField
            InputProps={{
              sx: {
                width: 300,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="search"
            variant="outlined"
            size="small"
            sx={{ mx: "auto", display: { xs: "none", md: "block" } }}
          />
          <Stack direction="row" alignItems="center" sx={{ ml: "auto" }}>
            <IconButton>
              <DownloadOutlinedIcon />
            </IconButton>
            <Divider />
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
