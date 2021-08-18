# FSDI_Project: 
Task manager site to organize incoming work as requests, current status, and completed/archived tasks in a development and production laboratory environment. Also, a data management section to centralize the data that is created when performing these tasks.

## Who is the user?
Engineers, managers, and technicians of various ages/technical backgrounds
## Features:
- A main page that allows anyone to see current jobs, without logging in
- User creation/admin panel to add/modify jobs
- Simple request form to add jobs to queue for non registered users. Maybe add a FAQ section about the resources available and answers to most common questions about the lab(eg. Fixture drawings, equipment capabilities, requirements, etc)
- Simple file uploader that allows users to add raw data(analog/digital signals data, reports, photos, videos, etc) to database with unique tags
- Create a report generator page for specific test types. This will allow for standardization of data and provides real time analysis of test data. Will be able to consolidate scripts saved on several different engineers' workstations and can eliminate the delay in confirmation caused by out of office/off hours/and overloaded engineers.
- Allow data to be visualized to analyze trends, fail criteria, 
- Allow importing to centralize data from different sources(eg. svn, jira, solumina, bender, etc) based on part number or work order.
- Create a QR code generator page to link to a dataset
- API to send out job data to different programs

## Architectual Analysis
Rest framework with Django and React Front End.
![alt text](https://raw.githubusercontent.com/jrjbkr29/FSDI17_CAP_PROJ/main/UX/Arch_Anal.png)

### Architectual Style System Categories
1. Set of compoenets organized and assembled
2. Set of connectors(messaging and APIs, how they communicate with each other)
3. Qualitiy Attributes/Constraints
4. Semantic models
### Classes
1. Task Class:
- Creates task objects
- Takes in parameters from UI Form Fields
- No methods attached
2. FAQ Class:
- Creates objects to hold questions and answers
- Takes in a title and answer input from the admin panel
- No methods attached

## User Models
### Engineers(requesters): 
- Create new requests to get product tested through the lab.
- Need a simple FAQ to learn the process of getting their product through the lab. This will help engineers from different departments avoid the repetitive meetings describing the process.
- FAQ is a simple resource for requirements, schedule/availability for engineers that don't know where to start
- Need a way to visualize the data(eg. Test summary/reports with pass or fail criteria to avoid misinterpretation of data) and a resource to collect all data for final summary
### Managers(manage schedule/technicians/priorities):
- Need a way to track incoming jobs, view current schedule, and view hold/failed product so they can focus on finding a resolution 
- Need to be able to go back and reference old jobs to address any issues that were missed or performed incorrectly
- Need admin privileges to manage assigned users and rearrange tasks based on priority from upper management/schedule
### Technicians(users):
- Will use to find current work assigned, communicate issues, and comment current status during shift handover
- Be able to complete, claim, or place jobs on hold
- Need a simplified summary of requirements(functional, thermal, vacuum, shock, humidity, and vibration requirements) to test against, know what specialized equipment/hazards are present, and if engineering support is needed during testing. 
- Need to know point of contact for issues/questions
- Need a simple place to add raw data, photos, videos, and reports linked to a specific job
- Need a way to view previous test configurations by searching for a part number or work order. Photos and test data are a valuable asset to compare against to filter out any issues and identify out of family conditions

## UML Task Analysis
### Create New Test Request:
1. Open browser and navigate to the home page. 
2. Click "New request" button to display form.
3. Fill in all form entries.
4. Click on submit button.
5. If successful validation, get prompted with success message.

### View FAQ Section:
1. Open browser and navigate to the home page.
2. Navigate through carusel for department.
3. Select FAQ dropdowns.

### View Current Tasks:
1. Navigate to the home page.
2. Select the "Tasks" tab from the nav bar.
3. View current tasks and apply filters as needed.

### Search for a Task:
1. Navigate to the home page.
2. Select the "Tasks" tab from the nav bar.
3. Select search input field.
4. Enter search text and hit enter.
5. View search results in the page below search bar.

### Delete A Task:
1. Navigate to the home page.
2. Select the "Tasks" tab from the nav bar.
3. Select task to delete.
4. Press delete and acknowledge delete prompt.

### View Data from Task page:
1. Navigate to the home page.
2. Select the "Tasks" tab from the nav bar.
3. Select task to view.
4. Click "View Data" button.
5. View data on the "Data Hub" tab.

### Search for Data from Data-Hub page:
1. Navigate to the home page.
2. Select the "Data-Hub" tab from the nav bar.
3. Select the search field.
4. Input search tags and hit enter.
5. View search results in page.
6. Select file to view preview or download.





