var data = {
  "count": 20,
  "start": 10,
  "total": 315,
  "books": [
    {
      "rating": {
        "max": 10,
        "numRaters": 379,
        "average": "8.1",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "蒋鑫"
      ],
      "pubdate": "2011-6-27",
      "tags": [
        {
          "count": 408,
          "name": "git",
          "title": "git"
        },
        {
          "count": 366,
          "name": "版本控制",
          "title": "版本控制"
        },
        {
          "count": 145,
          "name": "Git",
          "title": "Git"
        },
        {
          "count": 104,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 82,
          "name": "软件开发",
          "title": "软件开发"
        },
        {
          "count": 77,
          "name": "软件工程",
          "title": "软件工程"
        },
        {
          "count": 64,
          "name": "编程",
          "title": "编程"
        },
        {
          "count": 46,
          "name": "Git官方推荐",
          "title": "Git官方推荐"
        }
      ],
      "origin_title": "",
      "image": "https://img3.doubanio.com\/mpic\/s6523000.jpg",
      "binding": "平装",
      "translator": [
        
      ],
      "catalog": "前　言\n第1篇　初识Git\n第1章　版本控制的前世和今生\/ 2\n1.1　黑暗的史前时代\/ 2\n1.2　CVS—开启版本控制大爆发\/ 5\n1.3　SVN—集中式版本控制集大成者\/ 7\n1.4　Git—Linus 的第二个伟大作品\/ 9\n第2章　爱上 Git 的理由\/ 11\n2.1　每日工作备份\/ 11\n2.2　异地协同工作\/ 12\n2.3　现场版本控制\/ 13\n2.4　避免引入辅助目录\/ 15\n2.5　重写提交说明\/ 15\n2.6　想吃后悔药\/ 16\n2.7　更好用的提交列表\/ 17\n2.8　更好的差异比较\/ 18\n2.9　工作进度保存\/ 18\n2.10　代理SVN提交实现移动式办公\/ 19\n2.11　无处不在的分页器\/ 20\n2.12　快\/ 21\n第3章　Git的安装和使用\/ 22\n3.1　在Linux 下安装和使用 Git\/ 22\n3.1.1　包管理器方式安装\/ 22\n3.1.2　从源代码进行安装\/ 23\n3.1.3　从Git版本库进行安装\/ 23\n3.1.4　命令补齐\/ 25\n3.1.5　中文支持\/ 25\n3.2　在Mac OS X 下安装和使用 Git\/ 26\n3.2.1　以二进制发布包的方式安装\/ 26\n3.2.2　安装 Xcode\/ 27\n3.2.3　使用 Homebrew 安装 Git\/ 29\n3.2.4　从Git源码进行安装\/ 29\n3.2.5　命令补齐\/ 30\n3.2.6　其他辅助工具的安装\/ 30\n3.2.7　中文支持\/ 31\n3.3　在Windows 下安装和使用 Git（Cygwin篇）\/ 31\n3.3.1　安装 Cygwin\/ 32\n3.3.2　安装 Git\/ 36\n3.3.3　Cygwin 的配置和使用\/ 37\n3.3.4　Cygwin 下 Git 的中文支持\/ 40\n3.3.5　Cygwin 下 Git 访问 SSH 服务\/ 41\n3.4　Windows 下安装和使用 Git（msysGit篇）\/ 45\n3.4.1　安装 msysGit\/ 46\n3.4.2　msysGit 的配置和使用\/ 48\n3.4.3　msysGit中shell环境的中文支持\/ 49\n3.4.4　msysGit中Git的中文支持\/ 50\n3.4.5　使用 SSH 协议\/ 51\n3.4.6　TortoiseGit 的安装和使用\/ 52\n3.4.7　TortoiseGit 的中文支持\/ 55\n第2篇　Git独奏\n第4章　Git 初始化\/ 58\n4.1　创建版本库及第一次提交\/ 58\n4.2　思考：为什么工作区根目录下有一个 .git 目录\/ 60\n4.3　思考：git config 命令的各参数有何区别\/ 63\n4.4　思考：是谁完成的提交\/ 65\n4.5　思考：随意设置提交者姓名，是否太不安全\/ 67\n4.6　思考：命令别名是干什么的\/ 68\n4.7　备份本章的工作成果\/ 69\n第5章　Git 暂存区\/ 70\n5.1　修改不能直接提交吗\/ 70\n5.2　理解 Git 暂存区（stage）\/ 76\n5.3　Git Diff 魔法\/ 78\n5.4　不要使用 git commit -a\/ 81\n5.5　搁置问题，暂存状态\/ 82\n第6章　Git对象\/ 83\n6.1　Git对象库探秘\/ 83\n6.2　思考：SHA1 哈希值到底是什么，是如何生成的\/ 88\n6.3　思考：为什么不用顺序的数字来表示提交\/ 90\n第7章　Git 重置\/ 93\n7.1　分支游标master探秘\/ 93\n7.2　用 reflog 挽救错误的重置\/ 95\n7.3　深入了解git reset命令\/ 96\n第8章　Git 检出\/ 99\n8.1　HEAD 的重置即检出\/ 99\n8.2　挽救分离头指针\/ 102\n8.3　深入了解 git checkout 命令\/ 103\n第9章　恢复进度\/ 105\n9.1　继续暂存区未完成的实践\/ 105\n9.2　使用 git stash\/ 108\n9.3　探秘 git stash\/ 109\n第10章　Git 基本操作\/ 114\n10.1　先来合个影\/ 114\n10.2　删除文件\/ 114\n10.2.1　本地删除不是真的删除\/ 115\n10.2.2　执行 git rm 命令删除文件\/ 116\n10.2.3　命令git add -u快速标记删除\/ 117\n10.3　恢复删除的文件\/ 118\n10.4　移动文件\/ 119\n10.5　一个显示版本号的 Hello World\/ 120\n10.6　使用 git add -i 选择性添加\/ 122\n10.7　Hello World 引发的新问题\/ 124\n10.8　文件忽略\/ 125\n10.9　文件归档\/ 129\n第11章　历史穿梭\/ 130\n11.1　图形工具：gitk\/ 130\n11.2　图形工具：gitg\/ 131\n11.3　图形工具：qgit\/ 135\n11.4　命令行工具\/ 140\n11.4.1　版本表示法：git rev-parse\/ 141\n11.4.2　版本范围表示法：git rev-list\/ 144\n11.4.3　浏览日志：git log\/ 146\n11.4.4　差异比较：git diff\/ 150\n11.4.5　文件追溯：git blame\/ 151\n11.4.6　二分查找：git bisect\/ 152\n11.4.7　获取历史版本\/ 156\n第12章　改变历史\/ 157\n12.1　悔棋\/ 157\n12.2　多步悔棋\/ 159\n12.3　回到未来\/ 161\n12.3.1　时间旅行一\/ 162\n12.3.2　时间旅行二\/ 167\n12.3.3　时间旅行三\/ 171\n12.4　丢弃历史\/ 174\n12.5　反转提交\/ 177\n第13章　Git 克隆\/ 179\n13.1　鸡蛋不装在一个篮子里\/ 179\n13.2　对等工作区\/ 180\n13.3　克隆生成裸版本库\/ 183\n13.4　创建生成裸版本库\/ 184\n第14章　Git库管理\/ 187\n14.1　对象和引用哪里去了\/ 187\n14.2　暂存区操作引入的临时对象\/ 189\n14.3　重置操作引入的对象\/ 191\n14.4　Git管家：git-gc\/ 193\n14.5　Git管家的自动执行\/ 196\n第3篇　Git和声\n第15章　Git协议与工作协同\/ 200\n15.1　Git 支持的协议\/ 200\n15.2　多用户协同的本地模拟\/ 202\n15.3　强制非快进式推送\/ 203\n15.4　合并后推送\/ 207\n15.5　禁止非快进式推送\/ 208\n第16章　冲突解决\/ 210\n16.1　拉回操作中的合并\/ 210\n16.2　合并一：自动合并\/ 212\n16.2.1　修改不同的文件\/ 212\n16.2.2　修改相同文件的不同区域\/ 214\n16.2.3　同时更改文件名和文件内容\/ 215\n16.3　合并二：逻辑冲突\/ 217\n16.4　合并三：冲突解决\/ 218\n16.4.1　手工编辑完成冲突解决\/ 221\n16.4.2　图形工具完成冲突解决\/ 221\n16.5　合并四：树冲突\/ 225\n16.5.1　手工操作解决树冲突\/ 227\n16.5.2　交互式解决树冲突\/ 228\n16.6　合并策略\/ 230\n16.7　合并相关的设置\/ 231\n第17章　Git 里程碑\/ 233\n17.1　显示里程碑\/ 234\n17.2　创建里程碑\/ 236\n17.2.1　轻量级里程碑\/ 237\n17.2.2　带说明的里程碑\/ 238\n17.2.3　带签名的里程碑\/ 239\n17.3　删除里程碑\/ 242\n17.4　不要随意更改里程碑\/ 243\n17.5　共享里程碑\/ 243\n17.6　删除远程版本库的里程碑\/ 246\n17.7　里程碑命名规范\/ 247\n第18章　Git 分支\/ 253\n18.1　代码管理之殇\/ 253\n18.1.1　发布分支\/ 253\n18.1.2　特性分支\/ 256\n18.1.3　卖主分支\/ 257\n18.2　分支命令概述\/ 258\n18.3　“Hello World”开发计划\/ 259\n18.4　基于特性分支的开发\/ 260\n18.4.1　创建分支 user1\/getopt\/ 261\n18.4.2　创建分支 user2\/i18n\/ 262\n18.4.3　开发者 user1 完成功能开发\/ 263\n18.4.4　将 user1\/getopt 分支合并到主线\/ 264\n18.5　基于发布分支的开发\/ 265\n18.5.1　创建发布分支\/ 266\n18.5.2　开发者 user1 工作在发布分支\/ 267\n18.5.3　开发者 user2 工作在发布分支\/ 268\n18.5.4　开发者 user2 合并推送\/ 270\n18.5.5　发布分支的提交合并到主线\/ 271\n18.6　分支变基\/ 275\n18.6.1　完成 user2\/i18n 特性分支的开发\/ 275\n18.6.2　分支 user2\/i18n 变基\/ 277\n第19章　 远程版本库\/ 284\n19.1　远程分支\/ 284\n19.2　分支追踪\/ 287\n19.3　远程版本库\/ 290\n19.4　PUSH 和 PULL 操作与远程版本库\/ 292\n19.5　里程碑和远程版本库\/ 294\n19.6　分支和里程碑的安全性\/ 294\n第20章　补丁文件交互\/ 296\n20.1　创建补丁\/ 296\n20.2　应用补丁\/ 297\n20.3　StGit 和 Quilt\/ 300\n20.3.1　StGit\/ 300\n20.3.2　Quilt\/ 304\n第4篇　Git协同模型\n第21章　经典Git协同模型\/ 308\n21.1　集中式协同模型\/ 308\n21.1.1　传统集中式协同模型\/ 309\n21.1.2　Gerrit 特殊的集中式协同模型\/ 310\n21.2　金字塔式协同模型\/ 311\n21.2.1　贡献者开放只读版本库\/ 312\n21.2.2　以补丁方式贡献代码\/ 313\n第22章　Topgit 协同模型\/ 314\n22.1　作者版本控制系统的三个里程碑\/ 314\n22.2　Topgit 原理\/ 316\n22.3　Topgit 的安装\/ 317\n22.4　Topgit 的使用\/ 319\n22.5　用Topgit方式改造Topgit\/ 330\n22.6　Topgit 使用中的注意事项\/ 334\n第23章　子模组协同模型\/ 336\n23.1　创建子模组\/ 336\n23.2　克隆带子模组的版本库\/ 339\n23.3　在子模组中修改和子模组的更新\/ 340\n23.4　隐性子模组\/ 343\n23.5　子模组的管理问题\/ 345\n第24章　子树合并\/ 347\n24.1　引入外部版本库\/ 347\n24.2　子目录方式合并外部版本库\/ 349\n24.3　利用子树合并跟踪上游改动\/ 351\n24.4　子树拆分\/ 353\n24.5　git-subtree 插件\/ 353\n第25章　Android 式多版本库协同\/ 356\n25.1　关于 repo\/ 357\n25.2　安装 repo\/ 357\n25.3　repo和清单库的初始化\/ 359\n25.4　清单库和清单文件\/ 360\n25.5　同步项目\/ 361\n25.6　建立 Android 代码库本地镜像\/ 363\n25.7　repo 的命令集\/ 365\n25.8　repo 命令的工作流\/ 370\n25.9　好东西不能 Android 独享\/ 371\n25.9.1　repo+Gerrit 模式\/ 371\n25.9.2　repo 无审核模式\/ 371\n25.9.3　改进的 repo 无审核模式\/ 372\n第26章　Git 和 SVN 协同模型\/ 378\n26.1　使用 git-svn 的一般流程\/ 380\n26.2　git-svn 的奥秘\/ 386\n26.2.1　Git 库配置文件的扩展及分支映射\/ 387\n26.2.2　Git工作分支和 Subversion 如何对应\/ 388\n26.2.3　其他辅助文件\/ 390\n26.3　多样的 git-svn 克隆模式\/ 390\n26.4　共享 git-svn 的克隆库\/ 393\n26.5　git-svn 的局限\/ 394\n第5篇　搭建Git服务器\n第27章　使用 HTTP 协议\/ 398\n27.1　哑传输协议\/ 398\n27.2　智能 HTTP 协议\/ 400\n27.3　Gitweb 服务器\/ 401\n27.3.1　Gitweb的安装\/ 402\n27.3.2　Gitweb的配置\/ 403\n27.3.3　版本库的 Gitweb 相关设置\/ 404\n27.3.4　即时Gitweb服务\/ 405\n第28章　使用 Git 协议\/ 406\n28.1　Git 协议语法格式\/ 406\n28.2　Git 服务软件\/ 406\n28.3　以 inetd 方式配置运行\/ 406\n28.4　以 runit 方式配置运行\/ 407\n第29章　使用 SSH 协议\/ 409\n29.1　SSH 协议语法格式\/ 409\n29.2　服务架设方式比较\/ 409\n29.3　关于 SSH 公钥认证\/ 411\n29.4　关于 SSH 主机别名\/ 411\n第30章　Gitolite 服务架设\/ 413\n30.1　安装Gitolite\/ 414\n30.1.1　服务器端创建专用账号\/ 414\n30.1.2　Gitolite 的安装\/升级\/ 415\n30.1.3　关于 SSH 主机别名\/ 417\n30.1.4　其他的安装方法\/ 418\n30.2　管理 Gitolite\/ 419\n30.2.1　管理员克隆 gitolite-admin 管理库\/ 419\n30.2.2　增加新用户\/ 420\n30.2.3　更改授权\/ 422\n30.3　Gitolite 授权详解\/ 423\n30.3.1　授权文件的基本语法\/ 423\n30.3.2　定义用户组和版本库组\/ 424\n30.3.3　版本库ACL\/ 424\n30.3.4　Gitolite 授权机制\/ 426\n30.4　版本库授权案例\/ 427\n30.4.1　对整个版本库进行授权\/ 427\n30.4.2　通配符版本库的授权\/ 428\n30.4.3　用户自己的版本库空间\/ 429\n30.4.4　对引用的授权：传统模式\/ 430\n30.4.5　对引用的授权：扩展模式\/ 430\n30.4.6　对引用的授权：禁用规则的使用\/ 431\n30.4.7　用户分支\/ 431\n30.4.8　对路径的写授权\/ 432\n30.5　创建新版本库\/ 432\n30.5.1　在配置文件中出现的版本库，即时生成\/ 433\n30.5.2　通配符版本库，管理员通过推送创建\/ 434\n30.5.3　直接在服务器端创建\/ 435\n30.6　对 Gitolite 的改进\/ 435\n30.7　Gitolite 功能拓展\/ 436\n30.7.1　版本库镜像\/ 436\n30.7.2　Gitweb 和 Git daemon 支持\/ 438\n30.7.3　其他功能拓展和参考\/ 439\n第31章　Gitosis 服务架设\/ 441\n31.1　安装 Gitosis\/ 442\n31.1.1　Gitosis 的安装\/ 442\n31.1.2　服务器端创建专用账号\/ 442\n31.1.3　Gitosis 服务初始化\/ 443\n31.2　管理 Gitosis\/ 443\n31.2.1　管理员克隆 gitolit-admin 管理库\/ 443\n31.2.2　增加新用户\/ 444\n31.2.3　更改授权\/ 446\n31.3　Gitosis 授权详解\/ 447\n31.3.1　Gitosis 默认设置\/ 447\n31.3.2　管理版本库 gitosis-admin\/ 447\n31.3.3　定义用户组和授权\/ 448\n31.3.4　Gitweb 整合\/ 449\n31.4　创建新版本库\/ 449\n31.5　轻量级管理的 Git 服务\/ 450\n第32章　Gerrit 代码审核服务器\/ 452\n32.1　Gerrit 的实现原理\/ 452\n32.2　架设 Gerrit 的服务器\/ 456\n32.3　Gerrit 的配置文件\/ 461\n32.4　Gerrit 的数据库访问\/ 462\n32.5　立即注册为 Gerrit 管理员\/ 464\n32.6　管理员访问 SSH 的管理接口\/ 467\n32.7　创建新项目\/ 468\n32.8　从已有的 Git 库创建项目\/ 472\n32.9　定义评审工作流\/ 473\n32.10　Gerrit 评审工作流实战\/ 477\n32.10.1　开发者在本地版本库中工作\/ 477\n32.10.2　开发者向审核服务器提交\/ 478\n32.10.3　审核评审任务\/ 478\n32.10.4　评审任务没有通过测试\/ 480\n32.10.5　重新提交新的补丁集\/ 482\n32.10.6　新修订集通过评审\/ 483\n32.10.7　从远程版本库更新\/ 485\n32.11　更多 Gerrit 参考\/ 486\n第33章　Git 版本库托管\/ 487\n33.1　Github\/ 487\n33.2　Gitorious\/ 489\n第6篇　迁移到Git\n第34章　CVS版本库到Git的迁移\/ 492\n34.1　安装cvs2svn（含 cvs2git）\/ 492\n34.1.1　Linux下cvs2svn的安装\/ 492\n34.1.2　Mac OS X 下 cvs2svn 的安装\/ 493\n34.2　版本库转换的准备工作\/ 494\n34.2.1　版本库转换注意事项\/ 494\n34.2.2　文件名乱码问题\/ 494\n34.2.3　提交说明乱码问题\/ 494\n34.3　版本库转换\/ 496\n34.3.1　配置文件解说\/ 496\n34.3.2　运行cvs2git完成转换\/ 500\n34.4　迁移后的版本库检查\/ 501\n第35章　更多版本控制系统的迁移\/ 502\n35.1　SVN版本库到Git的迁移\/ 502\n35.2　Hg 版本库到Git的迁移\/ 503\n35.3　通用版本库迁移\/ 505\n35.4　Git 版本库整理\/ 511\n35.4.1　环境变量过滤器\/ 513\n35.4.2　树过滤器\/ 513\n35.4.3　暂存区过滤器\/ 513\n35.4.4　父节点过滤器\/ 514\n35.4.5　提交说明过滤器\/ 514\n35.4.6　提交过滤器\/ 515\n35.4.7　里程碑名字过滤器\/ 516\n35.4.8　子目录过滤器\/ 516\n第7篇　Git的其他应用\n第36章　etckeeper\/ 518\n36.1　安装 etckeeper\/ 518\n36.2　配置 etckeeper\/ 519\n36.3　使用 etckeeper\/ 519\n第37章　Gistore\/ 520\n37.1　Gistore 的安装\/ 520\n37.1.1　软件依赖\/ 520\n37.1.2　从源码安装 Gistore\/ 521\n37.1.3　用 easy_install 安装\/ 521\n37.2　Gistore 的使用\/ 522\n37.2.1　创建并初始化备份库\/ 522\n37.2.2　Gistore 的配置文件\/ 523\n37.2.3　Gistore 的备份项管理\/ 524\n37.2.4　执行备份任务\/ 525\n37.2.5　查看备份日志\/ 525\n37.2.6　查看及恢复备份数据\/ 527\n37.2.7　备份回滚及设置\/ 528\n37.2.8　注册备份任务别名\/ 529\n37.2.9　自动备份：crontab\/ 529\n37.3　Gistore 双机备份\/ 529\n第38章　补丁中的二进制文件\/ 531\n38.1　Git 版本库中二进制文件变更的支持\/ 531\n38.2　对非 Git 版本库中二进制文件变更的支持\/ 535\n38.3　其他工具对 Git 扩展补丁文件的支持\/ 536\n第39章　云存储\/ 538\n39.1　现有云存储的问题\/ 538\n39.2　Git 式云存储畅想\/ 539\n第8篇　Git杂谈\n第40章　跨平台操作 Git\/ 542\n40.1　字符集问题\/ 542\n40.2　文件名大小写问题\/ 543\n40.3　换行符问题\/ 545\n第41章　Git 的其他特性\/ 549\n41.1　属性\/ 549\n41.1.1　属性定义\/ 549\n41.1.2　属性文件及优先级\/ 550\n41.1.3　常用属性介绍\/ 552\n41.2　钩子和模板\/ 557\n41.2.1　Git 钩子\/ 557\n41.2.2　Git 模板\/ 562\n41.3　稀疏检出和浅克隆\/ 563\n41.3.1　稀疏检出\/ 563\n41.3.2　浅克隆\/ 566\n41.4　嫁接和替换\/ 568\n41.4.1　提交嫁接\/ 568\n41.4.2　提交替换\/ 568\n41.5　Git 评注\/ 570\n41.5.1　评注的奥秘\/ 570\n41.5.2　评注相关命令\/ 573\n41.5.3　评注相关配置\/ 574\n第9篇　附录\n附录A　 Git 命令索引\/ 576\nA.1　常用的Git命令\/ 576\nA.2　对象库操作相关命令\/ 578\nA.3　引用操作相关命令\/ 578\nA.4　版本库管理相关命令\/ 579\nA.5　数据传输相关命令\/ 579\nA.6　邮件相关命令\/ 580\nA.7　协议相关命令\/ 580\nA.8　版本库转换和交互相关命令\/ 581\nA.9　合并相关的辅助命令\/ 581\nA.10　杂项\/ 582\n附录B　Git 与 CVS 面对面\/ 583\nB.1　面对面访谈录\/ 583\nB.2　Git  和CVS 命令对照\/ 585\n附录C　Git 与 SVN 面对面\/ 587\nC.1　面对面访谈录\/ 587\nC.2　 Git 和SVN 命令对照\/ 589\n附录D　Git 与 Hg 面对面\/ 592\nD.1　面对面访谈录\/ 592\nD.2　Git和Hg  命令对照\/ 593",
      "ebook_url": "https:\/\/read.douban.com\/ebook\/15160682\/",
      "pages": "595",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s6523000.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s6523000.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s6523000.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/6526452\/",
      "id": "6526452",
      "publisher": "机械工业出版社华章公司",
      "isbn10": "7111349679",
      "isbn13": "9787111349679",
      "title": "Git权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/6526452",
      "alt_title": "",
      "author_intro": "蒋鑫，国内顶尖的版本控制专家和咨询顾问之一，对Subversion和Git等版本控制工具有十分深入的研究，参与了Git以及Gitosis、Gitolite、Repo、Topgit、Gistore等与Git相关的开源软件的开发或创建，在大量实践中积累了丰富的经验。此外，他还是一位开源软件实践者，作为北京群英汇信息技术有限公司的创始人兼高级顾问，一直从事开源软件的定制以及面向研发团队的项目管理软件的推广和顾问咨询工作，致力于推动开源软件在中国的发展。\n本书官网：http:\/\/www.ossxp.com\/doc\/gotgit\/\n作者博客：http:\/\/blog.ossxp.com\/\n作者微博：http:\/\/weibo.com\/gotgit\/\n本书微群：http:\/\/q.weibo.com\/567527\n本书豆瓣小组：http:\/\/www.douban.com\/group\/gotgit\/",
      "summary": "《Git权威指南》是Git领域的集大成之作，是一本关于Git的百科全书，在广度、深度和实战性上让同类作品望尘莫及。作者是国内顶尖的版本控制专家和咨询顾问之一，本书得到了Git官方维护者Junio C Hamano和ITeye创始人范凯（Robbin）先生等数位专家的高度认可和极力推荐，权威性毋庸置疑。\n全书一共9篇，共41章和4个附录，内容几乎涵盖了Git的所有方面。第1篇介绍了版本控制工具的演变历史、Git的各种优点，以及它在3种主流操作系统中的安装与配置。第2篇和第3篇既是本书的基础，又是本书的核心，不仅介绍了Git的操作和使用，而且还讲解了Git的原理。第2篇详细讲解了个人用户如何使用Git，包括Git初始化、日常操作、暂存区、对象、重置、检出、恢复进度、历史变更、克隆、库管理等；第3篇详细讲解了Git协议和团队如何使用Git，包括Git支持的协议、冲突解决、里程碑、分支、远程版本库和补丁文件交互等。第4篇全面介绍了Git的协同模型，即它在实际工作中的使用模式，包括各种经典的Git协同模型、Topgit协同模型、子模组协同模型、子树合并、Android多版本库协同、Git与SVN协同模型等。第5篇介绍了Git服务器的架设，首先讲解了HTTP协议、Git协议、SSH协议的使用，然后讲解了Gitolite、Gitosis、Gerrit等服务器的架设方法，最后还讲解了Git版本库的托管。第6篇介绍了版本库的迁移，包括如何从CVS、SVN、Hg等版本库迁移到Git，以及Git版本库整理等方面的内容。第7篇讲解了Git的其他应用，包括etckeeper、Gistore等的安装、配置和使用，以及补丁中的二进制文件和云存储等内容。第8篇介绍了Git的跨平台操作，以及它的钩子和模板、稀疏检出和浅克隆、嫁接和替换等重要特性。第9篇是附录，详细给出了Git的命令索引，以及CVS、SVN和Hg与Git的比较与命令对照，方便读者查阅。",
      "ebook_price": "25.00",
      "series": {
        "id": "19972",
        "title": "实战系列"
      },
      "price": "89.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 261,
        "average": "8.3",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "[美] Eric A. Meyer"
      ],
      "pubdate": "2001-5",
      "tags": [
        {
          "count": 275,
          "name": "CSS",
          "title": "CSS"
        },
        {
          "count": 79,
          "name": "WEB标准",
          "title": "WEB标准"
        },
        {
          "count": 73,
          "name": "网页设计",
          "title": "网页设计"
        },
        {
          "count": 61,
          "name": "O'Reilly",
          "title": "O'Reilly"
        },
        {
          "count": 50,
          "name": "WEB",
          "title": "WEB"
        },
        {
          "count": 34,
          "name": "设计",
          "title": "设计"
        },
        {
          "count": 33,
          "name": "W3C",
          "title": "W3C"
        },
        {
          "count": 26,
          "name": "计算机",
          "title": "计算机"
        }
      ],
      "origin_title": "",
      "image": "https://img3.doubanio.com\/mpic\/s2501176.jpg",
      "binding": "平装",
      "translator": [
        "许勇",
        "齐宁"
      ],
      "catalog": "\n      ",
      "pages": "474",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s2501176.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s2501176.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s2501176.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/1240134\/",
      "id": "1240134",
      "publisher": "中国电力出版社",
      "isbn10": "7508305604",
      "isbn13": "9787508305608",
      "title": "CSS权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/1240134",
      "alt_title": "Cascading Style Sheets：The Definitive Guide",
      "author_intro": "",
      "summary": "这本书提供了对CSSl和CSS定位的完整的描述，同时也给出了CSS2的概述。书中对CSS的每个属性都做了详细的探究，同时讨论了各个属性之间如何协调、以及怎样避免一些常见错误。\n这本书的特点在于，它是第一本将CSS与当前浏览器支持结合起来描述的读物，而不仅仅是讲述CSS理论上应该如何工作，因此它为Web创作者和编辑人员高效使用CSS提供了全面的指南。",
      "price": "55.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 219,
        "average": "8.1",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Chuck Musciano",
        "Bill Kennedy"
      ],
      "pubdate": "2004-6-1",
      "tags": [
        {
          "count": 179,
          "name": "XHTML",
          "title": "XHTML"
        },
        {
          "count": 174,
          "name": "html",
          "title": "html"
        },
        {
          "count": 80,
          "name": "网页设计",
          "title": "网页设计"
        },
        {
          "count": 64,
          "name": "Web标准",
          "title": "Web标准"
        },
        {
          "count": 63,
          "name": "O'Reilly",
          "title": "O'Reilly"
        },
        {
          "count": 50,
          "name": "WEB",
          "title": "WEB"
        },
        {
          "count": 37,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 34,
          "name": "web开发",
          "title": "web开发"
        }
      ],
      "origin_title": "",
      "image": "https://img3.doubanio.com\/mpic\/s1437072.jpg",
      "binding": "平装(无盘)",
      "translator": [
        "技桥"
      ],
      "catalog": "",
      "pages": "739",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s1437072.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s1437072.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s1437072.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/1171117\/",
      "id": "1171117",
      "publisher": "清华大学出版社",
      "isbn10": "7302076065",
      "isbn13": "9787302076063",
      "title": "HTML和XHTML权威指南(第五版)",
      "url": "https:\/\/api.douban.com\/v2\/book\/1171117",
      "alt_title": "",
      "author_intro": "",
      "summary": "HTML！XHTML！级联样式表！编写网页的标准很难整理，因为各种版本的Netscape和Internet Explorer在其实现方式上千差万别。《HTML与XHTML权威指南》将这些标准全部介绍给了读者。本书作者找出了各种标准和浏览器特性，并在创建网页方面为读者提出了很多建议，以便能够被更广泛的浏览者和平台所接受。\n    学习HTML或XHTML和学习其他任何语言一样。大部分学生都是从示例开始学习的。学习其他人在做什么，这可以使学习过程变得简单而有趣，然而模仿只能达到这种程度。在模仿中容易养成坏习惯，并将它当做好习惯接受。掌握HTML的较好方式是，找一本内容全面的参考书，其中最好涉及到语言的语法、语义和各种变化，以帮助读者区分好的和不好的用法。\n    本书可从两方面对读者有所帮助：作者详细讲述了两种标准的所有元素，解释了每个元素的工作方式，以及如何与其他元素相互作用。很多有关样式的技巧可帮助读者编写文档，涉及的范围从简单的在线手册到复杂的市场演示，无所不包。书中的几百个示例提供了编写有效的网页并掌握先进特性的模型。\n    《HTML与XHTML权威指南》一书的新版本包含了最新的HTML、XHTML和CSS2标准，并向读者显示了如何：\n    ·使用样式表控制文档的外观\n    ·处理用编程手段生成的HTML\n    ·创建从简单到复杂的表格\n    ·使用框架调整文档的布局\n    ·设计和构建交互式表单及动态文档\n    ·插入图像、声音文件、视频、applet和JavaScript\n    ·创建在各种浏览器上都可以正常显示的文档\n    ·过渡到XHTML\n    其中还包括一张列出HTML与XHTML标签的快速参考卡片。",
      "price": "72.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 220,
        "average": "7.2",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "(美) Tom White"
      ],
      "pubdate": "2010-5",
      "tags": [
        {
          "count": 375,
          "name": "hadoop",
          "title": "hadoop"
        },
        {
          "count": 208,
          "name": "分布式",
          "title": "分布式"
        },
        {
          "count": 117,
          "name": "云计算",
          "title": "云计算"
        },
        {
          "count": 77,
          "name": "mapreduce",
          "title": "mapreduce"
        },
        {
          "count": 67,
          "name": "Hadoop权威指南",
          "title": "Hadoop权威指南"
        },
        {
          "count": 55,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 37,
          "name": "架构",
          "title": "架构"
        },
        {
          "count": 36,
          "name": "编程",
          "title": "编程"
        }
      ],
      "origin_title": "",
      "image": "https://img1.doubanio.com\/mpic\/s4356809.jpg",
      "binding": "",
      "translator": [
        "周傲英",
        "曾大聃"
      ],
      "catalog": "",
      "pages": "504",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s4356809.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s4356809.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s4356809.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/4817792\/",
      "id": "4817792",
      "publisher": "清华大学出版社",
      "isbn10": "7302224242",
      "isbn13": "9787302224242",
      "title": "Hadoop权威指南(中文版)",
      "url": "https:\/\/api.douban.com\/v2\/book\/4817792",
      "alt_title": "",
      "author_intro": "",
      "summary": "本书是您纵情享用数据之美的得力助手。作为处理海量数据集的理想工具，Apache Hadoop架构是MapReduce算法的一种开源应用，是Google(谷歌)开创其帝国的重要基石。本书内容丰富，展示了如何使用Hadoop构建可靠、可伸缩的分布式系统，程序员可从中探索如何分析海量数据集，管理员可以了解如何建立与运行Hadoop集群。.\n本书完全通过案例学习来展示如何用Hadoop解决特殊问题，它将帮助您：\n使用Hadoop分布式文件系统（HDFS）来存储海量数据集，通过MapReduce对这些数据集运行分布式计算..\n熟悉Hadoop的数据和I\/O构件，用于压缩、数据集成、序列化和持久处理\n洞悉编写MapReduce实际应用程序时常见陷阱和高级特性\n设计、构建和管理专用的Hadoop集群或在云上运行Hadoop\n使用Pig这种高级的查询语言来处理大规模数据\n利用HBase这个Hadoop数据库来处理结构化和半结构化数据\n学习Zookeeper，这是一个用于构建分布式系统的协作原语工具箱\n如果您拥有海量数据，无论是GB级还是PB级，Hadoop都是完美的选择。本书是这方面最全面的参考。",
      "price": "79.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 212,
        "average": "7.8",
        "min": 0
      },
      "subtitle": "Hadoop权威指南",
      "author": [
        "Tom White"
      ],
      "pubdate": "2011-7",
      "tags": [
        {
          "count": 333,
          "name": "hadoop",
          "title": "hadoop"
        },
        {
          "count": 200,
          "name": "分布式",
          "title": "分布式"
        },
        {
          "count": 139,
          "name": "MapReduce",
          "title": "MapReduce"
        },
        {
          "count": 110,
          "name": "云计算",
          "title": "云计算"
        },
        {
          "count": 61,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 44,
          "name": "大数据",
          "title": "大数据"
        },
        {
          "count": 42,
          "name": "O'Reilly",
          "title": "O'Reilly"
        },
        {
          "count": 37,
          "name": "编程",
          "title": "编程"
        }
      ],
      "origin_title": "Hadoop: The Definitive Guide",
      "image": "https://img3.doubanio.com\/mpic\/s6641416.jpg",
      "binding": "平装",
      "translator": [
        "周敏奇",
        "王晓玲",
        "金澈清",
        "钱卫宁",
        "周傲英"
      ],
      "catalog": "第1章 初识Hadoop\n数据！数据！\n数据存储与分析\n与其他系统相比\n关系型数据库管理系统\n网格计算\n志愿计算\n1.3.4 Hadoop 发展简史\nApache Hadoop和Hadoop生态圈\n第2章 关于MapReduce\n一个气象数据集\n数据的格式\n使用Unix工具进行数据分析\n使用Hadoop分析数据\nmap阶段和reduce阶段\n横向扩展\n合并函数\n运行一个分布式的MapReduce作业\nHadoop的Streaming\nRuby版本\nPython版本\nHadoop Pipes\n编译运行\n第3章 Hadoop分布式文件系统\nHDFS的设计\nHDFS的概念\n数据块\nnamenode和datanode\n命令行接口\n基本文件系统操作\nHadoop文件系统\n接口\nJava接口\n从Hadoop URL中读取数据\n通过FileSystem API读取数据\n写入数据\n目录\n查询文件系统\n删除数据\n数据流\n文件读取剖析\n文件写入剖析\n一致模型\n通过 distcp并行拷贝\n保持 HDFS 集群的均衡\nHadoop的归档文件\n使用Hadoop归档文件\n不足\n第4章 Hadoop I\/O\n数据完整性\nHDFS的数据完整性\nLocalFileSystem\nChecksumFileSystem\n压缩\ncodec\n压缩和输入切分\n在MapReduce中使用压缩\n序列化\nWritable接口\nWritable类\n实现定制的Writable类型\n序列化框架\nAvro\n依据文件的数据结构\n写入SequenceFile\nMapFile\n第5章 MapReduce应用开发\n配置API\n合并多个源文件\n可变的扩展\n配置开发环境\n配置管理\n辅助类GenericOptionsParser，Tool和ToolRunner\n编写单元测试\nmapper\nreducer\n本地运行测试数据\n在本地作业运行器上运行作业\n测试驱动程序\n在集群上运行\n打包\n启动作业\nMapReduce的Web界面\n获取结果\n作业调试\n使用远程调试器\n作业调优\n分析任务\nMapReduce的工作流\n将问题分解成MapReduce作业\n运行独立的作业\n第6章 MapReduce的工作机制\n剖析MapReduce作业运行机制\n作业的提交\n作业的初始化\n任务的分配\n任务的执行\n进度和状态的更新\n作业的完成\n失败\n任务失败\ntasktracker失败\njobtracker失败\n作业的调度\nFair Scheduler\nCapacity Scheduler\nshuffle和排序\nmap端\nreduce端\n配置的调优\n任务的执行\n推测式执行\n重用JVM\n跳过坏记录\n任务执行环境\n第7章 MapReduce的类型与格式\nMapReduce的类型\n默认的MapReduce作业\n输入格式\n输入分片与记录\n文本输入\n二进制输入\n多种输入\n数据库输入（和输出）\n输出格式\n文本输出\n二进制输出\n多个输出\n延迟输出\n数据库输出\n第8章 MapReduce的特性\n计数器\n内置计数器\n用户定义的Java计数器\n用户定义的Streaming计数器\n排序\n准备\n部分排序\n总排序\n二次排序\n联接\nmap端联接\nreduce端联接\n边数据分布\n利用JobConf来配置作业\n分布式缓存\nMapReduce库类\n第9章 构建Hadoop集群\n集群规范\n网络拓扑\n集群的构建和安装\n安装Java\n创建Hadoop用户\n安装Hadoop\n测试安装\nSSH配置\nHadoop配置\n配置管理\n环境设置\nHadoop守护进程的关键属性\nHadoop守护进程的地址和端口\nHadoop的其他属性\n创建用户帐号\n安全性\nKerberos和Hadoop\n委托令牌\n其他安全性改进\n利用基准测试程序测试Hadoop集群\nHadoop基准测试程序\n用户的作业\n云上的Hadoop\nAmazon EC2上的Hadoop\n第10章 管理Hadoop\nHDFS\n永久性数据结构\n安全模式\n日志审计\n工具\n监控\n日志\n度量\nJava管理扩展（JMX）\n维护\n日常管理过程\n委任节点和解除节点\n升级\n第11章 Pig简介\n安装与运行Pig\n执行类型\n运行Pig程序\nGrunt\nPig Latin编辑器\n示例\n生成示例\n与数据库比较\nPigLatin\n结构\n语句\n表达式\n1.4.4 类型\n模式\n函数\n用户自定义函数\n过滤UDF\n计算UDF\n加载UDF\n数据处理操作\n加载和存储数据\n过滤数据\n分组与连接数据\n对数据进行排序\n组合和分割数据\nPig实战\n并行处理\n参数代换\n第12章 Hive\n1.1 安装Hive\n1.1.1 Hive外壳环境\n1.2 示例\n1.3 运行Hive\n1.3.1 配置Hive\n1.3.2 Hive服务\n1.3.3 Metastore\n1.4  和传统数据库进行比较\n1.4.1 读时模式（Schema on Read）vs.写时模式（Schema on Write）\n1.4.2 更新、事务和索引\n1.5 HiveQL\n1.5.1 数据类型\n1.5.2 操作和函数\n1.6 表\n1.6.1 托管表（Managed Tables）和外部表（External Tables）\n1.6.2 分区（Partitions）和桶（Buckets）\n1.6.3 存储格式\n1.6.4 导入数据\n1.6.5 表的修改\n1.6.6 表的丢弃\n1.7 查询数据\n1.7.1 排序（Sorting）和聚集（Aggregating）\n1.7.2 MapReduce脚本\n1.7.3 连接\n1.7.4 子查询\n1.7.5 视图（view）\n1.8 用户定义函数（User-Defined Functions）\n1.8.1 编写UDF\n1.8.2 编写UDAF\n第13章 HBase\n2.1 HBasics\n2.1.1 背景\n2.2 概念\n2.2.1 数据模型的“旋风之旅”\n2.2.2 实现\n2.3 安装\n2.3.1 测试驱动\n2.4 客户机\n2.4.1 Java\n2.4.2 Avro，REST，以及Thrift\n2.5 示例\n2.5.1 模式\n2.5.2 加载数据\n2.5.3 Web查询\n2.6 HBase和RDBMS的比较\n2.6.1 成功的服务\n2.6.2 HBase\n2.6.3 实例：HBase在Streamy.com的使用\n2.7 Praxis\n2.7.1 版本\n2.7.2 HDFS\n2.7.3 用户接口（UI）\n2.7.4 度量（metrics）\n2.7.5 模式设计\n2.7.6 计数器\n2.7.7 批量加载（bulkloading）\n第14章 ZooKeeper\n安装和运行ZooKeeper\n示例\nZooKeeper中的组成员关系\n创建组\n加入组\n列出组成员\nZooKeeper服务\n数据模型\n操作\n实现\n一致性\n会话\n状态\n使用ZooKeeper来构建应用\n配置服务\n具有可恢复性的ZooKeeper应用\n锁服务\n生产环境中的ZooKeeper\n可恢复性和性能\n配置\n第15章 开源工具Sqoop\n获取Sqoop\n一个导入的例子\n生成代码\n其他序列化系统\n深入了解数据库导入\n导入控制\n导入和一致性\n直接模式导入\n使用导入的数据\n导入的数据与Hive\n导入大对象\n执行导出\n深入了解导出\n导出与事务\n导出和SequenceFile\n第16章 实例分析\nHadoop 在Last.fm的应用\nLast.fm：社会音乐史上的革命\nHadoop a Last.fm\n用Hadoop产生图表\nTrack Statistics程序\n总结\nHadoop和Hive在Facebook的应用\n概要介绍\nHadoop a Facebook\n假想的使用情况案例\nHive\n问题与未来工作计划\nNutch 搜索引擎\n背景介绍\n数据结构\nNutch系统利用Hadoop进行数据处理的精选实例\n总结\nRackspace的日志处理\n简史\n选择Hadoop\n收集和存储\n日志的MapReduce模型\n关于Cascading\n字段、元组和管道\n操作\nTap类，Scheme对象和Flow对象\nCascading实战\n灵活性\nHadoop和Cascading在ShareThis的应用\n总结\n在Apache Hadoop上的TB字节数量级排序\n使用Pig和Wukong来探索10亿数量级边的 网络图\n测量社区\n每个人都在和我说话：Twitter回复关系图\n（度）degree\n对称链接\n社区提取\n附录A 安装Apache Hadoop\n附录B Cloudera’s Distribution for Hadoop\n附录C 准备NCDC天气数据\n索引",
      "pages": "600",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s6641416.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s6641416.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s6641416.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/6523762\/",
      "id": "6523762",
      "publisher": "清华大学出版社",
      "isbn10": "7302257582",
      "isbn13": "9787302257585",
      "title": "Hadoop权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/6523762",
      "alt_title": "Hadoop: The Definitive Guide",
      "author_intro": "Tom White从2007年以来，一直担任Apache Hadoop项目负责人。他是Apache软件基金会的成员之一，同时也是Cloudera的一名工程师。Tom为oreully.com、java.net和IBM的developerWorks写过大量文章，并经常在很多行业大会上发表演讲。",
      "summary": "《Hadoop权威指南(第2版)(修订•升级版)》从Hadoop的缘起开始，由浅入深，结合理论和实践，全方位地介绍Hadoop这一高性能处理海量数据集的理想工具。全书共16章，3个附录，涉及的主题包括：Haddoop简介；MapReduce简介；Hadoop分布式文件系统；Hadoop的I\/O、MapReduce应用程序开发；MapReduce的工作机制；MapReduce的类型和格式；MapReduce的特性；如何构建Hadoop集群，如何管理Hadoop；Pig简介；Hbase简介；Hive简介；ZooKeeper简介；开源工具Sqoop，最后还提供了丰富的案例分析。\n《Hadoop权威指南(第2版)(修订•升级版)》是Hadoop权威参考，程序员可从中探索如何分析海量数据集，管理员可以从中了解如何安装与运行Hadoop集群。",
      "price": "89.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 137,
        "average": "8.8",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Ilya Grigorik"
      ],
      "pubdate": "2013-9",
      "tags": [
        {
          "count": 160,
          "name": "Web开发",
          "title": "Web开发"
        },
        {
          "count": 143,
          "name": "性能",
          "title": "性能"
        },
        {
          "count": 88,
          "name": "Web",
          "title": "Web"
        },
        {
          "count": 55,
          "name": "性能优化",
          "title": "性能优化"
        },
        {
          "count": 48,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 39,
          "name": "互联网",
          "title": "互联网"
        },
        {
          "count": 26,
          "name": "web",
          "title": "web"
        },
        {
          "count": 23,
          "name": "编程",
          "title": "编程"
        }
      ],
      "origin_title": "High Performance Browser Networking",
      "image": "https://img1.doubanio.com\/mpic\/s27249387.jpg",
      "binding": "平装",
      "translator": [
        "李松峰"
      ],
      "catalog": "版权声明\nSteve Souders推荐序\n前言\n第一部分：网络技术概览\n第1章 延迟与带宽\n第2章 TCP的构成\n第3章 UDP的构成\n第4章 传输层安全（TLS）\n第二部分：无线网络性能\n第5章 无线网络概览\n第6章 Wi-Fi\n第7章 移动网络\n第8章 移动网络的优化建议\n第三部分：HTTP\n第9章 HTTP简史\n第10章 Web性能要点\n第11章 HTTP 1.x\n第12章 HTTP 2.0\n第13章 优化应用的交付\n第四部分 浏览器API与协议\n第14章 浏览器网络概述\n第15章 XMLHttpRequest\n第16章 服务器发送事件\n第17章 WebSocket\n第18章 WebRTC\n关于封面",
      "ebook_url": "https:\/\/read.douban.com\/ebook\/12055070\/",
      "pages": "336",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s27249387.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s27249387.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s27249387.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/25856314\/",
      "id": "25856314",
      "publisher": "人民邮电出版社",
      "isbn10": "711534910X",
      "isbn13": "9787115349101",
      "title": "Web性能权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/25856314",
      "alt_title": "High Performance Browser Networking",
      "author_intro": "作者简介：\nIlya Grigorik\n是谷歌“Web加速”（Make The Web Fast）团队的性能工程师、开发大使。他每天的主要工作就是琢磨怎么让Web应用速度更快，总结并推广能够提升应用性能的最佳实践。\n在专注于研究Web性能之前，Ilya创办了PostRank公司并担任CTO，这是一家社交分析公司。他的这家公司被谷歌收购后，成为了Google Analytics中社交分析报告模块的核心。除了研究Web性能和分析，Ilya还会为开源项目做做贡献、看看书，或者写一些好玩的项目，比如VimGolf、GitHub Archive等。\n译者简介：\n李松峰\n2006年起投身翻译，出版过译著30余部，包括《JavaScript高级程序设计》、《简约至上》等畅销书。2008年进入出版业，从事技术图书编辑和审稿工作。\n2007年创立知识分享网站“为之漫笔”（cn-cuckoo.com），翻译了大量国外经典技术文章。2012年下半年创立“A List Apart中文版”站点（alistapart.cn），旨在向中文读者译介这一国际顶级Web设计与开发杂志。他经常参加技术社区活动，曾在W3ctech 2012 Mobile上分享“Dive into Responsive Web Design”。2013年1月应邀在金山网络分享“响应式Web设计”，2013年3月应邀在奇虎360分享“JS的国”。",
      "summary": "本书是谷歌公司高性能团队核心成员的权威之作，堪称实战经验与规范解读完美结合的产物。本书目标是涵盖Web 开发者技术体系中应该掌握的所有网络及性能优化知识。全书以性能优化为主线，从TCP、UDP 和TLS 协议讲起，解释了如何针对这几种协议和基础设施来优化应用。然后深入探讨了无线和移动网络的工作机制。最后，揭示了HTTP 协议的底层细节，同时详细介绍了HTTP 2.0、 XHR、SSE、WebSocket、WebRTC 和DataChannel 等现代浏览器新增的具有革命性的新能力。\n本书适合所有Web 应用及站点开发人员阅读，包括但不限于前端、后端、运维、大数据分析、\nUI\/UX、存储、视频、实时消息，以及性能工程师。\nIlya Grigorik 是谷歌“Web加速”（Make The Web Fast）团队的性能工程师、开发大使。他每天的主要工作就是琢磨怎么让Web应用速度更快，总结并推广能够提升应用性能的最佳实践。",
      "ebook_price": "29.99",
      "price": "69"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 144,
        "average": "6.8",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "陆凌牛"
      ],
      "pubdate": "2011-4-7",
      "tags": [
        {
          "count": 237,
          "name": "HTML5",
          "title": "HTML5"
        },
        {
          "count": 178,
          "name": "CSS3",
          "title": "CSS3"
        },
        {
          "count": 92,
          "name": "前端开发",
          "title": "前端开发"
        },
        {
          "count": 51,
          "name": "WEB开发",
          "title": "WEB开发"
        },
        {
          "count": 35,
          "name": "Web前端",
          "title": "Web前端"
        },
        {
          "count": 30,
          "name": "前端",
          "title": "前端"
        },
        {
          "count": 25,
          "name": "CSS",
          "title": "CSS"
        },
        {
          "count": 18,
          "name": "前端必读",
          "title": "前端必读"
        }
      ],
      "origin_title": "",
      "image": "https://img1.doubanio.com\/mpic\/s4696737.jpg",
      "binding": "",
      "translator": [
        
      ],
      "catalog": "前言\n第 1 章   Web时代的变迁 \/ 1\n1.1   迎接新的Web时代 \/ 2\n1.1.1   HTML 5时代即将来临 \/ 2\n1.1.2   HTML 5的目标 \/ 4\n1.2   HTML 5会深受欢迎的理由 \/ 4\n1.2.1   世界知名浏览器厂商对HTML 5的支持 \/ 4\n1.2.2   第一个理由：时代的要求 \/ 5\n1.2.3   第二个理由：Internet Explorer 8 \/ 6\n1.3   可以放心使用HTML 5的三个理由 \/ 6\n1.4   HTML 5要解决的三个问题 \/ 7\n第 2 章   HTML 5与HTML 4的区别 \/ 9\n2.1   语法的改变 \/ 10\n2.1.1   HTML 5的语法变化 \/ 10\n2.1.2   HTML 5中的标记方法 \/ 11\n2.1.3   HTML 5确保了与之前HTML版本的兼容性 \/ 11\n2.1.4   标记示例 \/ 13\n2.2   新增的元素和废除的元素 \/ 13\n2.2.1   新增的结构元素 \/ 13\n2.2.2   新增的其他元素 \/ 15\n2.2.3   新增的input元素的类型 \/ 19\n2.2.4   废除的元素 \/ 19\n2.3   新增的属性和废除的属性 \/ 20\n2.3.1   新增的属性 \/ 20\n2.3.2   废除的属性 \/ 21\n2.4   全局属性 \/ 23\n2.4.1   contentEditable属性 \/ 23\n2.4.2   designMode属性 \/ 24\n2.4.3   hidden属性 \/ 25\n2.4.4   spellcheck属性 \/ 25\n2.4.5   tabindex属性 \/ 25\n第 3 章   HTML 5的结构 \/ 27\n3.1   新增的主体结构元素 \/ 28\n3.1.1   article元素 \/ 28\n3.1.2   section元素 \/ 30\n3.1.3   nav元素 \/ 32\n3.1.4   aside元素 \/33\n3.1.5   time元素与微格式 \/ 35\n3.1.6   pubdate属性 \/ 36\n3.2   新增的非主体结构元素 \/ 36\n3.2.1   header元素 \/ 37\n3.2.2   hgroup元素 \/ 38\n3.2.3   footer元素 \/ 38\n3.2.4   address元素 \/ 39\n3.3   HTML 5结构 \/ 40\n3.3.1   大纲 \/ 40\n3.3.2   对新的结构元素使用样式 \/ 43\n3.3.3   article元素的样式 \/ 44\n第 4 章   表单与文件 \/ 45\n4.1   新增元素与属性 \/ 46\n4.1.1   新增属性 \/ 46\n4.1.2   大幅度地增加与改良了input元素的种类 \/ 49\n4.1.3   对新的表单元素使用样式 \/ 54\n4.1.4   output元素的追加 \/ 55\n4.2   表单验证 \/ 55\n4.2.1   自动验证 \/ 55\n4.2.2   显式验证 \/ 57\n4.2.3   取消验证 \/ 58\n4.2.4   自定义错误信息 \/ 58\n4.3   增强的页面元素 \/ 59\n4.3.1   新增的figure元素与figcaption元素 \/ 60\n4.3.2   新增的details元素 \/ 61\n4.3.3   新增的mark元素 \/ 62\n4.3.4   新增的progress元素 \/ 64\n4.3.5   新增的meter元素 \/ 65\n4.3.6   新增的menu元素与command元素 \/ 66\n4.3.7   改良的ol列表 \/ 66\n4.3.8   改良的dl列表 \/ 67\n4.3.9   加以严格限制的cite元素 \/ 68\n4.3.10   重新定义的small元素 \/ 69\n4.4   文件API \/ 69\n4.4.1   FileList对象与file对象 \/ 69\n4.4.2   Blob对象 \/ 70\n4.4.3   FileReader接口 \/ 72\n4.5   拖放API \/ 77\n4.5.1   实现拖放的步骤 \/ 77\n4.5.2   DataTransfer对象的属性与方法 \/ 80\n4.5.3   设定拖放时的视觉效果 \/ 80\n4.5.4   自定义拖放图标 \/ 81\n第 5 章   绘制图形 \/ 82\n5.1   canvas元素的基础知识 \/ 83\n5.1.1   在页面中放置canvas元素 \/ 83\n5.1.2   绘制矩形 \/ 84\n5.2   使用路径 \/ 86\n5.2.1   绘制圆形 \/ 86\n5.2.2   如果没有关闭路径会怎么样 \/ 88\n5.2.3   moveTo与lineTo \/ 90\n5.2.4   使用bezierCurveTo绘制贝济埃曲线 \/ 91\n5.3   绘制渐变图形 \/ 93\n5.3.1   绘制线性渐变 \/ 93\n5.3.2   绘制径向渐变 \/ 95\n5.4   绘制变形图形 \/ 96\n5.4.1   坐标变换 \/ 96\n5.4.2   坐标变换与路径的结合使用 \/ 98\n5.4.3   矩阵变换 \/ 99\n5.5   图形组合 \/ 103\n5.6   给图形绘制阴影 \/ 105\n5.7   使用图像 \/ 107\n5.7.1   绘制图像 \/ 107\n5.7.2   图像平铺 \/ 109\n5.7.3   图像裁剪 \/ 111\n5.7.4   像素处理 \/ 113\n5.8   绘制文字 \/ 115\n5.9   补充知识 \/ 117\n5.9.1   保存与恢复状态 \/ 117\n5.9.2   保存文件 \/ 118\n5.9.3   简单动画的制作 \/ 119\n第 6 章   多媒体播放 \/ 122\n6.1   video元素与audio元素的基础知识 \/ 123\n6.1.1   HTML  4页面中播放视频或音频的方法 \/ 123\n6.1.2   HTML 5页面中播放视频或音频的方法 \/ 124\n6.2   属性 \/ 125\n6.3   方法 \/ 129\n6.4   事件 \/ 132\n6.4.1   事件处理方式 \/ 132\n6.4.2   事件介绍 \/ 132\n6.4.3   事件捕捉示例 \/ 133\n第 7 章   本地存储 \/ 135\n7.1   Web Storage \/ 136\n7.1.1   Web Storage是什么 \/ 136\n7.1.2   简单Web留言本 \/ 139\n7.1.3   作为简易数据库来利用 \/ 141\n7.2   本地数据库 \/ 144\n7.2.1   本地数据库的基本概念 \/ 144\n7.2.2   用executeSql来执行查询 \/ 145\n7.2.3   使用数据库实现Web留言本 \/ 146\n7.2.4   transaction方法中的处理 \/ 149\n第 8 章   离线应用程序 \/ 151\n8.1   离线Web应用程序详解 \/ 152\n8.1.1   新增的本地缓存 \/ 152\n8.1.2   本地缓存与浏览器网页缓存的区别 \/ 152\n8.2   manifest文件 \/ 153\n8.3   浏览器与服务器的交互过程 \/ 155\n8.4   applicationCache对象 \/ 156\n8.4.1   swapCache方法 \/ 157\n8.4.2   applicationCache对象的事件 \/ 158\n第 9 章   通信API \/ 162\n9.1   跨文档消息传输 \/ 163\n9.1.1  跨文档消息传输的基本知识 \/ 163\n9.1.2   跨文档消息传输示例 \/ 163\n9.2   Web Sockets通信 \/ 166\n9.2.1   Web Sockets通信的基本知识 \/ 166\n9.2.2   使用Web Sockets API \/ 166\n9.2.3   Web Sockets API使用示例 \/ 167\n9.2.4   发送对象 \/ 168\n第10章   使用Web Workers处理线程 \/ 170\n10.1   基础知识 \/ 171\n10.2   与线程进行数据的交互 \/ 174\n10.3   线程嵌套 \/ 176\n10.3.1   单层嵌套 \/ 176\n10.3.2   在多个子线程中进行数据的交互 \/ 178\n10.4   线程中可用的变量、函数与类 \/ 180\n第11章   获取地理位置信息 \/ 181\n11.1   Geolocation  API的基本知识 \/ 182\n11.1.1   取得当前地理位置 \/ 182\n11.1.2   持续监视当前地理位置的信息 \/ 184\n11.1.3   停止获取当前用户的地理位置信息 \/ 184\n11.2   position对象 \/ 184\n11.3   在页面上使用google地图 \/ 186\n第12章   CSS 3概述 \/ 189\n12.1   概要介绍 \/ 190\n12.1.1   CSS 3是什么 \/ 190\n12.1.2   CSS 3的历史 \/ 190\n12.2   使用CSS 3能做什么 \/ 191\n12.2.1   模块与模块化结构 \/ 191\n12.2.2   一个简单的CSS 3示例 \/ 192\n第13章   选择器 \/ 195\n13.1   选择器概述 \/ 197\n13.2   属性选择器 \/ 197\n13.2.1   属性选择器是什么 \/ 197\n13.2.2   CSS 3中的属性选择器 \/ 199\n13.2.3   灵活运用属性选择器 \/ 200\n13.3   结构性伪类选择器 \/ 201\n13.3.1   CSS中的伪类选择器及伪元素 \/ 201\n13.3.2   选择器root、not、empty和target \/ 205\n13.3.3   选择器：first-child、last-child、nth-child和nth-last-child \/ 210\n13.3.4   选择器：nth-of-type和nth-last-of-type \/ 214\n13.3.5   循环使用样式 \/ 216\n13.3.6   only-child选择器 \/ 218\n13.4   UI元素状态伪类选择器 \/ 219\n13.4.1   选择器：E:hover、E:active和E:focus \/ 220\n13.4.2   E:enabled伪类选择器与E:disabled伪类选择器 \/ 222\n13.4.3   E: read-only伪类选择器与E:read-write伪类选择器 \/ 223\n13.4.4   伪类选择器：E:checked、E:default和E: indeterminate \/ 224\n13.4.5   E::selection伪类选择器 \/ 226\n13.5   通用兄弟元素选择器 \/ 228\n第14章   使用选择器在页面中插入内容 \/ 230\n14.1   使用选择器来插入文字 \/ 231\n14.1.1   使用选择器来插入内容 \/ 231\n14.1.2   指定个别元素不进行插入 \/ 232\n14.2   插入图像文件 \/ 234\n14.2.1   在标题前插入图像文件 \/ 234\n14.2.2   插入图像文件的好处 \/ 234\n14.2.3   将alt属性的值作为图像的标题来显示 \/ 236\n14.3   使用content属性来插入项目编号 \/ 237\n14.3.1   在多个标题前加上连续编号 \/ 237\n14.3.2   在项目编号中追加文字 \/ 238\n14.3.3   指定编号的样式 \/ 238\n14.3.4   指定编号的种类 \/ 238\n14.3.5   编号嵌套 \/ 239\n14.3.6   中编号中嵌入大编号 \/ 240\n14.3.7   在字符串两边添加嵌套文字符号 \/ 242\n第15章   文字与字体相关样式 \/ 244\n15.1   给文字添加阴影—text-shadow属性 \/ 245\n15.1.1   text-shadow属性的使用方法 \/ 245\n15.1.2   位移距离 \/ 247\n15.1.3   阴影的模糊半径 \/ 247\n15.1.4   阴影的颜色 \/ 248\n15.1.5   指定多个阴影 \/ 248\n15.2   让文本自动换行—word-break属性 \/ 249\n15.2.1  依靠浏览器让文本自动换行 \/ 249\n15.2.2   指定自动换行的处理方法 \/ 249\n15.3   让长单词与URL地址自动换行—word-wrap属性 \/ 251\n15.4   使用服务器端字体—Web Font与@font-face属性 \/ 251\n15.4.1   在网页上显示服务器端字体 \/ 252\n15.4.2   定义斜体或粗体字体 \/ 253\n15.4.3   显示客户端本地的字体 \/ 255\n15.4.4   属性值的指定 \/ 256\n15.5   修改字体种类而保持字体尺寸不变—font-size-adjust属性 \/ 257\n15.5.1   字体不同导致文字大小的不同 \/ 257\n15.5.2   font-size-adjust属性的使用方法 \/ 259\n15.5.3   浏览器对于aspect值的计算方法 \/ 259\n15.5.4   font-size-adjust属性的使用示例 \/ 260\n第16章   盒相关样式 \/ 262\n16.1   盒的类型 \/ 263\n16.1.1   盒的基本类型 \/ 263\n16.1.2   inline-block类型 \/ 264\n16.1.3   inline-table类型 \/ 270\n16.1.4   list-item类型 \/ 272\n16.1.5   run-in类型与compact类型 \/ 273\n16.1.6   表格相关类型 \/ 274\n16.1.7   none类型 \/ 276\n16.1.8   各种浏览器对于各种盒类型的支持情况 \/ 277\n16.2   对于盒中容纳不下的内容的显示 \/ 277\n16.2.1   overflow属性 \/ 278\n16.2.2   overflow-x属性与overflow-y属性 \/ 281\n16.2.3   text-overflow属性 \/ 281\n16.3   对盒使用阴影 \/ 283\n16.3.1   box-shadow属性的使用方法 \/ 283\n16.3.2   将参数设定为0 \/ 284\n16.3.3   对盒内子元素使用阴影 \/ 285\n16.3.4   对第一个文字或第一行使用阴影 \/ 286\n16.3.5   对表格及单元格使用阴影 \/ 287\n16.4   指定针对元素的宽度与高度的计算方法 \/ 288\n16.4.1   box-sizing属性 \/ 288\n16.4.2   为什么要使用box-sizing属性 \/ 291\n第17章   与背景和边框相关样式 \/ 293\n17.1   与背景相关的新增属性 \/ 294\n17.1.1   指定背景的显示范围—background-clip属性 \/ 294\n17.1.2   指定绘制背景图像的绘制起点—background-origin属性 \/ 296\n17.1.3   指定背景图像的尺寸—background-size属性 \/ 299\n17.1.4   指定内联元素背景图像进行平铺时的循环方式—background-break属性 \/ 301\n17.2   在一个元素中显示多个背景图像 \/ 302\n17.3   圆角边框的绘制 \/ 303\n17.3.1   border-radius属性 \/ 304\n17.3.2   在border-radius属性中指定两个半径 \/ 305\n17.3.3   不显示边框的时候 \/ 306\n17.3.4   修改边框种类的时候 \/ 306\n17.3.5   绘制四个角不同半径的圆角边框 \/ 306\n17.4   使用图像边框 \/ 307\n17.4.1   border-image属性 \/ 307\n17.4.2   border-image属性最简单的使用方法 \/ 308\n17.4.3   使用border-image属性来指定边框宽度 \/ 310\n17.4.4   中央图像的自动拉伸 \/ 311\n17.4.5   指定四条边中图像的显示方法 \/ 312\n17.4.6   使用背景图像 \/ 315\n第18章   CSS 3中的变形处理 \/ 317\n18.1   transform功能的基础知识 \/ 318\n18.1.1   如何使用transform功能 \/ 318\n18.1.2   transform功能的分类 \/ 319\n18.2   对一个元素使用多种变形的方法 \/ 323\n18.2.1   两个变形示例 \/ 323\n18.2.2   指定变形的基准点 \/ 325\n第19章   CSS 3中的动画功能 \/ 328\n19.1   Transitions功能 \/ 329\n19.1.1   Transitions功能的使用方法 \/ 329\n19.1.2   使用Transitions功能同时平滑过渡多个属性值 \/ 330\n19.2   Animations功能 \/ 333\n19.2.1   Animations功能的使用方法 \/ 333\n19.2.2   实现多个属性值同时改变的动画 \/ 335\n19.2.3   实现动画的方法 \/ 337\n19.2.4   实现网页的淡入效果 \/ 339\n第20章   布局相关样式 \/ 340\n20.1   多栏布局 \/ 341\n20.1.1   使用float属性或position属性的缺点 \/ 341\n20.1.2   使用多栏布局方式 \/ 343\n20.2   盒布局 \/ 346\n20.2.1   盒布局的基础知识 \/ 346\n20.2.2   弹性盒布局 \/ 350\n第21章   Media Queries相关样式 \/ 362\n21.1   根据浏览器的窗口大小来选择使用不同的样式 \/ 363\n21.2   在iPhone中的显示 \/ 367\n21.3   Media Queries的使用方法 \/ 368\n第22章   CSS 3的其他重要样式和属性 \/ 371\n22.1   颜色相关样式 \/ 372\n22.1.1   利用alpha通道来设定颜色 \/ 372\n22.1.2   alpha通道与opacity属性的区别 \/ 374\n22.1.3   指定颜色值为transparent \/ 376\n22.2   用户界面相关样式 \/ 377\n22.2.1   轮廓相关样式 \/ 377\n22.2.2   resize属性 \/ 380\n22.3   取消对元素的样式指定—initial属性值 \/ 381\n22.3.1   取消对元素的样式指定 \/ 381\n22.3.2   使用initial属性值并不等于取消样式设定的特例 \/ 383\n第23章   综合实例 \/ 385\n23.1   实例1：使用HTML 5中新增结构元素来构建网页 \/ 386\n23.1.1   组织网页结构 \/ 386\n23.1.2   header元素中的内容 \/ 388\n23.1.3   aside元素中的内容 \/ 395\n23.1.4   section元素中的内容 \/ 398\n23.1.5   footer元素中的内容 \/ 400\n23.2   实例2：使用HTML 5+CSS 3来构建Web应用程序 \/ 401\n23.2.1   HTML 5页面代码分析 \/ 402\n23.2.2   CSS 3样式代码分析 \/ 405\n23.2.3   JavaScript脚本代码分析 \/ 409",
      "ebook_url": "https:\/\/read.douban.com\/ebook\/15160963\/",
      "pages": "416",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s4696737.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s4696737.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s4696737.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/6025285\/",
      "id": "6025285",
      "publisher": "机械工业出版社华章公司",
      "isbn10": "7111336240",
      "isbn13": "9787111336242",
      "title": "HTML 5 与 CSS 3 权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/6025285",
      "alt_title": "",
      "author_intro": "陆凌牛，资深Web开发工程师、软件开发工程师和系统设计师。从事Web开发多年，对各种Web开发技术（包括前端和后端）都有非常深入的研究，经验极其丰富。HTML 5和CSS 3等新技术的先驱者和布道者，不仅对HTML 5与CSS 3的理论知识有比较深入的认识，而且已经大量在实践中付诸应用。此外，他还擅长微软与Java的相关技术，在C#、VB.NET、ASP.NET、SQL Server 、Oracle、Java、Struts、Spring、Hibernate等方面也积累大量的实战经验。",
      "summary": "如果你是一位有前瞻性的web前端工作者，那么你一定会从本书中受益，因为它就是专门为你打造的。\n《HTML 5与CSS 3权威指南》内容系统而全面，详尽地讲解了html 5和css 3的所有新功能和新特性；技术新颖，所有知识点都紧跟html 5与css 3的最新发展动态（html 5和css 3仍在不断完善之中）；实战性强（包含246个示例页面），不仅每个知识点都配有精心设计的小案例（便于动手实践），而且还有两个综合性的案例（体现用 html 5与css 3开发web应用的思维和方法）。本书不仅能满足你全面而系统地学习理论知识的需求，还能满足你需要充分实践的需求。\n《HTML 5与CSS 3权威指南》共分为三大部分，第一部分详尽地讲解了html 5的相关知识，包括各主流浏览器对html 5的支持情况、html 5与html 4在语法上的区别、html 5的结构元素、表单与文件、图形绘制、多媒体播放、本地存储、离线应用、通信api、web workers、地理位置信息获取等内容；第二部分详细地阐述了css 3的相关知识，涵盖选择器、文字与字体的相关样式、颜色的相关样式、盒的相关样式、背景与边框的相关样式、布局的相关样式、ui的相关样式、media queries的相关样式、变形处理、多媒体和动画等内容。第三部分以迭代的方式逐步展现了两个完整的案例，旨在帮助读者将理论知识贯穿于实践中，迅速成为新一代web开发技术中的弄潮儿。\n无论你是未入门或刚入门的前端新人，还是有多年工作经验的资深前端工程师，这本书都会很适合你。",
      "ebook_price": "44.16",
      "price": "69.00"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 148,
        "average": "7.7",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "科夫勒"
      ],
      "pubdate": "2006-12",
      "tags": [
        {
          "count": 167,
          "name": "mysql",
          "title": "mysql"
        },
        {
          "count": 104,
          "name": "数据库",
          "title": "数据库"
        },
        {
          "count": 46,
          "name": "MySQL,",
          "title": "MySQL,"
        },
        {
          "count": 38,
          "name": "Database",
          "title": "Database"
        },
        {
          "count": 27,
          "name": "数据库技术",
          "title": "数据库技术"
        },
        {
          "count": 24,
          "name": "mysql5",
          "title": "mysql5"
        },
        {
          "count": 20,
          "name": "SQL",
          "title": "SQL"
        },
        {
          "count": 20,
          "name": "计算机",
          "title": "计算机"
        }
      ],
      "origin_title": "The Definitive Guide to MySQL 5",
      "image": "https://img3.doubanio.com\/mpic\/s9126076.jpg",
      "binding": "简裝本",
      "translator": [
        "杨晓云",
        "王建桥",
        "杨涛"
      ],
      "catalog": "第一部分 入门\n第1章 什么是mysql 2\n1.1 什么是数据库 2\n1.1.1 关系、数据库系统、服务器和客户 2\n1.1.2 关系数据库系统与面向对象数据库系统 3\n1.1.3 数据表、记录、字段、查询、sql、索引和键 3\n1.2 mysql 4\n1.3 mysql的不足 6\n1.4 mysql的版本编号 7\n1.4.1 alpha、beta、gamma、production（generally available） 8\n1.4.2 按版本编号排列的mysql功能表 8\n1.5 mysql的许可证 10\n1.5.1 gpl许可证下的权利和义务 10\n1.5.2 开源许可证下的mysql软件 10\n1.5.3 商用许可证下的mysql软件 11\n1.5.4 mysql客户软件开发库（connector\/odbc、connector\/j等）的商用许可证 12\n1.5.5 php项目的客户许可证问题——f(l)oss特例 12\n1.5.6 mysql软件的版本名称 13\n1.5.7 mysql软件的技术支持合同 14\n1.6 mysql软件的替代品 14\n1.7 小结 15\n第2章 测试环境 16\n2.1 是windows还是unix\/linux 16\n2.1.1 mysql应用现状（因特网上的数据库服务器） 16\n2.1.2 开发环境 17\n2.2 在windows系统上安装mysql和相关软件 17\n2.2.1 安装apache 2.0 18\n2.2.2 安装mysql 5.0 19\n2.2.3 安装php 5.0 22\n2.2.4 安装perl 23\n2.3 在suse linux 9.3系统上安装mysql和相关软件 25\n2.3.1 安装apache 2、php 5和perl 25\n2.3.2 安装mysql 5.0 27\n2.4 在red hat enterprise linux 4系统上安装mysql和相关软件 29\n2.4.1 安装apache 2 29\n2.4.2 安装mysql 5 30\n2.4.3 编译php 5 30\n2.4.4 安装perl 5.8 33\n2.5 编译mysql软件的开发者版本（linux） 33\n2.5.1 安装bitkeeper 33\n2.5.2 下载mysql软件的开发者版本 34\n2.5.3 编译mysql 34\n2.5.4 创建用来管理访问权限的mysql数据库 34\n2.5.5 mysql配置文件和init-v脚本 34\n2.5.6 启动mysql服务器 35\n2.6 配置apache 35\n2.6.1 配置文件 35\n2.6.2 基本设置 36\n2.6.3 对不同子目录的访问权限（.htaccess） 37\n2.7 配置php 39\n2.8 配置mysql 41\n第3章 初级案例研究：mysql+php 43\n3.1 概述 43\n3.2 数据库的开发 44\n3.2.1 启动mysql命令行解释器 44\n3.2.2 创建数据库 45\n3.2.3 创建数据表 46\n3.2.4 为什么要避简就难 47\n3.3 调查问卷 48\n3.4 问卷调查结果的处理和显示 49\n3.4.1 mysql界面与mysqli界面 49\n3.4.2 建立与数据库的连接 49\n3.4.3 对数据进行处理并把它存入数据库 49\n3.4.4 显示问卷调查的结果 50\n3.4.5 程序代码（results.php） 51\n3.4.6 最终生成的html代码 52\n3.5 改进意见 52\n第二部分 管理工具和用户操作界面\n第4章 mysql、mysqladmin和mysqldump 56\n4.1 mysql 56\n4.1.1 启动mysql 57\n4.1.2 mysql的命令行选项 58\n4.1.3 交互式使用mysql 59\n4.1.4 unix\/linux环境中mysql的使用技巧 60\n4.1.5 windows环境下mysql的使用技巧 61\n4.1.6 用mysql处理sql文件 63\n4.2 mysqladmin 64\n4.3 mysqldump 64\n第5章 mysql administrator和mysql query browser 65\n5.1 安装 65\n5.2 与mysql服务器建立连接 66\n5.3 mysql administrator 67\n5.3.1 server information模块（查看服务器信息） 68\n5.3.2 service control模块（启动\/停止mysql服务器） 68\n5.3.3 startup variables模块（配置启动参数） 68\n5.3.4 user administration模块（用户管理） 69\n5.3.5 server connections模块（查看服务器连接信息） 71\n5.3.6 health模块（查看系统负载） 71\n5.3.7 server logs模块（查看服务器日志） 72\n5.3.8 backup模块（制作数据库备份） 72\n5.3.9 restore模块（用备份恢复数据库） 73\n5.3.10 replication status模块（查看镜像机制的工作状态） 74\n5.3.11 catalogs模块（对数据库和数据表进行管理） 74\n5.4 mysql query browser 74\n5.4.1 sql命令的输入和执行 74\n5.4.2 对select结果里的数据进行修改 76\n5.4.3 sql命令的历史记录和书签 77\n5.4.4 一次执行多条命令（脚本） 77\n5.4.5 存储过程 77\n5.4.6 mysql help（帮助文档） 77\n第6章 phpmyadmin 78\n6.1 phpmyadmin的安装与配置 79\n6.1.1 安装phpmyadmin文件 79\n6.1.2 配置phpmyadmin 79\n6.1.3 config身份验证模式 80\n6.1.4 http和cookie身份验证模式 82\n6.2 用户管理，保护mysql 84\n6.2.1 保护mysql 85\n6.2.2 创建新用户 86\n6.3 创建和编辑数据库 88\n6.3.1 创建数据库 88\n6.3.2 编辑现有的数据表 89\n6.3.3 设置外键规则 90\n6.3.4 数据库设计方案的汇总和存档 90\n6.4 查看、插入和编辑数据 91\n6.5 执行sql命令 92\n6.6 导入和导出 93\n6.6.1 数据库备份（sql文件） 93\n6.6.2 导出数据表（csv文本文件） 95\n6.6.3 导入数据库或数据表（sql文件） 95\n6.6.4 插入数据表数据（文本文件） 96\n6.7 服务器管理 96\n6.8 辅助功能 97\n6.8.1 为phpmyadmin创建数据库 97\n6.8.2 sql书签和历史记录 98\n6.8.3 关联\/引用关系信息的保存 98\n6.8.4 创建pdf格式的数据表关联\/引用关系图 100\n6.8.5 格式转换（数据列内容的另类显示效果） 101\n第7章 microsoft office和openoffice\/staroffice 103\n7.1 安装connector\/odbc 103\n7.2 microsoft access 106\n7.2.1 数据表的导入和导出 107\n7.2.2 数据库转换器：access→mysql（exportsql.txt） 109\n7.3 microsoft excel 110\n7.4 安装connector\/j 112\n7.4.1 connector\/j 112\n7.4.2 安装 112\n7.5 openoffice\/staroffice base 113\n7.5.1 与mysql数据库建立连接 113\n7.5.2 table模块 114\n7.5.3 queries模块 115\n7.5.4 forms模块、rerports模块和其他功能 116\n7.6 openoffice\/staroffice的data source视图 117\n7.6.1 建立数据源 118\n7.6.2 数据的导入 118\n第三部分 基础知识\n第8章 数据库设计概论 120\n8.1 参考读物 120\n8.2 数据表类型 121\n8.2.1 myisam数据表 121\n8.2.2 innodb数据表 122\n8.2.3 heap数据表 123\n8.2.4 临时数据表 124\n8.2.5 其他的数据表类型 124\n8.2.6 数据表文件 125\n8.3 mysql数据类型 126\n8.3.1 整数（xxxint） 126\n8.3.2 定点数（decimal） 127\n8.3.3 日期与时间（date、time、datetime、timestamp） 128\n8.3.4 字符串（char、varchar、xxxtext） 130\n8.3.5 二进制数据（xxxblob和bit） 133\n8.3.6 选项和属性 135\n8.4 数据库设计技巧 135\n8.4.1 数据库设计要求 135\n8.4.2 起名字的技巧 136\n8.4.3 数据库具体设计工作中的技巧 136\n8.5 规范化 137\n8.5.1 起点 137\n8.5.2 第一范式 138\n8.5.3 第二范式 139\n8.5.4 第三范式 140\n8.5.5 规范化理论 141\n8.6 层次关系的处理 143\n8.6.1 层次关系的处理难点 144\n8.6.2 从数据表创建层次关系树 145\n8.6.3 搜索categories数据表里的下级图书门类 147\n8.6.4 搜索categories数据表里的上级图书门类 148\n8.7 关系 149\n8.7.1 1:1关系 149\n8.7.2 1:n关系 150\n8.7.3 n:m关系 151\n8.8 主键和外键 151\n8.8.1 主键 151\n8.8.2 外键 152\n8.8.3 引用一致性（外键约束条件） 153\n8.9 索引 156\n8.9.1 普通索引、唯一索引和主索引 157\n8.9.2 全文索引 158\n8.9.3 查询和索引的优化 159\n8.10 视图 161\n8.11 示例数据库mylibrary（图书管理） 163\n8.11.1 数据库的属性 164\n8.11.2 数据表的属性 164\n8.12 示例数据库myforum（网上论坛） 165\n8.12.1 讨论组数据库：myforum 165\n8.12.2 帖子之间的层次关系 166\n8.13 示例数据库exceptions（用于特殊情况的测试） 167\n8.13.1 数据表testall 167\n8.13.2 数据表text_text 168\n8.13.3 数据表test_blob 168\n8.13.4 数据表test_date 168\n8.13.5 数据表test_enum 168\n8.13.6 数据表test_null 168\n8.13.7 数据表test_sort1 168\n8.13.8 数据表test_sort2 169\n8.13.9 数据表importtable1、importtable2、exporttable 169\n第9章 sql语言入门 170\n9.1 简介 170\n9.2 简单查询（select） 171\n9.2.1 确定数据表里有多少条数据记录（数据行） 172\n9.2.2 确定数据表里有多少条内容不重复的数据记录（distinct） 172\n9.2.3 限制查询结果中的数据列个数 172\n9.2.4 限制查询结果中的数据记录个数（limit） 173\n9.2.5 在使用limit关键字确定数据表里的数据记录数（sql_calc_found_rows、found_rows()） 173\n9.3 对查询结果进行排序（order by） 174\n9.3.1 选择一种排序方式 174\n9.3.2 试用不同的排序方式 175\n9.4 筛选数据记录（where，having） 176\n9.5 涉及多个数据表的关联查询（left\/right join） 177\n9.5.1 两个数据表的关联 178\n9.5.2 3个或更多个数据表的关联 179\n9.6 合并查询结果（union） 181\n9.7 分组查询，统计函数（group by） 181\n9.7.1 统计函数 182\n9.7.2 统计函数group_concat() 183\n9.7.3 对多个数据列进行group by查询 184\n9.7.4 group by...with rollup 184\n9.8 修改数据（insert、update和delete） 185\n9.8.1 备份数据 185\n9.8.2 插入数据记录（insert） 186\n9.8.3 修改数据记录（update） 188\n9.8.4 删除数据记录（delete） 188\n9.9 创建数据表、数据库和索引 190\n9.9.1 创建数据库（create database） 190\n9.9.2 创建数据表（create table） 191\n9.9.3 创建索引（create index） 192\n9.9.4 变更数据表的结构（alter table） 192\n9.9.5 删除数据库和数据表（drop） 193\n9.9.6 自动修改数据表设计（默许的数据列修改） 193\n9.9.7 show命令 194\n9.9.8 information_schema数据表家族 195\n第10章 sql解决方案 197\n10.1 字符串 197\n10.1.1 基本函数 197\n10.1.2 改变字符集 198\n10.1.3 设置客户端字符集 199\n10.1.4 模板匹配 200\n10.2 日期和时间 201\n10.2.1 日期和时间的语法 201\n10.2.2 与日期和时间有关的计算 202\n10.2.3 unix时间戳 204\n10.2.4 地理时区 206\n10.3 enum和set数据类型 208\n10.3.1 enum 208\n10.3.2 set 209\n10.4 变量与条件表达式（if、case） 209\n10.4.1 变量 210\n10.4.2 if查询 211\n10.4.3 case分支 211\n10.5 在数据表间复制数据 212\n10.5.1 利用复制操作创建新数据表 212\n10.5.2 把数据复制到现有数据表 213\n10.6 统计报表 213\n10.6.1 涉及titles、languages和cate-gories数据表的统计报表 214\n10.6.2 月度查询统计报表 215\n10.7 子查询 216\n10.7.1 语法变体 216\n10.7.2 示例 218\n10.8 保证数据的一致性 219\n10.8.1 找出没有作者的图书 219\n10.8.2 找出无效的出版公司引用：1:n关系中的无效记录 219\n10.8.3 找出作者与图书之间的无效链接（n:m关系） 220\n10.9 找出冗余的数据记录 221\n10.10 数据表设计方案的改进 221\n10.11 对前n条或后n条记录进行处理 223\n10.11.1 数据查询（select） 223\n10.11.2 修改现有记录（update和delete） 224\n10.11.3 把全部讨论线程删除到只剩下最新的500个线程 224\n10.12 以随机方式选择数据记录 225\n10.12.1 通用方法：rand()函数 225\n10.12.2 自备随机数的数据表 225\n10.12.3 利用id数据列选择随机记录 226\n10.13 全文索引 226\n10.13.1 基础知识 227\n10.13.2 图书检索 229\n10.13.3 论坛文章检索 231\n10.14 锁定 232\n10.14.1 语法 232\n10.14.2 get_lock和release_ lock函数 233\n10.15 事务 233\n10.15.1 为什么要使用事务 233\n10.15.2 事务的控制 234\n10.15.3 事务机制的工作流程 235\n10.15.4 事务与锁定 237\n10.15.5 事务的隔离模式 238\n10.15.6 出错处理 240\n第11章 访问权限与信息安全 241\n11.1 简介 241\n11.1.1 客户与mysql服务器之间的连接 241\n11.1.2 访问管理 242\n11.2 急救 246\n11.2.1 保护mysql安装 246\n11.2.2 创建新的数据库和用户 247\n11.2.3 授予创建个人数据库的权限 248\n11.2.4 忘记root密码情况的处理 249\n11.3 访问控制机制的内部工作原理 250\n11.3.1 两级访问控制 250\n11.3.2 权限 250\n11.3.3 mysql数据库 253\n11.3.4 user数据表 254\n11.3.5 user.host数据列 257\n11.3.6 db数据表和host数据表 260\n11.3.7 tables_priv和columns_priv数据表 261\n11.3.8 procs_priv数据表 263\n11.4 访问权限的设置工具 263\n11.4.1 使用grant和revoke命令改变访问权限 263\n11.4.2 使用show grant命令查看访问权限 265\n11.4.3 使用mysqladmin程序改变密码 265\n11.5 mysql 4.1版本开始的安全密码验证 265\n11.5.1 升级客户端函数库 266\n11.5.2 old-passwords模式 266\n11.5.3 同时使用旧的和新的密码的操作 266\n11.6 建立连接的问题 267\n11.6.1 连接困难的可能原因 267\n11.6.2 错误检查的更多方法 270\n11.7 系统安全性 270\n11.7.1 系统级安全措施 270\n11.7.2 重要数据存储的安全保护 271\n11.7.3 与mysql服务器有关的安全风险 271\n11.7.4 不要使用root或administrator权限来运行mysql服务器 271\n11.7.5 网络安全与防火墙 272\n第12章 gis函数 273\n12.1 gis数据格式 273\n12.1.1 地理坐标的表示方法 273\n12.1.2 well-known text和well- known binary（opengis） 274\n12.2 mysql的gis实现 275\n12.2.1 数据类型 275\n12.2.2 简单的几何函数 277\n12.2.3 空间分析函数 279\n12.2.4 为几何数据创建索引 281\n12.3 sql示例（冰川数据库） 281\n12.3.1 创建数据表 282\n12.3.2 插入数据 282\n12.3.3 查询数据 282\n12.4 sql示例（opengeodb数据库） 284\n12.4.1 数据来源和导入 285\n12.4.2 导入 285\n12.4.3 对圆形地理区域进行搜索 286\n第13章 存储过程和触发器 288\n13.1 为什么要使用存储过程和触发器 288\n13.1.1 存储过程 288\n13.1.2 触发器 289\n13.2 初识sp 289\n13.2.1 mysql命令解释器：mysql程序 290\n13.2.2 mysql query browser 291\n13.3 sp的实现 292\n13.4 sp的管理 293\n13.4.1 创建、编辑和删除sp 293\n13.4.2 信息安全问题 295\n13.4.3 sp的备份和恢复 295\n13.5 sp的语法和语言元素 296\n13.5.1 基本语法规则 296\n13.5.2 调用sp（call） 297\n13.5.3 参数和返回值 298\n13.5.4 命令的封装（begin -end） 299\n13.5.5 分支 301\n13.5.6 循环 301\n13.5.7 出错处理（出错处理句柄） 302\n13.5.8 光标 304\n13.6 sp应用示例 306\n13.6.1 增加新的图书门类 306\n13.6.2 增加一本新图书 307\n13.6.3 确定父门类 308\n13.6.4 按层次结构生成图书门类清单 309\n13.7 触发器 311\n13.7.1 创建触发器 311\n13.7.2 删除触发器 312\n13.7.3 实现细节和管理工具 312\n13.7.4 功能局限性 312\n13.7.5 触发器应用示例 313\n第14章 管理与服务器配置 314\n14.1 基础知识 314\n14.1.1 mysql数据库系统的管理工具 314\n14.1.2 设置root密码 315\n14.1.3 mysql服务器配置文件 316\n14.1.4 重新启动mysql服务器 316\n14.1.5 mysql服务器的基本配置 317\n14.1.6 目录 317\n14.1.7 通信设置 317\n14.1.8 默认的数据表格式 318\n14.1.9 新数据表的默认字符集和排序方式 318\n14.1.10 地理时区 318\n14.1.11 出错消息的显示语言 319\n14.1.12 sql模式 319\n14.2 备份 321\n14.2.1 备份数据库（mysqldump） 321\n14.2.2 用备份恢复数据库（mysql） 324\n14.2.3 快速备份（mysqlhotcopy） 325\n14.3 数据库的迁移 327\n14.4 导出和导入文本文件 329\n14.4.1 文本文件里的特殊字符 329\n14.4.2 字符串、数值、日期\/时间、blob和null值 330\n14.4.3 用load data infile命令导入 330\n14.4.4 用mysqlimport工具导入 333\n14.4.5 用select ... into outfile命令导出 333\n14.4.6 用mysqldump程序导出 335\n14.4.7 用mysql程序的批处理模式导出 335\n14.5 日志 337\n14.5.1 为什么要使用日志 337\n14.5.2 缺点与不足 338\n14.5.3 变更日志（update log） 338\n14.5.4 出错日志、登录日志和慢查询日志 340\n14.5.5 日志文件的管理 342\n14.6 镜像机制 342\n14.6.1 简介 342\n14.6.2 建立镜像机制的主控系统 344\n14.6.3 建立镜像机制的从属系统 346\n14.6.4 用load data命令建立镜像机制 348\n14.6.5 内部镜像机制 348\n14.6.6 客户端编程 350\n14.7 管理myisam数据表 351\n14.7.1 myisamchk程序 351\n14.7.2 myisamchk程序的使用方法 352\n14.7.3 速度优化与内存使用情况 352\n14.7.4 对myisam数据表进行压缩和优化 353\n14.7.5 修复受损的myisam数据表 353\n14.7.6 压缩myisam数据表（myisampack程序） 354\n14.8 innodb数据表的管理 354\n14.8.1 表空间的管理 354\n14.8.2 日志文件 359\n14.9 mysql服务器的优化 362\n14.9.1 优化内存管理 363\n14.9.2 查询缓存区 364\n14.10 isp数据库管理 366\n14.10.1 ssh工具 366\n14.10.2 phpmyadmin工具 366\n14.10.3 实现自定义的php脚本 366\n14.10.4 自定义：perl脚本 367\n第四部分 程序设计\n第15章 php 370\n15.1 mysql功能模块 370\n15.1.1 连接mysql服务器 371\n15.1.2 执行sql命令 372\n15.1.3 处理select查询结果 373\n15.1.4 事务 376\n15.1.5 出错处理与查找 376\n15.2 mysqli的类、方法和属性 377\n15.2.1 选择编程接口：mysql还是mysqli 377\n15.2.2 有效性测试 378\n15.2.3 构成mysqli接口的类 378\n15.2.4 连接mysql服务器 378\n15.2.5 执行sql命令 380\n15.2.6 处理select查询结果（mysqli_result()方法） 380\n15.2.7 一次执行多条sql命令 382\n15.2.8 带参数的sql命令（预处理语句） 382\n15.2.9 事务 385\n15.3 把数据库功能打包为一个类 385\n15.3.1 使用单独的密码文件提高安全性 385\n15.3.2 使用mydb类实现安全和方便 386\n15.4 把select查询结果显示为一个表格 389\n15.5 字符串、日期、时间、blob和null 390\n15.5.1 字符串和blob 390\n15.5.2 日期和时间 391\n15.5.3 null值 392\n15.6 向关联数据表插入新数据记录 393\n15.7 处理来自html表单的输入数据 393\n15.7.1 代码结构 394\n15.7.2 创建html表单 396\n15.7.3 对表单数据进行合法性检查 400\n15.7.4 把表单数据存入数据库 401\n15.7.5 删除一本图书 403\n15.7.6 值得改进的地方 404\n15.8 分页显示查询结果 404\n15.8.1 代码结构 405\n15.8.2 对图书作者进行搜索 407\n15.8.3 对图书进行搜索 408\n15.8.4 显示搜索结果 408\n15.8.5 指向其他结果页面的链接 410\n15.9 处理层次化数据 410\n15.9.1 代码结构 411\n15.9.2 显示图书门类树 413\n15.9.3 插入一个或多个新图书门类 415\n15.9.4 删除一个图书门类及其下级门类 416\n15.9.5 搜索上级图书门类 417\n15.9.6 搜索下级图书门类 418\n15.10 速度优化 419\n15.10.1 提高代码执行效率的基本原则 419\n15.10.2 统计信息和性能指标 420\n15.10.3 示例：高效地生成图书门类下拉列表 421\n15.11 unicode 424\n15.12 二进制数据（blob）和图像 428\n15.12.1 在数据库里存储图像的基础知识与编程技巧 429\n15.12.2 在数据库里存储图像的程序代码 431\n15.13 存储过程 434\n15.14 sp administrator 435\n15.14.1 安装sp administrator 435\n15.14.2 使用sp administrator 435\n15.14.3 sp administrator代码 436\n第16章 perl 441\n16.1 编程技巧 441\n16.1.1 dbi和dbd::mysql模块 441\n16.1.2 与数据库建立连接 442\n16.1.3 执行sql命令 443\n16.1.4 处理select查询结果 445\n16.1.5 字符串、blob、日期值、set、enum和null 449\n16.1.6 dbd::mysql模块特有的方法和属性 452\n16.1.7 unicode 453\n16.1.8 事务 454\n16.1.9 出错处理 454\n16.2 示例：删除无效的数据记录（mylibrary） 456\n16.3 cgi示例：图书管理（mylibrary） 457\n16.3.1 图书检索（mylibrary-find.pl脚本） 457\n16.3.2 新图书的简单输入（mylibrary-simpleinput.pl脚本） 460\n16.4 cgi unicode示例 462\n16.4.1 图书检索（mylibrary-find-utf8.pl脚本） 462\n16.4.2 新图书的输入（mylibrary-simpleinput-utf8.pl脚本） 463\n第17章 java（jdbc和connector\/j） 464\n17.1 基础知识 464\n17.1.1 java的安装 464\n17.1.2 connector\/j的安装 466\n17.2 程序设计技巧 468\n17.2.1 第一个示例 469\n17.2.2 与mysql服务器建立连接 470\n17.2.3 连接mysql服务器时可能遇到的问题 472\n17.2.4 执行sql命令 473\n17.2.5 处理select查询结果 474\n17.2.6 预处理语句 478\n17.2.7 事务 479\n17.2.8 批处理命令 479\n17.2.9 二进制数据（blob）的处理 480\n第18章 c语言 483\n18.1 mysql c api（libmysqlclient） 483\n18.2 hello，world 483\n18.2.1 对系统的基本要求 483\n18.2.2 入门级示例 484\n18.2.3 编译与链接 485\n18.2.4 makefile 486\n18.2.5 以静态方式绑定mysql api函数 486\n18.3 与mysql服务器建立连接 487\n18.3.1 处理mysql配置文件my.cnf 488\n18.3.2 处理命令行选项 488\n18.4 执行sql命令 489\n18.4.1 简单的sql命令 489\n18.4.2 一次执行多条sql命令 490\n18.4.3 预处理语句 493\n18.4.4 字符集设置（unicode） 497\n18.5 处理二进制数据和特殊字符 498\n18.6 出错处理 500\n第19章 visual basic 6\/vba 501\n19.1 基础知识和术语 501\n19.2 connector\/odbc选项 503\n19.3 ado程序设计与visual basic 6\/vba 504\n19.4 与mysql服务器建立连接 506\n19.4.1 与mysql服务器建立连接：使用dsn 506\n19.4.2 与mysql服务器建立连接（不使用dsn） 506\n19.4.3 ado程序设计技巧 509\n19.4.4 示例：给titles数据表增加一个authors数据列 514\n19.4.5 示例：添加一本新图书 517\n19.4.6 示例：把图像文件存入和读出blob数据列 519\n19.5 转换器：从microsoft sql server到mysql 521\n19.5.1 mssql2mysql脚本的特点 521\n19.5.2 对系统的要求 521\n19.5.3 缺陷与不足 521\n19.5.4 使用方法 522\n19.5.5 设置有关参数 522\n19.6 vbmysqldirect 523\n19.6.1 安装 524\n19.6.2 应用 524\n19.6.3 示例 524\n第20章 visual basic .net和c# 526\n20.1 ado .net与mysql之间的通信 526\n20.1.1 通过connector\/net连接数据库 527\n20.1.2 用odbc数据泵连接数据库 530\n20.2 编程技巧 532\n20.2.1 执行sql命令（mysql-command对象） 532\n20.2.2 带参数的sql命令（mysql - parameter对象） 533\n20.2.3 处理离散的select查询结果（executescalar()方法） 535\n20.2.4 读取select查询结果（mysqldatareader对象） 535\n20.2.5 dataset、datatable和mysqldataadapter对象 537\n20.2.6 辅助函数 540\n20.2.7 出错处理 540\n20.2.8 windows.form和asp .net控件 540\n20.2.9 事务 542\n20.3 示例：把新图书记录存入mylibrary数据库 542\n20.4 示例：把图像文件存入和读出一个blob数据列 544\n第五部分 参考资料\n第21章 sql语法指南 548\n21.1 语法 548\n21.1.1 对象命名规则 548\n21.1.2 区分字母大小写 549\n21.1.3 字符串 549\n21.1.4 字符集和排序方式 550\n21.1.5 数值 550\n21.1.6 数值和字符串的自动转换 550\n21.1.7 日期和时间 551\n21.1.8 二进制数据 551\n21.1.9 二进制数值 551\n21.1.10 注释语句 551\n21.1.11 sql命令末尾的分号 552\n21.2 操作符 552\n21.2.1 算术操作符与位操作符 553\n21.2.2 比较操作符 553\n21.2.3 使用like操作符进行模式匹配 553\n21.2.4 使用regexp操作符进行模式匹配 554\n21.2.5 二进制字符串比较 554\n21.2.6 逻辑操作符 555\n21.3 变量和常数 555\n21.3.1 变量赋值 555\n21.3.2 使用和查看变量 555\n21.3.3 全局级系统变量与会话级系统变量 556\n21.3.4 set password命令 556\n21.3.5 结构化变量 556\n21.3.6 常数 557\n21.4 mysql数据类型 557\n21.5 sql命令汇总表（按功能分类） 559\n21.6 sql命令指南（按字母表顺序排列） 561\n21.7 sql函数指南 596\n21.7.1 算术函数 596\n21.7.2 比较函数、测试函数、分支函数 597\n21.7.3 类型转换（投射） 597\n21.7.4 字符串处理 597\n21.7.5 日期\/时间函数 600\n21.7.6 group by函数 604\n21.7.7 其他函数 605\n21.8 gis数据类型与gis函数 606\n21.9 与存储过程和触发器有关的语言元素 608\n第22章 mysql工具和选项 610\n22.1 概述 610\n22.2 通用选项和配置文件 610\n22.2.1 通用选项 610\n22.2.2 设置配置文件的选项 612\n22.2.3 内存量的表示方法 613\n22.2.4 环境变量（系统变量） 613\n22.2.5 选项设置规则 614\n22.3 mysqld程序（服务器） 614\n22.3.1 基本选项 615\n22.3.2 与日志和镜像功能有关的选项 617\n22.3.3 innodb配置选项 618\n22.3.4 其他选项 620\n22.4 mysqld_safe脚本（启动mysql服务器） 620\n22.5 mysql_install_db脚本（安装mysql数据库） 621\n22.6 mysql_fix_privileges脚本（更新mysql数据库） 622\n22.7 mysql_fix_extensions脚本（重命名myisam文件） 622\n22.8 mysql程序（sql命令解释器） 622\n22.9 mysqladmin程序（日常管理） 624\n22.10 mysqldump程序（数据的备份\/导出） 625\n22.11 mysqlimport程序（文本导入、批量导入） 628\n22.12 mysqlshow程序（查看信息） 628\n22.13 myisamchk程序（修复myisam文件） 629\n22.14 myisampack程序（压缩myisam文件） 630\n第23章 mysql api应用指南 632\n23.1 php api（mysql接口） 632\n23.2 php api（mysqli接口） 635\n23.2.1 mysqli类 636\n23.2.2 mysqli_result类 637\n23.2.3 mysqli_stmt类 638\n23.3 perl dbi 638\n23.3.1 常用的变量名 638\n23.3.2 与mysql服务器建立连接 639\n23.3.3 执行sql命令、处理select查询结果 640\n23.3.4 出错处理 642\n23.3.5 辅助函数 642\n23.3.6 dbd::mysql驱动程序中的mysql专用扩展模块 642\n23.4 jdbc（connector\/j） 644\n23.4.1 与mysql服务器建立连接 644\n23.4.2 执行sql命令 644\n23.4.3 处理select查询结果（resultset类） 646\n23.4.4 事务 647\n23.5 ado .net（connector\/net） 647\n23.5.1 与mysql服务器建立连接 647\n23.5.2 执行sql命令与处理select查询结果 648\n23.5.3 利用dataset\/datatable类修改数据 649\n23.5.4 事务 650\n23.6 c api 650\n23.6.1 数据结构 650\n23.6.2 连接与管理 652\n23.6.3 执行sql命令及处理select查询结果 654\n23.6.4 预处理语句 656\n第六部分 附录\n附录a 术语解释 658\n附录b 本书的配套示例文件 663\n附录c 参考书目 664",
      "pages": "662",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s9126076.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s9126076.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s9126076.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/1909003\/",
      "id": "1909003",
      "publisher": "人民邮电出版社",
      "isbn10": "711515337X",
      "isbn13": "9787115153371",
      "title": "MySQL 5 权威指南-(第3版)",
      "url": "https:\/\/api.douban.com\/v2\/book\/1909003",
      "alt_title": "The Definitive Guide to MySQL 5",
      "author_intro": "Michael Kofler在奥地利格拉茨技术大学获得计算机科学博士学位。他写了很多非常成功的计算机图书，内容涉及Visual Basic、Linux、Mathematica和Maple等多种程序没计语言和软件。Kofler还是Definitive Guide to Excel VBA第2版的作者。",
      "summary": "《MySQL 5 权威指南(第3版)》全面深入地介绍了MySQL的功能，主要内容包括MySQL、PHP、Apache、Perl等组件的安装与功能简介，mysql等一些重要系统管理工具和用户操作界面的使用，MySQL数据库系统设计的基础知识与用不同语言设计MySQL数据库的过程，以及SQL语法、工具、选项、API应用指南，最大限度地帮助读者更快地学习和掌握MySQL数据库系统的设计和使用。《MySQL 5 权威指南(第3版)》覆盖了MySQL 5.0，讨论了新的程序设计接口（如PHP 5里的mysqli）和新的系统管理工具。\n《MySQL 5 权威指南(第3版)》是MySQL数据库管理员和开发人员的必备参考书。",
      "price": "79.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 87,
        "average": "8.4",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Charlie Hunt",
        "Binu John"
      ],
      "pubdate": "2014-3",
      "tags": [
        {
          "count": 257,
          "name": "Java",
          "title": "Java"
        },
        {
          "count": 138,
          "name": "性能优化",
          "title": "性能优化"
        },
        {
          "count": 90,
          "name": "性能",
          "title": "性能"
        },
        {
          "count": 85,
          "name": "JVM",
          "title": "JVM"
        },
        {
          "count": 48,
          "name": "优化",
          "title": "优化"
        },
        {
          "count": 41,
          "name": "java",
          "title": "java"
        },
        {
          "count": 34,
          "name": "编程",
          "title": "编程"
        },
        {
          "count": 30,
          "name": "计算机",
          "title": "计算机"
        }
      ],
      "origin_title": "Java Performance",
      "image": "https://img1.doubanio.com\/mpic\/s27219217.jpg",
      "binding": "",
      "translator": [
        "柳飞",
        "陆明刚"
      ],
      "catalog": "第1章　策略、方法和方法论　　1\n1.1 　性能问题的现状　　1\n1.2 　性能分析的两种方法：自顶向下和自底向上　　4\n1.2.1 　自顶向下　　4\n1.2.2 　自底向上　　5\n1.3 　选择正确的平台并评估系统性能　　5\n1.3.1 　选择正确的CPU架构　　6\n1.3.2 　评估系统性能　　7\n1.4 　参考资料　　7\n第2章　操作系统性能监控　　8\n2.1 　定义　　8\n2.2 　CPU使用率　　9\n2.2.1 　监控CPU使用率：Windows　　9\n2.2.2 　监控CPU使用率：Windows typeperf　　12\n2.2.3 　监控CPU使用率：Linux　　13\n2.2.4 　监控CPU使用率：Solaris　　14\n2.2.5 　命令行监控CPU使用率：Linux和Solaris　　16\n2.3 　CPU调度程序运行队列　　19\n2.3.1 　监控CPU调度程序运行队列：Windows　　19\n2.3.2 　监控CPU调度程序运行队列：Solaris　　21\n2.3.3 　监控CPU调度程序运行队列：Linux　　21\n2.4 　内存使用率　　22\n2.4.1 　监控内存利用率：Windows　　22\n2.4.2 　监控内存使用率：Solaris　　23\n2.4.3 　监控内存使用率：Linux　　24\n2.4.4 　监控锁竞争：Solaris　　25\n2.4.5 　监控锁竞争：Linux　　26\n2.4.6 　监控锁竞争：Windows　　27\n2.4.7 　隔离竞争锁　　27\n2.4.8 　监控抢占式上下文切换　　27\n2.4.9 　监控线程迁移　　28\n2.5 　网络I\/O使用率　　28\n2.5.1 　监控网络I\/O使用率：Solaris　　29\n2.5.2 　监控网络I\/O使用率：Linux　　30\n2.5.3 　监控网络I\/O使用率：Windows　　30\n2.5.4 　应用性能改进的考虑　　31\n2.6 　磁盘I\/O使用率　　31\n2.7 　其他命令行工具　　34\n2.8 　监控CPU使用率：SPARC T系列系统　　35\n2.9 　参考资料　　36\n第3章　JVM概览　　38\n3.1 　HotSpot VM的基本架构　　38\n3.2 　HotSpot VM运行时　　40\n3.2.1 　命令行选项　　40\n3.2.2 　VM生命周期　　41\n3.2.3 　VM类加载　　44\n3.2.4 　字节码验证　　46\n3.2.5 　类数据共享　　47\n3.2.6 　解释器　　48\n3.2.7 　异常处理　　49\n3.2.8 　同步　　50\n3.2.9 　线程管理　　51\n3.2.10 　C++堆管理　　53\n3.2.11 　Java本地接口　　54\n3.2.12 　VM致命错误处理　　55\n3.3 　HotSpot VM垃圾收集器　　56\n3.3.1 　分代垃圾收集　　56\n3.3.2 　新生代　　58\n3.3.3 　快速内存分配　　60\n3.3.4 　垃圾收集器　　60\n3.3.5 　Serial收集器　　61\n3.3.6 　Parallel收集器：吞吐量为先！　　62\n3.3.7　　Mostly-Concurrent收集器：低延迟为先！　　62\n3.3.8　　Garbage-First收集器：CMS替代者　　64\n3.3.9 　垃圾收集器比较　　64\n3.3.10 　应用程序对垃圾收集器的影响　　65\n3.3.11 　简单回顾收集器历史　　65\n3.4 　HotSpot VM JIT编译器　　65\n3.4.1 　类型继承关系分析　　67\n3.4.2 　编译策略　　67\n3.4.3 　逆优化　　68\n3.4.4 　Client JIT编译器概览　　69\n3.4.5 　Server JIT编译器概览　　69\n3.4.6 　静态单赋值——程序依赖图　　69\n3.4.7 　未来增强展望　　71\n3.5 　HotSpot VM自适应调优　　71\n3.5.1 　Java 1.4.2的默认值　　71\n3.5.2 　Java 5自动优化的默认值　　71\n3.5.3 　Java 6 Update 18更新后的默认优化值　　73\n3.5.4 　自适应Java堆调整　　74\n3.5.5 　超越自动优化　　75\n3.6 　参考资料　　75\n第4章　JVM性能监控　　77\n4.1 　定义　　77\n4.2 　垃圾收集　　78\n4.2.1 　重要的垃圾收集数据　　78\n4.2.2 　垃圾收集报告　　78\n4.2.3 　垃圾收集数据的离线分析　　86\n4.2.4 　图形化工具　　89\n4.3 　JIT编译器　　103\n4.4 　类加载　　104\n4.5 　Java应用监控　　106\n4.6 　参考资料　　109\n第5章　Java应用性能分析　　110\n5.1 　术语　　111\n5.1.1 　通用性能分析术语　　111\n5.1.2 　Oracle Solaris Studio Performance Analyzer术语　　112\n5.1.3 　NetBeans Profiler术语　　112\n5.2 　Oracle Solaris Studio Performance Analyzer　　112\n5.2.1 　支持平台　　113\n5.2.2 　下载\/安装Oracle Solaris Studio Performance Analyzer　　114\n5.2.3 　使用Oracle Solaris Studio Performance Analyzer 抓取性能数据　　114\n5.2.4 　查看性能数据　　118\n5.2.5 　数据表示　　125\n5.2.6 　过滤性能数据　　128\n5.2.7 　命令行工具er_print　　129\n5.3 　NetBeans Profiler　　135\n5.3.1 　支持平台　　136\n5.3.2 　下载安装NetBeans Profiler　　136\n5.3.3 　开始方法分析会话　　137\n5.3.4 　Controls子面板　　143\n5.3.5 　Status子面板　　143\n5.3.6 　Profiling Results子面板　　143\n5.3.7 　Saved Snapshots子面板　　144\n5.3.8 　View子面板　　144\n5.3.9 　Basic Telemetry子面板　　144\n5.3.10 　查看动态结果　　145\n5.3.11 　对结果进行快照　　145\n5.3.12 　启动内存分析会话　　146\n5.3.13 　查看实时结果　　148\n5.3.14 　对结果进行快照　　150\n5.3.15 　定位内存泄漏　　150\n5.3.16 　分析堆转储　　151\n5.4 　参考资料　　152\n第6章　Java应用性能分析技巧　　153\n6.1 　性能优化机会　　153\n6.2 　系统或内核态CPU使用　　154\n6.3 　锁竞争　　161\n6.4 　Volatile的使用　　171\n6.5 　调整数据结构的大小　　172\n6.5.1 　StringBuilder或StringBuffer大小的调整　　172\n6.5.2 　Java Collection类大小调整　　175\n6.6 　增加并行性　　179\n6.7 　过高的CPU使用率　　181\n6.8 　其他有用的分析提示　　182\n6.9 　参考资料　　184\n第7章　JVM性能调优入门　　185\n7.1 　方法　　185\n7.1.1 　假设条件　　187\n7.1.2 　测试基础设施需求　　188\n7.2 　应用程序的系统需求　　188\n7.2.1 　可用性　　188\n7.2.2 　可管理性　　188\n7.2.3 　吞吐量　　189\n7.2.4 　延迟及响应性　　189\n7.2.5 　内存占用　　189\n7.2.6 　启动时间　　189\n7.3 　对系统需求分级　　190\n7.4 　选择JVM部署模式　　190\n7.4.1 　单JVM部署模式　　190\n7.4.2 　多JVM部署模式　　190\n7.4.3 　通用建议　　191\n7.5 　选择JVM运行模式　　191\n7.5.1 　Client模式或Server模式　　191\n7.5.2 　32位\/64位 JVM　　192\n7.5.3 　垃圾收集器　　192\n7.6 　垃圾收集调优基础　　193\n7.6.1 　性能属性　　193\n7.6.2 　原则　　193\n7.6.3 　命令行选项及GC日志　　194\n7.7 　确定内存占用　　197\n7.7.1 　约束　　197\n7.7.2 　HotSpot VM堆的布局　　197\n7.7.3 　堆大小调优着眼点　　200\n7.7.4 　计算活跃数据大小　　201\n7.7.5 　初始堆空间大小配置　　202\n7.7.6 　其他考量因素　　203\n7.8 　调优延迟\/响应性　　204\n7.8.1 　输入　　205\n7.8.2 　优化新生代的大小　　205\n7.8.3 　优化老年代的大小　　207\n7.8.4 　为CMS调优延迟　　210\n7.8.5 　Survivor空间介绍　　212\n7.8.6 　解析晋升阈值　　214\n7.8.7 　监控晋升阈值　　215\n7.8.8 　调整Survivor空间的容量　　216\n7.8.9 　显式的垃圾收集　　222\n7.8.10 　并发永久代垃圾收集　　223\n7.8.11 　调优CMS停顿时间　　224\n7.8.12 　下一步　　225\n7.9 　应用程序吞吐量调优　　225\n7.9.1 　CMS吞吐量调优　　225\n7.9.2 　Throughput收集器调优　　226\n7.9.3 　Survivor空间调优　　228\n7.9.4 　调优并行垃圾收集线程　　231\n7.9.5 　在NUMA系统上部署　　231\n7.9.6 　下一步　　232\n7.10 　极端示例　　232\n7.11 　其他性能命令行选项　　232\n7.11.1 　实验性（最近最大）优化　　232\n7.11.2 　逃逸分析　　233\n7.11.3 　偏向锁　　233\n7.11.4 　大页面支持　　234\n7.12 　参考资料　　236\n第8章　Java应用的基准测试　　237\n8.1 　基准测试所面临的挑战　　237\n8.1.1 　基准测试的预热阶段　　238\n8.1.2 　垃圾收集　　240\n8.1.3 　使用Java Time接口　　240\n8.1.4 　剔除无效代码　　241\n8.1.5 　内联　　247\n8.1.6 　逆优化　　251\n8.1.7 　创建微基准测试的注意事项　　256\n8.2 　实验设计　　257\n8.3 　使用统计方法　　258\n8.3.1 　计算均值　　258\n8.3.2 　计算标准差　　258\n8.3.3 　计算置信区间　　259\n8.3.4 　使用假设测试　　260\n8.3.5 　使用统计方法的注意事项　　262\n8.4 　参考文献　　263\n8.5 　参考资料　　263\n第9章　多层应用的基准测试　　264\n9.1 　基准测试难题　　264\n9.2 　企业级应用基准测试的考量　　266\n9.2.1 　定义被测系统　　266\n9.2.2 　制定微基准测试　　266\n9.2.3 　定义用户交互模型　　267\n9.2.4 　定义性能指标　　270\n9.2.5 　扩展基准测试　　273\n9.2.6 　用利特尔法则验证　　274\n9.2.7 　思考时间　　275\n9.2.8 　扩展性分析　　278\n9.2.9 　运行基准测试　　278\n9.3 　应用服务器监控　　281\n9.3.1 　GlassFish监控　　281\n9.3.2 　监控子系统　　286\n9.3.3 　Solaris　　287\n9.3.4 　Linux　　288\n9.3.5 　Windows　　288\n9.3.6 　外部系统的性能　　289\n9.3.7 　磁盘I\/O　　292\n9.3.8 　监控和调优资源池　　293\n9.4 　企业级应用性能分析　　294\n9.5 　参考资料　　295\n第10章　Web应用的性能调优　　297\n10.1 　Web应用的基准测试　　298\n10.2 　Web容器的组件　　298\n10.2.1 　HTTP连接器　　299\n10.2.2 　Servlet引擎　　300\n10.3 　Web容器的监控和性能调优　　300\n10.3.1 　容器的开发和生产模式　　300\n10.3.2 　安全管理器　　301\n10.3.3 　JVM调优　　301\n10.3.4 　HTTP服务和Web容器　　303\n10.3.5 　HTTP监听器　　303\n10.4 　最佳实践　　315\n10.4.1 　Servlet和JSP最佳实践　　315\n10.4.2 　内容缓存　　324\n10.4.3 　会话持久化　　328\n10.4.4 　HTTP服务器文件缓存　　329\n10.5 　参考资料　　333\n第11章　Web Service的性能　　334\n11.1 　XML的性能　　334\n11.1.1 　XML处理的生命周期　　335\n11.1.2 　解析\/解编组　　335\n11.1.3 　访问　　338\n11.1.4 　修改　　338\n11.1.5 　序列化\/编组　　339\n11.2 　验证　　339\n11.3 　解析外部实体　　341\n11.4 　XML文档的局部处理　　343\n11.5 　选择合适的API　　346\n11.6 　JAX-WS参考实现栈　　349\n11.7 　Web Service基准测试　　350\n11.8 　影响Web Service性能的因素　　353\n11.8.1 　消息大小的影响　　353\n11.8.2 　不同Schema类型的性能特征　　355\n11.8.3 　终端服务器的实现　　358\n11.8.4 　处理程序的性能　　359\n11.9 　最佳性能实践　　361\n11.9.1 　二进制负载的处理　　361\n11.9.2 　处理XML文档　　365\n11.9.3 　使用MTOM发送XML文档　　365\n11.9.4 　使用Provider接口　　368\n11.9.5 　快速信息集　　370\n11.9.6 　HTTP压缩　　372\n11.9.7 　Web Service客户端的性能　　373\n11.10 　参考资料　　374\n第12章　Java持久化及Enterprise Java Bean的性能　　375\n12.1 　EJB编程模型　　376\n12.2 　Java持久化API及其参考实现　　376\n12.3 　监控及调优EJB容器　　379\n12.3.1 　线程池　　380\n12.3.2 　Bean池和缓存　　382\n12.3.3 　EclipseLink会话缓存　　385\n12.4 　事务隔离级　　386\n12.5 　Enterprise Java Bean的最佳实践　　387\n12.5.1 　简要说明使用的EJB基准测试　　387\n12.5.2 　EJB 2.1　　388\n12.5.3 　EJB 3.0　　400\n12.6 　Java持久化最佳实践　　403\n12.6.1 　JPA查询语言中的查询　　403\n12.6.2 　查询结果缓存　　405\n12.6.3 　FetchType　　406\n12.6.4 　连接池　　408\n12.6.5 　批量更新　　409\n12.6.6 　选择正确的数据库锁策略　　411\n12.6.7 　不带事务的读取　　411\n12.6.8 　继承　　411\n12.7 　参考资料　　412\n附录A 　重要的HotSpot VM选项　　413\n附录B 　性能分析技巧示例源代码　　429\nB.1 　锁竞争实现1　　429\nB.2 　锁竞争实现2　　439\nB.3 　锁竞争实现3　　449\nB.4 　锁竞争实现4　　459\nB.5 　锁竞争实现5　　469\nB.6 　调整容量变化1　　481\nB.7 　调整容量变化2　　492\nB.8 　增加并发性的单线程实现　　504\nB.9 　增加并发性的多线程实现　　514\n",
      "pages": "540",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s27219217.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s27219217.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s27219217.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/25828043\/",
      "id": "25828043",
      "publisher": "人民邮电出版社",
      "isbn10": "7115342970",
      "isbn13": "9787115342973",
      "title": "Java性能优化权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/25828043",
      "alt_title": "Java Performance",
      "author_intro": "Charlie Hunt现任Salesforce公司的性能工程架构师。曾任Oracle公司首席JVM性能工程师，负责HotSpot Java虚拟机和Java SE类库性能的改进。Charlie拥有美国伊利诺伊理工大学的计算机科学硕士学位、爱荷华州立大学的计算机科学学士学位。\nBinu John是世界上最大的社交网站创建平台Ning.com的高级性能工程师。他目前的职责是着力改善Ning平台的性能和扩展性，以支持每月数百万PV的访问量。Binu拥有美国爱荷华大学生物医学工程和计算机科学硕士学位。",
      "summary": "Java性能优化圣经！Java之父重磅推荐！\n本书由曾任职于Oracle\/Sun的性能优化专家编写，系统而详细地讲解了性能优化的各个方面，帮助你学习Java虚拟机的基本原理、掌握一些监控Java程序性能的工具，从而快速找到程序中的性能瓶颈，并有效改善程序的运行性能。\nJava性能优化的任何问题，都可以从本书中找到答案！",
      "price": "109.00 元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 158,
        "average": "8.5",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "[美] Bill Phillips",
        "[美] Brian Hardy"
      ],
      "pubdate": "2014-4-1",
      "tags": [
        {
          "count": 176,
          "name": "Android",
          "title": "Android"
        },
        {
          "count": 105,
          "name": "android",
          "title": "android"
        },
        {
          "count": 78,
          "name": "编程",
          "title": "编程"
        },
        {
          "count": 44,
          "name": "移动开发",
          "title": "移动开发"
        },
        {
          "count": 40,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 23,
          "name": "软件开发",
          "title": "软件开发"
        },
        {
          "count": 14,
          "name": "程序设计",
          "title": "程序设计"
        },
        {
          "count": 11,
          "name": "图灵,android",
          "title": "图灵,android"
        }
      ],
      "origin_title": "Android programming: the big nerd ranch guide",
      "image": "https://img3.doubanio.com\/mpic\/s28342615.jpg",
      "binding": "平装",
      "translator": [
        "王明发"
      ],
      "catalog": "第1章　Android应用初体验　　1\n1.1 　应用基础　　2\n1.2 　创建Android项目　　2\n1.3 　Eclipse工作区导航　　5\n1.4 　用户界面设计　　6\n1.4.1 　视图层级结构　　9\n1.4.2 　组件属性　　10\n1.4.3 　创建字符串资源　　11\n1.4.4 　预览界面布局　　12\n1.5 　从布局XML到视图对象　　13\n1.6 　组件的实际应用　　15\n1.6.1 　类包组织导入　　16\n1.6.2 　引用组件　　16\n1.6.3 　设置监听器　　17\n1.7 　使用模拟器运行应用　　21\n1.8 　Android编译过程　　22\n第2章　Android与MVC设计模式　　26\n2.1 　创建新类　　26\n2.2 　Android与MVC设计模式　　30\n2.3 　更新视图层　　31\n2.4 　更新控制层　　33\n2.5 　在设备上运行应用　　37\n2.5.1 　连接设备　　37\n2.5.2 　配置设备用于应用开发　　38\n2.6 　添加图标资源　　38\n2.6.1 　向项目中添加资源　　39\n2.6.2 　在XML文件中引用资源　　40\n2.7 　关于挑战练习　　41\n2.8 　挑战练习一：为TextView添加监听器　　41\n2.9 　挑战练习二：添加后退按钮　　42\n2.10 　挑战练习三：从按钮到图标按钮　　42\n第3章　Activity的生命周期　　45\n3.1 　日志跟踪理解Activity生命周期　　46\n3.1.1 　输出日志信息　　46\n3.1.2 　使用 LogCat　　48\n3.2 　设备旋转与Activity生命周期　　52\n3.3 　设备旋转前保存数据　　56\n3.4 　再探Activity生命周期　　57\n3.5 　深入学习：测试onSaveInstanceState-(Bundle)方法　　59\n3.6 　深入学习：日志记录的级别与方法　　60\n第4章　Android应用的调试　　62\n4.1 　DDMS应用调试透视图　　63\n4.2 　异常与栈跟踪　　64\n4.2.1 　诊断应用异常　　65\n4.2.2 　记录栈跟踪日志　　66\n4.2.3 　设置断点　　68\n4.2.4 　使用异常断点　　71\n4.3 　文件浏览器　　72\n4.4 　Android特有的调试工具　　73\n4.4.1 　使用Android Lint　　73\n4.4.2 　R类的问题　　74\n第5章　第二个activity　　75\n5.1 　创建第二个activity　　76\n5.1.1 　创建新布局　　77\n5.1.2 　创建新的activity子类　　80\n5.1.3 　在manifest配置文件中声明activity　　81\n5.1.4 　为QuizActivity添加cheat按钮　　82\n5.2 　启动activity　　83\n5.3 　activity间的数据传递　　85\n5.3.1 　使用intent extra　　86\n5.3.2 　从子activity获取返回结果　　88\n5.4 　activity的使用与管理　　92\n5.5 　挑战练习　　95\n第6章　Android SDK版本与兼容　　96\n6.1 　Android SDK版本　　96\n6.2 　Android编程与兼容性问题　　97\n6.2.1 　全新的系统版本——Honeycomb　　97\n6.2.2 　SDK最低版本　　99\n6.2.3 　SDK目标版本　　99\n6.2.4 　SDK编译版本　　99\n6.2.5 　安全添加新版本API中的代码　　100\n6.3 　使用Android开发者文档　　103\n6.4 　挑战练习：报告编译版本　　105\n第7章　UI fragment与fragment 管理器　　106\n7.1 　UI设计的灵活性需求　　107\n7.2 　fragment的引入　　107\n7.3 　着手开发CriminalIntent　　108\n7.3.1 　创建新项目　　110\n7.3.2 　fragment与支持库　　112\n7.3.3 　创建Crime类　　113\n7.4 　托管UI fragment　　115\n7.4.1 　fragment的生命周期　　115\n7.4.2 　托管的两种方式　　116\n7.4.3 　定义容器视图　　116\n7.5 　创建UI fragment　　117\n7.5.1 　定义CrimeFragment的布局　　118\n7.5.2 　创建CrimeFragment类　　119\n7.6 　添加UI fragment到FragmentManager　　122\n7.6.1 　fragment事务　　123\n7.6.2 　FragmentManager与fragment生命周期　　125\n7.7 　activity使用fragment的理由　　127\n7.8 　深入学习：Honeycomb、ICS、Jelly Bean以及更高版本系统上的应用开发　　127\n第8章　使用布局与组件创建用户界面　　128\n8.1 　升级Crime类　　128\n8.2 　更新布局　　129\n8.3 　生成并使用组件　　131\n8.4 　深入探讨XML布局属性　　132\n8.4.1 　样式、主题及主题属性　　132\n8.4.2 　dp、sp以及屏幕像素密度　　133\n8.4.3 　Android开发设计原则　　134\n8.4.4 　布局参数　　135\n8.4.5 　边距与内边距　　135\n8.5 　使用图形布局工具　　136\n8.5.1 　添加新组件　　138\n8.5.2 　属性视图中编辑组件属性　　138\n8.5.3 　在框架视图中重新组织组件　　139\n8.5.4 　更新子组件的布局参数　　140\n8.5.5　　android:layout_weight属性的工作原理　　141\n8.5.6 　图形布局工具使用总结　　142\n8.5.7 　组件ID与多种布局　　142\n8.6 　挑战练习：日期格式化　　143\n第9章　使用ListFragment显示列表　　144\n9.1 　更新CriminalIntent应用的模型层　　145\n9.2 　创建ListFragment　　147\n9.3 　使用抽象activity托管fragment　　149\n9.3.1 　通用的fragment托管布局　　149\n9.3.2 　抽象activity类　　150\n9.4 　ListFragment、ListView及ArrayAdapter　　154\n9.4.1 　创建ArrayAdapter<T>类实例　　157\n9.4.2 　响应列表项的点击事件　　159\n9.5 　定制列表项　　160\n9.5.1 　创建列表项布局　　160\n9.5.2 　创建adapter子类　　162\n第10章　使用fragment argument　　165\n10.1 　从fragment中启动activity　　165\n10.1.1 　附加extra信息　　166\n10.1.2 　获取extra信息　　167\n10.1.3 　使用Crime数据更新CrimeFragment视图　　167\n10.1.4 　直接获取extra信息方式的缺点　　169\n10.2 　fragment argument　　169\n10.2.1 　附加argument给fragment　　169\n10.2.2 　获取argument　　170\n10.3 　重新加载显示列表项　　171\n10.4 　通过fragment获取返回结果　　172\n第11章　使用ViewPager　　174\n11.1 　创建CrimePagerActivity　　175\n11.1.1 　以代码的方式定义并产生布局　　176\n11.1.2 　ViewPager与Pager-Adapter　　177\n11.1.3 　整合配置并使用CrimePagerActivity　　178\n11.1.4 　FragmentStatePager-Adapter与Fragment-PagerAdapter　　180\n11.2 　深入学习：ViewPager的工作原理　　182\n第12章　对话框　　184\n12.1 　创建DialogFragment　　186\n12.1.1 　显示DialogFragment　　187\n12.1.2 　设置对话框的显示内容　　188\n12.2 　fragment间的数据传递　　190\n12.2.1 　传递数据给DatePicker-Fragment　　191\n12.2.2 　返回数据给CrimeFragment　　193\n12.3 　挑战练习：更多对话框　　198\n第13章　使用MediaPlayer播放音频　　199\n13.1 　添加资源　　200\n13.2 　定义HelloMoonFragment布局文件　　202\n13.3 　创建HelloMoonFragment　　203\n13.4 　使用布局fragment　　204\n13.5 　音频播放　　205\n13.6 　挑战练习：暂停音频播放　　208\n13.7 　深入学习：播放视频　　208\n13.8 　挑战练习：在HelloMoon应用中播放视频　　208\n第14章　fragment的保留　　209\n14.1 　保留fragment实例　　209\n14.2 　设备旋转与保留的fragment　　210\n14.3 　保留的fragment：一切都完美了吗　　212\n14.4 　设备旋转处理与onSaveInstance-State(Bundle)方法　　212\n14.5 　深入学习：fragment引入前的设备旋转问题　　214\n第15章　应用本地化　　215\n15.1 　本地化资源　　215\n15.2 　配置修饰符　　216\n15.2.1 　可用资源优先级排定　　217\n15.2.2 　多重配置修饰符　　218\n15.2.3 　寻找最匹配的资源　　219\n15.3 　更多资源使用原则及控制　　220\n15.3.1 　资源命名　　220\n15.3.2 　资源目录结构　　220\n15.4 　测试备选资源　　221\n第16章　操作栏　　223\n16.1 　选项菜单　　223\n16.1.1 　在XML文件中定义选项菜单　　225\n16.1.2 　创建选项菜单　　227\n16.1.3 　响应菜单项选择　　230\n16.2 　实现层级式导航　　232\n16.2.1 　启用应用图标的导航功能　　232\n16.2.2 　响应向上按钮　　233\n16.3 　可选菜单项　　236\n16.3.1 　创建可选菜单XML文件　　236\n16.3.2 　切换菜单项标题　　237\n16.3.3 　“还有个问题”　　238\n16.4 　挑战练习：用于列表的空视图　　239\n第17章　存储与加载本地文件　　241\n17.1 　CriminalIntent应用的数据存取　　241\n17.1.1 　保存crime数据到JSON文件　　242\n17.1.2 　从文件中读取crime数据　　246\n17.2 　挑战练习：使用外部存储　　248\n17.3 　深入学习：Android文件系统与Java I\/O　　248\n第18章　上下文菜单与上下文操作模式　　250\n18.1 　定义上下文菜单资源　　251\n18.2 　实施浮动上下文菜单　　251\n18.2.1 　创建上下文菜单　　251\n18.2.2 　为上下文菜单登记视图　　252\n18.2.3 　响应菜单项选择　　253\n18.3 　实施上下文操作模式　　254\n18.3.1 　实现列表视图的多选操作　　255\n18.3.2 　列表视图中的操作模式回调方法　　256\n18.3.3 　改变已激活视图的显示背景　　258\n18.3.4 　实现其他视图的上下文操作模式　　259\n18.4 　兼容性问题：回退还是复制　　260\n18.5 　挑战练习：在CrimeFragment视图中删除crime记录　　261\n18.6 　深入学习：ActionBarSherlock　　261\n18.7 　挑战练习：使用ActionBarSherlock　　263\n18.7.1 　CriminalIntent应用中ABS的基本整合　　264\n18.7.2 　ABS的深度整合　　264\n18.7.3 　ABS的完全整合　　265\n第19章　相机I：取景器　　266\n19.1 　创建Fragment布局　　267\n19.2 　创建CrimeCameraFragment　　269\n19.3 　创建CrimeCameraActivity　　269\n19.4 　使用相机API　　271\n19.4.1 　打开并释放相机　　271\n19.4.2 　SurfaceView、Surface-Holder与Surface　　272\n19.4.3 　确定预览界面大小　　276\n19.4.4 　启动CrimeCamera-Activity　　277\n19.5 　深入学习：以命令行的方式运行activity　　281\n第20章　相机 II：拍摄并处理照片　　283\n20.1 　拍摄照片　　283\n20.1.1 　实现相机回调方法　　285\n20.1.2 　设置图片尺寸大小　　288\n20.2 　返回数据给CrimeFragment　　288\n20.2.1 　以接收返回值的方式启动CrimeCameraActivity　　289\n20.2.2 　在CrimeCameraFragment中设置返回值　　290\n20.2.3 　在CrimeFragment中获取照片文件名　　290\n20.3 　更新模型层　　291\n20.3.1 　新增Photo类　　292\n20.3.2 　为Crime添加photo属性　　293\n20.3.3 　设置photo属性　　293\n20.4 　更新CrimeFragment的视图　　294\n20.4.1 　添加ImageView组件　　295\n20.4.2 　图像处理　　296\n20.5 　在DialogFragment中显示大图片　　300\n20.6 　挑战练习：Crime照片的显示方向　　303\n20.7 　挑战练习：删除照片　　303\n20.8 　深入学习：Android代码的废弃处理　　303\n第21章　隐式intent　　305\n21.1 　添加按钮组件　　306\n21.2 　添加嫌疑人信息至模型层　　307\n21.3 　使用格式化字符串　　308\n21.4 　使用隐式intent　　309\n21.4.1 　典型隐式intent的组成　　310\n21.4.2 　发送陋习报告　　311\n21.4.3 　获取联系人信息　　313\n21.4.4 　检查可以响应的activity　　316\n21.5 　挑战练习：又一个隐式intent　　317\n第22章　Master-Detail用户界面　　318\n22.1 　增加布局灵活性　　319\n22.1.1 　修改SingleFragment-Activity　　320\n22.1.2 　创建包含两个fragment容器的布局　　320\n22.1.3 　使用别名资源　　322\n22.2 　Activity：fragment的托管者　　323\n22.3 　深入学习：设备屏幕尺寸的确定　　331\n第23章　深入学习intent和任务　　333\n23.1 　创建NerdLauncher项目　　333\n23.2 　解析隐式intent　　334\n23.3 　在运行时创建显式intent　　337\n23.4 　任务与后退栈　　338\n23.5 　使用NerdLauncher应用作为设备主屏幕　　341\n23.6 　挑战练习：应用图标与任务重排　　341\n23.7 　进程与任务　　341\n第24章　样式与include标签的使用　　343\n24.1 　创建RemoteControl项目　　344\n24.1.1 　编码实现RemoteControl-Activity　　344\n24.1.2 　创建RemoteControl-Fragment　　345\n24.2 　使用样式消除重复代码　　348\n24.3 　完善布局定义　　350\n24.4 　深入学习：使用include与merge标签　　353\n24.5 　挑战练习：样式的继承　　354\n第25章　XML Drawable与9-Patches　　355\n25.1 　XML drawable　　356\n25.2 　state list drawable　　358\n25.3 　layer list与inset drawable　　360\n25.4 　使用9-patch图像　　362\n第26章　HTTP与后台任务　　368\n26.1 　创建PhotoGallery应用　　369\n26.2 　网络连接基本　　372\n26.3 　使用AsyncTask在后台线程上运行代码　　373\n26.4 　线程与主线程　　375\n26.5 　获取Flickr XML数据　　377\n26.6 　从AsyncTask回到主线程　　382\n26.7 　深入学习：再探AsyncTask　　385\n26.8 　挑战练习：分页　　386\n第27章　Looper、Handler与HandlerThread　　387\n27.1 　设置GridView以显示图片　　387\n27.2 　批量下载缩略图　　390\n27.3 　与主线程通信　　390\n27.4 　创建并启动后台线程　　391\n27.5 　Message与message Handler　　393\n27.5.1 　消息的剖析　　393\n27.5.2 　Handler的剖析　　393\n27.5.3 　使用handler　　395\n27.5.4 　传递handler　　397\n27.6 　深入学习：AsyncTask与Thread　　401\n27.7 　挑战练习：预加载以及缓存　　401\n第28章　搜索　　402\n28.1 　搜索Flickr网站　　402\n28.2 　搜索对话框　　404\n28.2.1 　创建搜索界面　　404\n28.2.2 　可搜索的activity　　406\n28.2.3 　物理搜索键　　408\n28.2.4 　搜索的工作原理　　409\n28.2.5 　启动模式与新的intent　　410\n28.2.6 　使用shared preferences实现轻量级数据存储　　412\n28.3 　在Android 3.0以后版本的设备上使用SearchView　　414\n28.4 　挑战练习　　416\n第29章　后台服务　　417\n29.1 　创建IntentService　　417\n29.2 　服务的作用　　419\n29.3 　查找最新返回结果　　421\n29.4 　使用AlarmManager延迟运行服务　　422\n29.4.1 　PendingIntent　　424\n29.4.2 　使用PendingIntent管理定时器　　424\n29.5 　控制定时器　　425\n29.6 　通知信息　　428\n29.7 　深入学习：服务细节内容　　429\n29.7.1 　服务的能与不能　　430\n29.7.2 　服务的生命周期　　430\n29.7.3 　non-sticky服务　　430\n29.7.4 　sticky服务　　431\n29.7.5 　绑定服务　　431\n第30章　broadcast Intent　　433\n30.1 　随设备重启而重启的定时器　　433\n30.1.1 　配置文件中的broadcast receiver　　434\n30.1.2 　如何使用receiver　　435\n30.2 　过滤前台通知消息　　436\n30.2.1 　发送broadcast intent　　437\n30.2.2 　动态broadcast receiver　　437\n30.2.3 　使用私有权限　　440\n30.2.4 　使用ordered broadcast接收结果　　442\n30.3 　receiver与长时运行任务　　446\n第31章　网页浏览　　447\n31.1 　最后一段Flickr数据　　447\n31.2 　简单方式：使用隐式intent　　448\n31.3 　较难方式：使用WebView　　449\n31.3.1 　使用WebChromeClient优化WebView的显示　　453\n31.3.2 　处理WebView的设备旋转问题　　455\n31.4 　深入学习：注入JavaScript对象　　456\n第32章　定制视图与触摸事件　　457\n32.1 　创建DragAndDraw项目　　457\n32.1.1 　创建DragAndDraw-Activity　　458\n32.1.2 　创建DragAndDraw-Fragment　　459\n32.2 　创建定制视图　　460\n32.3 　处理触摸事件　　462\n32.4 　onDraw(...)方法内的图形绘制　　465\n32.5 　挑战练习：设备旋转问题　　467\n第33章　跟踪设备的地理位置　　468\n33.1 　启动RunTracker项目　　468\n33.1.1 　创建RunActivity　　469\n33.1.2 　创建RunFragment　　470\n33.2 　地理位置与LocationManager　　472\n33.3 　接收定位数据更新broadcast　　474\n33.4 　使用定位数据刷新UI显示　　475\n33.5 　快速定位：最近一次地理位置　　479\n33.6 　在物理和虚拟设备上测试地理位置定位　　480\n第34章　使用SQLite本地数据库　　482\n34.1 　在数据库中存储旅程和地理位置信息　　482\n34.2 　查询数据库中的旅程列表　　488\n34.3 　使用CursorAdapter显示旅程列表　　490\n34.4 　创建新旅程　　493\n34.5 　管理现有旅程　　494\n34.6 　挑战练习：识别当前跟踪的旅程　　500\n第35章　使用Loader加载异步数据　　501\n35.1 　Loader与LoaderManager　　501\n35.2 　在RunTracker应用中使用Loader　　502\n35.3 　加载旅程列表　　503\n35.4 　加载单个旅程　　506\n35.5 　加载旅程的最近一次地理位置　　509\n第36章　使用地图　　511\n36.1 　添加Maps API给RunTracker应用　　511\n36.1.1 　使用物理设备测试地图　　511\n36.1.2 　安装使用Google Play services SDK　　511\n36.1.3 　获取Google Maps API key　　512\n36.1.4 　更新RunTracker应用的manifest配置文件　　512\n36.2 　在地图上显示用户的地理位置　　513\n36.3 　显示旅程路线　　516\n36.4 　为旅程添加开始和结束地图标注　　520\n36.5 　挑战练习：实时数据更新　　521\n第37章　编后语　　522\n37.1 　终极挑战　　522\n37.2 　关于我们　　523\n37.3 　致谢　　523",
      "pages": "523",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s28342615.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s28342615.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s28342615.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/25848404\/",
      "id": "25848404",
      "publisher": "人民邮电出版社",
      "isbn10": "7115346437",
      "isbn13": "9787115346438",
      "title": "Android编程权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/25848404",
      "alt_title": "Android programming: the big nerd ranch guide",
      "author_intro": "作者简介：\nBill Phillips\nBig Nerd Ranch资深Android讲师、高级软件工程师。他与Brian Hardy合作，为Big Nerd Ranch开发了广受好评的5天Android训练营培训课程。Bill擅长透彻地理解事物的本质，并帮助其他人做到这一点。闲暇时间，Bill喜欢阅读和弹钢琴。\nBrian Hardy\nBig Nerd Ranch首席软件工程师、资深讲师。Big Nerd Ranch的Android、iOS和Ruby培训课程均由Brian设计开发。闲暇时间，Brian喜欢骑自行车和听音乐。",
      "summary": "权威、全面、实用、易懂，是本书最大的特色。本书根据美国大名鼎鼎的Big Nerd Ranch训练营的Android培训讲义编写而成，已经为微软、谷歌、Facebook等行业巨头培养了众多专业人才。作者巧妙地把Android开发所需的庞杂知识、行业实践、编程规范等融入一本书中，通过精心编排的应用示例、循序渐进的内容组织，以及循循善诱的语言，深入地讲解了Android开发的方方面面。如果学完一章之后仍然意犹未尽，那“挑战练习”一定会让你大呼过瘾。本书之所以能在移动应用开发类图书中脱颖而出，还在于它真的是在与读者“对话”。阅读本书就好像有一位私人导师在你身边随时为你答疑解惑。\n本书适合所有对Android及移动开发感兴趣的读者，需要一定的Java编程基础。",
      "series": {
        "id": "13846",
        "title": "The Big Nerd Ranch Guide"
      },
      "price": "CNY 99.00"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 45,
        "average": "6.9",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Tim Ash"
      ],
      "pubdate": "2009",
      "tags": [
        {
          "count": 53,
          "name": "网站分析",
          "title": "网站分析"
        },
        {
          "count": 41,
          "name": "LandingPage优化",
          "title": "LandingPage优化"
        },
        {
          "count": 34,
          "name": "SEO",
          "title": "SEO"
        },
        {
          "count": 24,
          "name": "用户体验",
          "title": "用户体验"
        },
        {
          "count": 23,
          "name": "互联网",
          "title": "互联网"
        },
        {
          "count": 22,
          "name": "设计",
          "title": "设计"
        },
        {
          "count": 21,
          "name": "交互设计",
          "title": "交互设计"
        },
        {
          "count": 12,
          "name": "着陆页优化",
          "title": "着陆页优化"
        }
      ],
      "origin_title": "Landing Page Optimization: The Definitive Guide to Testing and Tuning for Conversions",
      "image": "https://img1.doubanio.com\/mpic\/s3906878.jpg",
      "binding": "平装",
      "translator": [
        "奚丹",
        "杜姗姗"
      ],
      "catalog": "",
      "pages": "309",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s3906878.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s3906878.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s3906878.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/3879806\/",
      "id": "3879806",
      "publisher": "清华大学出版社",
      "isbn10": "7302202079",
      "isbn13": "9787302202073",
      "title": "Landing Page优化权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/3879806",
      "alt_title": "Landing Page Optimization: The Definitive Guide to Testing and Tuning for Conversions",
      "author_intro": "",
      "summary": "着陆页面优化并不是哪门技术的一个分支，事实上，它需要融合各种不同的知识和观点。所以，您还有必要掌握Web设计、人类心理学、广告撰写、统计学、可用性、团队建设和科学方法等其他领域的知识。\n本书可以引导您进入这个令人陌生而又惊叹的领域。和我一样，我的同事在他的SiteTuners.com上也花费了大量的时间进行一些前期的探索，希望给大家带回一幅综合性的蓝图。如同许多先驱者，在探索的过程中，我们经历过挫折，有过多次痛苦的教训。因此，我们更加衷心地希望本书能够缩短您的学习曲线，帮助您成为一名更有效率的着陆页面调整者。",
      "price": "39.80元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 40,
        "average": "8.0",
        "min": 0
      },
      "subtitle": "囊括XHTML、CSS、DOM和JavaScript的综合参考",
      "author": [
        "Danny Goodman"
      ],
      "pubdate": "2009-6",
      "tags": [
        {
          "count": 40,
          "name": "HTML",
          "title": "HTML"
        },
        {
          "count": 33,
          "name": "web",
          "title": "web"
        },
        {
          "count": 23,
          "name": "JavaScript",
          "title": "JavaScript"
        },
        {
          "count": 23,
          "name": "前端开发",
          "title": "前端开发"
        },
        {
          "count": 15,
          "name": "Web开发",
          "title": "Web开发"
        },
        {
          "count": 12,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 7,
          "name": "O'Reilly",
          "title": "O'Reilly"
        },
        {
          "count": 5,
          "name": "编程",
          "title": "编程"
        }
      ],
      "origin_title": "",
      "image": "https://img1.doubanio.com\/mpic\/s3780767.jpg",
      "binding": "平装",
      "translator": [
        "杨文俊",
        "张苏",
        "王卓"
      ],
      "catalog": "前言\n第1章：HTML与XHTML参考\n属性值类型\n共享的HTML元素属性\n共享的事件处理属性\n标签参考（按字母次序排列）\n第2章：文档对象模型参考\n属性值类型\n关于CLIENT-与OFFSET-属性集\n默认属性值\n事件\n静态W3C HTML DOM模型\n共享的对象属性、方法与事件\n对象参考（按字母顺序编排）\n第3章：事件参考\n按字母排序的事件参考\n第4章：样式单属性参考\n属性值类型\n选择符\n伪元素及伪类选择符\n＠规划\n常规约定\n按字母属性排列的属性参考\n第5章：JavaScript核心语言参考\n关于静态对象\nMozilla的读、写方法\n支持XML的ECMAScript\nECMASc邱t的保留关键字\n核心对象\n运算符（Operators）\n控制指令（Control Statemems）\n其他指令（Miscellaneous Statements）\n转义字符串字符（Special（Escaped）String Cheaters）\n术语表\n索引",
      "pages": "844",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s3780767.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s3780767.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s3780767.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/3729998\/",
      "id": "3729998",
      "publisher": "电子工业出版社",
      "isbn10": "7121087758",
      "isbn13": "9787121087752",
      "title": "Dynamic HTML权威指南（第3版）",
      "url": "https:\/\/api.douban.com\/v2\/book\/3729998",
      "alt_title": "Dynamic HTML: The Defintive Reference",
      "author_intro": "Danny Goodman是一位富有经验的专业作者，同时也是一位为公司和顶尖Intranet开发团队服务的资深程序开发顾问。在实现跨浏览器自动感知及客户端脚本编程方面，他的专业知识颇受欢迎，这也使得他能够轻松地解决很多实际问题。到目前为止，他已撰写了40余本专业书籍，包括畅销的O'Reilly图书，如大家所熟知的《Dynamic HTML: The Definitive Reference》（第1版&第2版）、《JavaScript & DHTML Cookbook》等（《JavaScript & DHTML Cookbook中文版（第二版）》已上市，豆瓣页面为http:\/\/www.douban.com\/subject\/3590787\/）。",
      "summary": "本书涵盖了最新的Web规范和各种浏览器功能特性，如果您要使用HTML、XHTML、CSS、文档对象模型（DOM）和JavaScript进行开发，那么它正是您要寻找的一站式终极资源宝库。本书为富互联网应用程序的设计者提供了全面而翔实的参考。在本书的帮助下，您设计的应用程序能够在Internet Explorer 7、Firefox 2、Safari、Opera等现代浏览器中畅通无阻。\n通过这本书，您可以即时了解浏览器对各种基于标准的最新技术的支持情况，其中包括CSS Level 3、DOM Level 3、Web Forms 2.0、针对Ajax应用程序的XMLHttpRequest，以及JavaScript 1.7。\n本书\n为HTML、XHTML、CSS、DOM和核心JavaScript的标签、属性、对象、方法、事件等提供即时参考。\n可供您快速查阅某个功能特性或术语，以获知它是否适用于期望的浏览器品牌和版本。\n提供便捷的交叉索引，您只须查阅一个元素属性（或者对象属性、方法、事件类型）即可找到所有的相关条目，其中包括相关联的HTML标签、样式属性，以及文档对象模型方法、属性和事件等。\n《Dynamic HTML: The Definitive Reference》可以加速您在Web页面中增添高端功能的整个进程。对所有正在致力于创建动态Web内容的开发者而言，这本畅销书绝对值得收藏。",
      "series": {
        "id": "697",
        "title": "博文视点O'reilly系列"
      },
      "price": "99.80元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 76,
        "average": "9.0",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "[美] Eric A.Meyer"
      ],
      "pubdate": "2007-06",
      "tags": [
        {
          "count": 94,
          "name": "CSS",
          "title": "CSS"
        },
        {
          "count": 32,
          "name": "web",
          "title": "web"
        },
        {
          "count": 23,
          "name": "网页设计",
          "title": "网页设计"
        },
        {
          "count": 11,
          "name": "O'Reilly",
          "title": "O'Reilly"
        },
        {
          "count": 9,
          "name": "技术",
          "title": "技术"
        },
        {
          "count": 7,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 6,
          "name": "经典",
          "title": "经典"
        },
        {
          "count": 6,
          "name": "web技术",
          "title": "web技术"
        }
      ],
      "origin_title": "CSS The Definitive Guide",
      "image": "https://img3.doubanio.com\/mpic\/s5834346.jpg",
      "binding": "平装",
      "translator": [
        
      ],
      "catalog": "",
      "pages": "518",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s5834346.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s5834346.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s5834346.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/2152110\/",
      "id": "2152110",
      "publisher": "东南大学出版社",
      "isbn10": "7564107774",
      "isbn13": "9787564107772",
      "title": "CSS权威指南（第三版·英文影印版）",
      "url": "https:\/\/api.douban.com\/v2\/book\/2152110",
      "alt_title": "CSS The Definitive Guide",
      "author_intro": "Eric A．Meyer从1993年就开始使用web技术。他是国际公认HTML、CSS和Web标准的专家。此外，他还是complex Spiral Consulting~司的创建人。这个公司的客户包括America Online、Apple Computer、Wells Fargo Bank和Macromedia。",
      "summary": "著名的CSS专家Eric A.Meyer他招牌式的智慧和无与伦比的经验引领读者探索了CSS的各个部\n分，包括属性、标记、特性和实现。此外，他还就现实应用中的一些问题，例如浏览器的支持和设计方针，发表了看法。你所要知道的就是HTML 4.0的知识，这样就可以创建整洁、易于维护的脚本，以与桌面出版系统同样的优雅和控制能力管理网站布局和分页。你将会学到：\n精妙地设计文本风格\n用户界面、表格布局、列表以及自动生成的内容\n浮动和定位的细节\nFont familv和Fallback机制\n盒模型（box model）的工作机制\nIE7、Firefox及其他一些浏览器所支持的最新CSS3的选择器（selector）\n经过彻底地更新，新版的《CSS权威指南》已经适用于IE7。它详细讲述TESS的各个属性，告诉你怎样同其他属性交互，怎样在编写CSS时避免常见的错误。不管你是一个有经验的Web开发人员还是一个彻底的初学者，这本书都是你的CSS学习源泉。",
      "price": "68.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 47,
        "average": "7.9",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "罗聪翼"
      ],
      "pubdate": "2011-5-10",
      "tags": [
        {
          "count": 88,
          "name": "Blender",
          "title": "Blender"
        },
        {
          "count": 41,
          "name": "3d",
          "title": "3d"
        },
        {
          "count": 38,
          "name": "CG",
          "title": "CG"
        },
        {
          "count": 22,
          "name": "图形学",
          "title": "图形学"
        },
        {
          "count": 20,
          "name": "开源",
          "title": "开源"
        },
        {
          "count": 16,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 11,
          "name": "Blender权威指南",
          "title": "Blender权威指南"
        },
        {
          "count": 8,
          "name": "Blender权威",
          "title": "Blender权威"
        }
      ],
      "origin_title": "",
      "image": "https://img3.doubanio.com\/mpic\/s4709951.jpg",
      "binding": "平装",
      "translator": [
        
      ],
      "catalog": "推荐序（一）\n推荐序（二）\n前言\n第一部分  基础篇\n第1章  Blender概述3\n1.1  开源简介3\n1.1.1  Blender是什么3\n1.1.2  Blender的发展与历史3\n1.1.3  社区支持6\n1.2  使用Blender的艺术家们8\n1.2.1  Andrew Price8\n1.2.2  Anna Celarek10\n1.2.3  Barath Endre12\n1.2.4  Ben Dansie12\n1.2.5  Colin Levy14\n1.2.6  Enrico Valenza15\n1.2.7  Kamil Kuklo16\n1.2.8  Kevin Hays17\n1.2.9  Mathias Helmuth Pedersen18\n1.2.10  Matt Ebb20\n1.2.11  Mike Pan23\n1.2.12  Pablo Vazquez24\n1.2.13  Robert J. Tiess25\n1.2.14  Sebastian Knig26\n1.2.15  Soenke Maeter27\n1.2.16  Tony Mullen28\n1.2.17  Vitor Balbio30\n1.2.18  Диметр Калинин（Dmitry Kalinin）30\n1.2.19  黄海31\n1.2.20  玉永海33\n1.3  Blender的安装与配置35\n1.3.1  系统要求35\n1.3.2  快速安装37\n1.3.3  本地编译37\n第2章  基本操作与界面40\n2.1  Blender基础概念与基本操作40\n2.1.1  鼠标操作与键盘常用功能键40\n2.1.2  物体与原心40\n2.1.3  Blender的界面操作41\n2.2  用户参数设置43\n2.2.1  用户界面设置43\n2.2.2  编辑设置44\n2.2.3  输入控制设置46\n2.2.4  附加脚本设置48\n2.2.5  主题设置48\n2.2.6  文件系统49\n2.2.7  系统设置50\n2.3  窗口类型52\n2.3.1  三维视图52\n2.3.2  时间轴窗口63\n2.3.3  曲线图形编辑器65\n2.3.4  动作编辑器69\n2.3.5  非线性动画编辑器70\n2.3.6  图片编辑器73\n2.3.7  视频序列编辑器75\n2.3.8  文字编辑器77\n2.3.9  结点编辑器79\n2.3.10  逻辑编辑器81\n2.3.11  工具面板81\n2.3.12  大纲管理器81\n2.3.13  信息窗口82\n2.3.14  文件浏览器84\n2.3.15  控制台窗口85\n第3章  建模86\n3.1  新建物体87\n3.1.1  网格物体87\n3.1.2  曲线物体88\n3.1.3  骨骼\/空物体\/摄像机物体89\n3.1.4  灯光物体89\n3.2  编辑模式90\n3.2.1  点线面结构90\n3.2.2  法线结构92\n3.2.3  选择菜单92\n3.2.4  网格菜单95\n3.3  基础网格建模106\n3.3.1  网格快捷工具栏106\n3.3.2  平滑工具106\n3.3.3  使用关联复制实现镜像建模107\n3.3.4  螺旋和细分工具108\n3.3.5  精确切割工具109\n3.3.6  基本建模工具的配合使用范例109\n3.4  高级网格建模112\n3.4.1  顶点组112\n3.4.2  权重绘制113\n3.4.3  雕刻模式114\n3.5  曲线建模121\n3.5.1  曲线的编辑121\n3.5.2  Bezier曲线124\n3.5.3  NURBS曲线125\n3.6  文字建模126\n3.6.1  文字的输入126\n3.6.2  文字的编辑与修改127\n第4章  修改器129\n4.1  结构类修改器130\n4.1.1  阵列修改器130\n4.1.2  倒角修改器135\n4.1.3  布尔运算修改器137\n4.1.4  构造修改器138\n4.1.5  精简修改器139\n4.1.6  硬边修改器139\n4.1.7  遮罩修改器140\n4.1.8  镜像修改器142\n4.1.9  细分修改器144\n4.1.10  实体化修改器144\n4.1.11  多重解析修改器146\n4.1.12  UV投影修改器147\n4.1.13  螺旋修改器147\n4.2  形变类修改器148\n4.2.1  骨骼修改器148\n4.2.2  塑性修改器148\n4.2.3  曲线修改器149\n4.2.4  置换修改器150\n4.2.5  晶格修改器152\n4.2.6  钩镰修改器153\n4.2.7  网格造型修改器154\n4.2.8  收缩修改器155\n4.2.9  快速形变修改器157\n4.2.10  平滑修改器158\n4.2.11  波浪修改器159\n4.3  模拟类修改器160\n4.3.1  布料修改器160\n4.3.2  碰撞修改器160\n4.3.3  爆破修改器160\n4.3.4  流体修改器161\n4.3.5  粒子实体修改器161\n4.3.6  粒子系统修改器163\n4.3.7  烟雾\/软体模拟修改器163\n第5章  灯光164\n5.1  光线的属性164\n5.1.1  光源属性165\n5.1.2  光线衰减166\n5.1.3  贴图灯光171\n5.1.4  体积光171\n5.1.5  灯光的常规控制面板173\n5.2  阴影类型173\n5.2.1  光线追踪阴影174\n5.2.2  缓冲阴影175\n5.3  灯光类型180\n5.3.1  点灯光180\n5.3.2  日光181\n5.3.3  聚光灯185\n5.3.4  半球灯186\n5.3.5  面光源187\n5.4  环境属性188\n5.4.1  环境与背景189\n5.4.2  环境光吸收189\n5.4.3  环境光照192\n5.4.4  间接光照192\n5.4.5  迷雾与星辰193\n5.4.6  HDRI照明194\n5.5  色彩管理和线性工作流194\n第6章  材质与贴图196\n6.1  着色器196\n6.1.1  材质的渲染原理196\n6.1.2  材质选项197\n6.1.3  多材质应用199\n6.2  着色器选项200\n6.2.1  漫反射着色器200\n6.2.2  高光着色器203\n6.2.3  渐变着色选项205\n6.2.4  光线追踪反射206\n6.2.5  光线追踪透明208\n6.2.6  子面散射着色器212\n6.2.7  体积着色器214\n6.2.8  光晕着色器216\n6.2.9  顶点着色器217\n6.3  纹理贴图218\n6.3.1  通用贴图参数219\n6.3.2  映射输入222\n6.3.3  通道输出226\n6.4  UV贴图229\n6.4.1  UV坐标系229\n6.4.2  UV解算和图层管理230\n6.4.3  UV编辑器233\n6.4.4  贴图绘制模式237\n6.4.5  网格UV拆分实例239\n第7章  渲染241\n7.1  渲染设置241\n7.1.1  着色选项242\n7.1.2  规格选项243\n7.1.3  运动模糊选项245\n7.1.4  抗锯齿245\n7.1.5  烘焙246\n7.1.6  命令行渲染248\n7.2  输出设置250\n7.2.1  格式选项250\n7.2.2  性能选项252\n7.2.3  后期合成选项253\n7.2.4  标记选项254\n7.3  层输出属性254\n7.3.1  分层渲染254\n7.3.2  通道输出258\n7.4  摄像机262\n7.4.1  显示面板263\n7.4.2  镜头面板263\n7.5  网络渲染264\n7.5.1  渲染农场264\n7.5.2  服务器端266\n7.5.3  负载端267\n7.5.4  工作站端267\n7.5.5  搭建实例267\n7.6  如何提升渲染的性能270\n7.6.1  工作环境270\n7.6.2  工程配置270\n第二部分  高级篇\n第8章  动画工具275\n8.1  基本动画工具275\n8.1.1  曲线编辑器275\n8.1.2  创建关键帧276\n8.1.3  编辑曲线277\n8.1.4  通道管理279\n8.1.5  时间轴279\n8.2  物体动画280\n8.2.1  关键帧动画280\n8.2.2  路径动画281\n8.3  形变动画283\n8.3.1  形变关键帧283\n8.3.2  形变驱动器286\n8.3.3  晶格形变287\n8.3.4  钩镰形变289\n8.4  骨骼系统289\n8.4.1  编辑模式290\n8.4.2  姿势模式292\n8.4.3  骨骼物体数据选项293\n8.4.4  骨头选项296\n8.5  骨骼动画299\n8.5.1  动作编辑器299\n8.5.2  非线性编辑器299\n8.6  约束控制300\n8.6.1  变形约束300\n8.6.2  跟随约束305\n8.6.3  关系约束311\n第9章  物理特效与仿真315\n9.1  粒子仿真系统315\n9.1.1  粒子系统316\n9.1.2  发射器选项317\n9.1.3  物理效果选项319\n9.1.4  可视化选项325\n9.1.5  渲染选项325\n9.1.6  速率控制选项330\n9.1.7  旋转控制选项331\n9.1.8  子粒子系统选项331\n9.1.9  毛发选项334\n9.2  烟雾仿真系统338\n9.2.1  烟雾域选项339\n9.2.2  烟雾发射体选项339\n9.2.3  碰撞与障碍选项340\n9.2.4  烟雾渲染选项341\n9.3  软体仿真系统342\n9.3.1  软体工作原理342\n9.3.2  软体的外部作用力343\n9.3.3  软体的碰撞计算345\n9.3.4  软体的内部作用力347\n9.4  布料仿真系统351\n9.4.1  布料初始化351\n9.4.2  布料碰撞选项352\n9.4.3  布料硬度控制选项353\n9.4.4  外力场选项353\n9.4.5  烘焙选项355\n9.5  流体仿真系统355\n9.5.1  流体原理356\n9.5.2  流体域设置356\n9.5.3  流体设置359\n9.5.4  交互控制361\n9.5.5  流体仿真优化363\n9.6  刚体仿真系统364\n9.6.1  Bullet引擎简介364\n9.6.2  环境配置365\n9.6.3  物理选项365\n9.6.4  仿真与记录366\n第10章  后期合成368\n10.1  结点系统368\n10.1.1  结点编辑器368\n10.1.2  结点基础370\n10.2  着色器结点模式372\n10.2.1  输入类结点372\n10.2.2  输出类结点376\n10.2.3  色彩类结点376\n10.2.4  矢量类结点386\n10.2.5  转换类结点388\n10.3  纹理类结点393\n10.3.1  输入类结点393\n10.3.2  输出类结点395\n10.3.3  色彩类结点395\n10.3.4  图案类结点395\n10.3.5  内置纹理结点396\n10.3.6  转换类结点397\n10.3.7  扭曲类结点397\n10.4  合成类结点398\n10.4.1  输入类结点398\n10.4.2  输出类结点399\n10.4.3  色彩类结点400\n10.4.4  矢量类结点404\n10.4.5  滤镜类结点405\n10.4.6  转换类结点409\n10.4.7  影像类结点411\n10.4.8  变形类结点414\n10.5  视频序列编辑器415\n10.5.1  序列编辑器界面415\n10.5.2  序列编辑418\n10.5.3  特效419\n10.5.4  序列输出421\n第11章  Python脚本扩展422\n11.1  Python脚本基础422\n11.1.1  Python简介422\n11.1.2  编辑与编译423\n11.2  Blender的Python API424\n11.2.1  API基础424\n11.2.2  事件查看425\n11.2.3  数据访问425\n11.2.4  操作符426\n11.2.5  正文429\n11.2.6  类型432\n11.2.7  集成433\n11.3  内置脚本437\n11.3.1  插件脚本437\n11.3.2  安装插件脚本438\n11.3.3  齿轮生成脚本438\n11.3.4  云生成脚本439\n11.4  外置程序脚本441\n11.4.1  YafaRay441\n11.4.2  LuxRender442\n11.4.3  Indigo443\n11.4.4  VRay443\n11.4.5  SunFlow444\n11.4.6  Octane445\n第12章  游戏引擎446\n12.1  BGE开发环境446\n12.1.1  BGE系统447\n12.1.2  GLSL高阶着色器448\n12.1.3  逻辑编辑器450\n12.1.4  Hello Game!451\n12.2  物理属性455\n12.2.1  无碰撞类456\n12.2.2  静态类456\n12.2.3  动态类456\n12.2.4  刚体类458\n12.2.5  软体类458\n12.2.6  闭塞类459\n12.2.7  触发类461\n12.3  触发器463\n12.3.1  触发器结构463\n12.3.2  常用触发器465\n12.4  控制器466\n12.4.1  控制器逻辑466\n12.4.2  Python逻辑控制器467\n12.5  促动器469\n12.5.1  运动促动器469\n12.5.2  曲线动画促动器470\n12.5.3  场景促动器470\n12.5.4  编辑促动器471\n12.5.5  镜头促动器471\n12.5.6  声效促动器471\n12.6  游戏开发与性能优化472\n12.6.1  建模472\n12.6.2  材质与贴图472\n12.6.3  灯光473\n12.6.4  物理与逻辑474\n12.6.5  Python程序代码474\n第三部分  实例篇\n第13章  汽车建模与机械绑定477\n13.1  准备与分析477\n13.1.1  添加背景参考图477\n13.1.2  分析建模思路479\n13.2  车头建模480\n13.2.1  使用镜像修改器代替对称建模480\n13.2.2  制作车头部分481\n13.3  车身建模489\n13.3.1  车身布线思路489\n13.3.2  车身建模490\n13.3.3  车窗建模496\n13.4  附件建模497\n13.4.1  挤压厚度497\n13.4.2  制作车头护栏498\n13.4.3  制作车灯500\n13.4.4  制作车头网格护栏502\n13.4.5  制作车门把手504\n13.4.6  制作后视镜505\n13.5  车轮建模506\n13.5.1  制作轮毂506\n13.5.2  利用修改器制作轮毂镜像509\n13.5.3  制作轮胎511\n13.6  硬边处理513\n13.6.1  使用切割细分来制作硬边513\n13.6.2  折痕工具制作硬边515\n13.7  车轮机械约束设计517\n13.8  材质设计518\n13.9  灯光设计521\n13.10  环境设置522\n13.11  渲染与后期523\n13.12  本章小结525\n第14章  角色模型制作526\n14.1  造型与布线基础526\n14.1.1  面部造型基础526\n14.1.2  布线基础527\n14.2  人物建模528\n14.2.1  建立参考图528\n14.2.2  面部建模529\n14.2.3  耳朵建模533\n14.2.4  细分优化534\n14.3  头骨建模535\n14.3.1  制作面部缺陷效果535\n14.3.2  制作口腔结构538\n14.3.3  制作眼球控制器540\n14.4  拆分UV542\n14.5  模型雕刻544\n14.6  烘焙贴图547\n14.7  映射绘制549\n14.8  毛发制作553\n14.9  着色器设计555\n14.10  灯光与环境设置557\n14.10.1  三点式照明原理557\n14.10.2  设计场景灯光和环境557\n14.11  结点合成559\n14.12  本章小结565\n第15章  室内效果图应用567\n15.1  场景建模567\n15.1.1  制作桌子567\n15.1.2  制作椅子569\n15.1.3  制作衣柜和相框572\n15.1.4  制作地板和墙体574\n15.2  Yaf(a)ray的安装与配置578\n15.3  材质与贴图578\n15.3.1  着色器579\n15.3.2  纹理贴图与通道映射584\n15.3.3  设计场景材质586\n15.4  灯光和镜头587\n15.4.1  灯光参数588\n15.4.2  镜头参数590\n15.4.3  设计场景灯光与镜头592\n15.5  照明模式和渲染设置594\n15.5.1  照明模式594\n15.5.2  照明的常规参数600\n15.5.3  场景渲染设置606\n15.6  后期处理607\n15.7  本章小结608\n第16章  角色动画610\n16.1  角色模型制作610\n16.1.1  头部与身体建模610\n16.1.2  手臂建模611\n16.1.3  腿部建模612\n16.2  骨骼设计613\n16.2.1  制作骨骼框架614\n16.2.2  制作骨骼约束617\n16.2.3  绑定模型与骨骼630\n16.3  制作步行动画631\n16.3.1  关键帧动画基础631\n16.3.2  制作关键帧动画632\n16.4  制作非线性动画637\n16.5  本章小结638\n附录A  Blender大事记639\n附录B  Blender默认快捷键641",
      "pages": "646",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s4709951.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s4709951.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s4709951.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/6119771\/",
      "id": "6119771",
      "publisher": "机械工业出版社华章公司",
      "isbn10": "7111340736",
      "isbn13": "9787111340737",
      "title": "Blender权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/6119771",
      "alt_title": "",
      "author_intro": "罗聪翼，资深Blender专家，国内Blender技术的先驱者和布道者，在国际Blender社区也有一定的知名度和影响力。2008年在Blender基金会举办的F1艺术大赛中荣获第7名，2009年在Blender世界杯艺术挑战赛中获得世界冠军，经验极其丰富。因为对Blender技术极致推崇和热爱，他不仅自己一直在这个领域进行探索和实践，而且一直在国内不遗余力地推广和普及Blender技术，与朋友们一起维护和运营着Blender中文官方网站（http:\/\/www.blendercn.org\/），使国内的Blender中文社区不断壮大，为Blender在国内的普及和发展做出了卓越贡献。",
      "summary": "Blender是全球首款开源3D制作软件，也是最成功和最受欢迎的3D动画制作软件之一。本书是全球首本中文Blender著作，由国内资深Blender专家、Blender世界杯艺术挑战赛冠军亲自执笔，Blender之父亲自作序推荐，国内权威的Blender中文社区BlenderCN官方推荐教程。\n《Blender权威指南》内容系统而全面，详尽地讲述了Blender的各种功能和特性，并一步一步地讲解了它们的使用方法，可操作性极强；技术新颖，基于最新版的Blender撰写；实战性强，书中不仅设计了大量精巧的小案例，以及详细介绍了这些案例的实现过程，而且还包含4个工程性的大案例。本书不仅能满足你全面而系统地学习Blender理论知识的需求，还能满足你需要充分实践的需求。\n全书分为三个部分：基础篇以全球20位顶尖Blender艺术家自述学习和使用Blender的经验开篇，全面地介绍了Blender的基本功能及其操作方法，包括Blender的安装与配置、基本的操作与界面、建模、修改器、灯光、材质与贴图、渲染等内容；高级篇讲解了Blender的一些高级特性和扩展用法，包括动画工具、物理特效与仿真、后期合成、Python脚本扩展和游戏引擎等重要内容；实例篇以迭代的方式介绍了汽车建模与机械绑定、角色模型制作、室内效果图应用和角色动画等4个经典的工程性案例的制作方法与过程，极具实践指导意义。\n无论你是有经验的Blender用户，还是还没有经验的Blender爱好者，无论你是CG和3D动画爱好者\/艺术家，还是2D平面艺术家，本书不仅能帮助你掌握基本的专业技能，熟悉项目工作的流程，还能激活你的创作设计灵感，积累实战经验技巧，最终实现你的数字艺术梦想。",
      "price": "89.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 65,
        "average": "7.6",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Cbuck Musciano",
        "Bll Kennedy"
      ],
      "pubdate": "2007-4",
      "tags": [
        {
          "count": 46,
          "name": "XHTML",
          "title": "XHTML"
        },
        {
          "count": 43,
          "name": "html",
          "title": "html"
        },
        {
          "count": 25,
          "name": "网页设计",
          "title": "网页设计"
        },
        {
          "count": 22,
          "name": "O'Reilly",
          "title": "O'Reilly"
        },
        {
          "count": 19,
          "name": "Web标准",
          "title": "Web标准"
        },
        {
          "count": 13,
          "name": "WEB",
          "title": "WEB"
        },
        {
          "count": 12,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 11,
          "name": "css",
          "title": "css"
        }
      ],
      "origin_title": "HTML & XHTML : The Definitive Guide",
      "image": "https://img3.doubanio.com\/mpic\/s2382040.jpg",
      "binding": "平装",
      "translator": [
        "张洪涛",
        "邢璐"
      ],
      "catalog": "",
      "pages": "661",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s2382040.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s2382040.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s2382040.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/2061604\/",
      "id": "2061604",
      "publisher": "清华大学出版社",
      "isbn10": "7302146934",
      "isbn13": "9787302146933",
      "title": "HTML&XHTML权威指南（第六版）",
      "url": "https:\/\/api.douban.com\/v2\/book\/2061604",
      "alt_title": "HTML & XHTML : The Definitive Guide",
      "author_intro": "",
      "summary": "本书将你所需要的关于HTML和XHTML的知识汇集在一起。10年前，无数的Web开发人员通过本书第1版的学习，掌握了基本标准的Web开发方法。作为一本权威指南，本书涵盖了最完整的指南和实践经验。.\n本书是最新的第6版，新增加了对XHTML 2和CSS 3的介绍。另外还介绍了HTML的最新技术(XForms、XFrames和模块化)。\n本书中可以学习到：\n.使用样式表控制文档的外观\n.处理用编程手段生成的HTML..\n.创建从简单到复杂的表格\n.使用框架调整文档的布局\n.设计和构建交互式表单及动态文档\n.插入图像、声音文件、视频、applet和JavaScript程序\n.创建在各种浏览器上都可以正常显示的文档...",
      "price": "75.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 57,
        "average": "7.3",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Matt Welsh",
        "Matthias Dalheimer",
        "Kaufman"
      ],
      "pubdate": "2000-3",
      "tags": [
        {
          "count": 71,
          "name": "linux",
          "title": "linux"
        },
        {
          "count": 18,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 17,
          "name": "linux权威指南",
          "title": "linux权威指南"
        },
        {
          "count": 16,
          "name": "O'Reilly",
          "title": "O'Reilly"
        },
        {
          "count": 15,
          "name": "Linux",
          "title": "Linux"
        },
        {
          "count": 7,
          "name": "权威指南",
          "title": "权威指南"
        },
        {
          "count": 5,
          "name": "编程",
          "title": "编程"
        },
        {
          "count": 5,
          "name": "技术",
          "title": "技术"
        }
      ],
      "origin_title": "",
      "image": "https://img1.doubanio.com\/mpic\/s1039608.jpg",
      "binding": "平装",
      "translator": [
        "洪峰"
      ],
      "catalog": "前言\n第一章 绪论\n关于本书\nLinux简史\n谁在使用Linux？\n系统特性\n软件特性\nKDE和 GNOME\n关于Linux的版权\nLinux的设计理念与开源的概念\nLinux与其他操作系统之间的差异\n硬件需求\nLinux的信息来源\n获得帮助\n第二章 Linux安装准备\nLinux的发行版\n准备安装Linux\n\n第三章 系统安装与规划\n安装Linux\n安装后的步骤\n陷入困境\n第四章 基本的UNIX命令与知识\n登录\n设定口令\n虚拟主控台（ Virtual Console）\n常用的命令\nShell\n常用的按键以及用法\n快捷键\n展开文件名\n存储输出结果\n何谓命令？\n把命令放到后台去执行\n参考手册（Manual Pages）\n文件的所有权与权限\n改变拥有者、所属群组及权限\n启动配置文件\n重要目录\n为您服务的程序\n进程\n第五章 基本系统管理\n让系统运行\n启动系统\n系统启动与初始化\n单用户模式\n\n关闭系统\n／proc文件系统\n管理用户帐号\n第六章 管理文件系统、置换分区和设备\n管理文件系统\n置换空闰管理\n设备文件\n第七章 升级软件与内核\n备份与压缩工具\n升级软件\n使用RPM\n建立新内核\n可载入式驱动程序\n自动载人模块\n第八章 其他管理工作\n制作备份\n用cron安排任务\n管理系统日志\n管理打印服务\n设置终端属性\n灾难处理\n第九章 编辑器、文本工具、图形和打印\n用Vi编辑文件\nEmacs编辑器\n排版与文字处理\n\n图像\n打印\n第十章 X Window系统\nX的概念\n硬件需求\n安装XFree86\n配置XFree86\n填入显卡信息\n运行XFree86\n运行出错\n第十一章 调整你的X环境\n定制X的基本方法\nfvwm窗口管理器\nKDE桌面环境\nX应用程序\n第十一章 与Windows的兼容性和Samba\n共享文件\n共享程序\n第十三章 程序设计语言\ngCC程序设计\nMakefiles\n使用Perl\nShell脚本语言程序设计\n用 TCI／ Tk设计程序\nJava\n其他程序语言\n\n第十四章 程序设计员的工具\n通过gdb调试\n程序设计工具\n第十五章 TCP／IP和PPP\nTCP／ IP网络\n拨号PPP\nISDN上的 PPP\nNFS和NIS的配置\n第十六章 万维网与电子邮件\n万维网（World Wide Web）\n电子邮件\n附录一 Linux的信息来源\n附录二 开源软件定义1．0版及GPL\n",
      "pages": "745",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s1039608.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s1039608.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s1039608.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/1052714\/",
      "id": "1052714",
      "publisher": "中国电力出版社",
      "isbn10": "7508302230",
      "isbn13": "9787508302232",
      "title": "LINUX权威指南（第三版）",
      "url": "https:\/\/api.douban.com\/v2\/book\/1052714",
      "alt_title": "",
      "author_intro": "",
      "summary": "Linux一度是个人计算机上鲜为人知的产品，而今已经变成随处可见计算环境中的中心部分。这个操作系统如今已经成为公司的网络中心、Web服务器、学术研究开发平台和编程开发系统。自始自终，Linux都力图保持其本色，即作为个人计算机上良好的运行环境，练习系统管理、学习编程技巧以及各方面探究计算机奥妙的操作系统。\n作为一个完整的与Unix兼容的操作系统，Linux由Internet上的志愿者们共同开发，以电子文件的形式自由分发，并可以从许多供应商那里以极低的价格购得。最初Linux是在PC上开发的，现在它已经被移植到许多其他的体系结构上，并且具有许多重要的特性，如支持多处理器、RAID和群集。\nLinux中包含的软件包有Samba文件服务器和Apacheweb服务器；XWindow（X11R6）；TCP／IP联网软件包（支持PPP、SSH和NFS）；常用的软件工具如Emacs和TEX；完整的软件开发环境，包括C、C＋＋、Java、 perl、Tcl／Tk和python；函数库、调试器、多媒体支持、科学和数据库应用程序等；在linux上运行的商业应用程序，从最终用户使用的工具（如字处理器和电子表格），到关键性的软件（如Oracle、Sybase、Informix和IBM DB／2数据库管理系统）一应俱全。\n第三版中新的内容有：\nKDE：在Linux中运行的用户界面友好、易于使用并可与Windows或Macintosh媲美的桌面环境。\nSamba：将Linux作为办公室的的文件服务器和打印服务器以便和Microsoft的系统相连。\nPPP：最常用的通过电话线登录远程系统的协议。\n安装和配置指南的修订版特别是增加了针对Red Hat、SuSE等发行版的内容。",
      "price": "69.00"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 44,
        "average": "8.2",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Chris Eagle"
      ],
      "pubdate": "2010-3",
      "tags": [
        {
          "count": 63,
          "name": "逆向工程",
          "title": "逆向工程"
        },
        {
          "count": 33,
          "name": "IDA",
          "title": "IDA"
        },
        {
          "count": 29,
          "name": "反编译与逆向工程",
          "title": "反编译与逆向工程"
        },
        {
          "count": 18,
          "name": "调试",
          "title": "调试"
        },
        {
          "count": 11,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 9,
          "name": "黑客",
          "title": "黑客"
        },
        {
          "count": 8,
          "name": "计算机安全",
          "title": "计算机安全"
        },
        {
          "count": 7,
          "name": "编程",
          "title": "编程"
        }
      ],
      "origin_title": "",
      "image": "https://img3.doubanio.com\/mpic\/s4196236.jpg",
      "binding": "平装",
      "translator": [
        "石华耀",
        "段桂菊"
      ],
      "catalog": "第一部分　IDA简介\n第1章　反汇编简介\n第2章　逆向与反汇编工具\n第3章　IDA PRO背景知识\n第二部分　IDA基本用法\n第4章　IDA入门\n第5章　IDA数据显示窗口\n第6章　反汇编导航\n第7章　反汇编操作\n第8章　数据类型与数据结构\n第9章　交叉引用与绘图功能\n第10章　IDA的多种面孔\n第三部分　IDA高级应用\n第11章　定制IDA\n第12章　使用flirt签名来识别库\n第13章　扩展IDA的知识\n第14章　修补二进制文件及其他IDA限制\n第四部分　扩展IDA的功能\n第15章　编写IDC脚本\n第16章　IDA软件开发工具包\n第17章　IDA插件体系结构\n第18章　二进制文件与IDA加载器模块\n第19章　IDA处理器模块\n第五部分　实际应用\n第20章　编译器变体\n第21章　模糊代码分析\n第22章　漏洞分析\n第23章　实用IDA插件\n第六部分　IDA调试器\n第24章　IDA调试器\n第25章　反汇编器\/调试器集成\n第26章　Linux、OS X平台的IDA和远程调试\n附录A　使用IDA 4.9免费版\n附录B　IDC\/SDK交叉引用\n附录C　IDA 5.3的新功能",
      "pages": "445",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s4196236.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s4196236.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s4196236.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/4311436\/",
      "id": "4311436",
      "publisher": "人民邮电出版社",
      "isbn10": "7115222630",
      "isbn13": "9787115222633",
      "title": "IDA Pro权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/4311436",
      "alt_title": "The IDA Pro Book: the unofficial guide to the world's most popular disassembler",
      "author_intro": "Chris Eagle  美国海军研究生院计算机系副主任、高级讲师，著有Gray Hat Hacking，在多种全球性安全会议中发表过演讲。",
      "summary": "IDA Pro（交互式反汇编器专业版）是应用最广泛的静态反汇编工具，在IT领域有着举足轻重的地位，但其文档资料一直都不够完善，在IDA Pro创建者Ilfak的协助下问世的这本书，完美地终结了这一缺憾。Chris的理论被业界公认为是权威且令人信服的，而他的模拟器也是公开发布的IDA插件中最棒的一款。\n本书首先为初涉安全领域的读者描述反汇编与逆向工程的基本信息和IDA Pro的背景知识，然后系统地介绍IDA的基本布局和功能、复杂数据结构的处理、交叉引用与绘图功能，以及如何在非Windows平台上运行IDA。作者由浅入深地介绍了IDA的配置、FLIRT技术、IDA类型库的扩展以及一些IDA限制。书中还探讨了IDA的可扩展性，涉及IDA脚本、SDK、插件、加载器模块和处理器模块，最后阐述了IDA在逆向工程中的实际用法，讨论了各种编译器的区别、模糊代码分析和漏洞分析、IDA插件以及IDA调试器。",
      "series": {
        "id": "660",
        "title": "图灵程序设计丛书"
      },
      "price": "79.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 48,
        "average": "7.4",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Randy Jay Yarger"
      ],
      "pubdate": "2003-11-1",
      "tags": [
        {
          "count": 61,
          "name": "mysql",
          "title": "mysql"
        },
        {
          "count": 32,
          "name": "数据库",
          "title": "数据库"
        },
        {
          "count": 17,
          "name": "MySQL权威指南",
          "title": "MySQL权威指南"
        },
        {
          "count": 14,
          "name": "oreilly",
          "title": "oreilly"
        },
        {
          "count": 11,
          "name": "计算机",
          "title": "计算机"
        },
        {
          "count": 11,
          "name": "Database",
          "title": "Database"
        },
        {
          "count": 5,
          "name": "手册",
          "title": "手册"
        },
        {
          "count": 5,
          "name": "O'Reilly",
          "title": "O'Reilly"
        }
      ],
      "origin_title": "Managing & Using MySQL",
      "image": "https://img3.doubanio.com\/mpic\/s1371884.jpg",
      "binding": "平装(无盘)",
      "translator": [
        "林琪",
        "朱涛江"
      ],
      "catalog": "前言\n第一部分 简介\n第二部分 MYSQL管理\n第三部分 MYSQL编程\n第四部分 MYSQL参考",
      "pages": "480",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s1371884.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s1371884.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s1371884.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/1232101\/",
      "id": "1232101",
      "publisher": "中国电力出版社",
      "isbn10": "7508313178",
      "isbn13": "9787508313177",
      "title": "MySQL权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/1232101",
      "alt_title": "Managing & Using MySQL",
      "author_intro": "",
      "summary": "为一种开源数据库，MySQL已经成为最流行的服务器软件包之一。开发人员在其数据库引擎中提供了丰富的特性（只需很少的内存和CPU支持）。\n因此，众多Linux和Unix服务器（以及一些Windows服务器）都采用MySQL作为其数据库引擎。由于MySQL作为Web站点后端时速度特别快而且相当方便，所有在目前流行的一个词LAMP（表示Linux、Apache、MySQL和Perl、Python或PHP）中，它正是其中的M。对各种标准的兼顾使得在MySQL和加载了更多特性的数据库（如开源PostgreSQL或商业数据库Oracle和Sybase）之间很容易实现移植。\n本书内容全面而且相当实用，涵盖了面向初级数据库管理员和程序员的基本信息，另外还提供了有关安全性、优化和程序设计等方面的高级内容。在此既包括教程，又包括有关的参考信息。第二版保留了第一版的优点，同时增加了MySQL 4.0.1和相关编程语言接口的最新信息。",
      "price": "49.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 93,
        "average": "6.9",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "陶国荣"
      ],
      "pubdate": "2011-1-10",
      "tags": [
        {
          "count": 82,
          "name": "JQuery",
          "title": "JQuery"
        },
        {
          "count": 33,
          "name": "Web",
          "title": "Web"
        },
        {
          "count": 31,
          "name": "前端开发",
          "title": "前端开发"
        },
        {
          "count": 21,
          "name": "jQuery",
          "title": "jQuery"
        },
        {
          "count": 20,
          "name": "Ajax",
          "title": "Ajax"
        },
        {
          "count": 15,
          "name": "JavaScript",
          "title": "JavaScript"
        },
        {
          "count": 12,
          "name": "前端",
          "title": "前端"
        },
        {
          "count": 8,
          "name": "jquery",
          "title": "jquery"
        }
      ],
      "origin_title": "",
      "image": "https://img3.doubanio.com\/mpic\/s4577296.jpg",
      "binding": "平装",
      "translator": [
        
      ],
      "catalog": "前　　言\n第1章　jQuery开发入门\/1\n1.1　jQuery概述\/2\n1.1.1　认识jQuery \/2\n1.1.2　jQuery基本功能\/2\n1.1.3　搭建jQuery开发环境\/3\n1.1.4　编写第一个简单的jQuery应用\/3\n1.1.5　jQuery程序的代码风格\/5\n1.2　jQuery的简单应用\/7\n1.2.1　jQuery访问DOM对象\/7\n1.2.2　jQuery控制DOM对象\/7\n1.2.3　jQuery控制页面CSS \/9\n1.3　本章小结\/11\n第2章　jQuery 选择器\/12\n2.1　jQuery选择器概述\/13\n2.1.1　什么是选择器\/13\n2.1.2　选择器的优势\/13\n2.2　jQuery选择器详解\/17\n2.2.1　基本选择器\/18\n2.2.2　层次选择器\/20\n2.2.3　简单过滤选择器\/22\n2.2.4　内容过滤选择器\/25\n2.2.5　可见性过滤选择器\/27\n2.2.6　属性过滤选择器\/28\n2.2.7　子元素过滤选择器\/30\n2.2.8　表单对象属性过滤选择器\/32\n2.2.9　表单选择器\/34\n2.3　综合案例分析—导航条在项目中的应用\/37\n2.3.1　需求分析\/37\n2.3.2　效果界面\/38\n2.3.3　功能实现\/38\n2.3.4　代码分析\/40\n2.4　本章小结\/41\n第3章　jQuery操作DOM \/42\n3.1　DOM基础\/43\n3.2　访问元素\/44\n3.2.1　元素属性操作\/45\n3.2.2　元素内容操作\/49\n3.2.3　获取或设置元素值\/51\n3.2.4　元素样式操作\/53\n3.3　创建节点元素\/58\n3.4　插入节点\/60\n3.4.1　内部插入节点方法\/60\n3.4.2　外部插入节点方法\/64\n3.5　复制节点\/66\n3.6　替换节点\/68\n3.7　包裹节点\/69\n3.8　遍历元素\/71\n3.9　删除元素\/73\n3.10　综合案例分析—数据删除和图片预览在项目中的应用\/75\n3.10.1　需求分析\/75\n3.10.2　效果界面\/75\n3.10.3　功能实现\/77\n3.10.4　代码分析\/80\n3.11　本章小结\/81\n第4章　jQuery中的事件与应用\/82\n4.1　事件机制\/83\n4.2　页面载入事件\/85\n4.2.1　ready()方法的工作原理\/85\n4.2.2　ready()方法的几种相同写法\/86\n4.3　绑定事件\/86\n4.4　切换事件\/90\n4.4.1　hover()方法\/90\n4.4.2　toggle()方法\/93\n4.5　移除事件\/94\n4.6　其他事件\/96\n4.6.1　方法one() \/97\n4.6.2　方法trigger () \/98\n4.7　表单应用\/100\n4.7.1　文本框中的事件应用\/100\n4.7.2　下拉列表框中的事件应用\/104\n4.8　列表应用\/109\n4.9　网页选项卡的应用\/114\n4.10 　综合案例分析—删除数据时的提示效果在项目中的应用\/116\n4.10.1　需求分析\/116\n4.10.2　效果界面\/117\n4.10.3　功能实现\/118\n4.10.4　代码分析\/121\n4.11　本章小结\/123\n第5章　jQuery的动画与特效\/124\n5.1　显示与隐藏\/125\n5.1.1　show()与hide()方法\/125\n5.1.2　动画效果的show()与hide()方法\/126\n5.1.3　toggle()方法\/128\n5.2　滑动\/131\n5.2.1　slideDown()与slideUp方法\/131\n5.2.2　slideToggle()方法\/134\n5.3　淡入淡出\/135\n5.3.1　fadeIn()与fadeOut()方法\/135\n5.3.2　fadeTo()方法\/137\n5.4　自定义动画\/139\n5.4.1　简单的动画\/140\n5.4.2　移动位置的动画\/141\n5.4.3　队列中的动画\/144\n5.4.4　动画停止和延时\/146\n5.5　动画效果综述\/148\n5.5.1　各种动画方法说明\/148\n5.5.2　使用animate()方法代替其他动画效果\/148\n5.6　综合案例分析—动画效果浏览相册中的图片\/149\n5.6.1　需求分析\/149\n5.6.2　效果界面\/149\n5.6.3　功能实现\/151\n5.6.4　代码分析\/155\n5.7　本章小结\/158\n第6章　Ajax在jQuery中的应用\/159\n6.1　加载异步数据\/160\n6.1.1　传统的JavaScript方法\/160\n6.1.2　jQuery中的load()方法\/162\n6.1.3　jQuery中的全局函数getJSON()\/164\n6.1.4　jQuery中的全局函数getScript()\/166\n6.1.5　jQuery中异步加载XML文档\/168\n6.2　请求服务器数据\/170\n6.2.1　$.get()请求数据\/170\n6.2.2　$.post()请求数据\/172\n6.2.3　serialize()序列化表单\/175\n6.3　$.ajax()方法\/177\n6.3.1　$.ajax()的基本概念\/177\n6.3.2　$.ajaxSetup()设置全局Ajax \/181\n6.4　Ajax中的全局事件\/184\n6.4.1　Ajax全局事件的基本概念\/184\n6.4.2　ajaxStart与ajaxStop全局事件\/184\n6.5　综合案例分析—用Ajax实现新闻点评即时更新\/187\n6.5.1　需求分析\/187\n6.5.2　效果界面\/187\n6.5.3　功能实现\/189\n6.5.4　代码分析\/193\n6.6　本章小结\/196\n第7章　jQuery常用插件\/197\n7.1　jQuery插件概述\/198\n7.2　验证插件validate \/198\n7.3　表单插件form \/202\n7.4　Cookie插件cookie \/205\n7.5　搜索插件AutoComplete \/209\n7.6　图片灯箱插件notesforlightbox \/213\n7.7　右键菜单插件contextmenu \/216\n7.8　图片放大镜插件jqzoom \/222\n7.9　自定义jQuery插件\/224\n7.9.1　插件的种类\/225\n7.9.2　插件开发要点\/225\n7.9.3　开发插件示例\/226\n7.10　综合案例分析—使用uploadify插件实现文件上传功能 \/232\n7.10.1 　需求分析\/232\n7.10.2　效果界面\/233\n7.10.3　功能实现\/234\n7.10.4　代码分析\/236\n7.11　本章小结\/241\n第8章　jQuery UI插件\/242\n8.1　认识jQuery UI \/243\n8.2　jQuery UI交互性插件\/244\n8.2.1　拖曳插件\/244\n8.2.2　放置\/247\n8.2.3　排序插件\/250\n8.3　jQuery UI微型插件\/252\n8.3.1　折叠面板插件\/252\n8.3.2　日历\/255\n8.3.3　选项卡插件\/260\n8.3.4　对话框插件\/263\n8.4　综合案例分析—使用jQuery UI插件以拖动方式管理相册\/269\n8.4.1　需求分析\/269\n8.4.2　效果界面\/269\n8.4.3　功能实现\/270\n8.4.4　代码分析\/274\n8.5　本章小结\/277\n第9章　jQuery实用工具函数\/278\n9.1　什么是工具函数\/279\n9.2　工具函数的分类\/279\n9.2.1　浏览器的检测\/279\n9.2.2　数组和对象的操作\/284\n9.2.3　字符串操作\/291\n9.2.4　测试操作\/293\n9.2.5　URL操作\/297\n9.3　工具函数的扩展\/299\n9.4　其他工具函数—$.proxy() \/302\n9.5　综合案例分析—使用jQuery扩展工具函数实现对字符串指定类型的检测\/305\n9.5.1　需求分析\/305\n9.5.2　效果界面\/305\n9.5.3　功能实现\/306\n9.5.4　代码分析\/309\n9.6　本章小结\/311\n第10章　jQuery性能优化与最佳实践\/312\n10.1　优化选择器执行的速度\/313\n10.1.1　优先使用ID与标记选择器\/313\n10.1.2　使用jQuery对象缓存\/314\n10.1.3　给选择器一个上下文\/315\n10.2　处理选择器中的不规范元素标志\/317\n10.2.1　选择器中含有特殊符号\/317\n10.2.2　选择器中含有空格符号\/318\n10.3　优化事件中的冒泡现象\/319\n10.4　使用data()方法缓存数据\/321\n10.5　解决jQuery库与其他库的冲突\/326\n10.5.1　jQuery在其他库前导入\/326\n10.5.2　jQuery在其他库后导入\/328\n10.6　使用子查询优化选择器性能\/330\n10.7　减少对DOM元素直接操作\/332\n10.8　正确区分DOM对象与jQuery对象\/334\n10.8.1　DOM对象与jQuery对象的定义\/334\n10.8.2　DOM对象与jQuery对象的类型转换\/335\n10.9　本章小结\/337\n第11章　综合案例开发\/338\n案例1：切割图片\/339\n案例2：在线聊天室\/349\n本章小结\/365\n示 例 目 录\n第1章　jQuery开发入门\/1\n示例1-1　编写第一个简单的jQuery程序\/4\n示例1-2　jQuery事件的链式写法\/5\n示例1-3　控制DOM对象\/7\n示例1-4　jQuery控制CSS样式\/10\n第2章　jQuery 选择器\/12\n示例2-1　使用JavaScript实现隔行变色\/13\n示例2-2　使用jQuery选择器实现隔行变色\/15\n示例2-3　使用JavaScript输出文字信息\/16\n示例2-4　使用jQuery输出文字信息\/17\n示例2-5　使用jQuery基本选择器选择元素\/18\n示例2-6　使用jQuery层次选择器选择元素\/20\n示例2-7　使用jQuery基本过滤选择器选择元素\/22\n示例2-8　使用jQuery内容过滤选择器选择元素\/25\n示例2-9　使用jQuery可见性过滤选择器选择元素\/27\n示例2-10　使用jQuery属性过滤选择器选择元素\/28\n示例2-11　使用jQuery子元素过滤选择器选择元素\/30\n示例2-12　通过表单对象属性过滤选择器获取表单对象\/32\n示例2-13　使用jQuery表单过滤选择器获取元素\/35\n综合案例分析—导航条在项目中的应用\/37\n第3章　jQuery操作DOM \/42\n示例3-1　创建一个DOM页面文档\/43\n示例3-2　通过attr(name)方法获取元素的属性\/45\n示例3-3　设置元素的属性（一）\/46\n示例3-4　设置元素的属性（二）\/48\n示例3-5　设置或获取元素的内容\/50\n示例3-6　设置或获取元素的值\/51\n示例3-7　直接设置元素样式值\/54\n示例3-8　增加CSS类别\/55\n示例3-9　类别切换\/57\n示例3-10　动态创建节点元素\/59\n示例3-11　插入节点（一）\/62\n示例3-12　插入节点（二）\/63\n示例3-13　外部插入节点\/65\n示例3-14　复制元素节点\/66\n示例3-15　替换元素节点\/68\n示例3-16　包裹元素节点\/70\n示例3-17　遍历元素\/72\n示例3-18　删除元素\/73\n综合案例分析—数据删除和图片预览在项目中的应用\/75\n第4章　jQuery中的事件与应用\/82\n示例4-1　事件中的冒泡现象\/83\n示例4-2　用bind方法绑定事件\/87\n示例4-3　用映射方式绑定不同的事件\/88\n示例4-4　用hover方法绑定事件\/91\n示例4-5　用toggle方法绑定事件\/93\n示例4-6　用unbind方法移除事件\/94\n示例4-7　用one方法绑定事件\/97\n示例4-8　用trigger方法绑定事件\/98\n示例4-9　文本框中的事件应用\/100\n示例4-10　下拉列表框中的事件应用\/104\n示例4-11　列表中的导航菜单应用\/109\n示例4-12　网页选项卡的应用\/114\n综合案例分析—删除数据时的提示效果在项目中的应用\/116\n第5章　jQuery的动画与特效\/124\n示例5-1　show()与hide()方法简介125\n示例5-2　动画效果的show()与hide()方法127\n示例5-3　toggle()方法的使用\/129\n示例5-4　slideDown()与slideUp()方法\/132\n示例5-5　slideToggle()方法\/134\n示例5-6　fadeIn()和fadeOut()方法\/136\n示例5-7　fadeTo()方法\/138\n示例5-8　简单的动画\/140\n示例5-9　移动位置的动画\/142\n示例5-10　队列中的动画\/144\n示例5-11　动画停止和延时\/146\n综合案例分析—动画效果浏览相册中的图片\/149\n第6章　Ajax在jQuery中的应用\/159\n示例6-1　传统的JavaScript方法实现Ajax功能\/160\n示例6-2　load()方法实现异步获取数据\/162\n示例6-3　全局函数getJSON()实现异步获取数据\/164\n示例6-4　全局函数getScript()实现异步获取数据\/166\n示例6-5　全局函数get()实现异步获取XML文档数据\/168\n示例6-6　全局函数get ()向服务器请求数据\/171\n示例6-7　全局函数post ()向服务器请求数据\/173\n示例6-8　serialize()序列化表单\/175\n示例6-9　用$.ajax()方法发送请求\/178\n示例6-10　$.ajaxSetup()方法全局设置Ajax \/181\n示例6-11　jQuery中的全局事件\/185\n综合案例分析—用Ajax实现新闻点评即时更新\/187\n第7章　jQuery常用插件\/197\n示例7-1　验证插件的使用\/199\n示例7-2　表单插件的使用\/203\n示例7-3　cookie插件的使用\/206\n示例7-4　搜索插件的使用\/209\n示例7-5　图片灯箱插件的使用\/213\n示例7-6　右键菜单插件的使用\/217\n示例7-7　图片放大镜插件的使用\/222\n示例7-8　对象级别插件的开发\/226\n示例7-9　类级别插件的开发\/229\n综合案例分析—使用uploadify插件实现文件上传功能 \/232\n第8章　jQuery UI插件\/242\n示例8-1　使用draggable插件实现对象的拖曳操作\/245\n示例8-2　使用droppable插件实现对象的放置操作\/247\n示例8-3　使用sortable插件实现列表中表项的拖曳排序操作\/250\n示例8-4　使用accordion插件实现页面中多区域的折叠操作\/253\n示例8-5　使用datepicker插件实现日期选择的基本操作\/256\n示例8-6　使用datepicker插件实现分段时间的选择\/258\n示例8-7　使用tabs插件展示选项卡的基本功能\/261\n示例8-8　使用dialog插件弹出提示和确定信息对话框\/264\n综合案例分析—使用jQuery UI插件以拖动方式管理相册\/269\n第9章　jQuery实用工具函数\/278\n示例9-1　browser对象的使用\/280\n示例9-2　boxModel对象的使用\/282\n示例9-3　$.each()函数遍历数组\/284\n示例9-4　$.each()函数遍历对象\/285\n示例9-5　$. grep()函数筛选数据\/287\n示例9-6　$. map()函数变更数据\/288\n示例9-7　$.inArray()函数搜索数据\/290\n示例9-8　$.trim()函数除掉字符串左右两边的空格符\/292\n示例9-9　$.isEmptyObject()函数的使用\/293\n示例9-10　$.isPlainObject ()函数的使用\/295\n示例9-11　$.contains()函数的使用\/296\n示例9-12　使用函数$.param()对数组进行序列化\/298\n示例9-13　使用函数$.extend()扩展工具函数\/300\n示例9-14　使用函数$.proxy()改变事件函数的作用域\/302\n综合案例分析—使用jQuery扩展工具函数实现对字符串指定类型的检测\/305\n第10章　jQuery性能优化与最佳实践\/312\n示例10-1　在指定的查找范围内获取DOM元素\/315\n示例10-2　选择器中含有空格符与不含空格符的区别\/318\n示例10-3　事件中的target方法优化冒泡现象\/320\n示例10-4　使用data()方法在元素上存取移除数据\/322\n示例10-5　使用data()方法在元素上存取移除JSON格式的数据\/323\n示例10-6　解决jQuery库先于其他库导入时，变量“$”的使用权问题\/326\n示例10-7　解决jQuery库后于其他库导入时，变量“$”的使用权问题\/328\n示例10-8　使用子查询优化选择器性能\/330\n示例10-9　减少对DOM元素直接操作\/332\n示例10-10　DOM对象与jQuery对象的类型转换\/335\n第11章　综合案例开发\/338\n案例1：切割图片\/339\n案例2：在线聊天室\/349",
      "ebook_url": "https:\/\/read.douban.com\/ebook\/15150520\/",
      "pages": "384",
      "images": {
        "small": "https://img3.doubanio.com\/spic\/s4577296.jpg",
        "large": "https://img3.doubanio.com\/lpic\/s4577296.jpg",
        "medium": "https://img3.doubanio.com\/mpic\/s4577296.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/5415955\/",
      "id": "5415955",
      "publisher": "机械工业出版社华章公司",
      "isbn10": "7111325435",
      "isbn13": "9787111325437",
      "title": "jQuery权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/5415955",
      "alt_title": "",
      "author_intro": "陶国荣，资深Web技术专家，有10余年开发经验，是国内较早专业从事Web开发的一线技术人员和培训讲师。醉心于对JavaScript、jQuery和Ajax等Web开发技术的研究和实践，并长期专注于HTML页面的优化与用户体验的研究，在页面框架搭建、数据流向分析、页面静态优化方面拥有丰富的实践经验。此外，他还是微软技术方面的专家，精通C#、ASP.NET 和SQL Server等技术，出版相关著作多部。",
      "summary": "《jQuery权威指南》配套源代码下载：http:\/\/download.csdn.net\/source\/2960801\n由国内资深Web技术专家亲自执笔，4大Web开发社区一致鼎力推荐，权威性毋庸置疑。\n内容新颖，基于jQuery的最新版本撰写，所有新功能和新特性一览无余；内容全面，不仅讲解了jQuery技术本身的方方面面，而且还包括与jQuery相关的扩展知识； 实战性强，不仅每个知识点都配有完整的小案例，而且还有两个综合性的案例。本书不仅能满足读者系统学习理论知识的需求，还能满足需要充分实践的需求。\n一共分为11章，首先以示例的方式对jQuery做了全局性的介绍，以便于为读者建立jQuery的大局观，这对初学者尤为重要；其次详细讲解了jQuery的各种选择器、jQuery操作DOM的方法、jQuery中的事件与应用、jQuery中的动画和特效、Ajax在 jQuery中的应用，以及各种常用的jQuery插件的使用方法和技巧，所有这些知识点都配有完整的示例（包括需求分析、代码实现和结果展示三部分）；再接着对jQuery UI和jQuery实用工具函数等扩展知识，以及jQuery的开发技巧与性能优化等方面的重要知识做了详尽的阐述；最后以两个具有代表性的综合案例结束全书，希望能帮助读者将前面所学的理论知识真正贯穿于实践中，迅速进入jQuery的殿堂。",
      "ebook_price": "37.76",
      "series": {
        "id": "19972",
        "title": "实战系列"
      },
      "price": "59.00元"
    },
    {
      "rating": {
        "max": 10,
        "numRaters": 37,
        "average": "9.5",
        "min": 0
      },
      "subtitle": "",
      "author": [
        "Casey Reas",
        "Ben Fry"
      ],
      "pubdate": "2013-10-1",
      "tags": [
        {
          "count": 66,
          "name": "processing",
          "title": "processing"
        },
        {
          "count": 31,
          "name": "交互设计",
          "title": "交互设计"
        },
        {
          "count": 30,
          "name": "编程",
          "title": "编程"
        },
        {
          "count": 21,
          "name": "数据可视化",
          "title": "数据可视化"
        },
        {
          "count": 17,
          "name": "新媒体",
          "title": "新媒体"
        },
        {
          "count": 13,
          "name": "设计",
          "title": "设计"
        },
        {
          "count": 10,
          "name": "可视化",
          "title": "可视化"
        },
        {
          "count": 9,
          "name": "visualization",
          "title": "visualization"
        }
      ],
      "origin_title": "",
      "image": "https://img1.doubanio.com\/mpic\/s27080847.jpg",
      "binding": "平装",
      "translator": [
        "张静"
      ],
      "catalog": "目录\n序 xix\n前言 xxi\nProcessing 1\n使用Processing 9\n结构一：代码要素 17\n形状一：坐标与基本图形 23\n数据一：变量 37\n数学一：算术与函数 43\n控制一：判断 51\n控制二：重复 61\n形状二：顶点 69\n数学二：曲线 79\n色彩一：用数字定义颜色 85\n图像一：显示与染色 95\n数据二：文本 101\n数据三：转换与对象 105\n字体设计一：显示 111\n数学三：三角学 117\n数学四：随机 127\n变换一：平移与矩阵 133\n变换二：旋转与缩放 137\n开发一：草图与技术 145\n综合一：形式与代码 149\n访谈一：印刷 155\n结构二：连续运行 173\n结构三：函数 181\n形状三：参数与递归 197\n输入一：鼠标一 205\n绘图一：静态形式 217\n输入二：键盘 223\n输入三：事件 229\n输入四：鼠标二 237\n输入五：时间与日期 245\n开发二：迭代与调试 251\n综合二：输入与响应 255\n访谈二：软件与网页 261\n运动一：直线与曲线 279\n运动二：机械与有机体 291\n数据四：数组 301\n图像二：动画 315\n图像三：像素 321\n字体设计二：运动 327\n字体设计三：响应 333\n色彩二：分量 337\n图像四：滤波、融合、复制与\n蒙板 347\n图像五：图像处理 355\n输出一：图像 367\n综合三：运动与数组 371\n访谈三：动画与录像 377\n结构四：对象一 395\n绘图二：动态形式 413\n输出二：文件导出 421\n输入六：文件导入 427\n输入七：界面 435\n结构五：对象二 453\n模拟一：生物 461\n模拟二：物理 477\n综合四：结构与接口 495\n访谈四：演出与装置 501\n扩展一：继续…… 519\n扩展二：三维 525\n扩展三：视觉 547\n扩展四：网络 563\n扩展五：声音 579\n扩展六：印刷品 603\n扩展七：移动平台 617\n扩展八：电子器件 633\n附录A：运算顺序 661\n附录B：保留字 663\n附录C：ASCII与Unicode 664\n附录D：比特、二进制、\n十六进制 669\n附录E：优化 673\n附录F：编程语言 679\n附录G：代码对比 686\n相关媒介 693\n术语表 699\n代码索引 703\n索引 705",
      "pages": "736",
      "images": {
        "small": "https://img1.doubanio.com\/spic\/s27080847.jpg",
        "large": "https://img1.doubanio.com\/lpic\/s27080847.jpg",
        "medium": "https://img1.doubanio.com\/mpic\/s27080847.jpg"
      },
      "alt": "https:\/\/book.douban.com\/subject\/25741413\/",
      "id": "25741413",
      "publisher": "电子工业出版社",
      "isbn10": "7121213524",
      "isbn13": "9787121213526",
      "title": "Processing语言权威指南",
      "url": "https:\/\/api.douban.com\/v2\/book\/25741413",
      "alt_title": "",
      "author_intro": "",
      "summary": "本书介绍了可视化艺术中的计算机编程概念，对开源编程语言Processing作了非常详尽的阐述。学生、艺术家、设计师、建筑师、研究者，以及任何想编程实现绘画、动画和互动的人都可以使用它。书中的大部分章节是短小的单元，介绍Processing的语法和基本概念（变量、函数、面向对象编程），涵盖与软件相关的图像处理、绘制，并且给出了大量简短的原型程序，配以相应的过程图像与注释。书中还有一些访谈文章，与动画制作、表演、产品原型等领域的几位创作者们讨论了与他们作品相关的话题。",
      "price": "139.00"
    }
  ]
};