@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vitest@1.6.1_@types+node@20_b1dc3c89fdadfb178d164d82e91f1a1d\node_modules\vitest\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vitest@1.6.1_@types+node@20_b1dc3c89fdadfb178d164d82e91f1a1d\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vitest@1.6.1_@types+node@20_b1dc3c89fdadfb178d164d82e91f1a1d\node_modules\vitest\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\vitest@1.6.1_@types+node@20_b1dc3c89fdadfb178d164d82e91f1a1d\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\vitest\vitest.mjs" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\vitest\vitest.mjs" %*
)
