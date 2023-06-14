export interface IProject {
    Projektname: string | number;
    Jahr: number;
    Titelbild: string;
    TextBeschreibung: string;
    URLMuthesiusWebsite: string;
    URLWeiterfuehrend: string;
    VideoURL: string;
    KoDe: number;
    ID: number;
    RS: number;
    Autor: string;
    Contact: string;
    Category: string;
    Keywords: string;
    Topic: string;
    Master: number;
    Interactive: number;
    GroupSize: number;
    InformationDesign: string;
    ScienceCommunication: string;
    UX: string;
    DataVisualization: string;
    Animation: string;
    InterfaceDesign: string;
    MotionGraphics: string;
    SoundVisualization: string;
    Installation: string;
    InteractiveProjection: string;
    Status: string;
    UpdatedBy: string;
    Tags: string;
    Flagged: string;
    Priority: string;

}

export type IProjectFiltersProps = {
    filteredCategory: string;
    filteredKeywords: string[];
    filteredTopic: string;
}