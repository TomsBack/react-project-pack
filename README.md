# Starting React pack for projects

Modern react using **bun** and **vite**

Packed with:

-   Typescript
-   Eslint (8.57.0)
-   Prettier
-   Tailwindcss (4 alpha)
-   Vitest
-   twMerge + clsx util

Installed with bun
Might use bun in the future

You can also run this powershell script, so that you don't need to setup stuff manually

```ps1
git init .
git remote add origin "https://github.com/TomsBack/web-start-config"
git pull origin master_bun_tailwind4

Remove-Item .\.git -Force -Recurse
Get-ChildItem -Path .\ -Filter ".gitkeep" -Recurse | Remove-Item
Get-ChildItem .\*.md -File -Recurse | Remove-Item -Force

bun i
```
