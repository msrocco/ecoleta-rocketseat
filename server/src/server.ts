import express from "express";
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

/*app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = users.filter(user => user.includes(search));

  return response.json(filteredUsers);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const user = users[id];
    return res.json(user);
})

app.post("/users", (req, res) => {
  const data = req.body;

  const { name, email } = data;

  const user = {
      name: name,
      email: email
  };

  return res.json(user);
}); */
