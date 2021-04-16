import onOpen from './onOpen';
import sendEmail from './send';
import showSidebar from './sidebar';
import doGet from './webapp';

global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.sendEmail = sendEmail;
global.doGet = doGet;
// 21:36
// earlier test step
/*
function myFunction() {
  Logger.log('Hello world from VS Code');
}

global.myFunction = myFunction;
*/
