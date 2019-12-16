<template>
  <a-modal
    title="新建组件"
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
            :maxlength="item.maxlength"
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
          label: "组件名称",
          type: "Input",
          placeholder: "名称由汉字或字母组成, 不超过24个字符",
          maxlength: 24,
          decorator: [
            "name",
            { rules: [{ required: true, message: "请输入组件名称" }] }
          ]
        },
        {
          label: "组件类型",
          type: "Select",
          placeholder: "选择组件类型",
          decorator: [
            "type",
            { rules: [{ required: true, message: "选择组件类型!" }] }
          ],
          options: [{ key: "HttpRunner", val: 1 }]
        }
      ]
    };
  },
  methods: {
    initialValue() {
      let model = {
        name: null,
        type: 1
      };
      setTimeout(() => {
        this.form.setFieldsValue(model);
      }, 100);
    },
    // eslint-disable-next-line no-unused-vars
    handleOk(e) {
      this.form.validateFields((errors, values) => {
        console.log(errors);
        console.log(values);
        if (errors == null) {
          this.loading = true;
          setTimeout(() => {
            this.isShow = false;
            this.loading = false;
            this.$emit("reset");
          }, 2000);
        }
      });
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