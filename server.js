import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escultando na porta ${port}`);
  console.log(`CTRL + CLIQUE em http://localhost:${port}`);
});
