

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

const targetDate = new Date("Oct 11, 2021").getTime();

  const tDays = document.querySelector('[data-value="days"]');
  const tHours = document.querySelector('[data-value="hours"]');
  const tMinutes = document.querySelector('[data-value="mins"]');
  const tSeconds = document.querySelector('[data-value="secs"]');


const intervalId = setInterval(()=>{
    const currentDate = new Date().getTime();
    const time = targetDate - currentDate;

if (time < 0) {
    clearInterval(intervalId);
}
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

tDays.textContent = days;
tHours.textContent = hours;
tMinutes.textContent = mins;
tSeconds.textContent = secs;
  }, 1000);

  