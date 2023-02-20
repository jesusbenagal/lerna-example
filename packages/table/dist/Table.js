import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useTable } from "react-table";
import "../styles/table.css";
const BasicTable = ({ columnsTable, dataTable }) => {
    const columns = useMemo(() => columnsTable, []);
    const data = useMemo(() => dataTable, []);
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, } = useTable({
        columns,
        data,
    });
    return (_jsxs("table", { ...getTableProps(), children: [_jsx("thead", { children: headerGroups.map((headerGroup) => (_jsx("tr", { ...headerGroup.getHeaderGroupProps(), children: headerGroup.headers.map((column) => (_jsx("th", { ...column.getHeaderProps(), children: column.render("Header") }))) }))) }), _jsx("tbody", { ...getTableBodyProps(), children: rows.map((row) => {
                    prepareRow(row);
                    return (_jsx("tr", { ...row.getRowProps(), children: row.cells.map((cell) => (_jsx("td", { ...cell.getCellProps(), children: cell.render("Cell") }))) }));
                }) }), _jsx("tfoot", { children: footerGroups.map((footerGroup) => (_jsx("tr", { ...footerGroup.getFooterGroupProps(), children: footerGroup.headers.map((column) => (_jsx("td", { ...column.getFooterProps(), children: column.render("Footer") }))) }))) })] }));
};
export default BasicTable;
//# sourceMappingURL=Table.js.map