import { useRouter } from "next/router";
function SelectedClientProject() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Selected Client Project</h1>
    </div>
  );
}
export default SelectedClientProject;
