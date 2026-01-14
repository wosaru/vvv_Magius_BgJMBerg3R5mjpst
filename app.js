/*
  ==============================
  データ定義（data.json を直接埋め込み）
  ==============================
*/

const data = [
{ src: "1_0_不問_不問.png",打ち出しpt:"0",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "2_0_0_0.png",打ち出しpt:"0",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "3_0_1_0.png",打ち出しpt:"0",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "4_25_不問_不問.png",打ち出しpt:"25",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "5_25_0_0.png",打ち出しpt:"25",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "6_25_1_0.png",打ち出しpt:"25",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "7_50_不問_不問.png",打ち出しpt:"50",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "8_50_0_0.png",打ち出しpt:"50",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "9_50_0_1.png",打ち出しpt:"50",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "10_50_1_0.png",打ち出しpt:"50",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "11_75_不問_不問.png",打ち出しpt:"75",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "12_75_0_0.png",打ち出しpt:"75",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "13_75_0_1.png",打ち出しpt:"75",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "14_75_1_0.png",打ち出しpt:"75",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "15_125_不問_不問.png",打ち出しpt:"125",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "16_125_0_0.png",打ち出しpt:"125",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "17_125_0_1.png",打ち出しpt:"125",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "18_125_1_0.png",打ち出しpt:"125",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "19_150_不問_不問.png",打ち出しpt:"150",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "20_150_0_0.png",打ち出しpt:"150",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "21_150_0_1.png",打ち出しpt:"150",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "22_150_1_0.png",打ち出しpt:"150",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "23_175_不問_不問.png",打ち出しpt:"175",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "24_175_0_0.png",打ち出しpt:"175",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "25_175_0_1.png",打ち出しpt:"175",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "26_175_1_0.png",打ち出しpt:"175",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "27_225_不問_不問.png",打ち出しpt:"225",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "28_225_0_0.png",打ち出しpt:"225",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "29_225_0_1.png",打ち出しpt:"225",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "30_225_1_0.png",打ち出しpt:"225",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "31_250_不問_不問.png",打ち出しpt:"250",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "32_250_0_0.png",打ち出しpt:"250",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "33_250_0_1.png",打ち出しpt:"250",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "34_250_1_0.png",打ち出しpt:"250",REGスルー回数:"1",ＣＺスルー回数:"0" },
{ src: "35_275_不問_不問.png",打ち出しpt:"275",REGスルー回数:"不問",ＣＺスルー回数:"不問" },
{ src: "36_275_0_0.png",打ち出しpt:"275",REGスルー回数:"0",ＣＺスルー回数:"0" },
{ src: "37_275_0_1.png",打ち出しpt:"275",REGスルー回数:"0",ＣＺスルー回数:"1" },
{ src: "38_275_1_0.png",打ち出しpt:"275",REGスルー回数:"1",ＣＺスルー回数:"0" },


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


