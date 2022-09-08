# S-Design 组件库

## 坑

1. 如果 eslint 出现报错"vite" is not published 和"@vitejs/plugin-react" is not published，则需要在 package.json 中把这两个依赖从 devDependencies 移到 dependencies 内。
2. 如果报错不能使用 jsx，则需要 tsconfig.compilerOptions 中配置"jsx": "react"
3. 如果使用 document 的地方报错找不到名称“document”，则需要配置"lib": ["esnext", "DOM"]
