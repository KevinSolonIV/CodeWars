function humanReadable (tooManySeconds) {
  // divide by 60 and what's left over is the seconds
  let seconds = (tooManySeconds % 60).toString().padStart(2, '0');
  // divide by 60 again and what's left over is the minutes
  let minutes = (Math.floor(tooManySeconds / 60) % 60).toString().padStart(2, '0');
  // the result of the second division is the number of hours
  let hours = Math.floor(tooManySeconds / (60 * 60)).toString().padStart(2, '0')
  return hours + ':' + minutes + ':' + seconds;
}