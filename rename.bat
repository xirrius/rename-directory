echo off
set /p replaceThis=Enter the key to be replaced (case sensitive): 
set /p replaceWith=Enter the key to be replace with (case sensitive): 
node index.js %replaceThis% %replaceWith%
pause