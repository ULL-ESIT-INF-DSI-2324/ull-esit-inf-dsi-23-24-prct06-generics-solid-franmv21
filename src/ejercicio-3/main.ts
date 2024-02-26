import { IFileReader } from './IFileReader';
import { IFileWriter } from './IFileWriter';
import { FileReader } from './filereader';
import { FileWriter } from './filewriter';
import { FileManager } from './filemanager';


const filePath = './src/ejercicio-3/example.txt';

const fileReader: IFileReader = new FileReader(filePath);
const fileWriter: IFileWriter = new FileWriter(filePath);
const fileManager = new FileManager(fileReader, fileWriter);

// Leyendo contenido
const currentContent = fileManager.read();
console.log('Contenido actual:', currentContent);

// Escribiendo contenido
const newData = 'Este es un nuevo contenido a ser escrito en el archivo.';
fileManager.write(newData);

// Actualizando contenido (usando el fileManager de nuevo)
const updatedContent = fileManager.read();
console.log('Contenido actualizado:', updatedContent);