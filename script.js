
'use strict'
// 名前リスト
let names = [];

function updateNameList() {
    const nameListElement = document.getElementById('nameList');
    if (names.length === 0) {
        nameListElement.innerText = "現在のリスト: なし";
    } else {
        nameListElement.innerHTML = "現在のリスト:<br>" + names.map((name, index) =>
            `<div class="name-item">${name} <button onclick="removeName(${index})">削除</button></div>`
        ).join('');
    }
}

function addName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        if (!names.includes(nameInput)) {
            names.push(nameInput);
            document.getElementById('nameInput').value = ''; // 入力フィールドをクリア
            updateNameList();
            alert(`名前「${nameInput}」を追加しました！`);
        } else {
            alert('この名前は既にリストに存在します。');
        }
    } else {
        alert('名前を入力してください。');
    }
}

function removeName(index) {
    names.splice(index, 1);
    updateNameList();
    alert('名前を削除しました。');
}

function startRoulette() {
    if (names.length === 0) {
        document.getElementById('result').innerText = "全員が選ばれました！";
        return;
    }
    let rouletteInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];
        document.getElementById('result').innerText = `ランダムに選ばれた名前は: ${selectedName}`;
    }, 100);

    setTimeout(() => {
        clearInterval(rouletteInterval);
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];
        document.getElementById('result').innerText = `最終的に選ばれた名前は: ${selectedName}`;
        names.splice(randomIndex, 1); // 選ばれた名前をリストから削除
        updateNameList();
    }, 3000); // 3秒後にルーレット停止
}

// 初期表示のためにリストを更新
updateNameList();
