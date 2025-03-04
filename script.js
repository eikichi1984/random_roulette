'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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
        names.push(nameInput);
        document.getElementById('nameInput').value = ''; // 入力フィールドをクリア
        updateNameList();
        alert(`名前「${nameInput}」を追加しました！`);
    } else {
        alert('名前を入力してください。');
    }
}

function removeName(index) {
    names.splice(index, 1);
    updateNameList();
}

function showRandomName() {
    if (names.length === 0) {
        document.getElementById('result').innerText = "全員が選ばれました！";
        return;
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    document.getElementById('result').innerText = `ランダムに選ばれた名前は: ${selectedName}`;
    names.splice(randomIndex, 1); // 選ばれた名前をリストから削除
    updateNameList();
}
