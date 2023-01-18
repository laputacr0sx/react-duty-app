import "./App.css";
import DutyList from "./Components/DutyList";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-max bg-blue-100 text-2xl">
        <DutyList />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
