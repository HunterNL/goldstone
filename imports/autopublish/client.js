import {subscriptionName} from "./common.js";

export function createAutopublish() {
  var subscriptionHandler;
  var errorReportingCallback = {
    onStop 
  };
  
  function onStop(error) {
    console.warn("Goldstone autopublish was not found, original error:",error);
  }
  
  function subscribe() {
    subscriptionHandler = Meteor.subscribe(subscriptionName,errorReportingCallback);
  }
  
  function unsubscribe() {
    subscriptionHandler && subscriptionHandler.stop();
  }
  
  return {
    subscribe,
    unsubscribe
  };
}