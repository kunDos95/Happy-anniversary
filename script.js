
function checkPassword() {
    const input = document.getElementById("password-input").value;
    const errorMsg = document.getElementById("error-msg");
    if (input === "1407") {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        const playButton = document.getElementById("play-button");
        const music = document.getElementById("bg-music");
        playButton.addEventListener("click", function() {
            music.play();
            music.style.display = "block";
        });
    } else {
        errorMsg.textContent = "รหัสไม่ถูกต้อง ลองใหม่อีกครั้งนะคะ 💔";
    }
}

// รองรับการกด Enter
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("password-input");
    inputField.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            checkPassword();
        }
    });
});
