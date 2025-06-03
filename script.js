
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});


document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("username");  // Sirf login session hatana
    alert("Logged out successfully!");
    window.location.href = "login.html";  // Login page pe redirect
});
