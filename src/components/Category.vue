<template>
  <div class="card">
    <div class="card-header p-3"><g-link :to="`/category/${category.id}`" class="text-secondary">{{ category.name }}</g-link></div>

    <div class="card-body">
      <div class="row">
        <div class="col-md-4" v-for="edge in groups($static.groups.edges)" :key="edge.node.id">
          <Group :group="edge.node"></Group>
        </div>
      </div>
      <div class="accordion">
        <Category
          :category="edge.node"
          v-for="edge in categories($static.categories.edges)"
          :key="edge.node.id"
        ></Category>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Group from "~/components/Group.vue";

@Component({ components: { Group } })
export default class Category extends Vue {
  @Prop() category: any;

  groups(groups: any[]) {
    return groups.filter((g) =>
      this.category.groups.find((gg: any) => gg.id == g.node.id)
    );
  }

  categories(categories: any[]) {
    return categories.filter((c) =>
      this.category.subCategories.find((cc: any) => cc.id == c.node.id)
    );
  }
}
</script>

<static-query>
query {
  categories: allCategory {
    edges {
      node {
        id
        name
        groups { id }
        subCategories { id }
      }
    }
  }
  groups: allGroup {
    edges {
      node {
        id
        name
        number
      }
    }
  }
}
</static-query>

<style>
</style>
