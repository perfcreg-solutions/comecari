import { Column } from "react-table";

interface IColumnHeader {
    Header: string;
    accessor: string;
}

type Columns = IColumnHeader[];


export type ColumnData = Column[];

export const columnsJobData: Columns = [
    {
        Header: "Job ID",
        accessor: "id",
    },
    {
        Header: "DRIVER",
        accessor: "driver",
    },
    {
        Header: "VEHICLE",
        accessor: "vehicle",
    },
    {
        Header: "STARTED",
        accessor: "date",
    },
    {
        Header: "PROGRESS",
        accessor: "progress",
    },
    {
        Header: "STATUS",
        accessor: "status",
    },
];


export type TableData = Column<{
    id: string
    driver: string;
    vehicle: string
    date: string;
    progress: number;
    status?: string;
}>;

export type JobsDataProps = {
    columnsData: ColumnData;
    tableData: TableData[];
    tableTitle: string | null;
};
