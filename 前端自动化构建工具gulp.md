前端自动化构建工具gulp
1. 全局安装node
2. 全局安装npm,或者需安装cnpm(淘宝团队打造国内镜像，使用方法同npm一致，只是把npm,更换为cnpm)
3. 全局安装gulp插件

```
cnpm install gulp -g
```
4. 本地安装gulp插件，并-save-dev保存在package.json文件内，本地安装作用是安装后，引入gulp模块，使用
5. 安装需要的其他模块，比如打包模块，

```
cnpm install gulp-concat --sav-dev
```
6. 创建gulpFile.js文件，可以创建任务了。
7. 在node服务端，输入命令运行。
8. 在输出的文件夹内，查找看是否已经成功生成
9. gulp的其他插件用法同此。