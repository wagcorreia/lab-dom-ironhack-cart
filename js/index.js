// ITERATION 1

function updateSubtotal(product) {
  
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const totalPrice = document.querySelector('#total-value span');
  const allProducts = document.querySelectorAll('.product'); 
  const allSubtotal = [];

  allProducts.forEach((eachProduct) => {
    updateSubtotal(eachProduct);
    allSubtotal.push(updateSubtotal(eachProduct));
  });

  const finalPrice = allSubtotal.reduce(
    (currentTotal, currentSubtotal) => currentTotal + currentSubtotal
  );

  totalPrice.innerText = finalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
 console.log('The target in remove is:', target);
  //const parent = target.parentNode;
 // const grandParent = parent.parentNode;
 // const greatGrandParent = grandParent.parentNode;

 // console.log(grandParent);

 // greatGrandParent.removeChild(grandParent);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtns = document.querySelectorAll('.btn-remove'); 

  removeBtns.forEach((oBotao) => oBotao.addEventListener('click', removeProduct)
  );



  //... your code goes here
});
