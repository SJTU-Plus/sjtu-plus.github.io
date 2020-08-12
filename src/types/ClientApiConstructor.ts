import { VueConstructor } from "vue";
import { ClientContext } from "./ClientContext";

export type ClientApiConstructor = (
  Vue: VueConstructor,
  context: ClientContext
) => void;
