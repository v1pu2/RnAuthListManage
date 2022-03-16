# React Native Project RnAuthListManage


## Demo

<img src="/Screenshots/Screen1.jpg" width="250" height="500"/>             <img src="/Screenshots/Screen2.jpg" width="250" height="500"/>

<img src="/Screenshots/Screen3.jpg" width="250" height="500"/>             <img src="/Screenshots/Screen4.jpg" width="250" height="500"/> 

## Base dependencies

- [@react-navigation/native](https://github.com/react-navigation/react-navigation) navigation library.
- [@react-navigation/stack](https://github.com/react-navigation/react-navigation) navigation library.
- [@react-navigation/bottom-tabs](https://www.npmjs.com/package/@react-navigation/bottom-tabs) for bottom tab view.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) to render content within the safe area boundaries of a device like notches and iOS devices.
- [react-redux](https://github.com/reduxjs/react-redux) [redux](https://github.com/reduxjs/redux) [redux-thunk](https://github.com/reduxjs/redux-thunk) [redux-persist](https://github.com/rt2zz/redux-persist) for the state management

## Usage

### Folder structure

Follows a very simple project structure:

  - `src`: This folder is the main container of all the code inside the application.
  - `component`: Folder to store any common component that is used throughout the app.
  - `containers`: Folder to store all the screens/features.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: The main component that starts the whole app.
  - `index.js`: Entry point of the application as per React-Native standards.
  - `store.js`: Used for the state management Redux
  - `Actions\Reducers`: Used for the state management Redux


### Styleguide

For coding styling, use `StyleSheet` of React-native.

### Components

Components are the basic blocks of a react native application, but since we aim to minimize development complexity, all the components are at the same nesting level.



