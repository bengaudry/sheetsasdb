import { useState } from "react";
import CtaPrimary from "../../components/Buttons/CtaPrimary";
import Footer from "../../components/Footer/Footer";
import ResponsiveContainer from "../../components/Layout/ResponsiveContainer";
import { Popup } from "../../components/Popup/Popup";
import { ProjectCard } from "./ProjectCard";
import { getUsers } from "../../scripts/user/handleUsersAccount";

type props = {
  user: { displayName: string; email: string };
  onLogout: CallableFunction;
};

export function DashboardLayout(props: props) {
  const [isNewProjectPopupOpened, setNewProjectPopupOpened] = useState(false);
  const [newProjectUrl, setNewProjectUrl] = useState("");
  return (
    <div>
      <ResponsiveContainer childrenClassName="px-4 py-8 mb-24">
        <div className="flex flex-row gap-2 items-center sm:gap-5 w-full justify-between">
          <p className="text-xl font-semibold text-neutral-500">
            Welcome {props.user.displayName}
          </p>
          <CtaPrimary
            btn
            danger
            onBtnClick={() => {
              props.onLogout();
            }}
          >
            Logout
          </CtaPrimary>
        </div>
        <p className="pb-6 text-4xl font-bold leading-9">Your projects :</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          <ProjectCard name="Mum" nbOfSheets={2} />
          <ProjectCard
            name="New project"
            onClick={() => setNewProjectPopupOpened(true)}
          />
        </div>
      </ResponsiveContainer>
      <Popup
        shown={isNewProjectPopupOpened}
        onClose={() => setNewProjectPopupOpened(false)}
        title="Create a new project"
      >
        <input
          type="text"
          autoFocus
          onChange={(e) => {
            setNewProjectUrl(e.target.textContent as string);
          }}
          className="bg-neutral-700 px-4 py-2 rounded-md"
        />
      </Popup>
      <Footer />
    </div>
  );
}
