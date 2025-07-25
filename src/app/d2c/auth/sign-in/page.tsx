"use client";

import { FC, SyntheticEvent, use, useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import AuthWidgets from "../../assets/auth-widgets.png";

type SignInPageProps = {
  /**
   * An object containing the [dynamic route parameters](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
   * from the root segment down to that page.
   *
   * @see [Page Params → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional)
   */
  params: Promise<unknown>;
  /**
   * An object containing the search parameters of the current URL.
   *
   * @see [Layout Searchparams → optional](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
   */
  searchParams: Promise<unknown>;
};

const SignInPage: FC<SignInPageProps> = ({ params, searchParams }) => {
  // #region hooks start
  const {} = use(params) ?? {};
  const {} = use(searchParams) ?? {};

  const [tabValue, setTabValue] = useState(0);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Grid className="w-full" container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              p: 3,
            }}
          >
            <Container maxWidth="sm">
              <Box sx={{ maxWidth: 400, mx: "auto" }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" color="text.primary" gutterBottom>
                    Welcome
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sign up on the internal platform
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="authentication tabs"
                    textColor="primary"
                    indicatorColor="primary"
                  >
                    <Tab label="Email" />
                    <Tab label="Phone Number" />
                  </Tabs>

                  <Box sx={{ mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      defaultValue="demo@devias.io"
                      variant="outlined"
                      sx={{ mb: 0.5 }}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "block", mt: 0.5 }}
                    >
                      Enter a valid email since this is a fully integrated
                      authentication system. Optionally you can skip.
                    </Typography>
                  </Box>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mb: 2 }}
                >
                  Continue
                </Button>

                <Button fullWidth variant="text" color="primary" size="large">
                  Skip authentication
                </Button>
              </Box>
            </Container>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(18,38,71,1) 0%, rgba(9,14,35,1) 100%)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              p: 5,
            }}
          >
            <Box
              sx={{
                maxWidth: 600,
                textAlign: "center",
                mb: 3,
              }}
            >
              <Typography
                variant="h5"
                color="primary.contrastText"
                gutterBottom
              >
                Welcome to Devias Kit
              </Typography>
              <Typography variant="subtitle1" color="primary.contrastText">
                A professional kit that comes with ready-to-use MUI components.
              </Typography>
            </Box>
            <Box
              component="img"
              src={AuthWidgets.src}
              alt="Home hero"
              sx={{
                width: "100%",
                maxWidth: 624,
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
  // #endregion render functions end
};

export type { SignInPageProps };
export default SignInPage;
