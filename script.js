// Smooth scroll to next section
function goNext(index) {
  const sections = document.querySelectorAll("section");
  if (sections[index]) {
    sections[index].scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

// Surprise pause effect for final question
setTimeout(() => {
  document.getElementById("bigQuestion").classList.remove("hidden");
  document.getElementById("finalGif").classList.remove("hidden");
}, 2500);
