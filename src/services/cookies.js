export function setCookie(name, jwt) {
  const jwtPayload = JSON.parse(atob(jwt.split(".")[1]));
  let expires = "";

  if (jwtPayload.exp) {
    const date = new Date();
    date.setTime(date.getTime() + jwtPayload.exp * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie =
    name + "=" + (jwt || "") + expires + "; path=/; Secure; SameSite=Strict";
}

export function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

export function eraseCookie(name) {
  document.cookie =
    name + "=; Max-Age=-99999999; path=/; Secure; SameSite=Strict";
}
