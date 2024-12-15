

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


  // Hàm kiểm tra nếu phần tử đã vào vùng nhìn thấy của người dùng
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  
  // Lấy tất cả các card
  const cards = document.querySelectorAll('.card');
  
  // Kiểm tra khi cuộn trang
  function checkCardsInView() {
    cards.forEach(card => {
      if (isElementInView(card)) {
        card.classList.add('show'); // Thêm lớp 'show' khi card vào vùng nhìn thấy
      }
    });
  }
  
  // Lắng nghe sự kiện cuộn trang
  window.addEventListener('scroll', checkCardsInView);
  
  // Kiểm tra ngay khi tải trang để các card được hiển thị ngay nếu chúng ở trong vùng nhìn thấy khi tải
  window.addEventListener('load', checkCardsInView);