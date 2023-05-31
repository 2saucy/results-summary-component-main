import jsonData from "../data.json" assert { type: "json" };

const categories = document.getElementById("categories");

const generateCategory = (category, score, icon) => {
  // Create divs & add them class names
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add(`${category}`);

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");

  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score");

  // Create other elements
  const img = document.createElement("img");
  img.setAttribute("src", `${icon}`);

  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const span = document.createElement("span");

  // Assigning values
  h3.textContent = category;
  span.textContent = `${score}`;
  p.textContent = "/100";

  // Structure
  nameDiv.appendChild(img);
  nameDiv.appendChild(h3);
  categoryDiv.appendChild(nameDiv);
  scoreDiv.appendChild(span);
  scoreDiv.appendChild(p);
  categoryDiv.appendChild(scoreDiv);

  return categoryDiv;
};

jsonData.forEach((data) => {
  const { category, score, icon } = data;

  const c = generateCategory(category, score, icon);
  console.log(c);
  categories.appendChild(c);
});
