

  // Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
  
    // Kiểm tra nếu cuộn trang xuống quá 50px
    if (window.scrollY > 50) {
      navbar.classList.add("sticky-top"); // Thêm lớp sticky-top khi cuộn xuống
    } else {
      navbar.classList.remove("sticky-top"); // Xóa lớp khi cuộn lên trên
    }
  });


// Counter
document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;

      // Tăng số bước chia nhỏ để giảm tốc độ
      const increment = target / 500; // Chia nhỏ bước tăng (giá trị cao hơn sẽ giảm tốc độ)

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 30); // Tăng thời gian chờ (ms) để giảm tốc độ
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});

// Timetable Filter
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
  // Lấy các phần tử cần thiết
  const openFormButton = document.getElementById('openForm');
  const closeFormButton = document.getElementById('closeForm');
  const registerForm = document.getElementById('registerForm');
  const registrationForm = document.getElementById('registrationForm');
  const formMessage = document.getElementById('formMessage');

  // Mở form khi nhấn nút Register
  if (openFormButton) {
      openFormButton.addEventListener('click', function () {
          if (registerForm) {
              registerForm.style.display = 'flex'; // Hiển thị form
              document.body.classList.add('modal-open'); // Ngừng cuộn trang
          }
      });
  }

  // Đóng form khi nhấn vào nút đóng (x)
  if (closeFormButton) {
      closeFormButton.addEventListener('click', function () {
          if (registerForm) {
              registerForm.style.display = 'none'; // Ẩn form
              document.body.classList.remove('modal-open'); // Khôi phục cuộn trang
          }
      });
  }

  // Đóng form khi nhấn bên ngoài form (chỉ cần click vào overlay)
  window.addEventListener('click', function (e) {
      if (e.target === registerForm) {
          registerForm.style.display = 'none';
          document.body.classList.remove('modal-open');
      }
  });

  // Xử lý submit form đăng ký
  if (registrationForm) {
      registrationForm.addEventListener('submit', function (e) {
          e.preventDefault(); // Ngừng hành động mặc định của form

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          // Kiểm tra xem tất cả các trường có được nhập đầy đủ không
          if (name && email && password) {
              formMessage.textContent = "Registration successful! Welcome aboard.";
              formMessage.style.color = "green";
          } else {
              formMessage.textContent = "Please fill all fields.";
              formMessage.style.color = "red";
          }
      });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const includeElements = document.querySelectorAll('[data-include]');
  
  includeElements.forEach((el) => {
     const file = el.getAttribute('data-include');
     
     if (file) {
        fetch(file)
           .then(response => response.text())
           .then(data => {
              el.innerHTML = data; // Chèn nội dung header vào div
              initializeFormEvents(); // Gọi hàm khởi tạo sự kiện cho form sau khi chèn xong
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

  // Mở form khi nhấn nút Register
  if (openFormButton) {
     openFormButton.addEventListener('click', function () {
        registerForm.style.display = 'flex'; // Hiển thị form
        document.body.classList.add('modal-open'); // Ngừng cuộn trang
     });
  }

  // Đóng form khi nhấn vào nút đóng (x)
  if (closeFormButton) {
     closeFormButton.addEventListener('click', function () {
        registerForm.style.display = 'none'; // Ẩn form
        document.body.classList.remove('modal-open'); // Bật lại cuộn trang
     });
  }

  // Đảm bảo form có thể đóng khi nhấn ra ngoài form
  if (registerForm) {
     window.addEventListener('click', function (e) {
        if (e.target === registerForm) {
           registerForm.style.display = 'none';
           document.body.classList.remove('modal-open'); // Bật lại cuộn trang
        }
     });
  }

  // Xử lý submit form
  if (registrationForm) {
     registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Ngừng hành động mặc định của form

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Kiểm tra xem tất cả các trường có được nhập đầy đủ không
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

