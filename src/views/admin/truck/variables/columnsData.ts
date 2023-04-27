import { Column } from "react-table";

interface IColumnHeader {
    Header: string;
    accessor: string;
}

type Columns = IColumnHeader[];


export type ColumnData = Column[];

export const columnsTruckData: Columns = [
    {
        Header: "Truck ID",
        accessor: "id",
    },
    {
        Header: "TYPE",
        accessor: "type",
    },
    {
        Header: "MODEL",
        accessor: "model",
    },
    {
        Header: "License Number",
        accessor: "licensePlate",
    },
    {
        Header: "Capacity",
        accessor: "capacity",
    },
    {
        Header: "Status",
        accessor: "availability",
    },
];


export type TableData = Column<{
    id: string
    type: string;
    model: string;
    image: string;
    volume: number;
    weight: number;
    licensePlate: string;
    capacity: number;
    availability?: string;
}>;

export type TruckDataProps = {
    columnsData: ColumnData;
    tableData: TableData[];
    tableTitle: string | null;
};
