# @iyowei/untildify

> 转换 "~/Development/OpenSource" 波浪路径（虚拟路径）为绝对路径。

## 使用

### untildify(path)

- `path`，{ String }，波浪路径

```js
import { log } from "console";
import { untildify } from "@iyowei/untildify";

log(untildify("~/Development/OpenSource`"));
// 自动获取系统根目录，/Users/iyowei/Development/OpenSource
```

### untildifyWith(path, replacement)

- `path`，{ String }，波浪路径
- `replacement`，{ String }，指定替换路径

```js
import { log } from "console";
import { untildifyWith } from "@iyowei/untildify";

log(log(untildifyWith('~/iyowei', '/dfafsdf/')););
// /dfafsdf/iyowei
```

## 安装

[![Node Version Badge][node version badge]][download node.js] ![esm][esm]

```shell
# Pnpm
pnpm add @iyowei/untildify

# yarn
yarn add @iyowei/untildify

# npm
npm add @iyowei/untildify
```

## 参与贡献

![PRs Welcome][prs welcome badge]

[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
