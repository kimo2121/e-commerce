import React from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import IconButton from "@material-ui/core/IconButton";

export default function PopoverMUI({ children, icon }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            {...bindTrigger(popupState)}
          >
            {icon}
          </IconButton>

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box p={2}>{children}</Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
