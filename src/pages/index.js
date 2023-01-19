import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Checkbox";
import AlertBox from "../components/AlertBox";

export default function Home() {
  return (
    <section>
      <h1 className="page-title">Titulo Página</h1>
      <div className="page-content">
        <p className="p-1">Conteúdo</p>
        <input placeholder="Placeholder" />
        <br />
        <br />
        <button>Botão</button>
        <br />
        <br />
        <select>
          <option value="1" disabled default selected>
            Select{" "}
          </option>
          <option value="2">Conteúdo 1</option>
          <option value="3">Conteúdo 2</option>
          <option value="4">Conteúdo 3</option>
        </select>
        <br />
        <br />
        <Dropdown />
        <br />
        <br />
        <Checkbox />

        <AlertBox msg="AlertaOn" />
        <br />
        <br />
      </div>
    </section>
  );
}
