"use strict";

const userNameInput = document.getElementById("user-name"),
  assessmentButton = document.getElementById("assessment"),
  resultDivided = document.getElementById("result-area"),
  tweetDivided = document.getElementById("tweet-area");

// assessmentButton.onclick = function () {
//   console.log("pushed button");
// };

userNameInput.onkeydown = (event) => {
  if (event.key === "Enter") {
    assessmentButton.onclick();
  }
};

assessmentButton.onclick = () => {
  console.log("clicked");
  const userName = userNameInput.value;
  if (userName.length === 0) return;

  resultDivided.innerText = "";
  resultDivided.classList.add("card");
  resultDivided.style.maxWidth = "700px";

  const headerDivided = document.createElement("div");
  headerDivided.classList.add("card-header");
  headerDivided.innerText = "診断結果";

  const bodyDevided = document.createElement("div");
  bodyDevided.classList.add("card-body");

  const paragraph = document.createElement("p");
  paragraph.classList.add("card-text");
  const result = assesment(userName);
  paragraph.append(result);
  bodyDevided.append(paragraph);

  resultDivided.appendChild(headerDivided);
  resultDivided.appendChild(bodyDevided);

  tweetDivided.innerText = "";
  const anchor = document.createElement("a");
  const hrefValue = `https://twitter.com/intent/tweet?button_hashtag=${encodeURIComponent(
    "あなたのいいところ"
  )}&ref_src=twsrc%5Etfw`;
  anchor.setAttribute("href", hrefValue);
  anchor.setAttribute("class", "twitter-hashtag-button");
  anchor.setAttribute("data-text", result);
  anchor.innerText = "Tweet #あなたのいいところ";

  tweetDivided.append(anchor);

  const script = document.createElement("script");
  script.setAttribute("src", "https://platform.twitter.com/widgets.js");
  tweetDivided.append(script);

  // <script
  //   async
  //   src="https://platform.twitter.com/widgets.js"
  //   charset="utf-8"
  // ></script>
};

const answers = [
  "{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。",
  "{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。",
  "{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。",
  "{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。",
  "{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。",
  "{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。",
  "{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。",
  "{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。",
  "{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。",
  "{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。",
  "{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。",
  "{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。",
  "{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。",
  "{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。",
  "{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。",
  "{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。",
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */

function assesment(userName) {
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode += userName.charCodeAt(i);
  }
  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  result = result.replaceAll("{userName}", userName);
  return result;
}

console.assert(
  assesment("太郎") === assesment("太郎"),
  "error 同名なのに診断が異なります"
);
