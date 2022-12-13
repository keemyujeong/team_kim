function createDoc() {
    window.location.href = './createDoc.html'
}

const columnDefs = [
    { field: "no", width: 80 },
    { field: "title", width: 260 },
    { field: "user", width: 100 },
    { field: "regDate", width: 110 },
    { field: "recomCnt", width: 120 },
];

const gridOptions = {
    columnDefs: columnDefs,

    defaultColDef: {
        editable: true,
        sortable: true,
        filter: true,
        resizable: true
    },
    rowSelection: 'multiple',
    animateRows: true,

    onCellClicked: params => {
        console.log('cell was clicked', params)
        window.location.href = './postContents.html'
    },
}; //gridOprions

fetch("./gridData.json")
    .then(response => response.json())
    .then(data => {
        gridOptions.api.setRowData(data);
    });

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
