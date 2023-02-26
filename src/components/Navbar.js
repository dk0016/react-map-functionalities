import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Tooltip, Typography } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: "drawerWidth",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const Navbar = () => {
  // eslint-disable-next-line
  const [open, setOpen] = React.useState(false);

  return (
    <Typography sx={{ color: "aqua" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Inbox", "Starred", "email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <Tooltip title={text} arrow placement="right">
                  <ListItemButton
                    sx={{
                      minHeight: 60,
                      display: "flex",
                      justifyContent: "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                  </ListItemButton>
                </Tooltip>
                <Divider />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Typography>
  );
};

export default Navbar;
