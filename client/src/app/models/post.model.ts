export class Post {
    public _id;
    public title;
    public description;
    public author;
    public date_posted;
    public upvotes;
    public downvotes;

    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.author = '';
        this.date_posted = '';
        this.upvotes = 0;
        this.downvotes = 0;
    }
}