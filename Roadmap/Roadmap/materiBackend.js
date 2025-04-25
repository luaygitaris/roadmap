let userId = localStorage.getItem("userId") || null;

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const roadmap = document.getElementById("roadmap");
  const loginContainer = document.getElementById("container-login");

  if (userId) {
    roadmap.classList.remove("hidden");
    loginContainer.classList.add("hidden");
    backendMateri("backend");
    backendMateri2("backend");
    backendMateri3("backend");
    backendMateri4("backend");
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const username = document.getElementById("username").value;
      if (!username) {
        alert("Please enter your name");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/api/login", {
          name: username,
        });

        userId = response.data.userId;
        localStorage.setItem("userId", userId);

        document.getElementById("username").value = "";
        roadmap.classList.remove("hidden");
        loginContainer.classList.add("hidden");
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please try again.");
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userId");
      userId = null;
      roadmap.classList.add("hidden");
      loginContainer.classList.remove("hidden");
    });
  }
});

// Function untuk load materi backend
async function backendMateri(category) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/materials/${category}`
    );
    let materials = response.data;

    materials = materials
      .filter(
        (material) =>
          (material.id >= 91 && material.id <= 96) ||
          (material.id >= 110 && material.id <= 114) ||
          (material.id >= 122 && material.id <= 129) ||
          (material.id >= 145 && material.id <= 147) ||
          (material.id >= 148 && material.id <= 155) ||
          (material.id >= 160 && material.id <= 165) ||
          (material.id >= 173 && material.id <= 186)
      )
      .sort((a, b) => a.id - b.id);

    console.log(materials);

    const materialContainer = document.getElementById("backend-Materi");
    materialContainer.innerHTML = "";

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let x = 65;
    let y = -70;
    const spacingX = 110;
    let spacingY = 54;

    materials.forEach((material) => {
      let rectX = x;
      let rectY = y;
      let textX = rectX + 135;
      let textY = rectY + 25;
      const circleRadius = 12;
      let circleCX = rectX + 275;
      let circleCY = rectY + 22.5;
      let circleColor = "#874efe";
      let width = 275;
      let height = 45;

      if (material.id >= 110 && material.id <= 121) {
        rectY = y + 84;
        rectX = x + 68;
        textX = rectX + 90;
        textY = rectY + 25;
        width = 175;
        circleCY = rectY + 22.5;
        circleCX = rectX + 175;
        circleColor = "#4f7a28";
      } else if (material.id === 122) {
        rectY = y + 126;
        rectX = x - 11;
        textY = rectY + 25;
        width = 283;
        circleCY = rectY + 200;
        circleCX = 130;
      } else if (material.id === 123) {
        rectY = y + 130;
        rectX = x;
        textX = rectX + 60;
        textY = rectY + 25;
        width = 125;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id === 124) {
        rectY = y + 76;
        rectX = x + 135;
        textX = rectX + 60;
        textY = rectY + 25;
        width = 125;
        circleCY = rectY + 22.5;
        circleCX = rectX + 125;
      } else if (material.id >= 125 && material.id <= 127) {
        rectY = y + 76;
        textY = rectY + 25;
        width = 260;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id === 128) {
        rectY = y + 76;
        textX = rectX + 60;
        textY = rectY + 25;
        width = 125;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        circleColor = "#929292";
      } else if (material.id === 129) {
        rectY = y + 22;
        rectX = x + 135;
        textX = rectX + 60;
        textY = rectY + 25;
        width = 125;
        circleCY = rectY + 22.5;
        circleCX = rectX + 125;
        circleColor = "#929292";
      } else if (material.id >= 145 && material.id <= 147) {
        rectY = y + 63;
        rectX = x - 12;
        textX = rectX + 95;
        textY = rectY + 25;
        width = 190;
        circleCY = rectY + 22.5;
        circleCX = rectX + 190;
      } else if (material.id >= 145 && material.id <= 155) {
        rectY = y + 80;
        rectX = x + 75;
        textX = rectX + 80;
        textY = rectY + 25;
        width = 165;
        circleCY = rectY + 22.5;
        circleCX = rectX + 165;
      } else if (material.id >= 160 && material.id <= 165) {
        rectY = y + 215;
        rectX = x + 25;
        textY = rectY + 20;
        spacingY = 47;
        width = 210;
        height = 40;
        circleCY = rectY + 22.5;
        circleCX = rectX + 210;
      } else if (material.id >= 173 && material.id <= 174) {
        rectY = y + 430;
        rectX = x + 63;
        spacingY = 55;
        textX = rectX + 80;
        textY = rectY + 25;
        width = 155;
        circleCY = rectY + 22.5;
        circleCX = rectX + 155;
        if (material.id === 174) {
          circleColor = "#4f7a28";
        }
      } else if (material.id >= 175 && material.id <= 178) {
        rectY = y + 484;
        rectX = x + 45;
        textX = rectX + 95;
        textY = rectY + 25;
        width = 190;
        circleCY = rectY + 22.5;
        circleCX = rectX + width;
      } else if (material.id >= 179 && material.id <= 183) {
        rectY = y + 574;
        rectX = x + 7;
        width = 220;
        height = 40;
        textY = rectY + 20;
        spacingY = 47;
        circleCY = rectY + 20;
        circleCX = rectX;
        textX = rectX + 110;
        textY = rectY + 20;
      } else if (material.id >= 184 && material.id <= 185) {
        rectY = y + 635;
        rectX = x - 7;
        textY = rectY + 25;
        textX = rectX + 125;
        spacingY = 55;
        width = 246;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id === 186) {
        rectY = y + 792;
        rectX = x + 9;
        textY = rectY + 25;
        textX = rectX + 110;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        width = 215;
      }

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", circleCX);
      circle.setAttribute("cy", circleCY);
      circle.setAttribute("r", circleRadius);
      circle.setAttribute("fill", circleColor);
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

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("x", rectX);
      rect.setAttribute("y", rectY);
      rect.setAttribute("width", width);
      rect.setAttribute("height", height);
      rect.setAttribute("rx", "5");
      rect.setAttribute("fill", "#ffe599");
      rect.setAttribute("cursor", "pointer");
      rect.setAttribute("stroke", "black");
      rect.setAttribute("stroke-width", "2.7");

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", textX);
      text.setAttribute("y", textY);
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

      [rect, text, circle, checkText].forEach((el) => {
        el.addEventListener("click", () => {
          showMaterialDetails(material, "material-container");
        });
      });

      y += spacingY;
    });

    materialContainer.appendChild(g);
  } catch (err) {
    console.error("Error fetching backend materials:", err);
  }
}

async function backendMateri2(category) {
  const response = await axios.get(
    `http://localhost:3000/api/materials/${category}`
  );
  let materials = response.data;

  materials = materials
    .filter((material) => material.id >= 97 && material.id <= 104)
    .sort((a, b) => a.id - b.id);

  const materialContainer = document.getElementById("backend-Materi2");
  materialContainer.innerHTML = "";

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const baseX = -708;
  const baseY = 0;
  const spacingX = 110;
  const spacingY = 55;

  let blockStartY = baseY + spacingY - 3;

  materials.forEach((material, index) => {
    let rectX = baseX + 125;
    let rectY = baseY;
    const circleRadius = 12;
    let circleCX = rectX;
    let circleCY = rectY;

    if (material.id === 97) {
      rectX = baseX;
      rectY = baseY;
      circleCX = rectX;
      circleCY = rectY + 22;
    } else if (material.id === 101) {
      rectX = baseX + spacingX;
      rectY = baseY;
      circleCX = circleCX + 85;
      circleCY = rectY + 22;
    } else if (material.id === 98) {
      rectX = baseX;
      rectY = baseY + spacingY;
      circleCX = rectX;
      circleCY = rectY + 22;
    } else if (material.id === 99) {
      rectX = baseX;
      rectY = baseY + spacingY * 2;
      circleCX = rectX;
      circleCY = rectY + 22;
    } else if (material.id === 100) {
      rectX = baseX;
      rectY = baseY + spacingY * 3;
      circleCX = rectX;
      circleCY = rectY + 22;
    } else if (material.id === 102) {
      rectX = baseX + spacingX;
      rectY = baseY + spacingY;
      circleCX = rectX + 100;
      circleCY = rectY + 22;
    } else if (material.id === 103) {
      rectX = baseX + spacingX;
      rectY = baseY + spacingY * 2;
      circleCX = rectX + 100;
      circleCY = rectY + 22;
    } else if (material.id === 104) {
      rectX = baseX + spacingX;
      rectY = baseY + spacingY * 3;
      circleCX = rectX + 100;
      circleCY = rectY + 22;
    }

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", circleCX);
    circle.setAttribute("cy", circleCY);
    circle.setAttribute("r", circleRadius);
    circle.setAttribute("fill", material.id === 100 ? "#874efe" : "#4f7a28");
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
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "45");
    rect.setAttribute("rx", "5");
    rect.setAttribute("fill", "#ffe599");
    rect.setAttribute("stroke", "black");
    rect.setAttribute("cursor", "pointer");
    rect.setAttribute("stroke-width", "2.7");

    // Buat text
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", rectX + 50);
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

async function backendMateri3(category) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/materials/${category}`
    );
    let materials = response.data;

    materials = materials
      .filter(
        (material) =>
          material.id === 105 ||
          material.id === 109 ||
          (material.id >= 115 && material.id <= 116) ||
          (material.id >= 117 && material.id <= 121) ||
          material.id === 166 ||
          (material.id >= 171 && material.id <= 172) ||
          (material.id >= 187 && material.id <= 189)
      )
      .sort((a, b) => a.id - b.id);

    console.log(materials);

    const materialContainer = document.getElementById("backend-Materi3");
    materialContainer.innerHTML = "";

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let x = -240;
    let y = 220;
    let spacingX = 105;
    let spacingY = 55;

    materials.forEach((material) => {
      let rectX = x;
      let rectY = y;
      const circleRadius = 12;
      let circleCX = rectX + 135;
      let circleCY = rectY + 22.5;
      let width = 135;
      let textX = rectX + 70;
      let colorCircle = "#874efe";

      if (material.id === 109) {
        rectX = -215;
        circleCX = rectX + 135;
        spacingY = 182;
        textX = rectX + 70;
      } else if (material.id === 105) {
        spacingY = 190;
      } else if (material.id === 115 || material.id === 116) {
        rectX = -365;
        spacingY = 52.5;
        width = 175;
        circleCX = rectX + 175;
        textX = rectX + 85;
        circleCX = rectX;
        colorCircle = "#929292";
      } else if (material.id >= 117 && material.id <= 121) {
        rectY = y + 125;
        rectX = x - 5;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        textX = rectX + 100;
        spacingY = 52.5;
        if (material.id === 119) {
          width = 100;
          textX = rectX + 50;
          colorCircle = "#929292";
        } else if (material.id === 120) {
          width = 100;
          rectX = x + spacingX;
          rectY = y + 72.5;
          textX = rectX + 50;
          circleCX = rectX + 100;
          circleCY = rectY + 22.5;
          colorCircle = "#929292";
        } else if (material.id === 121) {
          width = 210;
          rectY = rectY - spacingY;
          circleCX = rectX + 210;
          circleCY = rectY + 22.5;
          colorCircle = "#929292";
        } else {
          width = 210;
        }
      } else if (material.id === 166) {
        rectY = y + 1035;
        rectX = x - 65;
        textX = rectX + 70;
        circleCY = rectY - 30;
        circleCX = rectX + 20;
      } else if (material.id >= 171 && material.id <= 172) {
        rectY = y + 1252;
        rectX = x + 70;
        textX = rectX + 75;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        width = 150;
        if (material.id === 172) {
          colorCircle = "#4f7a28";
        }
      } else if (material.id >= 187 && material.id <= 189) {
        rectY = y + 2069;
        rectX = x + 35;
        textX = rectX + 105;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        width = 210;
      }

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", circleCX);
      circle.setAttribute("cy", circleCY);
      circle.setAttribute("r", circleRadius);
      circle.setAttribute("fill", colorCircle);
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

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("x", rectX);
      rect.setAttribute("y", rectY);
      rect.setAttribute("width", width);
      rect.setAttribute("height", "45");
      rect.setAttribute("rx", "5");
      rect.setAttribute("fill", "#ffe599");
      rect.setAttribute("cursor", "pointer");
      rect.setAttribute("stroke", "black");
      rect.setAttribute("stroke-width", "2.7");

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", textX);
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

      [rect, text, circle, checkText].forEach((el) => {
        el.addEventListener("click", () => {
          showMaterialDetails(material, "material-container");
        });
      });

      y += spacingY;
    });

    materialContainer.appendChild(g);
  } catch (err) {
    console.error("Error fetching backend materials:", err);
  }
}

async function backendMateri4(category) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/materials/${category}`
    );
    let materials = response.data;

    materials = materials
      .filter(
        (material) =>
          (material.id >= 106 && material.id <= 108) ||
          (material.id >= 130 && material.id <= 131) ||
          (material.id >= 132 && material.id <= 134) ||
          (material.id >= 135 && material.id <= 138) ||
          (material.id >= 139 && material.id <= 144) ||
          (material.id >= 156 && material.id <= 159) ||
          (material.id >= 167 && material.id <= 170) ||
          (material.id >= 190 && material.id <= 206)
      )
      .sort((a, b) => a.id - b.id);

    console.log(materials);

    const materialContainer = document.getElementById("backend-Materi4");
    materialContainer.innerHTML = "";

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let x = -670;
    let y = 260;
    let spacingX = 125;
    let spacingY = 55;

    materials.forEach((material) => {
      let rectX = x;
      let rectY = y;
      let textX = rectX + 70;
      let textY = rectY + 22.5;
      let circleCX = rectX + 135;
      let circleCY = rectY + 22.5;
      const circleRadius = 12;
      let circleColor = "#874efe";
      let width = 135;
      let height = 45;

      if (
        material.id === 107 ||
        material.id === 131 ||
        material.id === 196 ||
        material.id === 198 ||
        material.id === 200 ||
        material.id === 202 ||
        material.id === 204 ||
        material.id === 206
      ) {
        circleColor = "#4f7a28";
      }

      if (material.id >= 157 && material.id <= 159) {
        circleColor = "#929292";
        textY = rectY + 22.5;
      }

      if (material.id >= 106 && material.id <= 107) {
        rectY = y;
        textY = rectY + 25;
      } else if (material.id === 108) {
        rectY = y + 130;
        circleCY = rectY + 25;
        textY = rectY + 25;
        circleColor = "#4f7a28";
      } else if (material.id >= 130 && material.id <= 131) {
        rectY = y + 172;
        rectX = x - 10;
        spacingY = 55;
        circleCX = rectX + 120;
        circleCY = rectY + 22.5;
        width = 120;
        textX = rectX + 60;
        textY = rectY + 25;
      } else if (material.id >= 132 && material.id <= 134) {
        rectY = y + 207;
        rectX = x - 17;
        textY = rectY + 25;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        textX = rectX + 70;
      } else if (material.id >= 135 && material.id <= 138) {
        rectY = y + 272;
        rectX = x - 8;
        textX = rectX + 65;
        textY = rectY + 25;
        spacingY = 53;
        width = 125;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id >= 139 && material.id <= 144) {
        rectY = y + 361;
        rectX = x;
        textX = rectX + 55;
        textY = rectY + 25;
        width = 115;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        if (material.id === 140) {
          width = 150;
          rectX = rectX + spacingX;
          rectY = rectY - spacingY;
          textX = rectX + 75;
          textY = rectY + 25;
          circleCY = rectY + 22.5;
          circleCX = rectX + 150;
        } else if (material.id === 141) {
          rectY = rectY - spacingY;
          circleCY = rectY + 22.5;
          textY = rectY + 25;
        } else if (material.id === 142) {
          width = 150;
          rectX = rectX + spacingX;
          rectY = rectY - spacingY * 2;
          textX = rectX + 75;
          textY = rectY + 25;
          circleCY = rectY + 22.5;
          circleCX = rectX + 150;
        } else if (material.id === 143) {
          rectY = rectY - spacingY * 2;
          circleCY = rectY + 22.5;
          textY = rectY + 25;
        } else if (material.id === 144) {
          width = 150;
          rectX = rectX + spacingX;
          rectY = rectY - spacingY * 3;
          textX = rectX + 75;
          textY = rectY + 25;
          circleCY = rectY + 22.5;
          circleCX = rectX + 150;
        }
      } else if (material.id >= 156 && material.id <= 159) {
        rectY = y + 312;
        rectX = x - 11;
        textX = rectX + 98;
        textY = rectY + 25;
        width = 195;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id >= 167 && material.id <= 170) {
        rectY = y + 710;
        rectX = x + 19;
        textY = rectY + 25;
        textX = rectX + 55;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        if (material.id >= 168 && material.id <= 170) {
          circleColor = "#4f7a28";
        }
        width = 105;
      } else if (material.id >= 190 && material.id <= 194) {
        rectY = y + 139;
        rectX = x - 7;
        spacingY = 47;
        textX = rectX + 120;
        textY = rectY + 22;
        circleCY = rectY + 20;
        circleCX = rectX;
        width = 235;
        height = 40;
        if (material.id >= 193 && material.id <= 194) {
          circleColor = "#929292";
        }
      } else if (material.id >= 195 && material.id <= 196) {
        rectY = y + 600;
        rectX = x + 35;
        textY = rectY + 25;
        textX = rectX + 65;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        spacingY = 50;
      } else if (material.id >= 197 && material.id <= 198) {
        rectY = y + 665;
        rectX = x + 35;
        textY = rectY + 25;
        textX = rectX + 65;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id >= 199 && material.id <= 200) {
        rectY = y + 740;
        rectX = x + 35;
        textY = rectY + 25;
        textX = rectX + 65;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id >= 201 && material.id <= 202) {
        rectY = y + 640;
        rectX = x + 190;
        textY = rectY + 25;
        textX = rectX + 65;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      } else if (material.id >= 203 && material.id <= 204) {
        rectY = y + 535;
        rectX = x + 350;
        textY = rectY + 25;
        textX = rectX + 65;
        circleCY = rectY + 22.5;
        circleCX = rectX;
        width = 150;
      } else if (material.id >= 205) {
        rectY = y + 95;
        rectX = x + 190;
        textY = rectY + 25;
        textX = rectX + 65;
        circleCY = rectY + 22.5;
        circleCX = rectX;
      }

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", circleCX);
      circle.setAttribute("cy", circleCY);
      circle.setAttribute("r", circleRadius);
      circle.setAttribute("fill", circleColor);
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

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("x", rectX);
      rect.setAttribute("y", rectY);
      rect.setAttribute("width", width);
      rect.setAttribute("height", height);
      rect.setAttribute("rx", "5");
      rect.setAttribute("fill", "#ffe599");
      rect.setAttribute("cursor", "pointer");
      rect.setAttribute("stroke", "black");
      rect.setAttribute("stroke-width", "2.7");

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", textX);
      text.setAttribute("y", textY);
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

      [rect, text, circle, checkText].forEach((el) => {
        el.addEventListener("click", () => {
          showMaterialDetails(material, "material-container");
        });
      });

      y += spacingY;
    });

    materialContainer.appendChild(g);
  } catch (err) {
    console.error("Error fetching backend materials:", err);
  }
}

function showMaterialDetails(material) {
  const popup = document.getElementById("material-detail-popup");
  popup.innerHTML = `
    <div class="relative">
      <button
            id="close-detail-btn"
            class="absolute top-[-8px] right-[-8px] text-red-500">
            <i class='bx bxs-x-square text-[15px] sm:text-[20px] lg:text-[30px] cursor-pointer'></i>
      </button>
      <h2 class="text-[8px] md:text-sm lg:text-lg font-semibold mb-1 lg:mb-2">${
        material.name
      }</h2>
      <p class="text-[8px] md:text-[12px] lg:text-sm text-gray-700 mb-1 lg:mb-4">${
        material.description || "No description available"
      }</p>
      <button id="mark-learned-btn" class="cursor-pointer bg-green-500 hover:bg-green-600 text-white py-1 px-1 lg:px-4 rounded text-[8px] md:text[12px] lg:text-sm">
        Mark as Learned
      </button>
    </div>
  `;

  popup.classList.remove("hidden");

  // Cek progress
  checkProgress(material.id).then((progress) => {
    const button = document.getElementById("mark-learned-btn");
    if (progress.status === "learned") {
      button.textContent = "Already Learned";
      button.disabled = true;
      button.classList.remove("bg-green-500", "hover:bg-green-600");
      button.classList.add("bg-gray-400", "cursor-not-allowed");
    } else {
      button.addEventListener("click", async () => {
        await markAsLearned(material.id);
        button.textContent = "Already Learned";
        button.disabled = true;
        button.classList.remove("bg-green-500", "hover:bg-green-600");
        button.classList.add("bg-gray-400", "cursor-not-allowed");
        alert("Material marked as learned!");
      });
    }
  });
  document.getElementById("close-detail-btn").addEventListener("click", () => {
    popup.classList.add("hidden");
  });
}

// Fungsi untuk memeriksa apakah materi sudah dipelajari
async function checkProgress(materialId) {
  const response = await axios.get(
    `http://localhost:3000/api/progress/${userId}/${materialId}`
  );
  return response.data;
}

// Fungsi untuk menandai materi sebagai dipelajari
async function markAsLearned(materialId) {
  await axios.post("http://localhost:3000/api/progress", {
    userId,
    materialId,
  });
}
