import app from './app.js'
import { connectToDB } from './utils/mongoose.js'


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

async function main() {
  await connectToDB()
  app.listen(3000)
  console.log('server on port ', app.get('port'));
}

main()

//add
