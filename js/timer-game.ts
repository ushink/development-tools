export function Timer(minutes: number, seconds: number) {
    const interval = setInterval(() => {
        const min = document.getElementById('minutes');
        const sec = document.getElementById('seconds');

        seconds++;

        if (seconds > 59) {
            minutes++;
            (min as HTMLElement).innerHTML = minutes
                .toString()
                .padStart(2, '0');
            seconds = 0;
        }

        (sec as HTMLElement).innerHTML = seconds.toString().padStart(2, '0');
    }, 1000);

    return interval;
}
