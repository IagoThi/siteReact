import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const defaultCategoria = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [values, setValues] = useState(defaultCategoria);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(categoriaBuscada) {
        setValue(
            categoriaBuscada.target.getAttribute('name'),
            categoriaBuscada.target.value
        );

    }


    return (
        <PageDefault>
            <h1>Cadastro de Categoria </h1>

            <form onSubmit={function handleSubmit(infoEvento) {
                infoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(defaultCategoria)

            }}>


                <FormField
                    label="Nome Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
            </button>

            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                GO HOME
        </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;  