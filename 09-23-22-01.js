function race(v1, v2, gap) {
    let fph = v2 - v1
    if(fph <= 0) return null
    let hours = Math.floor(gap / fph)
    gap = gap % fph
    let fpm = fph / 60
    let minutes = Math.floor(gap / fpm)
    gap = gap % fpm
    let fps = fpm / 60
    let seconds = Math.floor(gap / fps)
    return [hours, minutes, seconds]
  }