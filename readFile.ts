import {promises as fs} from 'fs'
const fileName = './text.txt';


const run = async () => {
  try {
    const dataMessage = await fs.readFile(fileName);
    const parsed = JSON.parse(dataMessage.toString());
    console.log(parsed)
  } catch (error) {
    console.error(error)
  }
}

run();