const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const preview = document.getElementById("preview");
const code = document.getElementById("code");

function generateGradient() {

  const gradient =
    `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;

  preview.style.background = gradient;

  code.value = `background: ${gradient};`;
}

color1.addEventListener("input", generateGradient);
color2.addEventListener("input", generateGradient);
direction.addEventListener("change", generateGradient);

function copyCode() {
  code.select();
  document.execCommand("copy");
  alert("CSS Copied!");
}

generateGradient();
