import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/organisms/Layout";
import Home from "@/components/pages/Home";
import Membership from "@/components/pages/Membership";
import Master from "@/components/pages/Master";
import MoneyInsight from "@/components/pages/MoneyInsight";
import Reviews from "@/components/pages/Reviews";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import userService from "@/services/api/userService";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCurrentUser = async () => {
    try {
      setLoading(true);
      setError("");
      const user = await userService.getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setError(err.message || "Failed to load user information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Error message={error} onRetry={loadCurrentUser} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentUser={currentUser} />}>
          <Route index element={<Home currentUser={currentUser} />} />
          <Route path="membership" element={<Membership currentUser={currentUser} />} />
          <Route path="master" element={<Master currentUser={currentUser} />} />
          <Route path="money-insight" element={<MoneyInsight currentUser={currentUser} />} />
          <Route path="reviews" element={<Reviews currentUser={currentUser} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;