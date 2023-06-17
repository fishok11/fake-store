import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'space-between' }}>
      <Typography variant="h3">Fake store</Typography>
      <IconButton aria-label="cart">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  )
}

export default NavBar;