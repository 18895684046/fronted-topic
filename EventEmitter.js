
class EventEmitter {
    constructor() {
        this.events = {}; // 存储事件名和对应的监听函数列表
    }

    // 监听事件
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    // 触发事件（同步执行所有监听函数）
    emit(event, ...args) {
        const listeners = this.events[event];
        if (listeners) {
            // 创建副本，避免在迭代过程中原数组被修改导致的问题（如监听函数中移除自身）
            listeners.slice().forEach(listener => {
                listener(...args);
            });
        }
    }

    // 移除指定事件的监听函数
    off(event, listenerToRemove) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(
            listener => listener !== listenerToRemove
        );
    }

    // 高级功能：监听一次后自动移除（可选实现）
    once(event, listener) {
        const onceWrapper = (...args) => {
            listener(...args);         // 执行原函数
            this.off(event, onceWrapper); // 执行后移除自身
        };
        this.on(event, onceWrapper); // 将包装函数添加到监听列表
    }
}

const emitter = new EventEmitter();

// 1. 监听事件
const logHello = (name) => console.log(`Hello, ${name}!`);
emitter.on("greet", logHello);

// 2. 触发事件
emitter.emit("greet", "Alice"); // 输出: "Hello,  Alice!"

// 3. 移除监听
emitter.off("greet", logHello);
emitter.emit("greet", "Bob");   // 无输出

// 4. 一次性监听
emitter.once("shoot", (target) => console.log(`Bang! ${target} down!`));
emitter.emit("shoot", "Enemy"); // 输出: "Bang! Enemy down!"
emitter.emit("shoot", "Enemy"); // 无输出（监听函数已自动移除）