export const sideBarLinks = [
    {
        label: 'Product',
        path:'/product',
        links: [
            { label: 'Add Product', href: '/product/add' },
            { label: 'Update Product', href: '/product/update' },
            { label: 'Stock', href: '/product/stock' },
        ]
    },
    {
        label: 'Supplier',
        path:'/supplier',
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
        path:'/employee',
        links: [
            { label: 'Add Employee', href: '/employee/add' },
            { label: 'Update Employee', href: '/employee/update' },
            { label: 'Employee Sales Report', href: '/employee/sales' },
            // { label: 'Update Employee', href: '/employee/update' },

        ]
    },
    {
        label: 'Customer',
        path:'/customer',
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
        path:'/report',
        links: [
            { label: 'Customer', href: '/report/customer' },
            { label: 'Supplier', href: '/report/supplier' },
            { label: 'Daily Purchase/Sales ', href: '/report/daily-sales' },
            { label: 'Inventory', href: '/report/inventory' },
        ]
    }
]