export function getFullDaysBeforeNewYear(date, month) {
    if (!date || !month || date < 1 || month < 1 || date > 31 || month > 12) {
        return null;
    }

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let targetDate = new Date(currentYear, month - 1, date);

    if (isNaN(targetDate.getTime())) {
        return null;
    }

    let timeDif = new Date(currentYear + 1, 0, 1) - targetDate;

    let oneDay = 1000 * 3600 * 24;
    let days = timeDif / oneDay;


    return days;
}

export function formatWithWeekday(date) {
    if (!date) {
        return "";
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const weekday = weekdays[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${weekday}, ${day}, ${month} ${year}`;

    return formattedDate;

}

export function isValidDate(date) {

    if (date instanceof Date && !isNaN(date.getTime())) {
        return true;
    } else {
        return false;
    }
}

export function isAfter(date, dateToCompare) {
    if (!(date instanceof Date) || isNaN(date.getTime()) ||
        !(dateToCompare instanceof Date) || isNaN(dateToCompare.getTime())) {
        return false;
    }
    return date.getTime() > dateToCompare.getTime();
}

export function formatDistanceToNow(date) {

    if (date === undefined || date === null) {
        return 'Date is unknown';
    }


    const difference = Date.now() - date.getTime();
    const absDifference = Math.abs(difference);


    const seconds = Math.floor(absDifference / 1000);

    if (seconds < 30) {
        return 'less than a minute';
    } else if (seconds < 90) {
        return '1 minute';
    } else if (seconds < 2670) {
        const minutes = Math.round(seconds / 60);
        return `${minutes} minutes`;
    } else if (seconds < 5370) {
        return 'about 1 hour';
    } else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    }
}