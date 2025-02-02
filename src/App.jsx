import { RouterManager } from "./routes/routerManage"
import { AuthProvider } from "./context/AuthContext"
function App() {
  

  return (
    <AuthProvider>
      <RouterManager/>
    </AuthProvider>
    
    
  )
}

export default App
