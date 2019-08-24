export default function classnames(...names: (string | undefined)[]) {
    let newName = names.filter(Boolean);
    // let newNameArr = []
    
    return newName.join(' ')
}