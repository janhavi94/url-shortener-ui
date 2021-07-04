export class UrlModel {
    public id: number;
    public originalUrl: string;
    public shortUrl: string;
    public usageCount: number;
    constructor(id: number, originalUrl: string, shortUrl: string, usageCount: number) {
        this.id = id;
        this.originalUrl = originalUrl;
        this.shortUrl = shortUrl;
        this.usageCount = usageCount;
    }
}