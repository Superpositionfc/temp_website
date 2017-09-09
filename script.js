$(document).ready(() => {
  function getCountdown() {
    let target = new Date('01/02/2018')
    let now = new Date()
    let t = target - now

    let seconds = Math.floor( (t/1000) % 60 ) < 10 ? '0' + Math.floor( (t/1000) % 60 ) : Math.floor( (t/1000) % 60 )
    let minutes = Math.floor( (t/1000/60) % 60 ) < 10 ? '0' + Math.floor( (t/1000/60) % 60 ) : Math.floor( (t/1000/60) % 60 )
    let hours = Math.floor( (t/(1000*60*60)) % 24 ) < 10 ? '0' + Math.floor( (t/(1000*60*60)) % 24 ) : Math.floor( (t/(1000*60*60)) % 24 )
    let days = Math.floor( t/(1000*60*60*24) ) < 10 ? '0' + Math.floor( t/(1000*60*60*24) ) : Math.floor( t/(1000*60*60*24) )

    $('.countdown').html(days + ' ' + hours + ':' + minutes + ':' + seconds)
  }
  getCountdown();
  window.setInterval(getCountdown, 1000);

})
