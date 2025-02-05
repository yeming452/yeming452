// 章节数据
const chapters = [
    { 
        title: "天皇勋章的真相",
        desc: "一个少先队员徽章引发的家族秘史...",
        link: "chapters/1.html"
    },
    {
        title: "PC榜的荒诞真相",
        desc: "吹牛教主与十强榜单的终极对决...",
        link: "chapters/2.html"
    }
];

// 动态生成卡片
function loadChapters() {
    const grid = document.querySelector('.chapter-grid');
    chapters.forEach((chap, index) => {
        grid.innerHTML += `
            <article class="chapter-card">
                <div class="chapter-number">第${index+1}章</div>
                <h3>${chap.title}</h3>
                <p>${chap.desc}</p>
                <a href="${chap.link}" class="read-button">阅读全文</a>
            </article>
        `;
    });
}

// 页面加载完成后执行
window.onload = loadChapters;
