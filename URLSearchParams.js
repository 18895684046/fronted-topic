
function objToUrl(obj) {
    const params = new URLSearchParams();
    // 遍历JSON对象的键值对，将其添加到URL参数中
    for (let key in obj) {
        // Reflect.has(obj, key) 等价于 obj.hasOwnProperty(key)
        if (obj.hasOwnProperty(key)) {
            params.append(key, obj[key]);
        }
    }
    // 返回URL参数字符串
    return params.toString();
}

const json = {
    name: "John",
    age: "25",
    city: "杭州"
};
const newUrl = objToUrl(json);
console.log(newUrl);
// name=John&age=25&city=%E6%9D%AD%E5%B7%9E