<style lang="less" scoped>
// .container{background-color: #2d3a4b; width: 100%; height: 100%; position: fixed;}
.submit__menus{line-height: 30px;}
.menu__item{margin-right: 15px;}
.text-right{text-align: right;}
</style>
<template>
    <el-container style="max-width: 1000px; margin: 0 auto;">
        <el-header>
            <div style="line-height: 60px; text-align: right;">{{$store.getters.name}}</div>
        </el-header>
        <el-main>
            <div class="container">
                <select-menus @onsubmit="onsubmitMenus"></select-menus>
            </div>
        </el-main>
        <!-- 确认订餐弹窗 -->
        <el-dialog title="请确认餐点" :visible.sync="dialogVisible" width="800px">
            <div class="submit__menus">
                <div>
                    <span v-for="(m, i) in menus" class="menu__item" :key="i">{{m.MenuName + '/' + m.Price + '元'}}</span>
                </div>
                <div class="text-right">
                    <span>
                        <span>总额：</span>
                        <span class="color-danger">{{TotalPrice}}元</span>
                    </span>
                </div>
                <div class="text-right" v-if="Number(TotalPrice) > $store.getters.rules.MaxCost">
                    <span class="color-warning">提示：您已超过{{$store.getters.rules.MaxCost}}元最大金额</span>
                </div>
                <div>
                    <el-input type="textarea" :rows="3" placeholder="留言" v-model="Remark" resize="none"></el-input>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogVisible = false">重新选择</el-button>
                <el-button size="mini" type="primary" @click="submitBook">确认订餐</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>
<script>
import selectMenus from '@/components/SelectMenus'
import {SubmitBook} from '@/api/book'
export default {
    components: {selectMenus},
    data(){
        return {
            menus: '',
            dialogVisible: false,
            MenuList: '',
            TotalPrice: '',
            Remark: '',
        }
    },
    methods: {
        onsubmitMenus(menus){
            if(!menus.MenuList){
                this.$message.warning('请选择菜单');
                return
            }
            this.menus = menus.Menus
            this.TotalPrice = menus.TotalPrice
            this.MenuList = menus.MenuList
            this.dialogVisible = true
        },

        submitBook(){
            SubmitBook({
                MenuList: this.MenuList,
                Store_ID: this.$store.getters.rules.ActiveStoreID,
                Remark: this.Remark,
            }).then(data=>{
                this.$message.success('订餐成功');
                this.dialogVisible = false
            })
        }
    }
}
</script>
