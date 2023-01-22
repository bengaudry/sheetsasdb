import CtaPrimary from "../../components/Buttons/CtaPrimary";
import { ProjectCard } from "./ProjectCard";

type props = {
  user: { displayName: string; email: string };
  onLogout: CallableFunction;
};

export function DashboardLayout(props: props) {
  return (
    <div className="px-4 py-4">
      <CtaPrimary>New project</CtaPrimary>
      <div className="pt-3 pb-3 font-semibold">{props.user.displayName}'s projects :</div>
      <ProjectCard name="Mum" nbOfSheets={2}/>
      <CtaPrimary btn danger onBtnClick={() => { alert("hfuysefq");}}>Logout</CtaPrimary>
    </div>
  );
}
