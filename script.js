// プロフィールデータを配列で管理
const profiles = [
  {
    accountLink: "https://x.com/UT09_11",
    icon: "icons/main.jpg",
    name: "メイン垢",
    text: "その名の通りメインアカウント。"
  },
  {
    accountLink: "https://x.com/TU091_1",
    icon: "icons/sub.jpg",
    name: "サブ垢",
    text: "何かあったとき用。"
  },
  {
    accountLink: "https://x.com/UuTt0911",
    icon: "icons/shukusho.jpg",
    name: "縮小垢",
    text: "主に親しい人や弊学生のみ通しています。"
  },
  {
    accountLink: "https://x.com/0911TU",
    icon: "icons/kagi.jpg",
    name: "鍵垢",
    text: "愚痴、不満など。通す人は厳選します。"
  },
  {
    accountLink: "https://x.com/UThololistener",
    icon: "icons/oshi.jpg",
    name: "推し活用垢",
    text: "推し活用アカウントです。同担拒否の方は注意。"
  },
  {
    accountLink: "https://x.com/UtCoder_UBC911",
    icon: "icons/atcoder.jpg",
    name: "AtCoder垢",
    text: "AtCoderに関する投稿をします"
  }
];

// HTMLを動的に生成して挿入
const profilesContainer = document.getElementById('profiles');
profiles.forEach(profile => {
  const profileHTML = `
        <div class="flame">
          <a class="accountLink" href="${profile.accountLink}">
            <div class="account">
              <div class="icon">
                <img src="${profile.icon}" alt="${profile.name}">
              </div>
              <div>
                <p class="name">${profile.name}</p>
                <p class="text">${profile.text}</p>
              </div>
            </div>
          </a>
        </div>
      `;
  profilesContainer.innerHTML += profileHTML;
});
