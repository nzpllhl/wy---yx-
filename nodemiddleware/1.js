/*
1.先在项目根目录 npm install express -save-dev 下载
2.引入 express 
3. 调用 express()
4  node js 运行
*/
const express = require('express')
const app = express()

// 解决跨域的问题
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS');
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

// 头部 table栏
app.get('/getab_table_list', function (req, res) {
    var tabBtnLiat = [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "全球特色"
    ]
    res.send(tabBtnLiat)
});

app.get('/get_bannder', function (req, res) {
    var bannderList = [
        {
            img:
                "https://yanxuan.nosdn.127.net/6edda07dd845f6ef1cfeecabbecceebb.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
        },
        {
            img:
                "https://yanxuan.nosdn.127.net/0e3988704bb005639a6c4b3784a4c193.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
        },
        {
            img:
                "https://yanxuan.nosdn.127.net/4a8d81f364e303bbe4893334526f7229.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
        },
        {
            img:
                "https://yanxuan.nosdn.127.net/4a8d81f364e303bbe4893334526f7229.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
        }
    ]
    res.send(bannderList)
});


app.get('/get_goods_icon', function (req, res) {
    var goods_icon = [
        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },
        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },
        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },

        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },

        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },
        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },
        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },
        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        },

        {
            imgUrl: require("../../assets/img/1.png"),
            goods_txt: "新品首发"
        },

        {
            imgUrl: require("../src/assets/img/1.png"),
            goods_txt: "新品首发"
        }
    ]
    app.send(goods_icon)
})

app.listen(5632, function () {
    console.log("5632,已经运行");

})

