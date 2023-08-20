
Way of use
-----------

- 1. In `src/js/parseMd/bauemd.js` the current Url is:
     `http://127.0.0.1:5500/assets/md/${mdFile}` you can use the vsCode extension called Live Server in order to get localhost:5500.
     If not change it to your liking.
     <br>
     <br>
- 2. In order to add a new tab and its according Markdown File:<br>
     1rst: Create a Markdown file and save it under `assets/md`.<br>
     2nd: In index.js: Create an Instance using the Class:<br>
     ```js
     let aVariablewithaOriginalname = new BaueCarte('yourTabname',false,'navTabs','content','yourMDFile.md');
     // navTabs and content don't need to be changed those are Elements classes
     // the boolean is in the first instance true, next instances are in false
     ```
- 3. Last but not Least change the author name in the index.html