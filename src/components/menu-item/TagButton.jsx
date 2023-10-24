export const TagButton = ({item, handleSetCat, catActive}) => {
    return <button className={`cat ${ catActive
        ? 'active-project' : null } uppercase`} onClick={() =>  handleSetCat(item)}>{item.nombre_categoria}</button>
}
export default TagButton