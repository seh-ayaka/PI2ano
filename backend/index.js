//para rodar o backend: node nomedoarquivo.js (ex: index.js ou App.js)
const express = require ('express')
const cors = require('cors'); //rodar app install cors dentro da backend

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.listen(9000, () => console. log('OK'));

const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
})

/*
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

app.put('/pessoa', async (req, res) => {
    const { nome, email } = req.body;
    const [query] = await connection.
    execute('update TestePessoa.Pessoa (nome,email) set values(?,?)', [nome,email]);
    if (query.affectedRows === 1) {
    return res.status(200).json({ message: 'Pessoa atualizada com sucesso' });
    } else {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
    }
})

app.delete('/pessoa/:id', async (req, res) => {
    const { id } = req.params;
    const [deleteResult] = await connection.execute('DELETE FROM TestePessoa.Pessoa WHERE id = ?', [id]);
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
    return res.status(200).json({ mensagem: 'Pessoa excluída com sucesso.' });
})

*/

/*===================================================================*/


const getALLdoador = async () =>{
    const [query] = await connection
    .execute('select * from modelo_pia.doador')
    return query;
}

app.get('/doador', async (req,res)=>{
    const consulta = await getALLdoador();
    return res.status(200).json(consulta);
})

app.get('/doador/:id', async (req,res) =>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from modelo_pia.doador where id = ?', [id]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.get('/doador/busca/:nome', async (req,res) =>{
    //return res.json(req.params)
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from modelo_pia.doador where nome like ?', [nomex]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.post('/doador', async (req,res) =>{
    const {cpf, nome, email, telefone, senha, cep, endereco, rg} = req.body;
    const [query] = await connection.
    execute('insert into modelo_pia.doador (cpf,nome,email,telefone,senha,cep,endereco,rg) values(?,?,?,?,?,?,?,?)', 
    [cpf,nome,email, telefone, senha, cep, endereco, rg])
    return res.status(200).json(query);
})

app.put('/doador/:id', async (req, res) => {
    const { id } = req.params;
    const { cpf, nome, email , telefone, senha, cep, endereco, rg} = req.body;
    const [query] = await connection.
    execute('update modelo_pia.doador (id, cpf,nome,email,telefone,senha,cep,endereco,rg) set values(?,?,?,?,?,?,?,?,?)', [id,cpf,nome,email, telefone, senha, cep, endereco, rg]);
    if (query.affectedRows === 1) {
    return res.status(200).json({ message: 'Pessoa atualizada com sucesso' });
    } else {
    return res.status(404).json({ error: 'Pessoa não encontrada' });
    }
})

app.delete('/doador/:id', async (req, res) => {
    const { id } = req.params;
    const [deleteResult] = await connection.execute('DELETE FROM modelo_pia.doador WHERE id = ?', [id]);
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
    return res.status(200).json({ mensagem: 'Pessoa excluída com sucesso.' });
})

/*===================================================================*/


const getALLdoacao = async () =>{
    const [query] = await connection
    .execute('select * from modelo_pia.doacao')
    return query;
}

app.get('/doacao', async (req,res)=>{
    const consulta = await getALLdoacao();
    return res.status(200).json(consulta);
})

app.get('/doacao/:id', async (req,res) =>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from modelo_pia.doacao where id = ?', [id]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.get('/doacao/busca/:nome', async (req,res) =>{
    //return res.json(req.params)
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from modelo_pia.doacao where nome like ?', [nomex]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.post('/doacao', async (req,res) =>{
    const {valor, data, tipo, descricao, titulo, status, doador_id} = req.body;
    const [query] = await connection.
    execute('insert into modelo_pia.doacao (valor, data, tipo, descricao, titulo, status, doador_id) values(?,?,?,?,?,?,?)', 
    [valor, data, tipo, descricao, titulo, status, doador_id])
    return res.status(200).json(query);
})

app.put('/doacao/:id', async (req, res) => {
    const { id } = req.params;
    const { valor, data, tipo, descricao, titulo, status, doador_id} = req.body;
    const [query] = await connection.
    execute('update modelo_pia.doacao (id,valor, data, tipo, descricao, titulo, status, doador_id) set values(?,?,?,?,?,?,?,?)', [id,valor, data, tipo, descricao, titulo, status, doador_id]);
    if (query.affectedRows === 1) {
    return res.status(200).json({ message: 'Doação atualizada com sucesso' });
    } else {
    return res.status(404).json({ error: 'Doação não encontrada' });
    }
})

app.delete('/doacao/:id', async (req, res) => {
    const { id } = req.params;
    const [deleteResult] = await connection.execute('DELETE FROM modelo_pia.doacao WHERE id = ?', [id]);
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Doação não encontrada.' });
    return res.status(200).json({ mensagem: 'Doação excluída com sucesso.' });
})

/*===================================================================*/


const getALLcampanha = async () =>{
    const [query] = await connection
    .execute('select * from modelo_pia.campanha')
    return query;
}

app.get('/campanha', async (req,res)=>{
    const consulta = await getALLcampanha();
    return res.status(200).json(consulta);
})

app.get('/campanha/:id', async (req,res) =>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from modelo_pia.campanha where id = ?', [id]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.get('/campanha/busca/:nome', async (req,res) =>{
    //return res.json(req.params)
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from modelo_pia.campanha where nome like ?', [nomex]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.post('/campanha', async (req,res) =>{
    const {nome, data_limite, titulo, video, imagem, link_compartilhar, descricao, valor_total, usuario_id, doacao_id} = req.body;
    const [query] = await connection.
    execute('insert into modelo_pia.doacao (nome, data_limite, titulo, video, imagem, link_compartilhar, descricao, valor_total, usuario_id, doacao_id) values(?,?,?,?,?,?,?,?,?,?)', 
    [nome, data_limite, titulo, video, imagem, link_compartilhar, descricao, valor_total, usuario_id, doacao_id])
    return res.status(200).json(query);
})

app.put('/campanha/:id', async (req, res) => {
    const { id } = req.params;
    const {nome, data_limite, titulo, video, imagem, link_compartilhar, descricao, valor_total, usuario_id, doacao_id} = req.body;
    const [query] = await connection.
    execute('update modelo_pia.campanha (id,nome, data_limite, titulo, video, imagem, link_compartilhar, descricao, valor_total, usuario_id, doacao_id) set values(?,?,?,?,?,?,?,?,?,?,?)', 
    [id,nome, data_limite, titulo, video, imagem, link_compartilhar, descricao, valor_total, usuario_id, doacao_id]);
    if (query.affectedRows === 1) {
    return res.status(200).json({ message: 'Campanha atualizada com sucesso' });
    } else {
    return res.status(404).json({ error: 'Campanha não encontrada' });
    }
})

app.delete('/campanha/:id', async (req, res) => {
    const { id } = req.params;
    const [deleteResult] = await connection.execute('DELETE FROM modelo_pia.campanha WHERE id = ?', [id]);
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
    return res.status(200).json({ mensagem: 'Campanha excluída com sucesso.' });
})

/*===================================================================*/


const getALLusuario = async () =>{
    const [query] = await connection
    .execute('select * from modelo_pia.usuario')
    return query;
}

app.get('/usuario', async (req,res)=>{
    const consulta = await getALLusuario();
    return res.status(200).json(consulta);
})

app.get('/usuario/:id', async (req,res) =>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from modelo_pia.usuario where id = ?', [id]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.get('/usuario/busca/:nome', async (req,res) =>{
    //return res.json(req.params)
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from modelo_pia.usuario where nome like ?', [nomex]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.post('/usuario', async (req,res) =>{
    const {nome, cpf, email, telefone, senha, rg} = req.body;
    const [query] = await connection.
    execute('insert into modelo_pia.usuario (nome, cpf, email, telefone, senha, rg) values(?,?,?,?,?,?)', 
    [nome, cpf, email, telefone, senha, rg])
    return res.status(200).json(query);
})

app.put('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const {nome, cpf, email, telefone, senha, rg} = req.body;
    const [query] = await connection.
    execute('update modelo_pia.usuario (nome, cpf, email, telefone, senha, rg) set values(?,?,?,?,?,?)', 
    [nome, cpf, email, telefone, senha, rg]);
    if (query.affectedRows === 1) {
    return res.status(200).json({ message: 'Usuário atualizada com sucesso' });
    } else {
    return res.status(404).json({ error: 'Usuário não encontrado' });
    }
})

app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const [deleteResult] = await connection.execute('DELETE FROM modelo_pia.usuario WHERE id = ?', [id]);
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    return res.status(200).json({ mensagem: 'Usuário excluída com sucesso.' });
})

/*===================================================================*/


const getALLconfiguracoes = async () =>{
    const [query] = await connection
    .execute('select * from modelo_pia.configuracoes')
    return query;
}

app.get('/configuracoes', async (req,res)=>{
    const consulta = await getALLconfiguracoes();
    return res.status(200).json(consulta);
})

app.get('/usuario/busca/:nome', async (req,res) =>{
    //return res.json(req.params)
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from modelo_pia.configuracoes where nome like ?', [nomex]);
    if (query.length === 0) return res.status(400).json ({mensagem: 'Não encontrado. '})
    return res.status(200).json(query);
})

app.post('/configuracoes', async (req,res) =>{
    const {logo, nome, instagram, github, twitter, facebook, email, descricao, imagem, telefone, senha} = req.body;
    const [query] = await connection.
    execute('insert into modelo_pia.configuracoes (logo, nome, instagram, github, twitter, facebook, email, descricao, imagem, telefone, senha) values(?,?,?,?,?,?,?,?,?,?,?)', 
    [logo, nome, instagram, github, twitter, facebook, email, descricao, imagem, telefone, senha])
    return res.status(200).json(query);
})

app.put('/configuracoes/:nome', async (req, res) => {
    const {logo, nome, instagram, github, twitter, facebook, email, descricao, imagem, telefone, senha} = req.body;
    const [query] = await connection.
    execute('update modelo_pia.configuracoes (logo, nome, instagram, github, twitter, facebook, email, descricao, imagem, telefone, senha) set values(?,?,?,?,?,?,?,?,?,?,?)', 
    [logo, nome, instagram, github, twitter, facebook, email, descricao, imagem, telefone, senha]);
    if (query.affectedRows === 1) {
    return res.status(200).json({ message: 'Configurações atualizadas com sucesso' });
    } else {
    return res.status(404).json({ error: 'Configurações não encontradas' });
    }
})

app.delete('/usuario/:nome', async (req, res) => {
    const { nome } = req.params;
    const [deleteResult] = await connection.execute('DELETE FROM modelo_pia.configuracoes WHERE nome = ?', [nome]);
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Não encontrado.' });
    return res.status(200).json({ mensagem: 'Configurações excluídas com sucesso.' });
})