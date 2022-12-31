window.onload = function () {
  let seconds = 00,
    tens = 00,
    interval;
  const $appendTens = document.getElementById("tens"),
    $appendSecs = document.getElementById("seconds"),
    $buttonStart = document.getElementById("button-start"),
    $buttonPause = document.getElementById("button-pause"),
    $buttonReset = document.getElementById("button-reset");

  $buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  $buttonPause.onclick = function () {
    clearInterval(interval);
  };

  $buttonReset.onclick = function () {
    clearInterval(interval);
    tens = 00;
    seconds = 00;
    $appendTens.innerHTML = tens;
    $appendSecs.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      $appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      $appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      $appendSecs.innerHTML = "0" + seconds;
      tens = 0;
      $appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      $appendSecs.innerHTML = seconds;
    }
  }
};
