/*
  ==============================
  データ定義（data.json を直接埋め込み）
  ==============================
*/

const data = [
  { src: "0001_青_なし.png", 刀色: "青", 高確: "なし" },
  { src: "0002_青_あり.png", 刀色: "青", 高確: "あり" },
  { src: "0003_黄_なし.png", 刀色: "黄", 高確: "なし" },
  { src: "0004_黄_あり.png", 刀色: "黄", 高確: "あり" },
  { src: "0005_赤_なし.png", 刀色: "赤", 高確: "なし" },
  { src: "0006_赤_あり.png", 刀色: "赤", 高確: "あり" }
];

/*
  ==============================
  初期化
  ==============================
*/

const filtersDiv = document.getElementById("filters");
const galleryDiv = document.getElementById("gallery");

// src 以外を条件キーとして取得
const conditionKeys = Object.keys(data[0]).filter(key => key !== "src");

// select要素保持
const selects = {};

// 条件UI生成
conditionKeys.forEach(key => {
  const group = document.createElement("div");
  group.className = "filter-group";

  const label = document.createElement("label");
  label.textContent = key + "：";

  const select = document.createElement("select");

  // ユニーク値のみ追加（「すべて」は作らない）
  const values = [...new Set(data.map(item => item[key]))];

  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });

  select.addEventListener("change", update);

  group.appendChild(label);
  group.appendChild(select);
  filtersDiv.appendChild(group);

  selects[key] = select;
});

// 初期表示
update();

/*
  ==============================
  検索＆描画
  ==============================
*/

function update() {
  galleryDiv.innerHTML = "";

  const filtered = data.filter(item => {
    return conditionKeys.every(key => {
      return item[key] === selects[key].value;
    });
  });

  // 一致した画像のみ表示（0件なら何も表示しない）
  filtered.forEach(item => {
    const img = document.createElement("img");
    img.src = `images/${item.src}`;
    img.alt = item.src;
    galleryDiv.appendChild(img);
  });
}
