

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
