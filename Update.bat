@echo off
git fetch
git reset --hard origin/main
git clean -fd
pause