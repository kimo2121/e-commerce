import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";


export default function PopoverMUI({ children,Icon }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          {/* <Button
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
          >
            Open Popover
          </Button> */}
          <FilterListRoundedIcon {...bindTrigger(popupState)} />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>
              {/* <Typography>The content of the Popover.</Typography> */}
              {children}
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
