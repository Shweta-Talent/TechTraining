import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FormProject from "./component/project";
import Formtalent from "./component/form";
import ListTalent from "./component/listtalent";
import SearchTalent from "./component/search";
import SearchProject from "./component/searchproject";
import SortProject from "./component/sort";
import { AuthFunction } from "./component/auth";
import Login from "./component/Login";
import { ProtectedRoute } from "./component/ProtectedRoute";
import FilterBy from "./component/filter";


import { focusOnInput,  UseStateHook } from "./component/allHooks";
import { ContextProvide, ThemeContext } from "./component/theme";



function App() {
  const theme = ThemeContext();

  return (
  
      <div className="body" id={theme?.theme}>
       

        <button onClick={theme?.toggleTheme}>Change theme</button>
        <Router>
          <AuthFunction>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/SearchProject"
                element={
                  <ProtectedRoute>
                    <SearchProject />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ListTalent"
                element={
                  <ProtectedRoute>
                    <ListTalent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/FormProject"
                element={
                  <ProtectedRoute>
                    <FormProject />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Formtalent"
                element={
                  <ProtectedRoute>
                    <Formtalent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/SearchTalent"
                element={
                  <ProtectedRoute>
                    <SearchTalent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/SortProject"
                element={
                  <ProtectedRoute>
                    <SortProject />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/filterTalent"
                element={
                  <ProtectedRoute>
                    <FilterBy />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AuthFunction>
        </Router>
      </div>
  
  );
}

export default App;
