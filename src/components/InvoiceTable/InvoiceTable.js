import React from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

const InvoiceTable = () => {
  const [rows, setRows] = React.useState([
    { id: 1, description: "Description", qty: 1, unitPrice: 75 },
  ]);
  const { invoice } = useSelector((state) => state.invoice);
  const columns = [
    { field: "id", headerName: "NO.", width: 90, headerAlign: "left" },
    {
      field: "description",
      width: 250,
      headerName: "Description",
      editable: true,
      headerAlign: "left",
    },
    {
      field: "qty",
      headerName: "Quantity",
      editable: true,
      headerAlign: "left",
    },
    {
      field: "unitPrice",
      headerName: "Unit Price",
      editable: true,
      headerAlign: "left",
    },
    {
      field: "unitVat",
      headerName: "Unit VAT",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      headerAlign: "left",
      valueGetter: (params) =>
        invoice.vat ? `${(params.row.unitPrice * invoice.vat) / 100}` : 0,
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      description: "This column has a value getter and is sortable.",
      sortable: true,
      headerAlign: "left",
      valueGetter: (params) =>
        invoice.vat
          ? `${
              params.row.unitPrice * params.row.qty +
              (params.row.unitPrice * invoice.vat * params.row.qty) / 100
            }`
          : `${params.row.unitPrice * params.row.qty}`,
    },
  ];

  return (
    <DataGrid
      style={{ width: "100%" }}
      rows={rows}
      columns={columns}
      autoPageSize={false}
      pageSize={undefined}
      checkboxSelection
    />
  );
};

export default InvoiceTable;
