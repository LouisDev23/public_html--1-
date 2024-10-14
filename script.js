

function openPopup() {
  document.getElementById("contact-popup").style.display = "block";
}

function closePopup() {
  document.getElementById("contact-popup").style.display = "none";
}

document.getElementById("contact-us-link").addEventListener("click", function () {
  document.getElementById("contact-popup").style.display = "flex";
});
// JavaScript for handling tour dropdown navigation
document.addEventListener('DOMContentLoaded', function () {
  const dropdownLinks = document.querySelectorAll('.navbar .links .dropdown-content a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Prevent default action for anchor tags
      event.preventDefault();

      // Get href attribute value
      const href = this.getAttribute('href');

      // Navigate to the href location
      if (href) {
        window.location.href = href;
      }
    });
  });
});
//responsive navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Toggle dropdown menu on click
    dropbtn.addEventListener('click', function () {
      dropdownContent.classList.toggle('show');
    });

    // Close dropdown if user clicks outside
    window.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  });
});
function myFunction() { var x = document.getElementById("myTopnav"); x.className = (x.className === "topnav") ? "topnav responsive" : "topnav"; } document.getElementById("phoneNumber").onclick = function () { const alertDiv = document.getElementById("customAlert"); alertDiv.style.display = "block"; alertDiv.innerHTML = "WhatsApp us at +264 81 633 5151"; setTimeout(() => { alertDiv.style.display = "none"; }, 2000); }; function closePopup() { document.getElementById("contact-popup").style.display = "none"; } document.getElementById("contact-us-link").onclick = function () { document.getElementById("contact-popup").style.display = "block"; }; document.addEventListener('DOMContentLoaded', function () { closeModal(); } // Ensure the modal is closed on page load
); 

document.addEventListener('DOMContentLoaded', function() {
  closeModal(); // Ensure the modal is closed on page load
});

let currentIndex = 0;

function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("img01");
  modal.style.display = "flex"; 
  modalImg.src = img.src;
  currentIndex = [...document.querySelectorAll('.img')].indexOf(img);
  document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.removeEventListener('keydown', handleKeyDown);
}

function changeSlide(direction) {
  const images = document.querySelectorAll('.img');
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("img01").src = images[currentIndex].src;
}

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') changeSlide(-1);
  else if (event.key === 'ArrowRight') changeSlide(1);
  else if (event.key === 'Escape') closeModal();
}