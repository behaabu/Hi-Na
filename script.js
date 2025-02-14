function checkCode() {
    let input = document.getElementById("search-box").value;
    if (input.toLowerCase() === "idam ganteng") { 
        document.getElementById("results").style.display = "block";
    } else {
        document.getElementById("results").style.display = "none";
    }
}

function openMessage() {
    document.getElementById("message-box").style.display = "block";
    document.getElementById("results").style.display = "none"; // Menyembunyikan hasil pencarian
}

function closeMessage() {
    document.getElementById("message-box").style.display = "none";
}