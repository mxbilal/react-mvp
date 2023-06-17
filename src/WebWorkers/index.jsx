import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from './data.json'

const columns = [
  { field: 'externalId', headerName: 'ID', width: 70 },
  { field: 'driverName', headerName: 'driverName', width: 130 },
  { field: 'mobileNo', headerName: 'mobileNo', width: 130 },
  {
    field: 'updatedAt',
    headerName: 'updatedAt',
    type: 'string',
    width: 90,
  },
  {
    field: 'dateOfBirth',
    headerName: 'dateOfBirth',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const searchWorker = new Worker('searchWorker.js');
export default function WebWorkers() {
  const [val, setVal] = React.useState(""),
    [copyData, setCopyData] = React.useState(data);

  // Handle messages received from the web worker
  searchWorker.addEventListener('message', (event) => {
    const searchResults = event.data;
    // Process the search results
    console.log('Search results:', searchResults);
  });

  const handleSearchField = (e) => {
    let searchValue = e.target.value
    setVal(searchValue)
    let result = searchWorker.postMessage({ data, searchValue });
    console.log("result", result)
    // setCopyData(result)
  }
  return (
    <div>
      <input onChange={handleSearchField} value={val} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={copyData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}