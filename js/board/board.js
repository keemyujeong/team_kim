function createDoc() {
    window.location.href = './createDoc.html'
}

const columnDefs = [
    { field: "no" },
    { field: "title" },
    { field: "user" },
    { field: "regDate" },
    { field: "recomCnt" },
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


//nav bar
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});