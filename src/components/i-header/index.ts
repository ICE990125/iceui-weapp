Component({
  externalClasses: ['i-header-class'],
  relations: {
    '../i-card/index': {
      type: 'parent',
    },
  },
  properties: {
    title: String,
    sub: String,
    center: {
      // 标题是否居中
      type: Boolean,
      value: false,
    },
  },
});
