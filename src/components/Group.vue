<template>
  <div class="card mb-4 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">{{ group.name }}</h5>
      <p class="card-text">{{ group.number }}</p>
      <!-- <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">Copy</button>
        </div>
        <small class="text-muted">COMMENT</small>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { HelloService } from "../services";

@Component
export default class Group extends Vue {
    @Prop() group: any;
}
</script>

<style>
</style>
