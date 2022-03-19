<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
      <CommonForm :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form"></CommonForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
       <CommonForm :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
         <el-button type="primary" @click="getList">搜索</el-button>
       </CommonForm>
    </div>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  components: {
    CommonForm
  },
  data() {
    return {
      operateType: 'add',
      isShow: false,
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input'
        }
      ],
      operateForm: {
        name: '',
        age: '',
        addr: '',
        birth: '',
        sex: ''
      },
      formLabel: [
        {
          model: "keyword",
          label: '',
          type: 'input'
        }
      ],
      searchForm: {
        keyword: ''
      }
    }
  },
  methods: {
    confirm () {
      if (this.operateType === 'edit') {
        this.$http.post('/user/edit', this.operateForm).then(res => {
          this.isShow = false
          console.log(res)
        }) 
      } else {
          this.$http.post('/user/add', this.operateForm).then(res => {
            this.isShow = false
            console.log(res)
          })
        }
    },
    addUser () {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name: '',
        age: '',
        addr: '',
        birth: '',
        sex: ''
      }
    },
    getList () {

    }
  }
}
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>