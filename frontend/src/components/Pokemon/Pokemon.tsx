interface Props {
  name: string
  number: string
  source: string
}

export const Pokemon = ({ name, number, source }: Props) => {
  return (
    <div>
      <img src={source} />
      <p>Name: {name}</p>
      <p>Number: {number}</p>
    </div>
  )
}
