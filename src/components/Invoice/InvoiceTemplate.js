/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledContainer,
  StyledDueDate,
  StyledInvoice,
  StyledInvoiceSection,
  StyledInvoiceTextField,
  StyledInvoiceTitle,
  StyledTable,
  StyledVat,
} from "./InvoiceTemplate.styled";
import UploadLogo from "../../static/Uplaod_Logo.svg";
import GetWidth from "../../utils/GetWidth";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceTable from "../InvoiceTable/InvoiceTable";
import {
  setInvoiceFrom,
  setInvoiceTo,
  setVat,
} from "../../redux/invoiceDetails";

const InvoiceTemplate = () => {
  const { invoice } = useSelector((state) => state.invoice);
  const dispatch = useDispatch();

  const wide = GetWidth(1200);

  const handleInvoiceFrom = (event, field) => {
    dispatch(setInvoiceFrom({ value: event.target.value, field }));
  };

  const handleInvoiceTo = (event, field) => {
    dispatch(setInvoiceTo({ value: event.target.value, field }));
  };

  return (
    <StyledContainer component="form" noValidate autoComplete="off">
      <InvoiceHeader wide={wide} />
      <StyledInvoice>
        <StyledInvoiceSection>
          <StyledInvoiceTitle>invoice from:</StyledInvoiceTitle>
          <StyledInvoiceTextField
            label="Company"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceFrom(e, "company")}
          />
          <StyledInvoiceTextField
            label="Phone Number"
            required
            error={invoice.from.phoneNumberError}
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceFrom(e, "phoneNumber")}
          />
          <StyledInvoiceTextField
            label="Street"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceFrom(e, "street")}
          />
          <StyledInvoiceTextField
            label="City"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceFrom(e, "city")}
          />
          <StyledInvoiceTextField
            label="County"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceFrom(e, "county")}
          />
          <StyledInvoiceTextField
            label="Country"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceFrom(e, "country")}
          />
          <StyledInvoiceTextField
            label="Registration No."
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceFrom(e, "registrationNo")}
          />
        </StyledInvoiceSection>
        <StyledInvoiceSection style={{ marginTop: "2rem" }}>
          <StyledInvoiceTitle>invocie to:</StyledInvoiceTitle>
          <StyledInvoiceTextField
            label="Buyer"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceTo(e, "buyer")}
          />
          <StyledInvoiceTextField
            label="Street"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceTo(e, "street")}
          />
          <StyledInvoiceTextField
            label="City"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceTo(e, "city")}
          />
          <StyledInvoiceTextField
            label="County"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceTo(e, "county")}
          />
          <StyledInvoiceTextField
            label="Country"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceTo(e, "country")}
          />
          <StyledInvoiceTextField
            label="Registration No."
            required
            size={wide ? undefined : "small"}
            onChange={(e) => handleInvoiceTo(e, "registrationNo")}
          />
        </StyledInvoiceSection>
        <StyledVat>
          <StyledInvoiceTextField
            label="VAT"
            required
            size={wide ? undefined : "small"}
            error={invoice.vatError}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            onChange={(e) => dispatch(setVat(e.target.value))}
          />
        </StyledVat>
        <StyledTable>
          <InvoiceTable />
        </StyledTable>
        <StyledDueDate>DUE DATE</StyledDueDate>
      </StyledInvoice>
    </StyledContainer>
  );
};

export default InvoiceTemplate;
