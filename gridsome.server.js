// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const yaml = require('js-yaml')
const fs = require('fs')

module.exports = function (api) {
  api.loadSource(async ({ addCollection, store }) => {
    const group = addCollection('Group')
    const category = addCollection('Category')

    const { data } = await axios.get('http://aliyun.taraxacum.ink:20999/groups/json/5')

    const buildGroup = (data) => group.addNode({
      id: data.group_id,
      name: data.group_name,
      number: data.group_number
    })

    const buildCategory = (data) =>
      category.addNode({
        id: data.category_id,
        name: data.category_name,
        groups: data.groups.map(x => store.createReference(buildGroup(x))),
        subCategories: data.subcategories.map(x => store.createReference(buildCategory(x))),
      })

    buildCategory(data)

    const groupsInfo = fs.readFileSync('./src/data/qq_groups.yaml', 'utf8');
    const groups = yaml.safeLoad(groupsInfo);

    category.addNode({
      id: -1,
      name: "学科交流群",
      groups: groups.map((g, idx) => store.createReference(group.addNode({
        id: -idx,
        name: g.name,
        number: g.group,
        bot: g.bot,
        full: g.full
      }))),
      subCategories: []
    })
  })
}
