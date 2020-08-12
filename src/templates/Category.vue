<template>
  <Layout>
    <div class="py-5">
      <div class="container">
        <div class="accordion">
          <CategoryComponent :category="$page.category" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Group from "~/components/Group.vue";
import CategoryComponent from "~/components/Category.vue";

@Component({ components: { CategoryComponent, Group } })
export default class Category extends Vue {}
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<page-query>
  query ($id: ID!) {
    category(id: $id) {
      id
      name
      groups {
        id
      }
      subCategories {
        id
      }
    }
  }
</page-query>

<style></style>
