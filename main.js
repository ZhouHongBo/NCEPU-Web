var app = new Vue({
    el: ".app",
    data: {
        imgList: ["img/lunbo0.jpg","img/lunbo1.png","img/lunbo2.jpg","img/lunbo3.jpg",
                  "img/lunbo4.jpg","img/lunbo5.jpg","img/lunbo6.jpg","img/lunbo7.jpg",
                  "img/lunbo8.jpg","img/lunbo9.jpg"],
        description: ["庆祝华北电力大学建校62周年！","62载砥砺前行，62载奋发图强",
                      "华北电力大学第五十二届田径运动会","谋篇布局十四五 砥砺奋进新征程",
                      "热烈庆祝新中国成立71周年！","中秋佳节到，花好月圆时",
                      "我校举行2020级新生开学典礼","2020级新生开学典礼","欢迎2020级新同学",
                      "你好，新同学"],
        idx: 0
    },
    methods: {
        prev: function(){
            if (this.idx != 0) {
                this.idx = this.idx - 1;
            } else {
                this.idx = 9;
            }
        },
        next: function(){
            if (this.idx != 9) {
                this.idx = this.idx + 1;
            } else {
                this.idx = 0;
            }
        }
    }
});