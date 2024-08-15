
export interface ISearch {
    page: number,
    result: [{
        id: number,
        name: string,
    }]
    total_pages: number,
    total_results: number,

}