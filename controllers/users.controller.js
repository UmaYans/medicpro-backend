const hash = require("bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
require("dotenv").config();

module.exports.usersController = {
  registerUser: async (req, res) => {
    try {
      const { name, lastName, login, password, telephone, eMail } = req.body;
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
        );
        
        const user = await User.create({
           name,
           lastName,
           login,
          password: hash,
          telephone,
          eMail,
        });
        console.log(login)
        return await res.json(user);
    } catch (error) {
      return res.status(401).json({
        error: "Ошибка при регистрации" + error.toString(),
      });
    }
  },

  login: async (req, res) => {
    try {
      const { name, lastName, login, password, telephone, eMail } = req.body;
      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.status(401).json({ error: "Неверный логин" });
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json({ error: "Неверный пароль" });
      }

      const payload = {
        id: candidate._id,
        name: candidate.name,
        lastName: candidate.lastName,
        login: candidate.login,
        telephone: candidate.telephone,
        eMail: candidate.eMail,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      return res.json({ token });
    } catch (error) {
      return res.status(401).json({ error: "Ошибка при авторизации" });
    }
  },
};
