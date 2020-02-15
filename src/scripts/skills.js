import Vue from "vue";

const skill = {
    template: "#skill",
    props:{
        skillName: String,
        skillNumber: Number
    },
    //сначала делается метод вычисления процентов, затем вызывается
    methods:{
        skills_percent(){
            // обращаемся к ref для вычисления процентов
            const gradient = this.$refs["gradient"];
            // вычисляем величину круга
            const dashArray = parseInt(getComputedStyle(gradient).getPropertyValue("stroke-dasharray"));
            // вычисляем количество процентов
            // skillNumber - пропс описанный в верхнем блоке, величина которого берется из json
            const dashOffset = (dashArray / 100) * (100-this.skillNumber); // формула вычисления процентов для skill
            gradient.style.strokeDashoffset = dashOffset; // присабачиваем стили
        }
    },
    mounted(){
        this.skills_percent();
    }
}

const skills_main = {
    template: "#skills-main",
    components:{
        skill
    },
    props:{
        skills: Object
    }
}

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skills_main
    },
    data(){
        return {
            skills: {}
        }
    },
    created(){
        const values = require("../data/skills.json");
        this.skills = values;
    }
});