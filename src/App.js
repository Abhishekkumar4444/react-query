import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Contact from "./components/Contact"
import Home from "./components/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const client = new QueryClient({
    // avoid data refetching while focus change
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  })
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
