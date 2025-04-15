
/**
 * 
 * @param {*} callback  回调函数
 * @param {*} interval  间隔时间
 * @description 自定义 setInterval 函数
 */
function CustomInterVal(callback, interval) {
    const start = Date.now();
    let count = 0;

    function loop() {
        const now = Date.now();
        const elapsed = now - start; // 计算经过的时间
        count++;
        const targetTime = count * interval; // 目标时间

        const delay = targetTime - elapsed; // 计算延迟时间

        const delayTime = Math.max(0, delay); // delay > 0 说明还没到目标时间，需要等待；delay < 0 说明已经超过了目标时间，立马执行

        setTimeout(() => {
            callback(); // 执行回调函数
            loop(); // 递归调用，继续执行下一个循环
        }, delayTime);
    }
    loop(); // 开始循环
}

CustomInterVal(() => {
    console.log('Hello, World!');
}, 1000); // 调用函数，开始执行