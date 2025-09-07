@echo off
echo Starting local server for built CV...
echo.
echo Opening CV at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

REM Check if http-server is available
npx http-server --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing http-server...
    npm install -g http-server
)

REM Serve the dist folder
npx http-server dist -p 3000 -o -c-1

pause
