/* setCookie = (cName, cValue, exDays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + "; path=/ ";
}; */

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

/* getCookie = (cName) => {
  let name = cName + "=";
  let cDecoded = decodeURIComponent(document.cookie);
  let cArr = cDecoded.split(';');
  let Value;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });

  return Value;
}; */

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies").style.display = "none";
  setCookie("cookie", true, 30);
});

cookieMessage = () => {
  if (!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
};

window.addEventListener("load", cookieMessage);
