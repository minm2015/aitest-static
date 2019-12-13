<template>
  <a-modal
    title="重命名"
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
          label: "新名称",
          type: "Input",
          placeholder: "名称由汉字或字母组成",
          decorator: [
            "name",
            { rules: [{ required: true, message: "请输入新名称" }] }
          ]
        }
      ]
    };
  },
  methods: {
    initialValue() {
      let model = {
        name: this.model.nodename
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
        this.$emit("reset", 3, false);
      }, 2000);
    },
    // eslint-disable-next-line no-unused-vars
    handleCancel(e) {
      this.isShow = false;
      this.$emit("reset", 3, false);
    }
  }
};
</script>

<style>
</style>