
class EventBus {
    constructor() {
        this.events = {}; // 存储事件名和对应的监听函数列表
    }

    // 监听事件
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []; // 如果事件不存在，则初始化为一个空数组
        }
        this.events[eventName].push(callback); // 将回调函数添加到事件的监听列表中
    }

    // 触发事件
    emit(eventName, ...args) {
        const listeners = this.events[eventName]; // 获取指定事件的监听函数列表
        if (listeners) {
            listeners.forEach(listener => {
                listener(...args); // 执行每个监听函数，并传递参数
            });
        }
    }

    // 移除事件监听函数
    off(eventName, callback) {
        if (!this.events[eventName]) return; // 如果事件不存在，则直接返回
        this.events[eventName] = this.events[eventName].filter(listener => listener !== callback); // 过滤掉要移除的监听函数
    }

    // 一次性监听事件（可选实现）
    once(eventName, callback) {
        const onceWrapper = (...args) => {
            callback(...args); // 执行原函数
            this.off(eventName, onceWrapper); // 执行后移除自身
        };
        this.on(eventName, onceWrapper); // 将包装函数添加到监听列表
    }
}
