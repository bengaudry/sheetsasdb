export type ProjectType = {
  name:string;
  tables: Array<ProjectTables>;
}

type ProjectTables = {
  name: string;
  url:string;
}

export function newProject(props:ProjectType) {

}
