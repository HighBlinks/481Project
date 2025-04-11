# Login Page: 
To enter you can leave both username and password blank to be logged in as a guest 
OR
Username = Plebian Dunce
Password = password
OR
Username = Vance
Password = password
(These are all hard coded accounts, if you go the sign up page and enter anything it will automatically assume you are vance)


# Main Page: 
All the buttons are implemented and the keybindings referenced when you click the help button work. 

# Saved Plans Page: 
You can toggle between the saved plans however they all lead to identical plans (it is hardcoded).

The delete button is not implemented and will not actually delete a plan. 

#  Degree Planner Page: 
You can click on each year header to expand the section. 

Funcionalties Implemented: 
- Can click a course to mark it complete (should turn green)
- Can click the x button to remove the course 
- Can click the i button to display Course Info in the sidebar
- Can drag and drop the courses into another semester 
- Can click the search tab in the sidebar and search for a course (hard coded classes begin with course codes: CPSC, ARKY and SENG)
- Can click on a course and it will appear in the correct term (Fall or Winter) 200 level courses appear under Year 1, 300 level courses appear under Year 2, 400 level courses appear under Year 3 and 500 level courses appear under Year 4
- The filtering drop-downs work 
- The help button works
- If you try to add the same course twice an error message will display

- Note that the progress bar with the GPA/Credits completed/remaining are hard coded and remain static 
- The save button does not actually save changes 
- On the Degree Info tab in the sidebar the Major, Minor, Concentration, and Requirement values are hardcoded in
- The pre-req error and anti-req error are hardcoded to only work for 1 example each:
    # Pre-Req Error: 
    Try to add CPSC 544 will inform you that CPSC 433 needs to be added first. If you add CPSC 433 the error will no longer occur
    # Anti-Req Error: 
    Try to add CPSC 319 will get an error message saying 319 is an anti-req with CPSC 331 has already been added. If you remove CPSC 331 and try to add CPSC 319 the error will no longer happen

# Make A New Plan (button on Main Menu)
Name, Major, Double Major, Concentration, Minor are all hard code and while you can change the values it will still lead to the hard coded computer science plan 

You can modify the take spring/summer courses as well as the number of years. These settings will be reflected in the degree plan that loads when you click submit. 

# Deadlines & Info buttons/User Guide buttons
leads to their respective pages, the links on those pages work 

# Settings page
None of these buttons work

# Keybindings 

keybindings headeres tabgs require u press a unique A each time (can't)