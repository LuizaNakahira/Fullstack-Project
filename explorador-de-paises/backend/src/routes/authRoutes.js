const express = require('express');
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require('jsonwebtoken');

const router = express.Router();

//Rota de registro
router.post('/register', async (req, res) => {
    try{
        const {name, email, password} = req.body;

        //Verificar se o email ja esta em uso
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({ message: 'Email ja cadastrado!'});
        }

        //Criptografar senha
        const handlePassword = await bcrypt.hash(password, 10);

        //Criar user
        const newUser = new User({name,email, password: handlePassword});
        await newUser.save();

        res.status(201).json({ message: 'Usuário cadastrado com sucesso!'});
    } catch(error){
        res.status(500).json({ message: 'Erro no servidor'});
    }
});

//Rota de login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verifica se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado!' });
        }

        // Compara a senha informada com a senha criptografada no banco
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Senha inválida.' });
        }

        // Gera um token JWT para autenticação
        const token = jwt.sign({ userId: user._id }, 'seuSegredoJWT', { expiresIn: '1h' });

        res.json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

module.exports = router;
