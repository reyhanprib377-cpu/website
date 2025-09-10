// Menu functions
function getMenus() {
    const menus = localStorage.getItem('menus');
    return menus ? JSON.parse(menus) : [];
}

function saveMenu(menu) {
    const menus = getMenus();
    const existingIndex = menus.findIndex(m => m.id === menu.id);
    
    if (existingIndex >= 0) {
        menus[existingIndex] = menu;
    } else {
        menus.push(menu);
    }
    
    localStorage.setItem('menus', JSON.stringify(menus));
}

// Order functions
function getOrders() {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
}

function saveOrder(order) {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Initialize with some sample data if empty
function initializeSampleData() {
    if (getMenus().length === 0) {
        const sampleMenus = [
            {
                id: '1',
                name: 'Nasi Goreng',
                category: 'Makanan',
                price: 25000,
                description: 'Nasi goreng spesial dengan telur dan ayam'
            },
            {
                id: '2',
                name: 'Ayam Bakar',
                category: 'Makanan',
                price: 30000,
                description: 'Ayam bakar dengan bumbu rempah'
            },
            {
                id: '3',
                name: 'Es Teh Manis',
                category: 'Minuman',
                price: 5000,
                description: 'Teh manis dingin segar'
            },
            {
                id: '4',
                name: 'Jus Jeruk',
                category: 'Minuman',
                price: 10000,
                description: 'Jus jeruk segar tanpa gula tambahan'
            }
        ];
        localStorage.setItem('menus', JSON.stringify(sampleMenus));
    }
}

// Call initialize on script load
initializeSampleData();
