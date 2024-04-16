const inputOfDate = document.getElementById("date");

function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;

    const toastcontainer = document.getElementById("toastcontainer");
    toastcontainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toastcontainer.removeChild(toast);
        }, 300);
    }, 3000);
}

function formatTimeUnits(unit) {
    return unit < 10 ? "0" + unit : unit;
}


function birthdayCalculator() {
    console.log("clicked");
    const birthday = new Date(inputOfDate.value);
    if (!inputOfDate.value) {
        showToast("Please enter your date of birth.");
        return;
    }
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());


    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const timeRemaining = nextBirthday - today;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


    const formattedMonths = formatTimeUnits(months);
    const formattedDays = formatTimeUnits(days % 30);
    const formattedHours = formatTimeUnits(hours);
    const formattedMinutes = formatTimeUnits(minutes);
    const formattedSeconds = formatTimeUnits(seconds);

    const countdownString = `${formattedMonths} months, ${formattedDays} days, ${formattedHours} hours, ${formattedMinutes} minutes, ${formattedSeconds} seconds`;

    const resultContainer = document.getElementById("result");
    resultContainer.textContent = countdownString;


    setInterval(birthdayCalculator, 1000);
}