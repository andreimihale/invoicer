import React from "react";
import DialogInvoice from "../../components/DialogInvoice/DialogInvoice";
import InvoiceTemplate from "../../components/Invoice/InvoiceTemplate";
import TemplateSelector from "../../components/TemplateSelector/TemplateSelector";
import { StyledContainer } from "./Invoice.styled";

const Invoice = () => (
  <StyledContainer>
    <DialogInvoice />
    <TemplateSelector />
    <InvoiceTemplate />
  </StyledContainer>
);

export default Invoice;
