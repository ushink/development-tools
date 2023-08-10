export function gameTimer(minutes:number, seconds:number, timeStop:boolean) {
    const timeGame:HTMLElement|null = document.querySelector(".game_timer__time");

    let time = setInterval(() => {

      if (timeStop) {
        return;

      } else {
        seconds++;
        if (seconds >= 59) {
          minutes++;
          seconds = 0;
        }
      }

      if (timeGame) {
        timeGame.textContent = `
            ${minutes.toString().padStart(2, "0")}:
            ${seconds.toString().padStart(2, "0")}`;
      }
      
    }, 1000);

    return time;
}
  