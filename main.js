
Vue.use(VInfiniteScroll);
new Vue({

    el: ".container",

    data: {
        eles: 1
    },

    methods: {

        nextPage(){
            
            this.eles += 2;
            
        }

    }
});
