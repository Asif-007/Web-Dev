const result = document.getElementById("result");

// console.log(result)

setInterval(() => {
  const current = Date.now();

  const olympicTime = new Date(2028, 6, 14).getTime();
  let countdown = olympicTime - current;
  const day = Math.floor(countdown / (1000 * 60 * 60 * 24));
  countdown %= 1000 * 60 * 60 * 24;
  const hr = Math.floor(countdown / (1000 * 60 * 60));
  countdown %= 1000 * 60 * 60;
  const minute = Math.floor(countdown / (1000 * 60));
  countdown %= 1000 * 60;
  const sec = Math.floor(countdown / 1000);
  result.textContent = `Days: ${day} Hour: ${hr} Minute: ${minute} Second: ${sec}`;
}, 1000);
