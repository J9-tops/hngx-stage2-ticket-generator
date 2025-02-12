import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import TicketProvider from "./schema/TicketProvider";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <TicketProvider>
      <RouterProvider router={router} />
    </TicketProvider>
  );
}

export default App;
