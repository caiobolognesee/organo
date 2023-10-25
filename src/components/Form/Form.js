import "./Form.css"
import TextField from '../TextField'


export const Form = () => {
  return (
    <section className="form">
      <form>
        <h2> Preencha os dados para criar o card do colaborador do colaborador </h2>
        <TextField label="Nome" placeholder="Digite seu nome..." />
        <TextField label="Cargo" placeholder="Digite seu Cargo..." />
        <TextField label="Imagem" placeholder="Digire o endereço da imagem..." />
      </form>
    </section>
  )
}