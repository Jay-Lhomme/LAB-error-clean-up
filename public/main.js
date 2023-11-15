import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import events from '../utils/events';
import startSortingBtn from '../components/startSortingBtn';

// ********** HTML Components  ********** //
// the basic HMTL structure of app

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
