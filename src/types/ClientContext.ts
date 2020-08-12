import VueRouter from 'vue-router';
import { MetaInfo } from 'vue-meta';

export interface ClientContext {
  appOptions: object;
  router: VueRouter;
  head: MetaInfo;
}
