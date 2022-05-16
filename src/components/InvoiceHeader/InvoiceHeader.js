import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
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
import { setInvoiceNumber, setLogo } from "../../redux/invoiceDetails";

const InvoiceHeader = ({ wide }) => {
  const { invoice } = useSelector((state) => state.invoice);
  const dispatch = useDispatch();

  return (
    <StyledHeaderSection>
      <StyledUploadLogo>
        <StyledLabel htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={(e) =>
              dispatch(setLogo(URL.createObjectURL(e.target.files[0])))
            }
          />
          <StyledIconButton aria-label="upload picture" component="span">
            <StyledImg
              src={invoice.logo}
              alt="upload"
              fileUploaded={invoice.fileUploaded}
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
          onChange={(e) => dispatch(setInvoiceNumber(e.target.value))}
        />
      </StyledInvoiceNumber>
    </StyledHeaderSection>
  );
};

InvoiceHeader.propTypes = {
  wide: PropTypes.bool.isRequired,
};

export default InvoiceHeader;
