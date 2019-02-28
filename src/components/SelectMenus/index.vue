<style lang="less" scoped>
.MenuListBox{max-width: 600px;}

.check_item{margin: 10px;}
</style>
<template>
    <div class="MenuListBox">
        <el-checkbox-group v-model="selectList">
            <div v-for="(menu, index) in MenuList" :key="index">
                <div style="font-size: 14px;">{{menu.MenuType}}:</div>
                <div>
                    <el-checkbox class="check_item" v-for="(m, i) in menu.Menus" :key="i" :label="m.ID">{{m.MenuName + '/' + m.Price + '元'}}</el-checkbox>
                </div>
            </div>
        </el-checkbox-group>
        <div style="line-height: 44px;">
            <span>总额：<span class="color-danger">{{totalPrice}}元</span></span>
            <span v-if="Number(totalPrice) > $store.getters.rules.MaxCost" class="color-warning">提示：您已超过{{$store.getters.rules.MaxCost}}元最大金额</span>
        </div>
        <div style="text-align: center;">
            <el-button size="mini" @click="onsubmit" type="primary">确定</el-button>
        </div>
    </div>
</template>
<script>
import { GetMenuByStoreid } from '@/api/menu'
export default {
    data(){
        return {
            MenuList: '',
            selectList: [],
        }
    },
    props: {
        storeid: {
            type: Number,
            default: function(){
                if(this.$store.getters.rules){
                    return this.$store.getters.rules.ActiveStoreID
                }else return null
            }
        }
    },
    methods: {
        onsubmit(){
            let menus = []
            for(let i of this.MenuList){
                for(let j of i.Menus){
                    if(this.selectList.includes(j.ID)) {
                        menus.push(j)
                    }
                }
            }

            this.$emit('onsubmit', {
                MenuList: this.selectList.join(','),
                Menus: menus,
                TotalPrice: this.totalPrice
            })
        }
    },
    computed: {
        totalPrice(){
            if(!this.MenuList || !this.MenuList.length) return '0.00'

            let sum = 0

            for(let i of this.MenuList){
                for(let j of i.Menus){
                    if(this.selectList.includes(j.ID)) {
                        sum += j.Price
                    }
                }
            }

            return sum.toFixed(2)
        }
    },
    created(){
        if(this.storeid !== undefined && this.storeid !== null){
            GetMenuByStoreid(this.storeid).then(data=>{
                this.MenuList = data.data
            })
        }else{
            this.$store.dispatch('GetRules').then(res => { // 拉取规则
                GetMenuByStoreid(res.data.ActiveStoreID).then(data=>{
                    this.MenuList = data.data
                })
            }).catch((err) => {
                this.$message.warning('菜单获取失败，请刷新重试');
            })
        }
    }
}
</script>
