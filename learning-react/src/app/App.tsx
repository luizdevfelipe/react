import { Router } from "./routes"
import { LoggedUserProvider } from "./shared/contexts";

export const App = () => {
  return (
    <LoggedUserProvider>
      <Router />
    </LoggedUserProvider>
  );
}
