# ENGWEB2024-Normal

## Ex1

### 1.1

- O dataset foi convertido para um csv utilizando a ferramenta [csv2json](https://csvjson.com/csv2json);

- Foi substituida a key 'idcontrato' por 'id_' e todos os espaços da key foram substituidos por '_';

- O dataset foi importado para o MongoDB utilizando o comando `mongoimport -d contratos -c contratos --type json --file 'contratos.json' --jsonArray`.


### 1.3

Para correr o servidor basta executar

```bash

mongoimport -d contratos -c contratos --type json --file 'contratos.json' --jsonArray

npm install
node app.js
```

### Ex2

Para correr o servidor basta executar

```bash

npm install
npm start
```
Para este exercício foi usado PUG para facilitar a renderização do HTML.
Foi também utilizado Axios para fazer pedidos ao servidor da API.





