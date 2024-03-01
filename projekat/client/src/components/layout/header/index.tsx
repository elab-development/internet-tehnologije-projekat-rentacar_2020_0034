import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Avatar,
} from "@pankod/refine-mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "contexts";


export const Header: React.FC = () => {

  const {mode, setMode} = useContext(ColorModeContext);
  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderHeader ? (
    <AppBar color="default" position="sticky" elevation={0} sx = {{
      backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYi159cmBE7C74cPAK2afrz5MkcZnvUm6XNu_rZnjVr0rX8rF6HoGmTrvknMiAqoy7gs&usqp=CAU")'
    }}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          {/*<IconButton
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton> */}
            <Stack direction="column" alignItems="center" justifyContent="center">
              <Stack direction="row" gap="16px" alignItems="center" justifyContent="center">
                {user?.name ? (
                  <Typography variant="subtitle2" color='white' sx={{fontFamily: "Orbitron", marginTop: "-15px"}}>{user?.name}</Typography>
                ) : null}
                {user?.avatar ? (
                  <Avatar sx={{
                    border: "3px solid darkred", // Specifies the border style, width, and color
                    borderRadius: "50%", // Makes the border circular
                  }} src={user?.avatar} alt={user?.name} />
                ) : null}
              </Stack>
              <Stack direction="row" gap="5px" alignItems="center" justifyContent="center">
                <Typography color="darkred" sx={{fontFamily: "Orbitron", marginTop: "-20px", marginRight: "-25px", fontWeight: "bold"}}>online</Typography>
              </Stack>
            </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};
