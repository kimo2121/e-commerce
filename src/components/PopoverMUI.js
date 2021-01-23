import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";

export default function PopoverMUI({ children, icon }) {
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
          {icon ? (
            icon
          ) : (
            <FilterListRoundedIcon
              {...bindTrigger(popupState)}
              style={{ padding: "0" }}
            />
          )}
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
