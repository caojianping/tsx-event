# tsx-event
事件处理封装库，提供通用的API方法。

## Installing
Using npm:
```bash
$ npm install tsx-event
```

## Example
```ts
import Events from 'tsx-event';

function testHandler(event: any){
    console.log('bala bala bala!');
}

Events.addEvent(document, 'click', testHandler);
Events.removeEvent(document, 'click', testHandler);
```

## API
##### Events.addEvent(element: any, type: string, handler: Function, userCapture: boolean = false): void
##### Events.removeEvent(element: any, type: string, handler: Function, userCapture: boolean = false): void
