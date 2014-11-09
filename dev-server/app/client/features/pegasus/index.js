/**
 * CommonJS wrapper (with fix) for: 
 * https://github.com/typicode/pegasus
 *
 * this is a classic "utility" library which should belong to NPM!
 * (I can push it to become a jqb-pegasus module)
 */

// jshint ignore: start

// a   url (naming it a, beacause it will be reused to store callbacks)
// xhr placeholder to avoid using var, not to be used
function pegasus(a, xhr) {
  xhr = new XMLHttpRequest();

  // Open url
  xhr.open('GET', a);

  // Reuse a to store callbacks
  a = [];

  // onSuccess handler
  // onError   handler
  // cb        placeholder to avoid using var, should not be used
  xhr.onreadystatechange = xhr.then = function(onSuccess, onError, cb) {

    // Test if onSuccess is a function or a load event
    if (onSuccess.call) a = [,onSuccess, onError];

    // Test if request is complete
    if (xhr.readyState == 4) {

      // index will be:
      // 0 if undefined
      // 1 if status is between 200 and 399
      // 2 if status is over
      cb = a[0|xhr.status / 200];

      // Safari doesn't support xhr.responseType = 'json'
      // so the response is parsed
      if (cb && a.indexOf(cb) === 1) return cb(JSON.parse(xhr.responseText), xhr);
      if (cb) cb(xhr);
    }
  };

  // Send
  xhr.send();

  // Return request
  return xhr;
}

module.exports = pegasus;
