// Lấy các phần tử cần thiết từ HTML
 var loginButton = document.getElementById("login-button"); 
 // Nút đăng nhập
  var infoForm = document.getElementById("btnx"); 
  var caibang2 = document.getElementById("caibang2");
  // Bảng thông tin khách hàng
   var confirmButton = document.getElementById("confirm-button"); // Nút xác nhận

// Tạo một hàm để ẩn hoặc hiện bảng thông tin
 function clickmua() { 
    // Nếu bảng thông tin đang ẩn, thì hiện nó lên 
    if (caibang2.style.display === "none") 
        { caibang2.style.display = "block"; 
    } else {
         // Nếu bảng thông tin đang hiện, thì ẩn nó đi
         caibang2.style.display = "none"; } }

