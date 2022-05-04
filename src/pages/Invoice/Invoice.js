import React from "react";
import DialogInvoice from "../../components/DialogInvoice/DialogInvoice";
import TemplateSelector from "../../components/TemplateSelector/TemplateSelector";
import { StyledContainer } from "./Invoice.styled";

const Invoice = () => {
  const message = "Invoice";
  return (
    <StyledContainer>
      <DialogInvoice />
      <TemplateSelector />
    </StyledContainer>
  );
};

export default Invoice;
