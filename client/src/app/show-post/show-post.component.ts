import { Component, OnInit } from '@angular/core'

import { ShowPostService } from './show-post.service'
import { Post } from '../models/post.model'
import { CommonService } from '../service/common.service'

@Component({
    selector: 'app-show-post',
    templateUrl: './show-post.component.html',
    styleUrls: [ './show-post.component.css' ],
    providers: [ShowPostService, CommonService]
})

export class ShowPostComponent implements OnInit {

    public posts: any[];

    constructor (private showPostService: ShowPostService, private commonService: CommonService) {

    }

    ngOnInit() {
        this.getAllPosts();

        this.commonService.postAdded_Observable.subscribe(result => {
            this.getAllPosts();
        })
    }

    getAllPosts() {
        this.showPostService.getAllPosts().subscribe(result => {
            this.posts = result['data'];
        })
    }

}