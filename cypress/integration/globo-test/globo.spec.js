import { GloboTest } from "../globo";

describe("Testes no site da Globo", () => {
    const globo = new GloboTest();
    // beforeEach(() => {

    // });
    beforeEach(() => {
        globo.navigate();
    });

    it("Deve funcionar a pesquisar passando 'Brasil'", () => {
        globo.search('Desmatamento')
        globo.filter();
    })

    it("Deve funcionar a filtragem na pesquisa'", () => {
        globo.search('Desmatamento')
        globo.filter();
    })

    it("Deve funcionar a previsão do tempo para Fortaleza'", () => {
        globo.previsaoDoTempo()
    })

    it("Deve pesquisar a receita de bolo de milho", () => {
        globo.receita()
    })

});