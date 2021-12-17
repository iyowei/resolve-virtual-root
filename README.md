[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat

# resolveVirtualRoot(path)

> 转换 `~/Development/OpenSource` 虚拟路径为绝对路径。

## 使用

- `path`，{ String }，路径

```js
import { log } from "console";
import resolveVirtualRoot from "@iyowei/resolve-virtual-root";

log(resolveVirtualRoot("~/Development/OpenSource`"));
// /Users/iyowei/Development/OpenSource
```

## 安装

[![Node Version Badge][node version badge]][download node.js]

```shell
# Pnpm
pnpm add @iyowei/resolve-virtual-root

# yarn
yarn add @iyowei/resolve-virtual-root

# npm
npm add @iyowei/resolve-virtual-root
```

## 参与贡献

![PRs Welcome][prs welcome badge]
