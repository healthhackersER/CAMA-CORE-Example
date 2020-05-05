
Dear **CAMA Hackers** & **Community Members**

The next hackday is coming …  
and there are interesting challenges waiting for :point_right:**YOU**:point_left:

**Goals**
<sup>Technical</sup>
---
We want to hack into the [**CAMA Document Store [Here]**](https://github.com/healthhackersER/CAMA-CORE-Example/projects/7)   
> Enabling cancer patients to store their documents and enrich them with additional information.

:heavy_check_mark: We already got an native database demo implementation. This needs to be filled with live now!

:question: Curious how to design & create an intuitive interface?  
:question: Curious how to access the native camera environment?  
:question: Curious how to access the native file system?  
:question: Curious how to setup a native database?  


## Goals <sup>General</sup>

[We noted our most imporant challanges in the Wiki](https://github.com/healthhackersER/CAMA-CORE-Example/wiki/Questions-to-solve)

**Who should be interested?**
---

Want to learn HowTo develop Web Apps?
<sup>(**Html5, CSS, JavaScript**)</sup>  
Want to learn HowTo develop iOS and Android Apps?
<sup>(**React-Native**)</sup>  
Want to learn HowTo create mockups or wireframes?
<sup>(**UI/UX**)</sup>  
Want to learn HowTo structure projects in a community environment?
<sup>(**Project Management, Product Ownership**)</sup>  
Want to learn HowTo innovate in a customer centric approach?
<sup>(**CoCreation,  User Centered Design, Requirements Engineering**)</sup>  

**You want to contribute or enhance your skills and change the world of cancer patients?**
---
You are not sure how you can contribute? **YES YOU CAN!**
> Don't hesitate and drop a messages in our [SLACK Help Channel !!!](https://healthhackerserlangen.slack.com/archives/CU3JCK08Y)

---

# CAMA-CORE
The CORE of the CAMA application is build using React-Native and the EXPO

# Install
1. Clone Repository - [HowTo GIT](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)  
    `git clone https://github.com/healthhackersER/CAMA-CORE-Example.git`
2. Run npm installer  
   `npm install`
1. Run Application - Runs [Expo](https://docs.expo.io/versions/v33.0.0/introduction/running-in-the-browser/) in Browser  
   `npm run web`

## Pre-requisities
- **Node.js**: In order to install Expo CLI you will need to have Node.js (we recommend the latest stable version- but the maintenance and active LTS releases will also work) installed on your computer. [Download the recommended version of Node.js.](https://nodejs.org/en/)
- **Git**: Additionally, you'll need Git to create new projects. [You can download Git from here.](https://git-scm.com/)

# Getting Started
1. [**React Native**](https://facebook.github.io/react-native/)
   > _React Native_ is like _React_, but it uses native components instead of web components as building blocks. 
So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like [JSX](https://reactjs.org/docs/introducing-jsx.html), components, ``state``, and ``props``.   
   [To learn more about this you can find a tutorial here.](https://facebook.github.io/react-native/docs/tutorial)
2. [**Expo**](https://expo.io/) 
   > There's no need to install anything or even understand everything here, 
this page is meant to give you an overview of some of the big pieces of building a managed app. 
In the same way that getting a quick tour of Paris won't make you an expert on Paris, 
this walkthrough serves to help you identify a few landmarks and the most important areas in the managed workflow. 
You can do a walkthrough of the bare workflow later on.
   [To learn more about this you can find the walkthrough here.](https://docs.expo.io/versions/v36.0.0/introduction/walkthrough/)
3. [**TypeScript**](https://www.typescriptlang.org/)
   > [TypeScript](https://www.typescriptlang.org/) is a language which extends JavaScript by adding type definitions.  
   > [Here you can find a documentation how to develop with TypeScript and React-Native](https://facebook.github.io/react-native/docs/typescript)   
3. [**GitFlow - Branching Model**](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
    > Gitflow Workflow is a Git workflow design that was first published and made popular by Vincent Driessen at nvie. The Gitflow Workflow defines a strict branching model designed around the project release. This provides a robust framework for managing larger projects.  
    
    > The core idea behind the [**Feature Branch Workflow**](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) is that all feature development should take place in a dedicated branch instead of the master branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the master branch will never contain broken code, which is a huge advantage for continuous integration environments.

## Not Enough | Problems | 😲😤🤒😱😭🤕🤒🧐
[Checkout our Detailed Guide](https://github.com/healthhackersER/CAMA-CORE-Example/wiki/Installation)
   
 
## Debugging
### Android Emulator
1. Start an android emulator  
   ```emulator @avd_name [ {-option [value]} … ]```  
   - Example: ```emulator emulator-5554```
   - Find available avd: ```adb devices```
   - ✅ Result: **Android device running**

### React-Native Android
2. Start the React-Native Android  
   ```npm run android```
   or
   ```react-native run-android```

   - ✅ Result: Node Window - React-Native
     - To reload the app press "r"
     - To open developer menu press "d"

### VSCode Debugging
3. Visual Studio - Attach to packager
   - *Prerequisite*: Install React-Native-tools Extension
   - Execute Configuration: ```Attach to packger```  
      Result **DEBUG CONSOLE**:
      ```
      OS: win32 x64
      Adapter node: v12.8.1 x64
      vscode-chrome-debug-core: 6.8.8
      Der Debugger-App-Worker wird gestartet.
      Es wurde eine Verbindung zwischen dem Proxy (Paketerstellungs-Manager) und der React Native-Anwendung eingerichtet.
      ```
   - ✅ Result: VSCode attached to Packager

### Start Debugging 🏁
**Helpful Sources and Tutorials**
- [How to Debug React Native Apps Using Expo and VSCode](https://journal.highlandsolutions.com/how-to-debug-react-native-apps-using-expo-and-vscode-c42353b12311)
- [4 Step Guide To Debug React Native Application in VSCode.[iOS][Part One]](https://medium.com/@tunvirrahmantusher/react-native-debug-with-vscode-in-simple-steps-bf39b6331e67)

### Android Studio
**Tutorials**
- [**Android** Debug with VS Code](https://medium.com/@tunvirrahmantusher/android-debug-with-vscode-for-react-native-96f54d73462a)
- [**IOS** Debug with VS Code](https://medium.com/@tunvirrahmantusher/android-debug-with-vscode-for-react-native-96f54d73462a)

**List available devices**:

```
adb devices
```
**Output**:
```
List of devices attached
BH900AY0GY      unauthorized
emulator-5554   device
```
- **BH900AY0GY**: Physical devices attached via USB with usb debugging enabled
- **emulator-5554**: Android Virtual Device

#### Errors
```react-native run-android```

> Task **:app:transformNativeLibsWithMergeJniLibsForDebug** FAILED

**Solution**: Clean Gradle Files

```cd ./android && ./gradelw clean```

#### Packages
- [React-Native/Redux/Snippets](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux-snippets-for-es6-es7-version-standard)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)