<template>
  <div>
    <!-- 头部 -->
    <van-sticky>
      <van-row style="background:#fff">
        <van-col class="wy-box">
          <span>网易严选</span>
        </van-col>
        <van-col class="wy-search">
          <van-search placeholder="请输入搜索关键词" v-model="value" />
        </van-col>
        <van-col class="loginbtn">登录</van-col>
      </van-row>
      <!-- tab 拖动 -->
      <van-tabs>
        <van-tab v-for="(item,i) in tabBtnLiat" :title="item" :key="i" class="active">{{ item}}</van-tab>
      </van-tabs>
    </van-sticky>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="item in bannderList" :key="item.img">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 推送 -->
    <van-row class="service-box">
      <van-col span="8">
        <i class="icon icon_1"></i>
        <span class="text">网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon icon_2"></i>
        <span class="text">30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon icon_3"></i>
        <span class="text">48小时快速退款</span>
      </van-col>
    </van-row>
    <!-- 十个宫格 -->
    <van-grid :column-num="5">
      <van-grid-item v-for="(item,i) in goods_icon" :key="i">
        <img :src="item.imgUrl" alt style=" width:100%;
    height:100%;" />
        <div>{{item.goods_txt}}</div>
      </van-grid-item>
    </van-grid>
    <!-- 商品列表 -->
    <div class="goosList-box">
      <h1>
        <lable>新品首发</lable>
        <a href>更多 ></a>
      </h1>
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(item,i) in goods_list" :key="i">
          <img :src="item.imgurl" alt style=" width:100%;
    height:100%;" />
          <div>{{item.txt}}</div>
          <span>￥{{item.price}}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div style="height:2rem;backgrouund:#666;font-size:.5rem;color:#fff;">footer div</div>
    <!-- 吸底部栏 -->
    <footerTable></footerTable>
  </div>
</template>

<script>
import footerTable from "../common/ggtabr.vue";
export default {
  data() {
    return {
      value: "",
      currentIndex: 0,
      active: "",
      tabBtnLiat: [],
      bannderList: [],
      goods_icon: [
        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },
        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },
        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },

        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },

        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },
        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },
        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },
        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },

        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        },

        {
          imgUrl: require("../../assets/img/1.png"),
          goods_txt: "新品首发"
        }
      ],
      goods_list: [
        {
          imgurl: require("../../assets/goods/8.png"),
          txt: "拉拉拉拉",
          price: "33",
          gradientPrice: 0
        },
        {
          imgurl: require("../../assets/goods/9.png"),
          txt: "拉拉拉拉",
          price: "66",
          gradientPrice: 0
        },
        {
          imgurl: require("../../assets/goods/8.png"),
          txt: "拉拉拉拉",
          price: "77",
          gradientPrice: 0
        },
        {
          imgurl: require("../../assets/goods/8.png"),
          txt: "拉拉拉拉",
          price: "88",
          gradientPrice: 0
        },
        {
          imgurl: require("../../assets/goods/9.png"),
          txt: "拉拉拉拉",
          price: "99",
          gradientPrice: 0
        },
        {
          imgurl: require("../../assets/goods/8.png"),
          txt: "拉拉拉拉",
          price: "100",
          gradientPrice: 0
        }
      ]
    };
  },
  components: {
    footerTable
  },
  created() {
    this.getTabList();
    this.getBannderList();
    this.getgoodsicon();
  },
  methods: {
    getTabList() {
      this.$http.get("getab_table_list").then(res => {
        this.tabBtnLiat = res.data;
        console.log(this.tabBtnLiat, "头部导航");
      });
    },
    getBannderList() {
      this.$http.get("get_bannder").then(res => {
        this.bannderList = res.data;
        console.log(this.bannderList, "轮播图");
      });
    },
    getgoodsicon() {
      this.$http.get("get_goods_icon").then(res => {
        this.goods_icon = res.data;
        console.log(this.goods_icon, "宫格");
      });
    }
  }
};
</script>

<style lang="less" scoped>
.wy-box {
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.4rem;
  margin-top: 0.2rem;
  > span {
    margin: 0.3rem 0 0 0.3rem;
  }
}
.wy-search {
  width: 7rem;
}
.loginbtn {
  border: 1px solid #dd1a21;
  color: #dd1a21;
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  margin-top: 0.3rem;
  border-radius: 0.10667rem;
  margin-left: -0.1rem;
}
.my-swipe {
  img {
    width: 100%;
    height: 100%;
  }
}
.service-box {
  margin-top: 0.2rem;
  .text {
    font-size: 0.32rem;
    color: #333;
    margin-left: 0.10667rem;
    line-height: 0.42667rem;
    display: inline-block;
    vertical-align: middle;
  }
  i.icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: middle;
  }
  i.icon_1 {
    background-image: url("../../assets/imgs/4.png");
  }
  i.icon_2 {
    background-image: url("../../assets/imgs/2.png");
  }
  i.icon_3 {
    background-image: url("../../assets/imgs/3.png");
  }
}
.goosList-box {
  clear: both;
  margin: 0.2rem 0;

  h1 {
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
    margin: 0 0.2rem;
  }
  span {
    color: red;
  }
}
</style>