import { Observable } from "rxjs/Observable";
import { fromEvent } from "rxjs/observable/fromEvent";

var observable = fromEvent(document, "mousemove");

setTimeout(() => {
  var subscription = observable.subscribe((x: any) => addItem(x));//why this is not recognized by the compiler?
}, 2000);


