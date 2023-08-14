export function Timer(minutes: number, seconds: number, min:HTMLElement|null, sec:HTMLElement|null) {
    const interval = setInterval(() => {

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
