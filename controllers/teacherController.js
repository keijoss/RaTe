const bcrypt = require("bcrypt");
const { db } = require("../configs/database");
const { jsonwebtoken } = require("../middlewares/authMiddleware");
const { decoding } = require("../services/jwt");


// Teachers:

// teacher_id (INT, Primary Key)
// name (VARCHAR(50))
// email (VARCHAR(100))
// deleted (BOOLEAN)

const teacherContoller = {
  Get: {
    singleTeacher(req, res) {
      const teacher_id = req.params.teacher_id;
      db.query("SELECT * FROM teachers WHERE teacher_id = ?", [teacher_id], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      });
    },

    multipleTeacher(req, res) {
      db.query("SELECT * FROM teachers", (err, result) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(result);
      }
      );
    },
  },

  Put: {
    async singleTeacher(req, res) {
      const teacher_id = req.params.teacher_id;
      const { name, email } = req.body;
      db.query("UPDATE teachers SET name = ?, email = ? WHERE teacher_id = ?", [name, email, teacher_id], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      });
    },

    async multipleTeacher(req, res) {
      const teacher_id = req.params.teacher_id;
      const { name, email } = req.body;
      db.query("UPDATE teachers SET name = ?, email = ? WHERE teacher_id = ?", [name, email, teacher_id], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      });
    },
  },

  Post: {
    async singleTeacher(req, res) {
      const { name, email } = req.body;
      db.query("INSERT INTO teachers (name, email) VALUES (?, ?)", [name, email], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send(result);
        }
      });
    },

    async multipleTeacher(req, res) {},
  },

  Delete: {
    async singleTeacher(req, res) {
      const teacher_id = req.params.teacher_id;
      db.query("UPDATE teachers SET deleted = true WHERE teacher_id = ?", [teacher_id], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      });
    },

    async multipleTeacher(req, res) {},
  },
};

module.exports = teacherContoller;