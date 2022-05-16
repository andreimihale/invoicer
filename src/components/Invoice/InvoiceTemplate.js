/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
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

const InvoiceTemplate = () => {
  const [form, setForm] = React.useState({ logo: UploadLogo });
  const fileUploaded = form.logo !== UploadLogo;
  const wide = GetWidth(1200);

  return (
    <StyledContainer component="form" noValidate autoComplete="off">
      <InvoiceHeader
        setForm={setForm}
        form={form}
        fileUploaded={fileUploaded}
        wide={wide}
      />
      <StyledInvoice>
        <StyledInvoiceSection>
          <StyledInvoiceTitle>invoice from:</StyledInvoiceTitle>
          <StyledInvoiceTextField
            label="Company"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, from: { company: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="Phone Number"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, from: { phoneNumber: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="Street"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, from: { street: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="City"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, from: { city: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="County"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, from: { county: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="Country"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, from: { country: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="Registration No."
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, from: { registrationNo: e.target.value } })
            }
          />
        </StyledInvoiceSection>
        <StyledInvoiceSection style={{ marginTop: "2rem" }}>
          <StyledInvoiceTitle>invocie to:</StyledInvoiceTitle>
          <StyledInvoiceTextField
            label="Buyer"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, to: { buyer: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="Street"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, to: { street: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="City"
            required
            size={wide ? undefined : "small"}
            onChange={(e) => setForm({ ...form, to: { city: e.target.value } })}
          />
          <StyledInvoiceTextField
            label="County"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, to: { county: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="Country"
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, to: { country: e.target.value } })
            }
          />
          <StyledInvoiceTextField
            label="Registration No."
            required
            size={wide ? undefined : "small"}
            onChange={(e) =>
              setForm({ ...form, to: { registrationNo: e.target.value } })
            }
          />
        </StyledInvoiceSection>
        <StyledVat>
          <StyledInvoiceTextField
            label="VAT"
            required
            size={wide ? undefined : "small"}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
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
