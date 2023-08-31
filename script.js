var images, nav, x;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('text').value;

  element_list.appendChild(new_li);

});

document.getElementById('button1').addEventListener('click', (event) => {
  let element_cart_list = document.getElementById('cart_list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Yoghurt 🍶';

  element_cart_list.appendChild(new_li2);

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_cart_list2 = document.getElementById('cart_list');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Milk 🥛';

  element_cart_list2.appendChild(new_li3);

});

document.getElementById('button3').addEventListener('click', (event) => {
  let element_cart_list3 = document.getElementById('cart_list');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Toast 🍞';

  element_cart_list3.appendChild(new_li4);

});

document.getElementById('button4').addEventListener('click', (event) => {
  let element_cart_list4 = document.getElementById('cart_list');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Butter 🧈';

  element_cart_list4.appendChild(new_li5);

});

document.getElementById('button5').addEventListener('click', (event) => {
  let element_cart_list5 = document.getElementById('cart_list');
  let new_li6 = document.createElement('li');
  new_li6.innerText = 'Eggs 🥚';

  element_cart_list5.appendChild(new_li6);

});
images = ['https://images.pexels.com/photos/13027954/pexels-photo-13027954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/2198626/pexels-photo-2198626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/7965943/pexels-photo-7965943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];


document.getElementById('button_next').addEventListener('click', (event) => {
  let element_list_imag = document.getElementById('list_imag');
  images.push(images[0]);
  images.shift();
  element_list_imag.setAttribute("src", images[0]);

});

document.getElementById('button_prev').addEventListener('click', (event) => {
  let element_list_imag2 = document.getElementById('list_imag');
  images.unshift(images.slice(-1)[0]);
  images.pop();
  element_list_imag2.setAttribute("src", images[0]);

});
nav = ['Shopping cart', 'Image Carousel', 'Comments'];
x = [];


document.getElementById('nav').addEventListener('click', (event) => {
  if (!nav.length) {
    let element_nav_list = document.getElementById('nav_list');
    while (!!x.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      nav.unshift(x.shift());
    }
    element_nav_list.replaceChildren();
    let element_nav = document.getElementById('nav');
    element_nav.innerText = '☰';
  } else {
    let element_nav_list2 = document.getElementById('nav_list');
    while (!!nav.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      x.unshift(nav[0]);
      let new_li7 = document.createElement('li');
      new_li7.innerText = nav.shift();

      element_nav_list2.appendChild(new_li7);
    }
    let element_nav2 = document.getElementById('nav');
    element_nav2.innerText = 'X';
  }

});