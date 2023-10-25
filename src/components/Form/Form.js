import "./Form.css"
import TextField from '../TextField'
import SelectBox from "../SelectBox"


export const Form = () => {
  // JSX

  const teams = [
    'Programming',
    'Front-end',
    'Data-science',
    'DevOps',
    'UX and Design',
    'Mobile'
  ]

  return (
    <section className="form">
      <form>
        <h2> Preencha os dados para criar o card do colaborador do colaborador </h2>
        <TextField label="Nome" placeholder="Digite seu nome..." />
        <TextField label="Cargo" placeholder="Digite seu Cargo..." />
        <TextField label="Imagem" placeholder="Digire o endereço da imagem..." />
        <SelectBox label="Time" items={teams}></SelectBox>
      </form>
    </section>
  )
}