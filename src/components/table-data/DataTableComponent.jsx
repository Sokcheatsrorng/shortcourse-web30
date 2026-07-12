import DataTable from "react-data-table-component";
import {  useEffect, useState } from "react";

export default function DataTableComponent() {
  // set up column
  const columns = [
    {
      name: "Thumbnail",
      selector: (row) => <img src={row.thumbnail} width={30} height={30} />,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      filterable: true,
    },
    {
      name: "Price",
      selector: (row) => row.priceOut + "$",
      filterable: true,
      filterType: "number",
      sortFunction: (a, b) => a.priceOut - b.priceOut,
    },
    {
      name: "StockQty",
      selector: (row) => row.stockQuantity,
      filterable: true,
      filterType: "number",
      sortFunction: (a, b) => a.stockQuantity - b.stockQuantity,
    },
    {
      name: "Category",
      selector: (row) => row.category.name,
      filterable: true,
    },
  ];

  // data
  // const [product, setProduct] = useState();

  // set state for page
   const [data, setData]           = useState([]);
   const [loading, setLoading]     = useState(false);
  const [totalRows, setTotal]     = useState(0);
  const [page, setPage]           = useState(1);
  const [perPage, setPerPage]     = useState(10);
  // const [sortField, setSortField] = useState('name');
  // const [sortDir, setSortDir]     = useState<SortOrder>(SortOrder.ASC);
  const [search, setSearch]       = useState('');
  const [resetPage, setResetPage] = useState(false);

  useEffect(() => {
    async function fetchProductData() {
      const res = await fetch(
        `https://ishop.cheat.casa/api/v1/products?page${page}=&size=${perPage}`,
      );
      const productData = await res.json();
      setData(productData?.content);
      setLoading(false);
      setTotal(productData.content.length)
    }
    fetchProductData();
  }, []);


  function handleSearch(q) {
    setSearch(q);
    setPage(1);
    setResetPage(prev => !prev);
    // load({ page: 1, perPage, sort: sortField, dir: sortDir, q });
  }

  
  return (
    <div>
      {/* <DataTable
        className="border border-gray-200 rounded-2xl"
        columns={columns}
        data={product}
        selectableRows
        theme="crisp"
        colorMode="system"
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
        // progressPending={isLoading}
        // custom pagination
        pagination
        paginationServer
        paginationTotalRows={product?.total ?? 0}
        onChangePage={setPage}
        onChangeRowsPerPage={(pp) => {
          setPerPage(pp);
          setPage(1);
        }}
        sortFunction={customSort}
      /> */}

       <input
        type="search"
        placeholder="Search…"
        value={search}
        onChange={e => handleSearch(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationResetDefaultPage={resetPage}
        // onChangePage={handlePageChange}
        // onChangeRowsPerPage={handlePerPageChange}
        sortServer
        // onSort={handleSort}
        highlightOnHover
      />
    </div>
  );
}
