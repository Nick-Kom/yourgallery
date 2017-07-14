export class Album {
    constructor(public id: string,
                public title: string,
                public description: string,
                public datetime: number,
                public cover: string,
                public images_count: number) {
    }
}