import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    color: 'teal'
  },
  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: 'mediumaquamarine'
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: 'crimson',
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: 'pink',
  },
}));
