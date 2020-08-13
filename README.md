# SJTU-Plus 学科交流群

SJTU 学科交流群网站。

## 在本地测试

```bash
gem install bundler jekyll
bundle exec jekyll serve
npm i -g prettier
prettier --write "**/*.html"
```

## 构建网站

```bash
bundle exec jekyll build
```

## 数据文件

`_data/groups.yml` 储存学科群数据。

`_data/all.json` 储存新生群数据。该数据在 GitHub Action 上构建时会自动更新到最新版。
