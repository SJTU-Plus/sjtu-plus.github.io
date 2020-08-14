serve:
	bundle exec jekyll serve
build:
	bundle exec jekyll build
lint:
	prettier --write "**/*.html"
update:
	curl -sSL http://aliyun.taraxacum.ink:20999/groups/json/5 > _data/all.json
	curl -sSL http://aliyun.taraxacum.ink:20999/groups/json/15 > _data/groups.json