// Thời gian đếm ngược (24h = 24 * 60 * 60 giây)
let timeLeft = 24 * 60 * 60; 

function updateCountdown() {
    // Tính giờ, phút, giây
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    // Định dạng 2 chữ số (ví dụ 01, 09)
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Gán vào HTML
    document.getElementById("countdown").textContent =
        hours + ":" + minutes + ":" + seconds;

    // Giảm thời gian đi 1 giây
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timer); // hết giờ thì dừng lại
        document.getElementById("countdown").textContent = "Over!";
    }
}

// Gọi hàm update mỗi giây
let timer = setInterval(updateCountdown, 1000);

// Gọi ngay để hiển thị ban đầu
updateCountdown();
