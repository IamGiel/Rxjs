import { Observable } from "rxjs/Observable";


//one method of creating observable
var observable = Observable.create((observer: any) => {
  try {
    observer.next("Hey Guys!")
    observer.next("How are you?")
    setInterval(()=>{
      observer.next("Im ok! You?...");
    }, 2000)
  } catch (err) {
    observer.console(err);
  }
});

var observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("complete!")
);



var subscription2 = observable.subscribe(
    (x:any) => addItem(x)
);

observer.add(subscription2);

setTimeout(() => {
  observer.unsubscribe()
}, 6001);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}

//stream = values or events emitted over time, multiple inputs
//observables are what facilitates a stream
