@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite@5.4.21_@types+node@20._2e59d6321a8215c5a965dc927467bb25\node_modules\vite\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite@5.4.21_@types+node@20._2e59d6321a8215c5a965dc927467bb25\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite@5.4.21_@types+node@20._2e59d6321a8215c5a965dc927467bb25\node_modules\vite\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite@5.4.21_@types+node@20._2e59d6321a8215c5a965dc927467bb25\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\vite\bin\vite.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\vite\bin\vite.js" %*
)
