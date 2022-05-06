import React from "react";
import PropTypes from "prop-types";
import {
  StyledHeaderSection,
  StyledUploadLogo,
  StyledLabel,
  Input,
  StyledIconButton,
  StyledImg,
  StyledInvoiceNumber,
  StyledTextField,
} from "./InvoiceHeader.styled";

const InvoiceHeader = ({ setForm, form, fileUploaded, wide }) => {
  const a = "a";

  return (
    <StyledHeaderSection>
      <StyledUploadLogo>
        <StyledLabel htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={(e) =>
              setForm({
                ...form,
                logo: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
          <StyledIconButton aria-label="upload picture" component="span">
            <StyledImg
              src={form.logo}
              alt="upload"
              fileUploaded={fileUploaded}
              wide={wide}
            />
          </StyledIconButton>
        </StyledLabel>
      </StyledUploadLogo>
      <StyledInvoiceNumber>
        <StyledTextField
          label="Invoice NO."
          required
          size={wide ? undefined : "small"}
          onChange={(e) => setForm({ ...form, invoiceNumber: e.target.value })}
        />
      </StyledInvoiceNumber>
    </StyledHeaderSection>
  );
};

InvoiceHeader.propTypes = {
  setForm: PropTypes.func.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  fileUploaded: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default InvoiceHeader;
