$(document).ready(function () {
  function showTime() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let getHour = $('#hours')
    let getMinute = $('#minutes')
    let getSecond = $('#seconds')
    let getPeriod = $('#period')

    if (hour < 12) {
      getPeriod.text('')
      getPeriod.append('AM')
    }

    if (hour > 12) {
      getPeriod.text('')
      getPeriod.append('PM')
    }

    if (hour == 0) {
      getHour.text('')
      getHour.append('12')
    }

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second

    getHour.text('')
    getMinute.text('')
    getSecond.text('')
    getHour.append(hour)
    getMinute.append(minute)
    getSecond.append(second)

    setTimeout(showTime, 1000)
  }
  showTime()
})
