# Starting React pack for projects

Modern react using pnpm and vite

packed with:
ts
eslint (8.57.0)
prettier
tailwindcss
vite-test
postcss (will get replaced by lightningcss in the future)
twMerge + clsx util

Installed with pnpm

You can also run this powershell script, so that you don't need to setup stuff manually

```ps1
git init .
git remote add origin "https://github.com/TomsBack/web-start-config"
git pull origin master

Remove-Item .\.git -Force -Recurse
Get-ChildItem -Path .\ -Filter ".gitkeep" -Recurse | Remove-Item
Get-ChildItem .\*.md -File -Recurse | Remove-Item -Force

pnpm i
```
