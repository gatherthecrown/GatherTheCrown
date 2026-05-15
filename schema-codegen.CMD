@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\@colyseus+schema@2.0.37\node_modules\@colyseus\schema\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\@colyseus+schema@2.0.37\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\@colyseus+schema@2.0.37\node_modules\@colyseus\schema\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\@colyseus+schema@2.0.37\node_modules;C:\Users\deanz\Downloads\Gather the Crown Creats and Foes\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\..\node_modules\.pnpm\@colyseus+schema@2.0.37\node_modules\@colyseus\schema\bin\schema-codegen" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\..\node_modules\.pnpm\@colyseus+schema@2.0.37\node_modules\@colyseus\schema\bin\schema-codegen" %*
)
