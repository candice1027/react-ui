export default function classnames(...names: (string | undefined)[]) {
    let newName = names.filter(Boolean);
    let newNameArr = newName.map(item=>{
        return item!.replace(/\s+/g,'') //加上感叹号可以进行强制断言，告诉ts这里不可能为空了
    })
    return newNameArr.join(' ')
}