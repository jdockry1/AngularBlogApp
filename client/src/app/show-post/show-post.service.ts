import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Post } from '../models/post.model'

@Injectable()
export class ShowPostService {
    private search: string = '';
    private sort: string = 'alpha';

    constructor(private http: HttpClient) {
        this.search = '';
        this.sort = 'alpha';
    }

    getAllPosts() {
        return this.http.post('/api/post/getAllPosts', { search: this.search, sort: this.sort })
    }

    deletePost(_id) {
        return this.http.post('/api/post/deletePost', { _id: _id })
    }

    upvotePost(_id) {
        return this.http.post('/api/post/upvotePost', { _id: _id })
    }

    downvotePost(_id) {
        return this.http.post('/api/post/downvotePost', { _id: _id })
    }

    setSearch(search) {
        this.search = search;
    }

    getSearch() {
        return this.search;
    }

    setSort(sort) {
        this.sort = sort;
    }

    getSort() {
        return this.sort;
    }
}