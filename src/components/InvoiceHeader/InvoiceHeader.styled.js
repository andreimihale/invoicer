import styled from "styled-components";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

export const StyledHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1200px) {
    min-width: 50%;
  }
`;

export const StyledUploadLogo = styled.div``;

export const StyledLabel = styled.label``;

export const Input = styled("input")`
  display: none;
`;
export const StyledIconButton = styled(IconButton)`
  color: ${(props) => props.theme.light.color.third};
`;

export const StyledImg = styled.img`
  width: ${(props) => (props.wide ? "5rem" : "3rem")};
  height: ${(props) => (props.wide ? "5rem" : "3rem")};
  border-radius: ${(props) => (props.fileUploaded ? "50px" : undefined)};
  border: ${(props) =>
    props.fileUploaded
      ? `1px solid ${props.theme.light.color.third}`
      : undefined};
`;

export const StyledInvoiceNumber = styled.div`
  color: ${(props) => props.theme.light.color.third} !important;
`;

export const StyledTextField = styled(TextField)`
  & > div {
    background: rgba(255, 255, 255, 0.5);
  }
  & > div > input {
    color: ${(props) => props.theme.light.color.third} !important;
  }
`;
