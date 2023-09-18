const express = require ('express')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(9000, () => console. log('OK'));

const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
})

app.get('/',(req,res)=> {
    res.send ("Serena");
})

const getALLPessoas = async () =>{
    const [query] = await connection
    .execute('select * from TestePessoa.pessoa')
    return query;
}

app.get('/pessoa', async (req,res)=>{
    const consulta = await getALLPessoas();
    return res.status(200).json(consulta);
})

app.get('/pessoa/:id', async (req,res) =>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from TestePessoa.Pessoa where id = ?', [id]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.get('/pessoa/busca/:nome', async (req,res) =>{
    //return res.json(req.params)
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from TestePessoa.Pessoa where nome like ?', [nomex]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.post('/pessoa', async (req,res) =>{
    const {nome, email} = req.body;
    const [query] = await connection.
    execute('insert into TestePessoa.Pessoa (nome,email) values(?,?)', 
    [nome,email])
    return res.status(200).json(query);
})