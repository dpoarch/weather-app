module.exports = {
  extends: [
    "plugin:vue/essential"
  ],
  rules: {
    "vue/no-parsing-error": ["error", {
      "x-invalid-end-tag": false
    }]
  }
}
