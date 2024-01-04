import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types/types";

export function buildDevServer({paths, port}: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: paths.html,
    },
    compress: true,
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}