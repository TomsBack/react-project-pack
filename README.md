# web-start-config

My package pack, so that I don't have to manually always do it.

Bare minimum to start working with modern react.

Used with vite & react. Different frameworks/libraries should work

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
