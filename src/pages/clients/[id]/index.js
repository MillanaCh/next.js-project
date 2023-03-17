import { useRouter } from "next/router";
function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //load data
    // router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectPage;1
