var i = 4;
function like_click() {
  var likes = document.getElementById("likeCount");
  likes.innerHTML = `${i++} like(s)`;
}
