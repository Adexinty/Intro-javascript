document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.getElementById('welcomeText');
    const welcomeSection = document.getElementById('welcome');
    const productList = document.getElementById('productList');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const toggleStyleBtn = document.getElementById('toggleStyleBtn');
    const addRemoveProductBtn = document.getElementById('addRemoveProductBtn');
    let productAdded = false;

    changeTextBtn.addEventListener('click', () => {
        welcomeText.textContent = welcomeText.textContent === 
            'Welcome to Harmony Trumpets - Crafting excellence in brass since 1985.' ?
            'Discover the finest trumpets in the world!' :
            'Welcome to Harmony Trumpets - Crafting excellence in brass since 1985.';
    });

    toggleStyleBtn.addEventListener('click', () => {
        welcomeSection.style.backgroundColor = 
            welcomeSection.style.backgroundColor === 'rgb(255, 204, 204)' ? '#ff9999' : '#f4cccc';
        welcomeSection.style.border = 
            welcomeSection.style.border ? '' : '2px solid #333';
    });

    addRemoveProductBtn.addEventListener('click', () => {
        if (!productAdded) {
            const newProduct = document.createElement('li');
            newProduct.textContent = 'Trumpet Mouthpieces';
            newProduct.id = 'newProduct';
            productList.appendChild(newProduct);
            productAdded = true;
            addRemoveProductBtn.textContent = 'Remove Product';
        } else {
            const newProduct = document.getElementById('newProduct');
            if (newProduct) {
                productList.removeChild(newProduct);
                productAdded = false;
                addRemoveProductBtn.textContent = 'Add Product';
            }
        }
    });
});
