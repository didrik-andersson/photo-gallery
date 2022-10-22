import { Check } from "@mui/icons-material";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import React from "react";

export default function SelectMenu({
  options,
  anchorEl,
  handleClose,
  handleSelect,
  selectedValue,
}) {
  const open = Boolean(anchorEl);

  const handleClick = (value) => {
    handleClose();
    handleSelect(value);
  };

  return (
    <>
      <Menu
        id="select-menu"
        autoFocus={false}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          style: {
            padding: 0,
          },
        }}
        PaperProps={{
          style: {
            width: "185px",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} onClick={() => handleClick(option)}>
            <ListItemText sx={{ textTransform: "capitalize" }}>
              {option.label}
            </ListItemText>
            {option.value === selectedValue && (
              <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                <Check />
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
