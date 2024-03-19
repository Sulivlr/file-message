import {promises as fs} from 'fs'

const fileName = './text.txt';
const dataMessage = {
  message: 'Hello, World!',
  dateTime: '2024-03-18T18:52:46.058Z',
}
const run = async () => {
  try {
    await fs.writeFile(fileName, JSON.stringify(dataMessage, null, 2))
  } catch (error) {
    console.error(error)
  }
}

run();