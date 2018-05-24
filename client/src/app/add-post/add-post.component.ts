import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { AddPostService } from './add-post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router'
import { CommonService } from '../service/common.service'

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: [ './add-post.component.css' ],
    providers: [AddPostService]
})

export class AddPostComponent {
    public post: Post

    @ViewChild('closeBtn') closeBtn: ElementRef;

    constructor (private addPostService: AddPostService, private router: Router, private commonService: CommonService) {
        this.post = new Post();
    }

    ngOnInit() {
        this.commonService.postEdit_Observable.subscribe(res => {
            this.post = this.commonService.post_to_be_edited;
        })
    }

    addPost(){
        if (this.post.title && this.post.description) {
            if(this.post._id) {
                this.addPostService.UpdatePost(this.post).subscribe(res => {
                    this.closeBtn.nativeElement.click();
                    this.commonService.notifyPostAddition();
                })
            }
            else {
                this.post.author = localStorage.getItem('loggedInUser');
                //this.post.date_posted = this.getDate();
                this.post.upvotes = 0;
                this.post.downvotes = 0;
                this.addPostService.AddPost(this.post).subscribe(res => {
                    this.closeBtn.nativeElement.click();
                    this.commonService.notifyPostAddition();
                })
            }
        }
        else {
            alert("Title and Description required")
        }
    }

    getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        return (dd + '/' + mm + '/' + yyyy);
    }
}