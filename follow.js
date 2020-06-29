const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
const list = document.querySelectorAll('.y3zKF');

function clikOnLink(link){
 link.click();
}

const asyncLoop = async () => {
  for (let i = 0; i < list.length ; i++) {
    await timeoutPromise(18000);
    clikOnLink(list[i]);
  }
}

asyncLoop();