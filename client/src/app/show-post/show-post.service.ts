import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Post } from '../models/post.model'

@Injectable()
export class ShowPostService {
    constructor(private http: HttpClient) {

    }

    getAllPosts() {
        return this.http.post('/api/post/getAllPosts', {})
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
}