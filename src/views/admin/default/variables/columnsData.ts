import { Column } from "react-table";
import tableDataCheck from "./tableDataCheck.json";
import { ReactComponentElement } from "react";

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];
export const columnsDataComplex = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "VEHICLE",
    accessor: "vehicle",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];
export const ShipmentOverviewDataComplex = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "VEHICLE",
    accessor: "vehicle",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];
export const ShipmentHistoryDataComplex = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "VEHICLE",
    accessor: "vehicle",
  },
  {
    Header: "VEHICLE ID",
    accessor: "vehicle_id",
  },
  {
    Header: "PICKUP",
    accessor: "pickup",
  },
  {
    Header: "DESTINATION",
    accessor: "destination",
  },
  {
    Header: "PAYMENT",
    accessor: "payment",
  },
];

export type ColumnData = Column[];

export type TableData = Column<{
  name: (string | boolean)[];
  date: string;
  progress: number;
  quantity?: number;
  status?: string;
  rating?: number;
}>;




export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
  tableTitle: string | null;
};

export type ComplexTableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
  tableTitle: string | null;
  buttonText: string | null;
  buttonLink: string | null;
}

export type shipmentData = {
  name: string;
  vehicle_id: string;
  started: Date;
  vehicle: string;
  driver: string;
  pickup: string;
  package: string;
  date: Date;
  status: string;
}

export type shipmentProps = {
  columnsData : ColumnData;
  tableData: shipmentData[]
  tableTitle: string | null
}
