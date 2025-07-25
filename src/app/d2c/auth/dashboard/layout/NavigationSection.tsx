"use client";

import { FC } from "react";
import React from "react";

import ChartBarIcon from "@mui/icons-material/BarChart";
import XCircleIcon from "@mui/icons-material/Cancel";
import SelectorIcon from "@mui/icons-material/KeyboardArrowDown";
import LockClosedIcon from "@mui/icons-material/LockOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import UsersIcon from "@mui/icons-material/People";
import UserIcon from "@mui/icons-material/Person";
import UserAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Navigation menu items data
const menuItems = [
  { text: "Dashboard", icon: <ChartBarIcon />, active: true },
  { text: "Customers", icon: <UsersIcon />, active: false },
  { text: "Products", icon: <ShoppingBagIcon />, active: false },
  { text: "Account", icon: <UserIcon />, active: false },
  { text: "Settings", icon: <SettingsIcon />, active: false },
  { text: "Login", icon: <LockClosedIcon />, active: false },
  { text: "Register", icon: <UserAddIcon />, active: false },
  { text: "Error", icon: <XCircleIcon />, active: false },
];

type NavigationSectionProps = unknown;

const NavigationSection: FC<NavigationSectionProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 280,
        bgcolor: "grey.900",
        py: 3,
      }}
    >
      {/* Logo and FREE badge */}
      <Stack direction="row" spacing={2} px={3}>
        <Box sx={{ position: "relative", width: 42, height: 42 }}>
          <Box
            component="img"
            src="https://c.animaapp.com/jc90vH8z/img/shape@2x.png"
            alt="Shape"
            sx={{
              position: "absolute",
              width: 42,
              height: 34,
              top: 4,
              left: 0,
            }}
          />
        </Box>

        <Box
          sx={{
            px: 1,
            py: 0.5,
            bgcolor: "primary.light",
            borderRadius: 1,
            display: "inline-flex",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: "bold",
              color: "white",
              letterSpacing: 1,
              lineHeight: "12px",
            }}
          >
            FREE
          </Typography>
        </Box>
      </Stack>

      {/* Company info */}
      <Box sx={{ px: 2, mt: 3 }}>
        <Paper
          elevation={0}
          sx={{
            px: 3,
            py: 1.5,
            bgcolor: "rgba(255, 255, 255, 0.04)",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" color="common.white">
              Acme Inc
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2" color="text.secondary">
                Your tier:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Premium
              </Typography>
            </Stack>
          </Box>
          <SelectorIcon sx={{ color: "grey.500" }} />
        </Paper>
      </Box>

      <Divider sx={{ my: 3, bgcolor: "grey.800" }} />

      {/* Navigation menu */}
      <List sx={{ px: 2, flex: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              sx={{
                borderRadius: 2,
                bgcolor: item.active
                  ? "rgba(255, 255, 255, 0.08)"
                  : "transparent",
                "&:hover": {
                  bgcolor: item.active
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(255, 255, 255, 0.04)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 32,
                  color: item.active ? "success.main" : "text.secondary",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: item.active ? "success.main" : "text.primary",
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ bgcolor: "grey.800" }} />

      {/* Promotional section */}
      <Box
        sx={{
          px: 2,
          pt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", mb: 2 }}>
          <Typography variant="subtitle1" color="text.primary">
            Need more features?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check out our Pro solution template.
          </Typography>
        </Box>

        <Box
          component="img"
          src="https://c.animaapp.com/jc90vH8z/img/left-tilt-transparent-1@2x.png"
          alt="Pro features"
          sx={{ width: 160, height: 136, mb: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          color="secondary"
          endIcon={<OpenInNewIcon />}
          sx={{ borderRadius: 1 }}
        >
          Pro Live Preview
        </Button>
      </Box>
    </Box>
  );
  // #endregion render functions end
};

export type { NavigationSectionProps };
export { NavigationSection };
