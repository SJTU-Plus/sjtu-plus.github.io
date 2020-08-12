<template>
  <div class="layout">
    <header class="header">
      <section class="jumbotron jumbotron-fluid text-center bg-light">
        <div class="container">
          <div class="p-5">
            <h1>{{ $static.metadata.siteName }}</h1>
          </div>
          <p class="lead">
            如果你希望将自己维护的 QQ 群加入本清单，请联系
            @迟先生、@杜大佬、@小笼包 或者 @人参果
          </p>
          <p class="lead">
            本项目由
            <a href="https://github.com/SJTU-Plus">
              <GithubIcon />SJTU-Plus 团队 </a
            >维护
          </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <g-link to="/">
                首页
              </g-link>
            </li>
            <li class="list-inline-item">
              <g-link to="/category/-1">
                学科交流群
              </g-link>
            </li>
            <li class="list-inline-item">
              <g-link to="/category/5">
                2020 新生交流群
              </g-link>
            </li>
            <li class="list-inline-item">
              <g-link to="/category/12">
                2020 新生地区群
              </g-link>
            </li>
          </ul>
        </div>
      </section>
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GithubIcon } from "vue-feather-icons";

@Component({ components: { GithubIcon } })
export default class DefaultLayout extends Vue {}
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
