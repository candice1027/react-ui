const scopeClassMaker= (prefix:string) => {
    return function(name?:string) {
        return [prefix,name].filter(Boolean).join('_')
    }
}
export {scopeClassMaker}