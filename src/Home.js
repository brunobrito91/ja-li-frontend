import {Component} from 'react';
import React from "react";
import {Descriptions} from "antd";
import {withRouter} from "react-router-dom";

class Home extends Component {

    render() {
        console.log('Home render');
        const { location } = this.props;
        console.log('Home location', location);

        return <div className="site-card-wrapper">
            <Descriptions title="Info">
                <Descriptions.Item> Esse é um portal onde os usuários podem marcar livros que já leram
                    e com isso ganharem pontos dentro do sistema.<br/>
                    Cada livro lido vale 1 ponto, sendo que a cada 100 páginas que o livro tiver, vale um ponto
                    adicional
                    (exemplos: 72 páginas vale 1 ponto, 124 páginas vale 2 pontos, 350 páginas vale 4 pontos).<br/>
                    A cada 5 livros lido de um mesmo estilo pelo usuário, o usuário recebe um troféu "Leitor de
                    #estilo#";
                    por exemplo, se o usuário leu 5 livros do estilo "Ficção Científica", recebe o troféu "Leitor de
                    Ficção Científica".</Descriptions.Item>
            </Descriptions>
        </div>
    }
}

export default withRouter(Home);