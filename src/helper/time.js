export function getMidnight(now) {
  let midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  midnight = midnight.getTime();
  return midnight;
}

export function addMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export function getCountdown(now, end) {
  const difference = end - now;
  const countdown = toTime(difference);
  return countdown;
}

export function toTime(ms) {
  let hh = ms / (1000 * 60 * 60);

  let rem = hh % 1;
  hh = Math.floor(hh);
  hh = formatTime(hh);

  let mm = rem * 60;
  rem = mm % 1;
  mm = Math.floor(mm);
  mm = formatTime(mm);

  let ss = rem * 60;
  ss = Math.floor(ss);
  ss = formatTime(ss);

  return hh + ":" + mm + ":" + ss;
}

function formatTime(unit) {
  if(unit < 10) {
    return "0" + unit;
  }
  return unit;
}

export function checkIfLast30secs(timer) {
  const [hh, mm, ss] = timer.split(":");

  if (hh === "00" && mm === "00" && ss <= "30") {
    return true;
  }

  return false;
}