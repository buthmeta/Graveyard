let text = document.getElementById("text");
let treeLeft = document.getElementById("tree_left");
let tree_right = document.getElementById("tree_right");
let gate_left = document.getElementById("gate_left");
let gate_right = document.getElementById("gate_right");
let moon = document.getElementById("moon");
let witch = document.getElementById("witch");
let bet_left = document.getElementById("bet-left");
let bet_middle = document.getElementById("bet-middle");
let bet_right = document.getElementById("bet-right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  text.style.transition = "0.2s";

  treeLeft.style.left = value * -1.5 + "px";

  tree_right.style.left = value * 1.5 + "px";

  gate_left.style.left = value * 0.3 + "px";

  gate_right.style.left = value * -0.3 + "px";

  moon.style.bottom = value * -0.5 + "px";

  witch.style.left = value * -0.5 + "px";

  bet_left.style.right = value * 0.2 + "px";

  bet_right.style.right = value * -0.2 + "px";

  bet_middle.style.top = value * 0.2 + "px";
});

function showToast() {
  Toastify({
    text: "Your Submitted Has Successfully",
    duration: 3000, // 3 វិនាទី
    close: true,
    gravity: "top", // លើកំពូល (top) ឬផ្នែកក្រោម (bottom)
    position: "right", // ស្តាំ (right), ឆ្វេង (left), កណ្ដាល (center)
    // backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    backgroundColor:
      "linear-gradient(to left,rgb(227, 150, 7),rgb(10, 57, 63))",
    stopOnFocus: true, // បញ្ឈប់ដល់ពេលចុចលើវា
  }).showToast();
}

// scroll reveal
const sr = ScrollReveal({
  distance: "80px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".halloween_night", { delay: 200, origin: "bottom" });
sr.reveal(".text_one", { delay: 200, origin: "left" });
sr.reveal(".text_two", { delay: 200, origin: "right" });
sr.reveal(".text_three", { delay: 200, origin: "left" });
sr.reveal(".halloween_day", { delay: 200, origin: "top" });
sr.reveal(".halloween_day_text_one", { delay: 200, origin: "bottom" });
sr.reveal(".halloween_day_text_two", { delay: 200, origin: "bottom" });
sr.reveal(".custome_text", { delay: 200, origin: "bottom" });
sr.reveal(".custome_ime_one", { delay: 200, origin: "left" });
sr.reveal("._2025", { delay: 200, origin: "bottom" });
sr.reveal(".custome1_text", { delay: 200, origin: "right" });
sr.reveal(".custome2_text", { delay: 200, origin: "left" });
sr.reveal(".halloween", { delay: 200, origin: "bottom" });
sr.reveal(".skang", { delay: 200, origin: "right" });
sr.reveal(".coffin", { delay: 200, origin: "left" });
sr.reveal(".blooded", { delay: 200, origin: "bottom" });
sr.reveal(".custome3_text", { delay: 200, origin: "right" });
sr.reveal(".service_ghost", { delay: 100, origin: "bottom" });
sr.reveal(".contacUs", { delay: 200, origin: "bottom" });
sr.reveal(".input_one", { delay: 200, origin: "left" });
sr.reveal(".input_two", { delay: 200, origin: "right" });
sr.reveal(".input_three", { delay: 200, origin: "left" });
sr.reveal(".textarea", { delay: 200, origin: "bottom" });
sr.reveal(".submit", { delay: 200, origin: "bottom" });
