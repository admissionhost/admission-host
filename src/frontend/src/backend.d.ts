import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CollegeFile {
    id: string;
    name: string;
    fileName: string;
    uploadedAt: bigint;
    fileUrl: string;
}
export interface backendInterface {
    addCollegeFile(password: string, name: string, fileName: string, fileUrl: string): Promise<string>;
    deleteCollegeFile(password: string, id: string): Promise<boolean>;
    getCollegeFile(id: string): Promise<CollegeFile | null>;
    listCollegeFiles(): Promise<Array<CollegeFile>>;
}
