import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Twitter } from "../components/Twitter";

import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

/**
 * Fluxo de renderização
 *
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que seu componente PAI renderizar
 * 3. Toda vez que alguma de suas propriedades mudarem.
 *
 * Algoritmo de reconciliação
 *
 * 1. Criar em memoria a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */
export function Status() {
  //Estado
  const [newAnswer, setNewAnswer] = useState("");

  const [answers, setAnswers] = useState([
    "Teste tweet 01",
    "Teste tweet 02",
    "Teste tweet 03",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Twitter content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellat ratione? Delectus accusamus fugiat deleniti explicabo eligendi natus ullam, corrupti accusantium ut quisquam, tempora labore. Odio maiores magnam facilis. Ducimus?" />

      <Separator />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/wandersonzz.png" alt="Wanderson" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Twitter key={answer} content={answer} />;
      })}
    </main>
  );
}
