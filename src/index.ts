/***
 * @file:
 * @author: caojianping
 * @Date: 2022-08-02 14:39:53
 */

/**
 * 事件类
 * PS：兼容IE、谷歌等浏览器
 */
export default class Events {
  /**
   * 添加事件
   * @param element HTML DOM ELEMENT
   * @param type 事件类型
   * @param handler 事件处理程序
   * @param userCapture 使用事件捕获
   * @returns void
   */
  public static addEvent(element: any, type: string, handler: Function, userCapture: boolean = false): void {
    if (!element || !type || !handler) {
      return;
    }

    if (element.addEventListener) {
      element.addEventListener(type, handler, userCapture);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  }

  /**
   * 移除事件
   * @param element HTML DOM ELEMENT
   * @param type 事件类型
   * @param handler 事件处理程序
   * @param userCapture 使用事件捕获
   * @returns void
   */
  public static removeEvent(element: any, type: string, handler: Function, userCapture: boolean = false): void {
    if (!element || !type) {
      return;
    }

    if (element.removeEventListener) {
      element.removeEventListener(type, handler, userCapture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  }
}
