const app = getApp();

Page({
  data: {
  },
  onLoad () {
    // this.showToast()
    this.chooseAlipayContact()
  },
  showActionSheet () {
     my.showActionSheet({
      title: '支付宝-ActionSheet',
      items: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],
      badges: [
        { index: 0, type: 'none' },
        { index: 1, type: 'point' },
        { index: 2, type: 'num', text: '99' },
        { index: 3, type: 'text', text: '推荐' },
        { index: 4, type: 'more' }],
      cancelButtonText: '取消好了',
      success: (res) => {
        const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
          my.alert({
          title: `你点了${btn}按钮`
        })
      }
    })
  },
  showToast () {
     my.showToast({
      type: 'success',
      content: '操作成功',
      duration: 3000,
      success: () => {
        my.alert({
          title: 'toast 消失了',
        })
      }
    })
  },
  // 电话联系人
  choosePhoneContact () {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
        content: '姓名：' + res.name + '\n号码：' + res.mobile
      })
      }
    })
  },
  // 支付宝通讯
  chooseAlipayContact () {
    my.chooseAlipayContact({
      count: 2,
      success: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      }
    })
  }
})
