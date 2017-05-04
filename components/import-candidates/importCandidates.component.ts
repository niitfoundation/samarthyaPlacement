import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router'
import { Data } from './../../services/data.service';
import { PlacementRegisterService } from './../../services/placement-register.service';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
    selector: 'app-job-post',
    templateUrl: './importCandidates.component.html',
    styleUrls: ['./importCandidates.component.css']
})
export class ImportComponent implements OnInit {
    public error: any;
    public history: any = "Show";
    public noResult:any;
    public hiddenHistory: any = false;
    public text = '';
    public importButton = true;
    public allHistories: any;
    public allFailureHistories: any;
    filesToUpload: Array<File>;
    public fileName: any = '';
    constructor(private http: Http, private data: Data, private router: Router, private authenticationService: AuthenticationService, private PlacementRegisterService: PlacementRegisterService) {
        this.filesToUpload = [];
    }
    formFileData: any;
    remarks: any;
    createdUser: any;

    ngOnInit() {
        this.createdUser = this.authenticationService.getCreatedBy();


    }
    upload() {
        this.makeFileRequest("/profile-import/upload?remarks=" + this.remarks + "&username=" + this.createdUser +"&token=" +this.authenticationService.getToken(), [], this.filesToUpload).then((res:Response) => {
            this.data.openSnackBar("File Upload is in progress.", "Please check File upload history");
            this.authenticationService.setToken(res['authToken']);
            this.router.navigate(['/home']);
        }, (error) => {
            console.error(error + 'err');
        });
    }
    openFile(event: any) {
        this.filesToUpload = <Array<File>>event.target.files;
        this.fileName = event.target.files[0].name;
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

    getRemarks(events: any) {
        this.remarks = events.target.value;

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
        if (this.history == 'Show') {
            this.PlacementRegisterService.getHistory(this.createdUser).subscribe((res: any) => {
                this.hiddenHistory = true;
                this.authenticationService.setToken(res.authToken);
                if(res.result.length>0){
                     this.allHistories = res;
                    this.noResult = null;
                }
                else
                    this.noResult = "show";
                this.history = 'Hide';
            },
                (err: any) => {
                    console.log('History error' + err);
                });
        }
        else {
            this.hiddenHistory = false;
            this.history = 'Show';
        }

    }

    disableHis(fail:any){
        if(fail == 0)
            return true;
        else
            return false;
    }

    getDetailHistory(documentId: any) {
        this.PlacementRegisterService.getDetailHistory(documentId).subscribe((res: any) => {
            this.authenticationService.setToken(res.authToken);
            if (res.result) {
                this.allFailureHistories = JSON.stringify(res.data[0]);
            }
            else {
                this.allFailureHistories = "No failure records"
            }
        },
            (err: any) => {
                console.log('detail History error' + err);
            });
    }

}



