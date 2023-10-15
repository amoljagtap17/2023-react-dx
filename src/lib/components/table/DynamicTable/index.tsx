import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

export function DynamicTable<T = any>({
  data,
  columns,
}: {
  data: T[];
  columns: ColumnDef<T>[];
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const { pageSize, pageIndex } = table.getState().pagination;

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: data.length }]}
        component="div"
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        SelectProps={{
          inputProps: { "aria-label": "rows per page" },
          native: true,
        }}
        onPageChange={(_, page) => {
          table.setPageIndex(page);
        }}
        onRowsPerPageChange={(e) => {
          const size = e.target.value ? Number(e.target.value) : 10;
          table.setPageSize(size);
        }}
        ActionsComponent={() => <h1>page actions</h1>}
      />
    </Box>
  );
}
