/// <reference types="react" />
import "../styles/table.css";
interface Props {
    columnsTable: any;
    dataTable: any;
}
declare const BasicTable: ({ columnsTable, dataTable }: Props) => JSX.Element;
export default BasicTable;
