export interface PeriodicElement {
  id: string;
  status: string;
  apptower: string;
  site: string;
  changeid: string;
  defectlist: string;
  tags: string;
  productname: string;
  appname: string;
  release: string;
  envtype: string;
  dobuild: boolean;
  dodeploy: boolean;
  dobackout: boolean;
  doscan: boolean;
  dota: boolean;
  dounittest: boolean;
  buildassettypes: string;
  deployassettypes: string;
  postdeployassettypes: string;
  frameworkoptions: string;
}