<template>
  <a-modal
    title="新建脚本"
    :visible="isShow"
    :confirmLoading="loading"
    @ok="handleOk"
    @cancel="handleCancel"
    okText="确定"
    :okButtonProps="buttonProps"
    cancelText="取消"
    :cancelButtonProps="buttonProps"
    wrapClassName="bl-dialog-dark-form"
  >
    <a-form :form="form">
      <a-form-item
        v-for="(item, index) in layout"
        :key="index"
        :label="item.label"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 16 }"
      >
        <template v-if="item.type=='Input'">
          <a-input
            autocomplete="off"
            size="small"
            :placeholder="item.placeholder"
            v-decorator="item.decorator"
          />
        </template>
        <template v-else-if="item.type=='Select'">
          <a-select
            size="small"
            :placeholder="item.placeholder"
            v-decorator="item.decorator"
            dropdownClassName="bl-dialog-dark-form-select-dropdown"
          >
            <a-select-option
              v-for="option in item.options"
              :key="option.key"
              :value="option.val"
            >{{ option.key }}</a-select-option>
          </a-select>
        </template>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  mounted() {
    console.log("initial...");
    this.initialValue();
  },
  props: {
    visible: Boolean,
    model: Object
  },
  components: {},
  watch: {
    visible(val) {
      if (val) {
        this.isShow = val;
      }
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isShow: this.visible,
      loading: false,
      buttonProps: {
        props: {
          size: "small"
        }
      },
      layout: [
        {
          label: "脚本名称",
          type: "Input",
          placeholder: "名称只能由字母组成",
          decorator: [
            "name",
            { rules: [{ required: true, message: "请输入脚本名称" }] }
          ]
        },
        {
          label: "脚本类型",
          type: "Select",
          placeholder: "选择脚本类型",
          decorator: [
            "type",
            { rules: [{ required: true, message: "选择脚本类型!" }] }
          ],
          options: [{ key: "Python", val: 0 }, { key: "Shell", val: 1 }]
        }
      ]
    };
  },
  methods: {
    initialValue() {
      let model = {
        name: "",
        type: 0
      };
      setTimeout(() => {
        this.form.setFieldsValue(model);
      }, 100);
    },
    // eslint-disable-next-line no-unused-vars
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.isShow = false;
        this.loading = false;
        this.$emit("reset");
      }, 2000);
    },
    // eslint-disable-next-line no-unused-vars
    handleCancel(e) {
      this.isShow = false;
      this.$emit("reset");
    }
  }
};
</script>

<style>
</style>