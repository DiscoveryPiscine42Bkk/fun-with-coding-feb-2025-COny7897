function setCookie(cname, cvalue, exdays) {
  $.cookie(cname, cvalue, { expires: exdays, path: '/' });
  console.log($.cookie(cname));
}

onload = function () {
  let cookie = $.cookie('text');
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
  const newDiv = $("<div></div>").text(i);
  $("#ft_list").append(newDiv);
}

$(document).ready(function () {
  $("#newbtn").click(newfunc);
});

$(document).ready(function () {
  $("#ft_list").click(function (e) {
    if (e.target && e.target.matches("div")) {
      if (confirm("Do you want to delete this task?")) {
        e.target.remove();
        data = data.filter((i) => i !== e.target.textContent);
        setCookie("text", JSON.stringify(data), 30);
      }
    }
  });
});