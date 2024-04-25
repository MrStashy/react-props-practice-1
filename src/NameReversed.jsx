export default function NameReversed ({name, reverse}) {
    return (<p className="name-reversed">
    Also, {name} backwards is {reverse(name)}
  </p>)
}