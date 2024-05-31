fetch('design-data.json')
    .then(response => response.json())
    .then(value => {
        let data = value
        console.log(data.length)



        for (let i = 0; i < data.length; i++) {
            const newAtag = document.createElement('a');
            newAtag.setAttribute("href", 'design/' + data[i].href + '.html');
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "p-item-div");
            const itemimage = document.createElement("img");
            itemimage.setAttribute("src", "portfolio-img/" + data[i].img);

            // const newContent = document.createTextNode("Hi there and greetings!");
            newAtag.appendChild(newDiv);
            newDiv.appendChild(itemimage);
            // newDiv.appendChild(newContent);
            const galleryDiv = document.getElementById("gallery-container");
            galleryDiv.appendChild(newAtag);
        }

    })


function getNameFromHtmlFile(str) {
    let removequotes = fileNametext.replace(/["']/g, "")
    let removequotesbrackets = removequotes.replace(/[\[\]']+/g, '')
    let removedhtml = removequotesbrackets.substring(0, removequotesbrackets.length - 5);
    let getItemNames = removedhtml.split("-");
    // console.log(getItemNames)

    let namelisteng = ['website', 'businesscard', 'clothing', 'others', 'shopcard', 'flyer', 'logo', 'event', 'envelope', 'productlabel', 'cloudfunding', 'thankyounote', 'leaflet', 'futabasoroban', 'hitthesweetspot', 'katekyo', 'mukopani', 'nishimukoshonenkenyukai', 'nozuekensetsu', 'odekake', 'takarazukaterrace', 'takayamagumi', 'terracecorp']
    let namelistjp = ['Website', '名刺', 'アパレル', 'その他', 'ショップカード', 'チラシ', 'ロゴ', 'イベント', '封筒', '商品ラベル', 'クラウドファンディング', 'お礼状', 'パンプレット', 'ふたばそろばん', 'HIT THE SWEET SPOT', 'KATEKYO', 'ムコパ二', '西武庫少年剣友会', '野末建設', 'おでかけサポート', '宝塚TERRACE', '株式会社髙山組']

    let arr = []

    namelisteng.forEach((item, index) => {
        if (getItemNames.includes(item)) {
            arr.push(namelistjp[index])
        }

    })
    return arr
    // console.log(arr)
}
