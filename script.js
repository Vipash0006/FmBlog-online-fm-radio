//const hamburger = document.getElementById("hamburger");
//const navLinks = document.getElementById("navLinks");

// Add event listener to the hamburger menu button
//hamburger.addEventListener('click', function() {
    // Toggle the visibility of the navigation links
    // if (navLinks.classList.contains('active')) {
    //   navLinks.classList.remove('active');
    // } else {
    //   navLinks.classList.add('active');
    // }
  //  navLinks.classList.toggle('active');
//});

/*let navLinks = document.getElementById("navLinks")

const toggle =() =>{
    if(navLinks.style.display=="none")
    {
        navLinks.style.display="block"
        navLinks.style.textAlign="bottom"
    }
    else{
        navLinks.style.display="none"
    }
}

// Get the hamburger menu button and the navigation links
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Add event listener to the hamburger menu button
hamburger.addEventListener('click', function() {
    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle('active');
});
*/

// Get the hamburger menu button and the navigation links
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Add event listener to the hamburger menu button
hamburger.addEventListener('click', function() {
    // Toggle the 'active' class on the navigation links
    const isActive = navLinks.classList.contains('active');
    if (isActive) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
});

