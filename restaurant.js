document.addEventListener('DOMContentLoaded', function() {
    // Define menu items
    const menuItems = [
        { category: 'Main Dish', items: ['Steak', 'Chicken', 'Fish'] },
        { category: 'Side Items', items: ['Fries', 'Salad', 'Soup'] },
        { category: 'Drink', items: ['Water', 'Soda', 'Juice'] },
        { category: 'Desserts', items: ['Cake', 'Ice Cream', 'Pie'] },
        { category: 'Choice of Soup or Salad', items: ['Soup', 'Salad'] }
    ];

    // Generate menu categories
    const menuCategories = document.getElementById('menu-categories');
    menuItems.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');
        categoryDiv.innerHTML = `<h3>${category.category}</h3>`;
        category.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.textContent = item;
            menuItem.addEventListener('click', addToOrder);
            categoryDiv.appendChild(menuItem);
        });
        menuCategories.appendChild(categoryDiv);
    });

    // Order items array
    let orderItems = [];

    // Add item to order
    function addToOrder(event) {
        const item = event.target.textContent;
        orderItems.push(item);
        renderOrder();
    }

    // Render order summary
    function renderOrder() {
        const orderList = document.getElementById('order-items');
        orderList.innerHTML = '';
        orderItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            orderList.appendChild(li);
        });
    }

    // Place order button click event
    const placeOrderBtn = document.getElementById('place-order');
    placeOrderBtn.addEventListener('click', placeOrder);

    // Place order function
    function placeOrder() {
        const tableNumber = document.getElementById('table-number').value;
        const peopleCount = document.getElementById('people-count').value;
        const salesTaxRate = parseFloat(document.getElementById('sales-tax').value) / 100;
        const tipValue = document.getElementById('tip').value;
        let tipAmount = 0;

        if (tipValue.endsWith('%')) {
            const tipPercentage = parseFloat(tipValue.slice(0, -1)) / 100;
            tipAmount = tipPercentage * getTotalCost();
        } else {
            tipAmount = parseFloat(tipValue);
        }

        const totalCost = getTotalCost() + (getTotalCost() * salesTaxRate) + tipAmount;

        // Display total cost
        alert(`Order placed for Table ${tableNumber} for ${peopleCount} people.\nTotal Cost: $${totalCost.toFixed(2)}`);
    }

    // Calculate total cost
    function getTotalCost() {
        const itemPrices = {
            'Steak': 15,
            'Chicken': 10,
            'Fish': 12,
            'Fries': 5,
            'Salad': 8,
            'Soup': 6,
            'Water': 1,
            'Soda': 2,
            'Juice': 3,
            'Cake': 7,
            'Ice Cream': 4,
            'Pie': 6
        };
        return orderItems.reduce((total, item) => total + itemPrices[item], 0);
    }
});