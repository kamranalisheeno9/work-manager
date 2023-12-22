import {ShowWorksPages}  from "../../components/ShowWorksPages";
import WorkPage from "./workPage";
export const metadata = {
  title: 'Show Works',
  description: 'Getting all the works here',
}
export default function ShowWorks() {
    return (
      <>
        <WorkPage />
      </>
    );
  }