@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite-node@1.6.1_@types+node_0b3c7836906dd010c0634f5c78799624\node_modules\vite-node\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite-node@1.6.1_@types+node_0b3c7836906dd010c0634f5c78799624\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite-node@1.6.1_@types+node_0b3c7836906dd010c0634f5c78799624\node_modules\vite-node\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vite-node@1.6.1_@types+node_0b3c7836906dd010c0634f5c78799624\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\vite-node\vite-node.mjs" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\vite-node\vite-node.mjs" %*
)
