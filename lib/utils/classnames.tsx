export default function classnames(...names: (string | undefined)[]) {
    let newName = names.filter(Boolean);
    // let newNameArr = []
    // for (let item of newName) {
    //     newNameArr.push(item.replace(/\s+/g,''))
    // } 
    return newName.join(' ')
}