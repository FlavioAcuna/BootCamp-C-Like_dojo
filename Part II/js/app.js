var likes = [10, 13, 10];

var lik1 = document.getElementById("like-1");
var lik2 = document.getElementById("like-2");
var lik3 = document.getElementById("like-3");
var btn1 = document.getElementById("btnLike-1");
var btn2 = document.getElementById("btnLike-2");
var btn3 = document.getElementById("btnLike-3");

function like_click(id) {
  if (id === btn1.id) {
    lik1.innerHTML = `${likes[0]++} like(s)`;
  } else if (id === btn2.id) {
    lik2.innerHTML = `${likes[1]++} like(s)`;
  } else if (id === btn3.id) {
    lik3.innerHTML = `${likes[2]++} like(s)`;
  }
}
