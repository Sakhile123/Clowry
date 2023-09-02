// Get all the navigation items
const navItems = document.querySelectorAll('nav ul li');

// Loop through each item and attach a click event listener
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove the active class from all items
    navItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Add the active class to the clicked item
    item.classList.add('active');
  });
});

nav ul li {
        transition: background-color 0.3s ease;
      }





