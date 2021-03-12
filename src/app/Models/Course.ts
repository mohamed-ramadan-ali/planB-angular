import { Category } from "./Category";
import { Video } from "./video";
import { Insrtuctor } from "./Instructor";

export class Course {
    public id: string;
    public name: string;
    public posterUrl: string;
    public category: Category;
    public tags: string[];
    public photo: string;
    public totalHouers: number;
    public noOfVideos: number;
    public price: number;
    public instractorName: string[];
    public fullDesc: string;
    public desc: string;
    public isEnroll: boolean;
    public videos: Video[];
    public language: string;
    public instructors: Insrtuctor[];
    public watchPercentage:number

}