import { useQuery } from "react-query";
import Advice from "./components/Advice";
import { getAdivce } from "./services/Advices";

function App() {
  const { data, refetch } = useQuery("advice", getAdivce, {
    initialData: "",
  });
  return <Advice advice={data?.slip} onClick={refetch} />;
}

export default App;
