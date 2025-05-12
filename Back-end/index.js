import  express from 'express';
const app = express();
const port = process.env.PORT || 3000; 

app.get('/api/jocks',(req,res) => {
  const jocks = [
    {id:1, title: 'Jock 1', content: 'jock content 1'},
    {id:2, title: 'Jock 2', content: 'jock content 2'},
    {id:3, title: 'Jock 3', content: 'jock content 3'},
  ]
  res.send(jocks);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})