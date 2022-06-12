const Entry = require("../models/Entry.model");

module.exports.entryController = {
  postEntry: async (req, res) => {
    try {
      const entry = await Entry.create({
        user: req.user.id,
        doc: req.params.id,
        time: req.body.time,
      });

      return res.json(entry);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при добавлении записи: " + error.toString(),
      });
    }
  },

  getEntry: async (req, res) => {
    try {
      const entry = await Entry.find();

      return res.json(entry);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех записей: " + error.toString(),
      });
    }
  },

  getEntryUserId: async (req, res) => {
    try {
      const entry = await Entry.find({ user: req.user.id });

      return res.json(entry);
    } catch (error) {
      return res.status(400).json({
        error:
          "Ошибка при выводе всех записей определенного пользователя: " +
          error.toString(),
      });
    }
  },

  getEntryDocId: async (req, res) => {
    try {
      const entry = await Entry.find({ doc: req.params.id });

      return res.json(entry);
    } catch (error) {
      return res.status(400).json({
        error:
          "Ошибка при выводе всех записей к определенному доктору: " +
          error.toString(),
      });
    }
  },

  deleteEntry: async (req, res) => {
    try {
      const entry = await Entry.findById(req.params.id);

      if (entry.user.toString() === req.user.id) {
        await entry.remove();

        return res.json(entry);
      }

      return res.status(401).json({ error: "Нет доступа" });
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении записи: " + error.toString(),
      });
    }
  },
};
