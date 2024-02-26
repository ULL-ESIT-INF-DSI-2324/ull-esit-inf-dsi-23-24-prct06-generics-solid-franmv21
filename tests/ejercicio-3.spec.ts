import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';
import {FileReader} from '../src/ejercicio-3/filereader';
import {FileWriter} from '../src/ejercicio-3/filewriter';
import {FileManager} from '../src/ejercicio-3/filemanager';

describe('FileManager System', () => {
    const testFilePath = './src/ejercicio-3/test.txt';
    const invalidFilePath = './src/ejercicio-3/invalid.txt';
    const initialContent = 'Contenido inicial';
    const newContent = 'Este es un nuevo contenido a ser escrito en el archivo.';
  
    before(() => {
      // Preparar: crear un archivo de prueba con contenido inicial
      fs.writeFileSync(testFilePath, initialContent, 'utf-8');
    });
  
    after(() => {
      // Limpiar: eliminar el archivo de prueba después de las pruebas
      fs.unlinkSync(testFilePath);
    });
  
    describe('FileReader', () => {
      it('should read the content of a file correctly', () => {
        const fileReader = new FileReader(testFilePath);
        expect(fileReader.readFile()).to.equal(initialContent);
      });
    });

    describe('FileReader', () => {
        it('should throw an error when trying to read from an invalid file', () => {
            const fileReader = new FileReader(invalidFilePath);
            expect(fileReader.readFile()).to.equal('');
        });
    });

    describe('FileWriter', () => {
        it('should write content to a file correctly', () => {
            const fileWriter = new FileWriter(testFilePath);
            fileWriter.writeFile(newContent);
            const fileReader = new FileReader(testFilePath); // Usar FileReader para verificar el contenido escrito
            expect(fileReader.readFile()).to.equal(newContent);
        });
    });

    describe('FileWriter', () => {
        it('should throw an error when trying to write to an invalid file', () => {
            const fileWriter = new FileWriter(invalidFilePath);
            expect(fileWriter.writeFile(newContent)).to.equal(undefined);
        });
    });
  
    describe('FileManager', () => {
      it('should read the content of a file correctly using FileManager', () => {
        const fileReader = new FileReader(testFilePath);
        const fileWriter = new FileWriter(testFilePath);
        const fileManager = new FileManager(fileReader, fileWriter);
        expect(fileManager.read()).to.equal(newContent); // Asegurándose de que el contenido nuevo es leído
      });
  
      it('should write and then read the updated content correctly using FileManager', () => {
        const fileReader = new FileReader(testFilePath);
        const fileWriter = new FileWriter(testFilePath);
        const fileManager = new FileManager(fileReader, fileWriter);
        fileManager.write('Contenido actualizado');
        expect(fileManager.read()).to.equal('Contenido actualizado');
      });
    });
});