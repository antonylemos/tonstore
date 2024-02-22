<div align="center">
  <h1>Tonstore</h1>
  Aplicativo criado para o desafio técnico da Stone Co.
</div align="center">

## 💻 Pré-requisitos
- **[Ambiente Android](https://react-native.rocketseat.dev/android/linux)** instalado e configurado.
- **[Java](https://sdkman.io/jdks)** instalado na versão `v17`.
- **[Node](https://nodejs.org/en/)** instalado na versão `v18` ou maior.
- **[Yarn](https://yarnpkg.com/en/)** instalado.

## ✨ Instalação e execução
> ℹ️ Para gerenciar as versões do [Node.js](https://nodejs.org/en/), é recomendado o uso de uma das seguintes ferramentas: [NVM](https://github.com/nvm-sh/nvm) ou [FNM](https://github.com/Schniz/fnm).

1. Realizar _clone_ do projeto:
```sh
git clone https://github.com/antonylemos/tonstore.git
```

2. Acessar o diretório do projeto:
```sh
cd tonstore
```

3. Instalar as dependências:
```sh
yarn install
```

4. Executar a aplicação:
```sh
yarn start
```

> Após esse comando, clique na tecla "a" ou abra um novo terminal e execute:

```bash
  yarn android
```

5. Gerar _apk_:
> Para cada tipo de _build_, alteramos o sufixo do comando. Nesse exemplo, iremos gerar a aplicação em modo _release_.

```sh
cd android && ./gradlew assembleRelease
```

## 🛠 Fluxo de trabalho de desenvolvimento
### Branches
O projeto utiliza as seguintes branches como padrão de desenvolvimento (mas não resumidas a elas):

| Branches    | Descrição                                              |
|-------------| ------------------------------------------------------ |
| `main`      | Branch principal, contém o código de produção.         |
| `develop`   | Branch de homologação, contém o código de homologação. |
| `feature/*` | Branches de desenvolvimento de novas funcionalidades.  |

### CI/CD
As configurações de CI/CD estão disponíveis no arquivo `.github/workflows/build.yml`.

## 📚 Documentações
- [Feature-Sliced Design](https://feature-sliced.design/)

## 🔗 Referências
- [React Native](https://reactnative.dev/)
- [Unistyles](https://www.unistyl.es/)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TanStack Query](https://tanstack.com/query/latest)

## 👍 Merge Requests
#### Guia de revisão de código
- [Guia de boas práticas para revisão de código](https://github.com/luizalabs/dev-guide/blob/master/code-review/README.md)

#### Critérios de aceite de um Merge Request
- Convenções de código estão sendo seguidas
- Testes que cobrem as alterações realizadas (Unit/Instrumented)
- Testes unitários devem ser 100% mockados
