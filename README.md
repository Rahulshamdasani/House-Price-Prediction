## Final Commit on 25 Aug - Components: Status All, Status, StatusList, App
### New Component: StatusList
#### Changes From Prev Version: 
1) Now the statuses are stored in status all as a state and beign passed to status List as a property and then are displayed inside statusList

2) We are taking User Defined statuses and adding it to the state variable to show the newly submitted statuses. We learnt many things in this which are written at the end

#### What we learn:

1) ``` onChange ``` event handler to store the state while the user is typing. In this case we fetch the value using ``` ev.target.value ```

2) ``` onSubmit ``` event handler to submit the form fields and we also saw how to prevent the default action of submit which is to reload the page by writting ``` ev.preventDefault() ```





## Final Commit on 24 Aug - Components: Status, StatusList, App
We have made a main component which is app.js
which is basically being rendered by reactDom which is then getting the id = root and placing the app inside that div.

Inside the app, we are only calling status list, this status list will store each status as its state and will then use map function to link each of this status with the < status > tag and will send the text as a property in this tag

Inside status.js we are making a div which displays the text from the property which is sent to it and also keeps a track of likes, all these likes are stored as a state and we call a function whenever like button is called.

