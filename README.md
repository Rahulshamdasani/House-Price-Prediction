## Final Commit on 24 Aug - Components: Status, StatusList, App
We have made a main component which is app.js
which is basically being rendered by reactDom which is then getting the id = root and placing the app inside that div.

Inside the app, we are only calling status list, this status list will store each status as its state and will then use map function to link each of this status with the < status > tag and will send the text as a property in this tag

Inside status.js we are making a div which displays the text from the property which is sent to it and also keeps a track of likes, all these likes are stored as a state and we call a function whenever like button is called.

