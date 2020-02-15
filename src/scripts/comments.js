import Vue from "vue";
import { runInThisContext } from "vm";

const btns = {
    template: "#comments__btns"
}

const slider = {
    template: "#comments__slider",
    props:{
        comments: Array
    }
}

new Vue({
    el: "#comments",
    template:"#comments-wrapp",
    components: {
        btns,
        slider
    },
    data(){
        return{
            comments:[],
            index: 1
        }
    },
    methods:{
        commentImg(data){
            return data.map(item => {
                const reqImg = require(`../images/content/${item.img}`);
                item.img = reqImg;

                return item;
            })
        },
        commentsSlider(direction){
            // элементы первого слайда
            let commentsItem = this.$el.querySelectorAll('.comments__item');
            // длина первого слайда
            let commentsItemWidth = this.$el.querySelector('.comments__item').clientWidth;
            // длина списка
            let commentsItemLength = commentsItem.length;
            switch(direction){
                case 'next':
                    commentsItem[0].style = "margin-left: " + (-commentsItemWidth*this.index) + "px";
                    this.index++;
                    if(this.index >= commentsItemLength-1){
                        this.index = 0;
                    }
                    break;
                case 'prev':
                    commentsItem[0].style = "margin-left: " + (-commentsItemWidth*this.index) + "px";
                    this.index--;
                    if(this.index < 0){
                        this.index = commentsItemLength-2;
                    }
                    break;
            }
        }
    },
    created(){
        const data = require("../data/comments.json");
        this.comments = this.commentImg(data);
    }
});
