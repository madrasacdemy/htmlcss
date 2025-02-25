// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.info_more-btn');
    const contactInfo = document.querySelector('.sidebar-info_more');
    
    toggleButton.addEventListener('click', function () {
      contactInfo.classList.toggle('show');
    });
  });
  