import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-job-post',
  templateUrl: './importCandidates.component.html',
  styleUrls: ['./importCandidates.component.css']
})
export class ImportComponent implements OnInit {
public error:any;
public importButton=true;
filesToUpload:Array<File>;
  constructor(private http:Http) {
       this.filesToUpload = [];
   }
   formFileData:any;

  ngOnInit() {


  }
upload(){
   console.log(this.formFileData)
      this.http.post('/coordinates/upload',this.formFileData)
        .map(resp => resp.json())
        .subscribe(data => console.log('response', data));
    }
        //  return this.http.post('/coordinates/upload',this.filesToUpload)
        //          .subscribe((response) => {
        //         // login successful if there's a jwt token in the response
            
        //       console.log(response.json());
        //     });
    //  this.makeFileRequest("/coordinates/upload", [], this.filesToUpload).then((result) => {
    //         console.log(result);
    //     }, (error) => {
    //         console.error(error);
    //     });

openFile(event:any) {
     console.log("ggg"+event.target.files+"ss");
    const files = event.target.files;
    if (files.length > 0) {
      let file;
      let formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        file = files[i];
        formData.append('userfile', file, file.name);
      }

    this.formFileData=formData;
    let input = event.target;
     var text="";
   
    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            text = reader.result;
            console.log(typeof text)
                try{
        var res=JSON.parse(text);
        this.importButton=false;
        this.error="";
    }
    catch(e){
        this.error+=e;  
                this.importButton=true;
     
    }    
                   
        }
       
        reader.readAsText(input.files[index]);

}
}
}
}

//  fileChangeEvent(fileInput: any){
//         this.filesToUpload = <Array<File>> fileInput.target.files;
//     }

//      makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
//         return new Promise((resolve, reject) => {
//             var formData: any = new FormData();
//             var xhr = new XMLHttpRequest();
//             for(var i = 0; i < files.length; i++) {
//                 formData.append("uploads[]", files[i], files[i].name);
//             }
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState == 4) {
//                     if (xhr.status == 200) {
//                         resolve(JSON.parse(xhr.response));
//                     } else {
//                         reject(xhr.response);
//                     }
//                 }
//             }
//             console.log(formData+"sendddd");
//             xhr.open("POST", url, true);
//             xhr.send(formData);
//         });
//     }

