import HelloWorld from './src/HelloWorld.jsx';

// emulate a companies possible namespace that'd contain whatever's neccessary
// for the current page to run.
const bizLib = {
  components: {
    HelloWorld: HelloWorld
  }
};

export default bizLib;