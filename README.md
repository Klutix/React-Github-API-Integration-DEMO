# React-Github-API-Integration-DEMO
Simple Demo that uses Gitbub's REST API with React to display some issue data in the Angular Repo

![ReactDemo](https://github.com/Klutix/Images/blob/master/githubAPI/face.png)

## Requirements

**For Deployement:** NodeJs, React, axios
   
## Setup

First download or clone the repositiory and unzip the directory into a folder.  

Next install [NodeJs](https://nodejs.org/en/download/) . OS specific instructions can be found [here.](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)

Next install React through npm which comes with Nodejs.  

```bash
npm install -g create-react-app
```
This installs the react framework.  

Now using mkdir create a new folder you want the project to live and cd into that folder.  

Once inside enter into cmd the following..

```bash
create-react-app YOUR_PROJECT_NAME
```
This creates the actual project.  

Once that is finished you will need to install axios. Instructions can be found [here.](https://www.npmjs.com/package/axios) For windows type in..

```bash
npm install axios
```
and axios will begin installing.  

At this point you should have all the nessasry requirements to run the project. Navigate into project name of the folder you started. replace the src folder with src folder you cloned in the directory.  

Now in project folder directory using cmd type in..
```bash
npm start
```
and your should see a react application populated by some github data on localhost:3000(or something similiar).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT]()

