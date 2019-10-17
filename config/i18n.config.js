/**
 * @file I18n config / Commonjs module
 *
 */

module.exports = {
  default: 'zh',
  languages: [
    {
      code: 'zh',
      iso: 'zh-CN',
      name: '简体中文'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    }
  ],
  data: {
    nav: {
      home: {
        zh: '首页',
        en: 'Home'
      },
      code: {
        zh: '代码相关',
        en: 'Code'
      },
      think: {
        zh: '所思所想',
        en: 'Think'
      },
      map: {
        zh: '归档',
        en: 'Archive'
      },
      about: {
        zh: '关于我',
        en: 'About'
      },
      guestbook: {
        zh: '留言墙',
        en: 'Comment'
      }
    },
    text: {
      text: {
        empty: {
          zh: '空空如也',
          en: 'No Result Data.'
        },
        guestbook: {
          zh: '此心光明 亦复何言',
          en: 'You have come a long way'
        },
        service: {
          slogan: {
            zh: '有匪君子，如切如磋，如琢如磨',
            en: 'Talk is cheap. Show me the code'
          },
          emailMe: {
            zh: '邮件反馈',
            en: 'Email ME'
          }
        },
        device: {
          android: {
            zh: '安卓（重构中）',
            en: 'Android (X)'
          },
          ios: {
            zh: '苹果（重构中）',
            en: 'IOS (X)'
          }
        },
        webrtc: {
          zh: '视频会议',
          en: ' WebRTC'
        },
        barrage: {
          name: {
            zh: '弹幕吐槽',
            en: 'Barrage'
          }
        },
        feedback: {
          zh: '邮件反馈',
          en: 'Feedback'
        },
        totop: {
          zh: '到顶部',
          en: 'To top'
        },
        tobottom: {
          zh: '到底部',
          en: 'Next screen'
        },
        origin: {
          original: {
            zh: '原创',
            en: 'og'
          },
          reprint: {
            zh: '转载',
            en: 'rp'
          },
          hybrid: {
            zh: ' 混撰',
            en: 'hb'
          }
        },
        action: {
          open: {
            zh: '展开描述',
            en: 'open description'
          },
          close: {
            zh: '收起描述',
            en: 'close description'
          },
          on: {
            zh: '开',
            en: 'on'
          },
          off: {
            zh: '关',
            en: 'off'
          }
        },
        slogan: {
          zh: '有匪君子，如切如磋，如琢如磨',
          en: 'Talk is cheap. Show me the code.'
        },
        music: {
          empty: {
            zh: '唯音乐是灵魂最好的解药',
            en: 'Music is the eye of ear.'
          }
        },
        category: {
          name: {
            zh: '分门别类',
            en: 'Categories'
          },
          empty: {
            zh: '未分类',
            en: 'no cate'
          }
        },
        search: {
          zh: '搜索',
          en: 'Search...'
        },
        tag: {
          name: {
            zh: '标签',
            en: 'Tags'
          },
          empty: {
            zh: '无标签',
            en: 'No tags.'
          }
        },
        article: {
          fullcolread: {
            zh: '通栏阅读',
            en: 'Full Column'
          },
          fullscreenread: {
            zh: '全屏阅读',
            en: 'Full Screen'
          },
          readAll: {
            zh: '阅读余下全文',
            en: 'Read all'
          },
          rendering: {
            zh: '努力渲染中...',
            en: 'rendering...'
          },
          name: {
            zh: '文章',
            en: 'Articles'
          },
          empty: {
            zh: '空空如也',
            en: 'No Result Article.'
          },
          hotlist: {
            zh: '热度排行',
            en: 'hot'
          },
          loadmore: {
            zh: '加载更多',
            en: 'loadmore'
          },
          loading: {
            zh: '加载中',
            en: 'loading'
          },
          nomore: {
            zh: '没有更多了',
            en: 'no more'
          }
        },
        page: {
          name: {
            zh: '页码',
            en: 'pages'
          }
        },
        announcement: {
          empty: {
            zh: '空空如也',
            en: 'No announcements.'
          }
        },
        comment: {
          empty: {
            zh: '期待你的捷足先登',
            en: 'Go right to the heart of the matter.'
          },
          anonymous: {
            zh: '匿名用户',
            en: 'anonymous'
          },
          ding: {
            zh: '顶',
            en: 'like'
          },
          reply: {
            zh: '回复',
            en: 'reply'
          },
          pagenation: {
            new: {
              zh: '更新',
              en: 'new'
            },
            old: {
              zh: '更旧',
              en: 'old'
            }
          },
          profile: {
            name: {
              zh: '名字',
              en: 'name'
            },
            email: {
              zh: '邮箱',
              en: 'email'
            },
            site: {
              zh: '网址',
              en: 'site'
            },
            content: {
              zh: '内容',
              en: 'content'
            },
            emailerr: {
              zh: '邮箱不合法',
              en: 'Email address is not legitimate!'
            },
            siteerr: {
              zh: '网址不合法',
              en: 'Site is not legitimate!'
            },
            contenterr: {
              zh: '内容需要在 2000字/36行 以内',
              en: 'Content requirements are within 2000 words / 36 lines!'
            },
            submiterr: {
              zh: '发布失败，原因 -> 控制台',
              en: 'Submit err, get err in dev console!'
            },
            actionerr: {
              zh: '操作失败，原因 -> 控制台',
              en: 'Action err, get err in dev console!'
            }
          },
          setting: {
            account: {
              zh: '设置账户信息',
              en: 'account setting'
            },
            edit: {
              zh: '编辑信息',
              en: 'edit profile'
            },
            clear: {
              zh: '清空信息',
              en: 'clear profile'
            }
          },
          placeholder: {
            zh: '愿你的见解一针见血',
            en: 'Go right to the heart of the matter.'
          },
          count: {
            zh: '条看法',
            en: 'comments'
          },
          like: {
            zh: '人觉得有点牛逼',
            en: ' likes'
          },
          new: {
            zh: '最新',
            en: 'new'
          },
          hot: {
            zh: '最热',
            en: 'hot'
          },
          submit: {
            zh: '发射',
            en: 'submit'
          },
          submiting: {
            zh: '发射中...',
            en: 'submitinng'
          }
        }
      },
      slogan: {
        zh: '有匪君子，如切如磋，如琢如磨',
        en: 'Talk is cheap. Show me the code'
      }
    }
  }
}
