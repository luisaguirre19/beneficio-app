import { Component } from '@angular/core';
import { BrowserQRCodeReader } from '@zxing/library';
import * as ZXing from '@zxing/library';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocumentProxy } from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf.worker.entry';
import jsQR from 'jsqr';


@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent {

  
  constructor() {
    // Set the workerSrc property to the location of the pdf.worker.js file
    GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.js';
  }
  async decodeQRFromPDF(event: Event) {
    // file = event.target.files[0];
    let file
     const input = event.target as HTMLInputElement;
     if (input.files && input.files.length > 0) {
        file = input.files[0];
       console.log('Selected file:', file);
     }


    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
  
    fileReader.onload = async (event) => {
      const arrayBuffer = event.target.result as ArrayBuffer;
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1 });
  
        const canvas = document.createElement('canvas');
        const canvasContext = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        const renderContext = {
          canvasContext,
          viewport,
        };
  
        await page.render(renderContext).promise;
  
        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
  
        if (qrCode) {
          console.log(qrCode.data);
          return qrCode.data;
        }
      }
    };
  }
  
  
}
