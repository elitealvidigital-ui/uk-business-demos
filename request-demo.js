(function () {
  var form = document.getElementById('demo-request-form');
  var frame = document.querySelector('iframe[name="consent-response"]');
  var success = document.getElementById('success-panel');
  var submitted = false;

  if (!form || !frame || !success) return;

  form.addEventListener('submit', function () {
    submitted = true;
    var button = form.querySelector('button[type="submit"]');
    if (button) {
      button.disabled = true;
      button.textContent = 'Submitting request...';
    }
  });

  frame.addEventListener('load', function () {
    if (!submitted) return;
    form.hidden = true;
    success.hidden = false;
    success.focus();
  });
})();
