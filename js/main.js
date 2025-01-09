


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
  
    if (window.scrollY > 50) {
      navbar.classList.add("sticky-top"); 
    } else {
      navbar.classList.remove("sticky-top"); 
    }
  });



document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const increment = target / 500; 

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 30); 
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});


$('.timetable-controls ul li').on('click', function() {
    var tsfilter = $(this).data('tsfilter');
    $('.timetable-controls ul li').removeClass('active');
    $(this).addClass('active');
    
    if(tsfilter == 'all') {
        $('.classtime-table').removeClass('filtering');
        $('.ts-item').removeClass('show');
    } else {
        $('.classtime-table').addClass('filtering');
    }
    $('.ts-item').each(function(){
        $(this).removeClass('show');
        if($(this).data('tsmeta') == tsfilter) {
            $(this).addClass('show');
        }
    });
});

function loadHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      try {
        const response = await fetch(file);
        if (response.ok) {
          const content = await response.text();
          el.innerHTML = content;
        } else {
          el.innerHTML = "Error loading file.";
        }
      } catch (error) {
        el.innerHTML = "Error loading file.";
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", loadHTML);

document.addEventListener('DOMContentLoaded', function () {
  const includeElements = document.querySelectorAll('[data-include]');
  
  includeElements.forEach((el) => {
     const file = el.getAttribute('data-include');
     
     if (file) {
        fetch(file)
           .then(response => response.text())
           .then(data => {
              el.innerHTML = data; 
              initializeFormEvents(); 
           })
           .catch(err => {
              console.error('Error loading header:', err);
           });
     }
  });
});


function initializeFormEvents() {
  const openFormButton = document.getElementById('openForm');
  const closeFormButton = document.getElementById('closeForm');
  const registerForm = document.getElementById('registerForm');
  const registrationForm = document.getElementById('registrationForm');
  const formMessage = document.getElementById('formMessage');

  if (openFormButton) {
     openFormButton.addEventListener('click', function () {
        registerForm.style.display = 'flex'; 
        document.body.classList.add('modal-open'); 
     });
  }

  if (closeFormButton) {
     closeFormButton.addEventListener('click', function () {
        registerForm.style.display = 'none'; 
        document.body.classList.remove('modal-open'); 
     });
  }

  
  if (registerForm) {
     window.addEventListener('click', function (e) {
        if (e.target === registerForm) {
           registerForm.style.display = 'none';
           document.body.classList.remove('modal-open'); 
        }
     });
  }


  if (registrationForm) {
     registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        if (name && email && password) {
           formMessage.textContent = "Registration successful! Welcome aboard.";
           formMessage.style.color = "green";
        } else {
           formMessage.textContent = "Please fill all fields.";
           formMessage.style.color = "red";
        }
     });
  }
}

