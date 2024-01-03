// 當用戶從文件頂部向下滾動20px時，顯示按鈕
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // document.body.scrollTop 適用於Safari，document.documentElement.scrollTop 適用於Chrome, Firefox, IE 和 Opera
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block"; // 顯示按鈕
  } else {
    document.getElementById("myBtn").style.display = "none"; // 隱藏按鈕
  }
}

// 當用戶點擊按鈕時，滾動到文件頂部
function topFunction() {
  document.body.scrollTop = 0; // 針對Safari
  document.documentElement.scrollTop = 0; // 針對Chrome, Firefox, IE 和 Opera
}
