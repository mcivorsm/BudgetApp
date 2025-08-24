import { createContext, useState } from "react"; // ✅ add useState


export const UserContext = createContext(null);
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}