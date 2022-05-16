import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.light.color.primary};
  margin: ${(props) => props.theme.light.padding};
  margin-top: 2.5rem;
  padding: ${(props) => props.theme.light.padding};
  @media screen and (min-width: 1200px) {
    align-items: center;
  }
`;

export const StyledInvoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 1200px) {
    min-width: 50%;
    align-items: center;
  }
`;

export const StyledInvoiceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
  width: 70%;
  :nth-child(2) {
    margin-top: 1.5rem;
  }
`;

export const StyledInvoiceTitle = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 15px;
  text-transform: uppercase;
  color: ${(props) => props.theme.light.color.third};
`;

export const StyledInvoiceTextField = styled(TextField)`
  margin-top: 1.5rem !important;
  :not(:nth-child(2)) {
    margin-top: 0.5rem !important;
  }

  & > div {
    background: rgba(255, 255, 255, 0.5);
  }
  & > div > input {
    color: ${(props) => props.theme.light.color.third} !important;
  }
`;

export const StyledVat = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const StyledTable = styled.div`
  height: 40vh;
  width: 70%;
`;

export const StyledDueDate = styled.div``;
