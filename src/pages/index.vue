<template>
  <div id="index">
    <div>api请求测试：{{ test }}</div>
    <div class="table-wrap">
      <el-table class="table" :data="tableData">
        <el-table-column prop="bookName" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="author" label="作者" width="180">
        </el-table-column>
        <el-table-column prop="totalCount" label="库存" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { test } from "@/api/index";
export default {
  components: {},
  data() {
    return {
      test: "",
      tableData: [
        {
          bookName: "example",
          author: "nobody",
          totalCount: "20"
        },
        {
          bookName: "example",
          author: "nobody",
          totalCount: "20"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted() {
    test().then(res => (this.test = res.data));
  }
};
</script>

<style lang="stylus" scoped>
#index
  .table-wrap
    width 60%
    margin 0 auto
  .el-table__header
    margin 0 auto !important
</style>
