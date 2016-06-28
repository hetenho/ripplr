exports.Ripplr = function(opts) {
  this.selector = opts.selector || '.btn';
  this.effectClass = opts.effectClass || 'ripplr';
  attachClickHandlers();

  function attachClickHandlers() {
    var matches = document.querySelectorAll(this.selector);
    for (var i=0; i < matches.length; i++) {
      var el = matches[i];
      el.addEventListener('click', function(e) {
        handleClick(e, el);
      });
    }
  }

  function handleClick(e, el) {
    var offset = getOffset(el),
        div = document.createElement('div'),
        xPos = e.pageX - offset.left,
        yPos = e.pageY - offset.top;

    div.classList.add(this.effectClass);
    div.style.height = el.height;
    div.style.width = el.height;
    div.style.top = yPos - (parseInt(el.offsetHeight)/2);
    div.style.left = xPos - (parseInt(el.offsetWidth)/2);
    el.appendChild(div);

    setTimeout(function() {
      div.parentNode.removeChild(div);
    }, 1800);
  }

  function getOffset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
