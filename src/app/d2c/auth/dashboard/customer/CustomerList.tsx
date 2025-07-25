"use client";

import { FC } from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AppBar from "@mui/material/AppBar";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Customer data for the table
const customers = [
  {
    id: 1,
    name: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    registrationDate: "12/04/2019",
    avatarUrl: "https://c.animaapp.com/jc90vH8z/img/avatar-6@2x.png",
  },
  {
    id: 2,
    name: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    registrationDate: "12/04/2019",
    avatarUrl: "https://c.animaapp.com/jc90vH8z/img/avatar-6@2x.png",
  },
  {
    id: 3,
    name: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    registrationDate: "12/04/2019",
    avatarUrl: "https://c.animaapp.com/jc90vH8z/img/avatar-6@2x.png",
  },
  {
    id: 4,
    name: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    registrationDate: "12/04/2019",
    avatarUrl: "https://c.animaapp.com/jc90vH8z/img/avatar-6@2x.png",
  },
  {
    id: 5,
    name: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    registrationDate: "12/04/2019",
    avatarUrl: "https://c.animaapp.com/jc90vH8z/img/avatar-6@2x.png",
  },
  {
    id: 6,
    name: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    registrationDate: "12/04/2019",
    avatarUrl: "https://c.animaapp.com/jc90vH8z/img/avatar-6@2x.png",
  },
];

type CustomerListProps = unknown;

const CustomerList: FC<CustomerListProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      {/* Top Navigation Bar */}
      <AppBar
        position="static"
        color="default"
        elevation={8}
        sx={{ bgcolor: "background.paper" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton>
              <img
                src="https://c.animaapp.com/jc90vH8z/img/icon-svg.svg"
                alt="Icon SVG"
                width={24}
                height={24}
              />
            </IconButton>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton>
              <img
                src="https://c.animaapp.com/jc90vH8z/img/icon-svg-1.svg"
                alt="Icon SVG"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton>
              <img
                src="https://c.animaapp.com/jc90vH8z/img/icon-svg-2.svg"
                alt="Icon SVG"
                width={24}
                height={24}
              />
            </IconButton>
            <Avatar
              src="https://c.animaapp.com/jc90vH8z/img/avatar-6@2x.png"
              sx={{ width: 40, height: 40 }}
            />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ p: 6, display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Header with Title and Action Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", pt: 10 }}>
          <Typography variant="h4" color="text.primary" sx={{ flexGrow: 1 }}>
            Customers
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={
                <img
                  src="https://c.animaapp.com/jc90vH8z/img/solid-upload.svg"
                  alt="Upload"
                  width={20}
                  height={20}
                />
              }
              sx={{ color: "primary.main" }}
            >
              Import
            </Button>
            <Button
              startIcon={
                <img
                  src="https://c.animaapp.com/jc90vH8z/img/solid-download.svg"
                  alt="Download"
                  width={20}
                  height={20}
                />
              }
              sx={{ color: "primary.main" }}
            >
              Export
            </Button>
            <Button variant="contained" color="primary">
              Add Customers
            </Button>
          </Stack>
        </Box>

        {/* Search Box */}
        <Paper sx={{ p: 6, py: 8, borderRadius: 1 }} elevation={1}>
          <Autocomplete
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search customer"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                      <img
                        src="https://c.animaapp.com/jc90vH8z/img/solid-search.svg"
                        alt="Search"
                        width={24}
                        height={24}
                      />
                    </Box>
                  ),
                }}
              />
            )}
            sx={{ width: 500 }}
          />
        </Paper>

        {/* Customer Table */}
        <Paper sx={{ borderRadius: 1 }} elevation={1}>
          <Box sx={{ p: 6, pb: 4, pt: 8, transform: "rotate(180deg)" }}>
            <Typography variant="h6" sx={{ transform: "rotate(180deg)" }}>
              Latest Orders
            </Typography>
          </Box>

          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "neutral.100" }}>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ArrowDownwardIcon fontSize="small" />
                      <Typography variant="overline">LOCATION</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>PHONE</TableCell>
                  <TableCell>REGISTRATION DATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id} hover>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          src={customer.avatarUrl}
                          sx={{ width: 40, height: 40 }}
                        />
                        <Typography variant="body1">{customer.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.location}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.registrationDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Rows per page:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2">10</Typography>
                <img
                  src="https://c.animaapp.com/jc90vH8z/img/filled-navigation-arrow-drop-down.svg"
                  alt="Dropdown"
                  width={24}
                  height={24}
                />
              </Box>
            </Box>
            <Typography variant="body2" sx={{ mx: 3 }}>
              1-5 of 13
            </Typography>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                <img
                  src="https://c.animaapp.com/jc90vH8z/img/filled-navigation-chevron-left.svg"
                  alt="Previous"
                  width={24}
                  height={24}
                />
              </IconButton>
              <IconButton>
                <img
                  src="https://c.animaapp.com/jc90vH8z/img/filled-navigation-chevron-right.svg"
                  alt="Next"
                  width={24}
                  height={24}
                />
              </IconButton>
            </Box>
          </Box>
        </Paper>

        {/* Footer */}
        <Box component="footer" sx={{ p: 6, py: 0 }}>
          <Divider />
          <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
            © Devias Io. 2021
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Material Kit Free version. For more features and components feel
            free to check out the{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{ textDecoration: "underline" }}
            >
              pro version
            </Typography>
            .
          </Typography>
        </Box>
      </Box>
    </Box>
  );
  // #endregion render functions end
};

export type { CustomerListProps };
export { CustomerList };
