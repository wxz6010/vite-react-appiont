// import { set } from "loadsh";
import { HmrContext, Plugin } from "vite";
import { set } from "lodash-es";
import fg from "fast-glob";
import fs from "fs";
/**
 * 根据 pages 目录生成路径配置
 */
// const modules = import.meta.glob("./src/pages/**/$*.{ts,tsx}");

// function generatePathConfig(): Record<string, any> {
//   // 扫描 src/pages 下的所有具有路由文件
//   console.log(modules)
//   const pathConfig = {};
//   // Object.keys(modules).forEach((filePath) => {
//   //   const routePath = filePath
//   //     // 去除 src/pages 不相关的字符
//   //     .replace("/src/pages/", "")
//   //     // 去除文件名后缀
//   //     .replace(/.tsx?/, "")
//   //     // 转换动态路由 $[foo].tsx => :foo
//   //     .replace(/\$\[([\w-]+)]/, ":$1")
//   //     // 转换以 $ 开头的文件
//   //     .replace(/\$([\w-]+)/, "$1")
//   //     // 以目录分隔
//   //     .split("/");
//   //   // 使用 lodash.set 合并为一个对象
//   //   set(pathConfig, routePath, modules[filePath]);
//   // });
//   // console.log(pathConfig);
//   return pathConfig;
// }

async function generateRoutes() {
  console.log("-----------");
  const files = await fg("**/*.{ts,tsx}", { dot: true, cwd: "src" });
  const templte = `
  import React from "react";
 import { useRoutes } from "react-router-dom";
// import Layouts from "../layouts";
import About from "../pages/about";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function () {
  const Layouts = React.lazy(() => import("../layouts"));
  return useRoutes([
    {
      path: "/",
      element: <Layouts />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);
}
  `;

  fs.writeFileSync(`${process.cwd()}/src/Routes/test.tsx`, templte);
  console.log(files);
}

export default function autoAppoint(): Plugin {
  // const virtualId = "virtual:" + "auto-appoint";
  // const virtualModuleId = "/@" + virtualId;
  return {
    name: "vite-auto-appoint",
    enforce: "pre",
    handleHotUpdate(ctx) {
      console.log("---");
    },
    buildStart() {
      console.log("-render start");
      generateRoutes();
    },
    // resolveId(id){
    //   return id == virtualId ? virtualModuleId : null;
    // },

    // load(id){
    //    console.log(id)
    // }
  };
}
