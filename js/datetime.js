function updateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    document.getElementById('live-time').textContent = timeString;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);