<template>
  <Layout>
    <div class="container">
      <div class="row justify-content-center my-3">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                学科交流群
              </h5>
              <p class="card-text">
                上海交通大学的学科交流群都由 SJTU-Plus
                团队管理。我们为其中的一些群启用了机器人自动验证入群功能。
              </p>
              <g-link to="/category/-1" class="card-link">
                浏览
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-3">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                Course+
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                学期开课表 + 虚拟排课服务
              </h6>

              <p class="card-text">
                通过 Course+ 快速查询学期课程，并进行虚拟排课。
              </p>
              <a
                href="https://sjtu-plus.github.io/course-plus"
                class="card-link"
                >使用</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {}
</script>

<style></style>
