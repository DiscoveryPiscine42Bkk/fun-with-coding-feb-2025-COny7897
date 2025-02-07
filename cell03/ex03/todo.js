function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

onload = function () {
  let cookie = getCookie("text");
  if (cookie != "") {
    data = JSON.parse(cookie);
    data.forEach((i) => addElement(i));
  }
};

let data = [];
function newfunc() {
  let task = prompt("What you want to do?");
  if (task != null && task != "") {
    data.push(task);
    addElement(task);
    setCookie("text", JSON.stringify(data), 30);
  }
}

function addElement(i) {
  const currentDiv = document.getElementById("ft_list");
  const newDiv = document.createElement("div");
  newDiv.append(i);
  currentDiv.append(newDiv);
}

function removeElement(i) {
  const currentDiv = document.getElementById("ft_list");
  currentDiv.removeChild(i);
}

document.getElementById("ft_list").addEventListener("click", function (e) {
  if (e.target && e.target.matches("div")) {
    if (confirm("Do you want to delete this task?")) {
      removeElement(e.target);
      data = data.filter((i) => i !== e.target.textContent);
      setCookie("text", JSON.stringify(data), 30);
    }
  }
});
