import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [],
        pageNum: 3,
        pageLength: 10
    },
    mutations: {
        _addLists (state, list) {
            // console.log(list)
            var l = {
                title: list.title,
                clickNum: list.num,
                time: new Date () 
            };
            if(state.lists.every(item => item.title !== list.title)) {
                state.lists.push(l);
                state.lists.sort((pre, next) => pre.clickNum < next.clickNum);
            }
        },
        changePageNum (state, num) {
            state.pageNum = num;
        },
        changePageLength (state, length) {
            state.pageLength = length;
        },
        delList (state, title) {
            state.lists = state.lists.filter(item => item.title !== title)
        },
        addOne (state, index) {
            state.lists[index].clickNum++;
        }
    } 
})     