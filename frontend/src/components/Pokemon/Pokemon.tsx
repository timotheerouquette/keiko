interface Props {
  name: string
  pokenumber: number
  source: string
  key: number
}

export const Pokemon = ({ name, pokenumber, source }: Props) => {
  console.log(name)
  return (
    <div>
      <img src={source} />
      <p>Name: {name}</p>
      <p>Number: {pokenumber}</p>
    </div>
  )
}
