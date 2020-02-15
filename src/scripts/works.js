import Vue from "vue";

const lang = {
    template:"#works__lang",
    props:{
        langArray: Array
    }
}

const works__right = {
    template: "#works__right",
    components:{
        lang
    },
    props:{
        currentWork: Object
    },
    computed:{
        langArray(){
            return this.currentWork.words;
        }
    }
}

const arrows = {
    template:"#works__arrows"
}

const slider = {
    template: "#works__slider",
    props:{
        works: Array,
        currentWork: Object
    }
}

const works__left = {
    template: "#works__left",
    components:{
        slider,
        arrows
    },
    props:{
        works: Array,
        currentWork: Object
    }
}

new Vue({
    el: "#works-component",
    template:"#works-content",
    components:{
        works__left,
        works__right
    },
    data(){
        return {
            works: [],
            slideIndex: 0
        }
    },
    computed:{
        currentWork(){
            return this.works[this.slideIndex]
        }
    },
    watch:{
        slideIndex(value){
            this.restriction(value);
        }
    },
    methods:{
        restriction(value){
            const arraySlider = this.works.length - 1;
            if (value > arraySlider){
                this.slideIndex = 0;
            }
            if(value < 0 ){
                this.slideIndex = arraySlider;
            }
        },
        imgSlider(data){
            return data.map(item => {
                const reqImg = require(`../images/content/${item.img}`);
                item.img = reqImg;

                return item;
            })
        },
        worksSlider(direction){
            let worksItem = this.$el.querySelectorAll('.works__item');
            let worksItemWidth = this.$el.querySelector('.works__item').clientWidth;
            let worksItemLength = worksItem.length;
            switch(direction){
                case 'next':
                    worksItem[0].style = "margin-left: " + (-worksItemWidth*this.slideIndex) + "px";
                    this.slideIndex++;
                    if(this.slideIndex < worksItemLength){
                        worksItem[worksItemLength].style = "margin-left: " + (-worksItemWidth*this.slideIndex) + "px";
                    }
                    break;
                    case 'prev':
                    worksItem[0].style = "margin-left: " + (-worksItemWidth) + "px";
                    this.slideIndex--;
                    if(this.slideIndex < 2){
                        worksItem[0].style = "margin-left: " + (-worksItemWidth*this.slideIndex) + "px";
                        worksItem[worksItemLength].style = "margin-left: " + 0 + "px";
                    }
                    break;
            }
        }
    },
    created(){
        const data = require("../data/works.json");
        this.works = this.imgSlider(data);
    }
});