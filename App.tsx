import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Home } from "@/pages/Home";
import { PhotoDetail } from "@/pages/PhotoDetail";
import { Admin } from "@/pages/Admin";
import { Login } from "@/pages/Login";
import { Profile } from "@/pages/Profile";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/photo/:id" component={PhotoDetail} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/category/:slug" component={Home} />
      <Route path="/search" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
