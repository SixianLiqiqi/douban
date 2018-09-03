<template>
    <div class="end-wrapper">
        <div class="change-msg">
            <div class="change-page">
                显示页数：<input type="text" v-model="nowNum">
                <div class="change-btn" @click="changeNum">修改</div>
            </div>
            <div class="change-length">
                显示长度：<input type="text" v-model="nowLength">
                <div class="change-btn" @click="changeLength">修改</div>
            </div>
        </div>
        <div class="add-list">
            <div class="add-title">
                添加标题：<input type="text" v-model="title">
            </div>
            <div class="add-num">
                添加数量：<input type="text" v-model="num">
            </div>
            <div class="add-btn">
                <div class="btn" @click="addLists">确定</div>
            </div>
        </div>
        <div class="show-list">
            <table border>
                <tr>
                    <th>编号</th>
                    <th>标题</th>
                    <th>时间</th>
                    <th>点击量</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(list, index) in lists">
                    <td>{{index + 1}}</td>
                    <td>{{list.title}}</td>
                    <td>{{list.time}}</td>
                    <td>{{list.clickNum}}</td>
                    <td>
                        <span>修改</span>
                        <span @click="del(list.title)">删除</span>
                    </td>
                </tr>
            </table>
        </div>

        <!-- 修改功能 -->
        <!-- <div class="bg"></div> -->
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data () {
        return {
            nowNum: this.$store.state.pageNum,
            nowLength: this.$store.state.pageLength,
            title: '',
            num: 0
        }
    },
    computed: {
        ...mapState(['lists', 'pageNum', 'pageLength'])
    },
    methods: {
        ...mapMutations(['changePageNum', 'changePageLength', '_addLists', 'delList']),
        changeNum () {
            this.changePageNum(+this.nowNum);
            alert('修改成功');
        },
        changeLength () {
            this.changePageLength(+this.nowLength);
            alert('修改成功');
        },
        addLists () {
            console.log(this.title, this.num);
            if (this.title == '') {
                // alert('please input title')
                this._addLists ({title: '新闻' + parseInt(Math.random()*1000000), num: parseInt(Math.random()*1000000)});
            } else {
                this._addLists ({title: this.title, num: this.num});
            }
            this.title = '';
            this.num = 0;
        },
        del (title) {
            this.delList(title)
        }
    }
}

</script>

<style>
    /* 修改btn */
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: 0.3;
    }

    .end-wrapper {
        margin-bottom: 40px;
    }
    .change-msg {
        display: flex;
        width: 100%;
    }
    .change-page, .change-length {
        flex: 1;
        display: flex;
        height: 30px;
        align-items: center;
    }
    .change-btn {
        margin-left: 20px;
        height: 20px;
        line-height: 20px;
        width: 50px;
        text-align: center;
        background: red;
        color: #fff;
        cursor: pointer;
    }
    .add-list {
        display: flex;
        align-items: center;
    }
    .add-title, .add-num, .add-btn {
        flex: 1;
    }
    .add-btn .btn{
        color: #fff;
        height: 20px;
        line-height: 20px;
        width: 50px;
        text-align: center;
        background: red;
    }
    .end-wrapper > div {
        margin-bottom: 40px;
    }
    table {
        width: 100%;
    }
    th, td {
        width: 20%;
        text-align: center;
    }
</style>


