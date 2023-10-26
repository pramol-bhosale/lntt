import { ChartLine, Cube, Truck, UserCircleGear, Users } from "@phosphor-icons/react";

export const sideBarLinks = [
    {
        label: 'Product',
        path: 'product',
        icon: <Cube size={30} weight="fill" />,
        links: [
            { label: 'Add Product', href: '/product/add' },
            { label: 'Update Product', href: '/product/update' },
            { label: 'Stock', href: '/product/stock' },
        ]
    },
    {
        label: 'Supplier',
        path: 'supplier',
        icon: <Truck size={30} weight="fill" />,
        links: [
            { label: 'Add Supplier', href: '/supplier/add' },
            { label: 'Update Supplier', href: '/supplier/update' },
            { label: 'Supplier List', href: '/supplier/list' },
            { label: 'Supplier Balance Invoice ', href: '/supplier/balance-invoice' },
            { label: 'Purchase Bill', href: '/supplier/purchase-bill' },
            { label: 'Purchase Direct', href: '/supplier/purchase' },
            { label: 'View Purchase Bills', href: '/supplier/bills' },
            { label: 'Payment Receipt', href: '/supplier/payment-receipt' },
        ]
    },
    {
        label: 'Employee',
        path: 'employee',
        icon: <UserCircleGear size={30} weight="fill" />,
        links: [
            { label: 'Add Employee', href: '/employee/add' },
            { label: 'Update Employee', href: '/employee/update' },
            { label: 'Employee Sales Report', href: '/employee/sales' },
            // { label: 'Update Employee', href: '/employee/update' },

        ]
    },
    {
        label: 'Customer',
        path: 'customer',
        icon: <Users size={32} weight="fill" />,
        links: [
            { label: 'Add Customer', href: '/customer/add' },
            { label: 'Update Customer', href: '/customer/update' },
            { label: 'Customer List', href: '/customer/list' },
            { label: 'Sales Bill', href: '/customer/bills' },
            { label: 'Payment Receipt', href: '/customer/payment-receipt' }
        ]
    },
    {
        label: 'Report',
        path: 'report',
        icon: <ChartLine size={32} weight="fill" />,
        links: [
            { label: 'Customer', href: '/report/customer' },
            { label: 'Supplier', href: '/report/supplier' },
            { label: 'Daily Purchase/Sales ', href: '/report/daily-sales' },
            { label: 'Inventory', href: '/report/inventory' },
        ]
    }
]

export const StockTableColumns = [
    { label: 'Product Name' },
    { label: 'Unit' },
    { label: 'HSN' },
    { label: 'Purchase Rate' },
    { label: 'M.R.P' },
    { label: 'Margin%' },
    { label: 'Sale rate' },
    { label: 'Wholesale Margin%' },
    { label: 'Wholesale Rate' },
    { label: 'Stock' },
    { label: 'Discount%' },
    { label: 'GST' },
    { label: 'Barcode' }
]

export const ProductUnitList = [
    { label: "Each", value: "ea" },
    { label: "Dozen", value: "doz" },
    { label: "Pound", value: "lb" },
    { label: "Kilogram", value: "kg" },
    { label: "Ounce", value: "oz" },
    { label: "Gram", value: "g" },
    { label: "Liter", value: "L" },
    { label: "Gallon", value: "gal" },
    { label: "Meter", value: "m" },
    { label: "Yard", value: "yd" },
    { label: "Square Foot", value: "sq ft" },
    { label: "Square Meter", value: "sq m" },
    { label: "Hour", value: "hr" },
    { label: "Month", value: "mo" },
    { label: "Case", value: "cs" },
    { label: "Bundle", value: "bdl" },
    { label: "Kit", value: "kit" },
    { label: "Credit", value: "credit" },
    { label: "Point", value: "pt" },
    { label: "Token", value: "tkn" },
    { label: "Package", value: "pkg" },
    { label: "Sheet", value: "sheet" },
    { label: "Pack", value: "pack" },
    { label: "Truckload", value: "tl" }
];

export const SupplierType = [
    { label: "Manufacturer", value: "manu" },
    { label: "Distributor", value: "dist" },
    { label: "Wholesaler", value: "whsl" },
    { label: "Retailer", value: "ret" },
    { label: "Supplier", value: "sup" },
    { label: "Vendor", value: "vend" },
    { label: "Importer", value: "import" },
    { label: "Exporter", value: "export" },
    { label: "Service Provider", value: "serv" },
    { label: "Freelancer", value: "free" },
    { label: "Contractor", value: "contr" }
];

export const EmployeeRoles = [
    { label: "Admin", value: "admin" },
    { label: "Manager", value: "manager" },
    { label: "Employee/Staff", value: "employee" },
    { label: "Supplier/Vendor", value: "supplier" },
    { label: "Partner", value: "partner" },
    { label: "Guest/Visitor", value: "guest" },
    { label: "Support Agent", value: "support" },
    { label: "Sales Representative", value: "sales" },
    { label: "Accountant/Finance", value: "accountant" },
    { label: "Marketing Specialist", value: "marketing" },
    { label: "Content Creator", value: "content" },
    { label: "Compliance Officer", value: "compliance" },
    { label: "IT Administrator", value: "itadmin" },
    { label: "Analytics/Reporting", value: "analytics" },
    { label: "Quality Assurance/Tester", value: "qa" },
    { label: "Researcher/Analyst", value: "research" },
    { label: "Guest Blogger/Contributor", value: "contributor" },
    { label: "Student/Trainee", value: "student" }
]

export const AccessValues = {
    ProductModule: [
        { label: "Add Product", value: "add_product" },
        { label: "Update Product", value: "update_product" },
        { label: "Delete Product", value: "delete_product" },
        { label: "View Product", value: "view_product" },
        { label: "Export Product Data", value: "export_product" }
    ],
    SupplierModule: [
        { label: "Add Supplier", value: "add_supplier" },
        { label: "Update Supplier", value: "update_supplier" },
        { label: "Delete Supplier", value: "delete_supplier" },
        { label: "View Supplier", value: "view_supplier" },
        { label: "Export Supplier Data", value: "export_supplier" }
    ],
    CustomerModule: [
        { label: "Add Customer", value: "add_customer" },
        { label: "Update Customer", value: "update_customer" },
        { label: "Delete Customer", value: "delete_customer" },
        { label: "View Customer", value: "view_customer" },
        { label: "Export Customer Data", value: "export_customer" }
    ],
    ReportModule: [
        { label: "Generate Reports", value: "generate_reports" },
        { label: "View Reports", value: "view_reports" },
        { label: "Export Reports", value: "export_reports" }
    ],
    EmployeeModule: [
        { label: "Add Employee", value: "add_employee" },
        { label: "Update Employee", value: "update_employee" },
        { label: "Delete Employee", value: "delete_employee" },
        { label: "View Employee", value: "view_employee" },
        { label: "Export Employee Data", value: "export_employee" }
    ]
};

export const AccessTableModMap = [
    { label: "Product", accessor: "ProductModule" },
    { label: "Supplier", accessor: "SupplierModule" },
    { label: "Customer", accessor: "CustomerModule" },
    { label: "Report", accessor: "ReportModule" },
    { label: "Employee", accessor: "EmployeeModule" },
  ];
  