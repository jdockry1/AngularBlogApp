import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'

import { ShowPostService } from './show-post.service'
import { Post } from '../models/post.model'
import { CommonService } from '../service/common.service'

@Component({
    selector: 'app-show-post',
    templateUrl: './show-post.component.html',
    styleUrls: [ './show-post.component.css' ],
    providers: [ShowPostService]
})

export class ShowPostComponent implements OnInit {

    public posts: any[];
    public post_to_delete: Post;

    @ViewChild('closeBtn') closeBtn: ElementRef;

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

    editPost(post: Post) {
        this.commonService.setPostToEdit(post);
    }

    setDelete(post: Post) {
        this.post_to_delete = post;
    }

    unsetDelete() {
        this.post_to_delete = null;
    }

    deletePost() {
        this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
            this.getAllPosts();
            this.closeBtn.nativeElement.click();
        })
    }

    upvotePost(post: Post) {
        this.showPostService.upvotePost(post._id).subscribe(res => {
            this.getAllPosts();
        })
    }

    downvotePost(post: Post) {
        this.showPostService.downvotePost(post._id).subscribe(res => {
            this.getAllPosts();
        })
    }

    setSearch(search) {
        this.showPostService.setSearch(search);
        this.getAllPosts();
    }

    setSort(sort) {
        this.showPostService.setSort(sort);
        this.getAllPosts();
    }

}