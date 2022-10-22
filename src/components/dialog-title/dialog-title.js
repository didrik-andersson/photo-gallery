import * as React from "react";
import PropTypes from "prop-types";
import { DialogTitle as MuiDialogTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

DialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogTitle(props) {
  const { title, onClose, ...other } = props;

  return (
    <MuiDialogTitle
      sx={{
        m: 0,
        p: 2,
        display: "flex",
        alignItems: "center",
      }}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>{title}</Box>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
            p: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}
