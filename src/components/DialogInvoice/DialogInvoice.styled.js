import styled from "styled-components";
import DialogActions from "@mui/material/DialogActions";

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding-right: 1rem;
  margin-top: 2rem;
`;

export const StyledDialogActions = styled(DialogActions)`
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
`;
