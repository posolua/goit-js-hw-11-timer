const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor(date) {
    this.targetDate = new Date(date);
  }

  getDeltaTime() {
    const currentDate = Date.now();
    const deltaTime = this.targetDate - currentDate;
    this.updateClockface(deltaTime);
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      this.updateClockface(deltaTime);
    });
  }

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const counter = new CountdownTimer('Jun 1, 2020');
counter.getDeltaTime();
