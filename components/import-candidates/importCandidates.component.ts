import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router'

import {Data} from './../../services/data.service';
import {PlacementRegisterService} from './../../services/placement-register.service';
import {AuthenticationService} from './../../services/authentication.service';

@Component({
    selector: 'app-job-post',
    templateUrl: './importCandidates.component.html',
    styleUrls: ['./importCandidates.component.css']
})
export class ImportComponent implements OnInit {
    public error: any;
    public text = '';
    public importButton = true;
    public allHistories: any;
    public allFailureHistories: any;
    filesToUpload: Array<File>;
    constructor(private http: Http,private data:Data,private router:Router,private authenticationService:AuthenticationService ,private PlacementRegisterService:PlacementRegisterService) {
        this.filesToUpload = [];
    }
    formFileData: any;
    remarks:any;
    createdUser:any;

    ngOnInit() {
            this.createdUser=this.authenticationService.getCreatedBy();


    }
    upload() {
        this.makeFileRequest("/profile-import/upload?remarks="+this.remarks+"&username="+this.createdUser, [], this.filesToUpload).then((result) => {
            this.data.openSnackBar("File Upload is in progress.","Please check File upload history");
            this.router.navigate(['/home']);
        }, (error) => {
            console.error(error + 'err');
        });
    }
    openFile(event: any) {
        this.filesToUpload = <Array<File>>event.target.files;
        const files = event.target.files;
        if (files.length > 0) {
            let file;
            let input = event.target;


            for (let index = 0; index < input.files.length; index++) {
                let reader = new FileReader();
                reader.onload = () => {
                    // this 'text' is the content of the file
                    this.text = reader.result;
                    try {
                        let res = JSON.parse(this.text);
                        this.importButton = false;
                        this.error = '';
                    }
                    catch (e) {
                        this.error += e;
                        this.importButton = true;

                    }

                }

                reader.readAsText(input.files[index]);

            }
        }
    }

    getRemarks(events:any){
this.remarks=events.target.value;

    }


    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {

        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }            
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 201) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }

    getHistory() {
        this.PlacementRegisterService.getHistory().subscribe((res: any) => {
            this.allHistories = res;
        },
            (err: any) => {
                console.log('History error' + err);
            });
    }
getDetailHistory(documentId:any){
     this.PlacementRegisterService.getDetailHistory(documentId).subscribe((res:any)=>{
            if(res.data)
            this.allFailureHistories=res;
            else{
                this.allFailureHistories="No failure records"
            }
        },
            (err: any) => {
                console.log('detail History error' + err);
            });
    }

}



