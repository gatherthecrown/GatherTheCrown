@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\expo@54.0.34_@babel+core@7._6d22cf553187b34cd4eb6dde1a4691dd\node_modules\expo\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\expo@54.0.34_@babel+core@7._6d22cf553187b34cd4eb6dde1a4691dd\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\expo@54.0.34_@babel+core@7._6d22cf553187b34cd4eb6dde1a4691dd\node_modules\expo\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\expo@54.0.34_@babel+core@7._6d22cf553187b34cd4eb6dde1a4691dd\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\expo\bin\cli" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\expo\bin\cli" %*
)
