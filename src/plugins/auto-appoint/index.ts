// import { set } from "loadsh";
import { HmrContext } from "vite";
import { set } from "lodash-es";
/**
 * 根据 pages 目录生成路径配置
 */
const modules = import.meta.glob("./src/pages/**/$*.{ts,tsx}");

function generatePathConfig(): Record<string, any> {
  // 扫描 src/pages 下的所有具有路由文件
  console.log(modules)
  const pathConfig = {};
  // Object.keys(modules).forEach((filePath) => {
  //   const routePath = filePath
  //     // 去除 src/pages 不相关的字符
  //     .replace("/src/pages/", "")
  //     // 去除文件名后缀
  //     .replace(/.tsx?/, "")
  //     // 转换动态路由 $[foo].tsx => :foo
  //     .replace(/\$\[([\w-]+)]/, ":$1")
  //     // 转换以 $ 开头的文件
  //     .replace(/\$([\w-]+)/, "$1")
  //     // 以目录分隔
  //     .split("/");
  //   // 使用 lodash.set 合并为一个对象
  //   set(pathConfig, routePath, modules[filePath]);
  // });
  // console.log(pathConfig);
  return pathConfig;
}

export default function autoAppoint() {
  return {
    name: "vite-auto-appoint",
    handleHotUpdate(ctx: HmrContext) {
      console.log("handle hot update");
      
      generatePathConfig();
      console.log('--------en-----')
      return []
    },
  };
}
