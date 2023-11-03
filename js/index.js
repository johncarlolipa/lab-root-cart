// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const priceValue = parseFloat(priceElement.innerHTML.replace('$', ''));
  const quantityValue = parseFloat(quantityInput.value);
  const subtotalValue = priceValue * quantityValue;

  subtotalElement.innerHTML = '$' + subtotalValue.toFixed(2);
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    const productRow = allProducts[i];
    const priceElement = productRow.querySelector('.price span');
    const quantityInput = productRow.querySelector('.quantity input');
    const subtotalElement = productRow.querySelector('.subtotal span');

    const price = parseFloat(priceElement.textContent.replace('$', ''));
    const quantity = parseFloat(quantityInput.value);

    const subtotal = price * quantity;

    // ITERATION 3
    subtotalElement.innerHTML = subtotal.toFixed(2);

    total += subtotal;
  }

  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = total.toFixed(2); 
}

// ITERATION 4

const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
});

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product'); // Find the product row containing the button

  if (productRow) {
    productRow.remove();

    calculateAll();
  }
}

// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector(
    '.create-product td input[type="text"]'
  );
  const productPriceInput = document.querySelector(
    '.create-product td input[type="number"]'
  );

  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);

  if (!productName || isNaN(productPrice)) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const tableBody = document.querySelector('tbody');

  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tableBody.appendChild(newRow);

  productNameInput.value = '';
  productPriceInput.value = '0';

  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);
}

const createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
