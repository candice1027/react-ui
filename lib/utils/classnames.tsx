export default function classnames(...names: (string | undefined)[]) {
    let newName = names.filter(Boolean);
    return newName.join(' ')
}