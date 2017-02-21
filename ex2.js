var firstnameinput = document.getElementById('fname')
var lastnameinput = document.getElementById('lname')
var bioinput = document.getElementById('bio')
var emailinput = document.getElementById('email')
var phoneinput = document.getElementById('phone')
var code = document.getElementById('code')
var pre = document.getElementById('pre')

var updatebio = function () {
  var firstname = firstnameinput.value
  var lastname = lastnameinput.value
  var bio = bioinput.value
  var email = emailinput.value
  var phone = phoneinput.value
  var text = '<h1>Hi, my name is ' + firstname + ' ' + lastname + '! </h1>' +
  '<p>' + bio + '</p>' +
  '<p>' +
    "If you're interested in a date, you can email me at " +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    ' or give me a call at ' +
    '<a href="tel:' + phone + ' "target="_blank">' + phone + '</a>.' +
  '</p>'

  code.textContent = text
  pre.innerHTML = text
}

firstnameinput.addEventListener('input', updatebio)
lastnameinput.addEventListener('input', updatebio)
bioinput.addEventListener('input', updatebio)
emailinput.addEventListener('input', updatebio)
phoneinput.addEventListener('input', updatebio)
