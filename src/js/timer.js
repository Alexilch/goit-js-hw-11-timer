class CountdownTimer {
  constructor({targetDate, selector}) {
    this.targetDate = targetDate,
    this.intervalId = null,
    this.timeR(),
    this._refs = this.refS(selector)
    
  };
  
  refS(selector) {
      const refs = [];
      refs.days = document.querySelector(`${selector} [data-value="days"]`),
      refs.hours = document.querySelector(`${selector} [data-value="hours"]`),
      refs.mins = document.querySelector(`${selector} [data-value="mins"]`),
      refs.secs = document.querySelector(`${selector} [data-value="secs"]`)
    return refs;
  }
  
  timeR() {
    if (this.currentTime <= 0) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      this.getTimeMathandUpdate(deltaTime);
    }, 1000)
  }

  pad(value) {
    return String(value).padStart(2, '0');
    };

  getTimeMathandUpdate(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
 
  this._refs.days.textContent = days;
  this._refs.hours.textContent = hours;
  this._refs.mins.textContent = mins;
  this._refs.secs.textContent = secs;
  };
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 13, 2021'),
});



