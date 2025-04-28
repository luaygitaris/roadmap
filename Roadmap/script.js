let userId = localStorage.getItem("userId") || null;

// Cek jika sudah login saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  if (userId) {
    document.getElementById("roadmap").classList.remove("hidden");
    document.getElementById("container-login").classList.add("hidden");
    loadMaterials("frontend");
    loadMaterials2("frontend");
    loadMaterials3("frontend");
    loadMaterials4("frontend");
    loadMaterials5("frontend");
    loadMaterials6("frontend");
    loadMaterials7("frontend");
    loadMaterials8("frontend");
    loadMaterials9("frontend");
    loadMaterials10("frontend");
    loadMaterials11("frontend");
    loadMaterials12("frontend");
    loadMaterials13("frontend");
    loadMaterials14("frontend");
    loadMaterials15("frontend");
    loadMaterials16("frontend");
    loadMaterials17("frontend");
    loadMaterials18("frontend");
    loadMaterials19("frontend");
    loadMaterials20("frontend");
    loadMaterials21("frontend");
    loadMaterials22("frontend");
    loadMaterials23("frontend");
    loadMaterials24("frontend");
    loadMaterials25("frontend");
    loadMaterials26("frontend");
  }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter your name");
    return;
  }

  try {
    const response = await axios.post("https://roadmap-sandy.vercel.app/api/login", {
      name: username,
    });

    userId = response.data.userId;

    localStorage.setItem("userId", userId);

    document.getElementById("username").value = "";
    document.getElementById("roadmap").classList.remove("hidden");
    document.getElementById("container-login").classList.add("hidden");
    loadMaterials("frontend");
  } catch (error) {
    console.error("Login error:", error);
    alert("Login failed. Please try again.");
  }
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  localStorage.removeItem("userId");
  userId = null;
  document.getElementById("roadmap").classList.add("hidden");
  document.getElementById("container-login").classList.remove("hidden");
});

// Fungsi untuk memuat materi berdasarkan kategori
async function loadMaterials(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 1 && material.id <= 5)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -645;
  let y = -35;
  const spacing = 54;

  materials.forEach((material, index) => {
    // Hitung posisi
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 5 ? "#cccccc" : "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectX);
    rect.setAttribute("y", rectY);
    rect.setAttribute("width", "230");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", rectX + 115);
    text.setAttribute("y", rectY + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup (urutan penting: circle duluan biar nggak ketimpa)
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    [rect, text, circle, checkText].forEach((el) => {
      el.addEventListener("click", () => {
        showMaterialDetails(material, "material-container");
      });
    });

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials2(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 6 && material.id <= 11)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container2");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = 94;
  let y = -92;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x + 304;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "305");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 150);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials3(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 12 && material.id <= 14)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container3");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -108;
  let y = 257;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x + 190;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "190");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 100);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials4(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 15 && material.id <= 17)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container4");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = 245;
  let y = 262;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x + 150;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 15 ? "#874efe" : "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "150");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 80);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials5(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 18 && material.id <= 18)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container5");
  materialContainer.innerHTML = "";

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -15;
  let y = 555;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x + 96;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";
    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "97");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 48);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials6(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 19 && material.id <= 21)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container6");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -234;
  let y = 588;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 19 ? "#874efe" : "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "117");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 48);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials7(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 29 && material.id <= 31)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container7");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -645;
  let y = 410;
  const spacing = 54;

  materials.forEach((material, index) => {
    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "235");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 110);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials8(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 22 && material.id <= 22)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container8");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -644;
  let y = 820;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x + 137;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";
    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "137");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 65);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials9(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 23 && material.id <= 28)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container9");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = 270;
  let y = 685;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x + 125;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 23 ? "#874efe" : "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";
    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "125");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 65);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials10(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 32 && material.id <= 32)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container10");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -643;
  let y = 942;
  const spacing = 54;
  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#929292");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "130");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 65);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials11(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 33 && material.id <= 34)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container11");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const baseX = -200;
  const baseY = 1020;
  const spacingX = 115;
  const spacingY = 55;

  let blockStartY = baseY + spacingY - 3;

  materials.forEach((material, index) => {
    let rectX = baseX + 125;
    let rectY = baseY;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    if (material.id === 33) {
      rectX = baseX;
      rectY = baseY; // same Y
    } else if (material.id === 34) {
      rectX = baseX + spacingX;
      rectY = baseY; // same Y
    }

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute(
      "cx",
      material.id === 33 ? circleCX - 125 : circleCX + 90
    );
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#929292");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute(
      "x",
      material.id === 33 ? circleCX - 125 : circleCX + 90
    );
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // rect
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectX);
    rect.setAttribute("y", rectY);
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");

    // text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", rectX + 53);
    text.setAttribute("y", rectY + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));
  });

  materialContainer.appendChild(g);
}

async function loadMaterials12(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 35 && material.id <= 36)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container12");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const baseX = -50;
  const baseY = 1100;
  const spacingX = 115;
  const spacingY = 55;

  let blockStartY = baseY + spacingY - 3;

  materials.forEach((material, index) => {
    let rectX = baseX + 125;
    let rectY = baseY;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    if (material.id === 35) {
      rectX = baseX;
      rectY = baseY; // same Y
    } else if (material.id === 36) {
      rectX = baseX + spacingX;
      rectY = baseY; // same Y
    }

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute(
      "cx",
      material.id === 35 ? circleCX - 125 : circleCX + 95
    );
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute(
      "x",
      material.id === 35 ? circleCX - 125 : circleCX + 95
    );
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // rect
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectX);
    rect.setAttribute("y", rectY);
    rect.setAttribute("width", "105");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");

    // text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", rectX + 53);
    text.setAttribute("y", rectY + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));
  });

  materialContainer.appendChild(g);
}

async function loadMaterials13(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  // Ambil hanya ID 37-40, lalu urutkan
  materials = materials
    .filter((material) => material.id >= 37 && material.id <= 40)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container13");
  materialContainer.innerHTML = "";

  // SVG group container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  // Posisi awal
  const baseX = -638;
  const baseY = 1134;
  const spacingX = 115;
  const spacingY = 55; // jarak antar baris/elemen

  let blockStartY = baseY + spacingY - 3; // posisi awal untuk ID 39 & 40

  materials.forEach((material, index) => {
    let rectX = baseX + 125;
    let rectY = baseY;
    const circleRadius = 12;
    let circleCX = rectX;
    let circleCY = rectY + 22.5;

    if (material.id === 37) {
      rectX = baseX;
      rectY = baseY;
    } else if (material.id === 38) {
      rectX = baseX + spacingX;
      rectY = baseY;
    } else if (material.id === 39) {
      rectX = baseX;
      rectY = baseY + spacingY;
    } else if (material.id === 40) {
      rectX = baseX;
      rectY = baseY + spacingY * 2;
    }

    if (material.id === 39) {
      circleCY = circleCY + 55;
    } else if (material.id === 40) {
      circleCY = circleCY + 110;
    }

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute(
      "cx",
      material.id === 37 ? circleCX - 125 : circleCX + 95
    );
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute(
      "x",
      material.id === 37 ? circleCX - 125 : circleCX + 95
    );
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rect
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectX);
    rect.setAttribute("y", rectY);
    rect.setAttribute(
      "width",
      material.id === 39 || material.id === 40 ? "220" : "105"
    );
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute(
      "x",
      material.id === 39 || material.id === 40 ? rectX + 110 : rectX + 52.5
    );
    text.setAttribute("y", rectY + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Klik event
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);
  });

  materialContainer.appendChild(g);
}

async function loadMaterials14(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 41 && material.id <= 46)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container14");
  materialContainer.innerHTML = "";

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const baseX = -358;
  const baseY = 1185;
  const spacingX = 115;
  const spacingY = 55;

  let blockStartY = baseY + spacingY - 3;

  materials.forEach((material, index) => {
    let rectX = baseX + 125;
    let rectY = baseY;
    const circleRadius = 12;
    let circleCX = rectX;
    let circleCY = rectY + 22.5;

    if (material.id === 42) {
      rectX = baseX;
      rectY = baseY;
    } else if (material.id === 43) {
      rectX = baseX + spacingX;
      rectY = baseY;
      circleCX = circleCX + 85;
    } else if (material.id === 41) {
      rectX = baseX;
      rectY = baseY - spacingY;
      circleCY = circleCY - 55;
      circleCX = circleCX + 85;
    } else if (material.id === 44) {
      rectX = baseX;
      rectY = baseY + spacingY;
      circleCY = circleCY + 55;
      circleCX = circleCX - 125;
    } else if (material.id === 45) {
      rectX = baseX;
      rectY = baseY + spacingY * 2;
      circleCY = circleCY + 110;
      circleCX = circleCX - 125;
    } else if (material.id === 46) {
      rectX = baseX;
      rectY = baseY + spacingY * 3;
      circleCY = circleCY + 165;
      circleCX = circleCX - 125;
    }

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", material.id === 42 ? circleCX - 125 : circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute(
      "fill",
      material.id === 41 || material.id === 43 ? "#874efe" : "#4f7a28"
    );
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", material.id === 42 ? circleCX - 125 : circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rect
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectX);
    rect.setAttribute("y", rectY);
    rect.setAttribute(
      "width",
      material.id === 42 || material.id === 43 ? "95" : "210"
    );
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute(
      "x",
      material.id === 42 || material.id === 43 ? rectX + 50 : rectX + 105
    );
    text.setAttribute("y", rectY + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Klik event
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    // Tambahkan ke grup SVG
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);
  });

  materialContainer.appendChild(g);
}

async function loadMaterials15(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 47 && material.id <= 48)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container15");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let baseX = -68;
  let baseY = 1345;
  const spacingX = 110;
  const spacingY = 10;
  const itemsPerRow = 3;

  materials.forEach((material, index) => {
    let rectX = baseX + 125;
    let rectY = baseY;
    const circleRadius = 12;
    let circleCX = rectX;
    let circleCY = rectY + 22.5;

    if (material.id === 47) {
      rectX = baseX;
      rectY = baseY;
    } else if (material.id === 48) {
      rectX = baseX + spacingX;
      rectY = baseY;
    }

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute(
      "cx",
      material.id === 47 ? circleCX - 125 : circleCX + 80
    );
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 47 ? "#874efe" : "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute(
      "x",
      material.id === 47 ? circleCX - 125 : circleCX + 80
    );
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // rect
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectX);
    rect.setAttribute("y", rectY);
    rect.setAttribute("width", "95");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");

    // text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", rectX + 47);
    text.setAttribute("y", rectY + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));
  });

  materialContainer.appendChild(g);
}

async function loadMaterials16(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 49 && material.id <= 50)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container16");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = 250;
  let y = 1475.5;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x + 150;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 50 ? "#4f7a28" : "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "150");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 50);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials17(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 51 && material.id <= 53)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container17");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -642;
  let y = 1717;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#929292");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "200");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 100);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials18(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 54 && material.id <= 56)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container18");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -295;
  let y = 1706.5;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute(
      "cx",
      material.id === 54 ? circleCX + 165 : circleCX + 150
    );
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 56 ? "#4f7a28" : "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute(
      "x",
      material.id === 54 ? circleCX + 165 : circleCX + 150
    );
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", material.id === 54 ? "165" : "153");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 80);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    if (material.id === 54) {
      y += 100; // jarak besar antara ID 54 ke 55
    } else {
      y += 54; // jarak normal
    }
  });

  materialContainer.appendChild(g);
}

async function loadMaterials19(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 57 && material.id <= 60)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container19");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = 120;
  let y = 1670;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 57 ? "#874efe" : "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 50);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials20(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 61 && material.id <= 65)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container20");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = 270;
  let y = 1616;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX + 135);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute(
      "fill",
      material.id === 61 || material.id === 62 ? "#874efe" : "#4f7a28"
    );
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX + 135);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "135");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 68);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials21(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 66 && material.id <= 70)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container21");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -635;
  let y = 1898;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#929292");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "200");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 100);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials22(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 71 && material.id <= 74)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container22");
  materialContainer.innerHTML = "";

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const baseX = -45;
  const baseY = 1950;
  const spacingX = 115;
  const spacingY = 55;

  let blockStartY = baseY + spacingY - 3;

  materials.forEach((material, index) => {
    let rectX = baseX;
    let rectY = baseY;
    const circleRadius = 12;
    let circleCX = rectX;
    let circleCY = rectY + 22.5;

    if (material.id === 71) {
      rectX = baseX;
      rectY = baseY;
    } else if (material.id === 72) {
      rectX = baseX + spacingX;
      rectY = baseY;
      circleCX = rectX + 95;
    } else if (material.id === 73) {
      rectX = baseX;
      rectY = baseY + spacingY;
      circleCY = rectY + 22;
    } else if (material.id === 74) {
      rectX = baseX;
      rectY = baseY + spacingY * 2;
      circleCY = rectY + 22;
    }

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 72 ? "#874efe" : "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectX);
    rect.setAttribute("y", rectY);
    rect.setAttribute(
      "width",
      material.id === 71 || material.id === 72 ? "95" : "210"
    );
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute(
      "x",
      material.id === 71 || material.id === 72 ? rectX + 50 : rectX + 105
    );
    text.setAttribute("y", rectY + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);
  });

  materialContainer.appendChild(g);
}

async function loadMaterials23(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 75 && material.id <= 77)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container23");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = 248;
  let y = 1949;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX + 150);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 75 ? "#874efe" : "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX + 150);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "150");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 80);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials24(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 78 && material.id <= 86)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container24");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -625;
  let y = 2254;
  const spacing = 53;

  materials.forEach((material, index) => {
    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "200");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 100);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials25(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 87 && material.id <= 87)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container25");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -45;
  let y = 2250;
  const spacing = 53;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", "#4f7a28");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "208");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 104);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

async function loadMaterials26(category) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 88 && material.id <= 90)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("material-container26");
  materialContainer.innerHTML = "";

  // Create g container
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  let x = -316;
  let y = 2400;
  const spacing = 54;

  materials.forEach((material, index) => {
    const rectX = x;
    const rectY = y;
    const circleRadius = 12;
    const circleCX = rectX;
    const circleCY = rectY + 22.5;

    // Buat lingkaran ungu
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 90 ? "#4f7a28" : "#874efe");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "1.5");

    // Buat teks centang (✓)
    const checkText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    checkText.setAttribute("x", circleCX);
    checkText.setAttribute("y", circleCY + 1);
    checkText.setAttribute("text-anchor", "middle");
    checkText.setAttribute("dominant-baseline", "middle");
    checkText.setAttribute("font-size", "16");
    checkText.setAttribute("fill", "white");
    checkText.setAttribute("font-weight", "bold");
    checkText.textContent = "✓";

    // Buat rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "2.7");
    rect.style.setProperty("--hover-color", "#f3c950");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 50);
    text.setAttribute("y", y + 25);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("font-size", "17");
    text.setAttribute("cursor", "pointer");
    text.setAttribute("fill", "#000000");
    text.textContent = material.name;

    // Tambahkan ke grup
    g.appendChild(rect);
    g.appendChild(circle);
    g.appendChild(checkText);
    g.appendChild(text);

    // Tambahkan event click
    rect.addEventListener("click", () => showMaterialDetails(material));
    text.addEventListener("click", () => showMaterialDetails(material));

    y += spacing;
  });

  materialContainer.appendChild(g);
}

// Fungsi untuk menampilkan detail materi
function showMaterialDetails(material) {
  const popup = document.getElementById("material-detail-popup");
  popup.innerHTML = `
    <div class="relative">
      <button
        id="close-detail-btn"
        class="absolute top-0 right-0 text-red-500">
        <i class='bx bxs-x-square text-[15px] lg:text-[30px]'></i>
      </button>
      <h2 class="text-[8px] md:text-sm lg:text-lg font-semibold mb-1 lg:mb-2">
        ${material.name}
      </h2>
      <p class="text-[8px] md:text-[12px] lg:text-sm text-gray-700 mb-1 lg:mb-4">
        ${material.description || "No description available"}
      </p>
      <div class="relative inline-block">
        <button id="progress-btn" class="bg-gray-400 text-white py-1 px-2 lg:px-4 rounded text-[8px] md:text[12px] lg:text-sm cursor-pointer">
          Loading...
        </button>
        <div id="progress-options" class="hidden absolute z-10 mt-1 bg-white border rounded shadow-md w-full text-left">
          <div class="option px-3 py-1 hover:bg-gray-100 cursor-pointer" data-value="not learned">Not Learned</div>
          <div class="option px-3 py-1 hover:bg-gray-100 cursor-pointer" data-value="in progress">In Progress</div>
          <div class="option px-3 py-1 hover:bg-gray-100 cursor-pointer" data-value="learned">Learned</div>
        </div>
      </div>
    </div>
  `;

  popup.classList.remove("hidden");

  const progressBtn = document.getElementById("progress-btn");
  const optionsMenu = document.getElementById("progress-options");

  // Fungsi untuk set tampilan tombol sesuai status
  function updateButtonStyle(status) {
    progressBtn.textContent = status
      .replace("not learned", "Not Learned")
      .replace("in progress", "In Progress")
      .replace("learned", "Learned");

    progressBtn.classList.remove("bg-gray-400", "bg-yellow-400", "bg-green-500");

    if (status === "not learned") {
      progressBtn.classList.add("bg-gray-400");
    } else if (status === "in progress") {
      progressBtn.classList.add("bg-yellow-400");
    } else if (status === "learned") {
      progressBtn.classList.add("bg-green-500");
    }
  }

  // Cek progress awal
  checkProgress(material.id).then((progressData) => {
    const currentProgress = progressData.progress || "not learned";
    updateButtonStyle(currentProgress);
  });

  // Toggle menu saat tombol diklik
  progressBtn.addEventListener("click", () => {
    optionsMenu.classList.toggle("hidden");
  });

  // Saat opsi dipilih
  optionsMenu.addEventListener("click", async (e) => {
    if (e.target.classList.contains("option")) {
      const selectedProgress = e.target.getAttribute("data-value");
      await updateProgress(material.id, selectedProgress);
      updateButtonStyle(selectedProgress);
      optionsMenu.classList.add("hidden");
      alert(`Progress updated to "${selectedProgress}"`);
    }
  });

  document.getElementById("close-detail-btn").addEventListener("click", () => {
    popup.classList.add("hidden");
  });
}


// Fungsi untuk memeriksa apakah materi sudah dipelajari
async function checkProgress(materialId) {
  const response = await axios.get(
    `https://roadmap-sandy.vercel.app/api/progress/${userId}/${materialId}`
  );
  return response.data;
}

// Fungsi untuk menandai materi sebagai dipelajari
async function updateProgress(materialId, progress) {
  await axios.post("https://roadmap-sandy.vercel.app/api/progress", {
    userId,
    materialId,
    progress,
  });
}

