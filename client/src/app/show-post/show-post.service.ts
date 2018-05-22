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
}