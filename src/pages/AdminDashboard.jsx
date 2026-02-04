// src/pages/AdminDashboard.jsx
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

const AdminDashboard = () => {
  // Local toggle for Hatchling slides visibility
  const [hatchlingSlidesVisible, setHatchlingSlidesVisible] = useState(() => {
    const stored = localStorage.getItem("hatchlingSlidesVisible");
    return stored === null ? true : stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("hatchlingSlidesVisible", hatchlingSlidesVisible);
  }, [hatchlingSlidesVisible]);
  const [sponsorContacts, setSponsorContacts] = useState([]);
  const [showcaseRegistrations, setShowcaseRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("sponsors");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      fetchAllData();
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoggingIn(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setUser(data.user);
      fetchAllData();
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password. Please try again.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setEmail("");
    setPassword("");
    setSponsorContacts([]);
    setShowcaseRegistrations([]);
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const { data: sponsors, error: sponsorError } = await supabase
        .from("sponsor_contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (sponsorError) throw sponsorError;

      const { data: showcase, error: showcaseError } = await supabase
        .from("showcase_project_interest")
        .select("*")
        .order("created_at", { ascending: false });

      if (showcaseError) throw showcaseError;

      setSponsorContacts(sponsors || []);
      setShowcaseRegistrations(showcase || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error loading data. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSponsor = async (id) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      const { error } = await supabase
        .from("sponsor_contacts")
        .delete()
        .eq("id", id);

      if (error) throw error;
      fetchAllData();
      alert("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Error deleting contact");
    }
  };

  const handleDeleteShowcase = async (id) => {
    if (!confirm("Are you sure you want to delete this registration?")) return;

    try {
      const { error } = await supabase
        .from("showcase_project_interest")
        .delete()
        .eq("id", id);

      if (error) throw error;
      fetchAllData();
      alert("Registration deleted successfully");
    } catch (error) {
      console.error("Error deleting registration:", error);
      alert("Error deleting registration");
    }
  };

  const exportToCSV = (data, filename) => {
    if (data.length === 0) {
      alert("No data to export");
      return;
    }

    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((obj) =>
      Object.values(obj)
        .map((val) => `"${val}"`)
        .join(","),
    );
    const csv = [headers, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const filteredSponsors = sponsorContacts.filter((contact) =>
    Object.values(contact).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  const filteredShowcase = showcaseRegistrations.filter((reg) =>
    Object.values(reg).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  const currentData =
    activeTab === "sponsors" ? filteredSponsors : filteredShowcase;

  const getTodayCount = (data) => {
    const today = new Date().toDateString();
    return data.filter(
      (item) => new Date(item.created_at).toDateString() === today,
    ).length;
  };

  // Login screen
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-3xl text-gray-800 dark:text-gray-200 mb-2">
              TURTLE Admin Portal
            </h1>
            <p className="text-gray-600 dark:text-gray-400 font-light">
              Sign in with your admin account
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 rounded-xl">
              <p className="text-red-800 dark:text-red-200 text-sm">
                {loginError}
              </p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loggingIn}
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loggingIn ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin dashboard (same as before)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl text-gray-800 dark:text-gray-200 mb-2">
              TURTLE Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 font-light">
              Signed in as: {user.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>

        {/* Hatchling Slides Toggle */}
        <div className="mb-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={hatchlingSlidesVisible}
              onChange={(e) => setHatchlingSlidesVisible(e.target.checked)}
              className="w-5 h-5 accent-yellow-500"
            />
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Hatchling Slides Viewable
            </span>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Total Sponsors
              </span>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {sponsorContacts.length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Showcase Registrations
              </span>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {showcaseRegistrations.length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Today's Sponsors
              </span>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {getTodayCount(sponsorContacts)}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Today's Showcase
              </span>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {getTodayCount(showcaseRegistrations)}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("sponsors")}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === "sponsors"
                  ? "text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-600 dark:border-yellow-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              Sponsorship Contacts ({sponsorContacts.length})
            </button>
            <button
              onClick={() => setActiveTab("showcase")}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === "showcase"
                  ? "text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-600 dark:border-yellow-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              Showcase Registrations ({showcaseRegistrations.length})
            </button>
          </div>

          {/* Controls */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={fetchAllData}
                  disabled={loading}
                  className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Refresh
                </button>
                <button
                  onClick={() =>
                    exportToCSV(
                      currentData,
                      activeTab === "sponsors" ? "sponsors" : "showcase",
                    )
                  }
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Export CSV
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {loading ? (
              <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                <svg
                  className="animate-spin h-10 w-10 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading data...
              </div>
            ) : currentData.length === 0 ? (
              <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                No {activeTab === "sponsors" ? "contacts" : "registrations"}{" "}
                found.
              </div>
            ) : (
              <div className="space-y-4">
                {activeTab === "sponsors"
                  ? filteredSponsors.map((contact) => (
                      <div
                        key={contact.id}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-1">
                              {contact.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {new Date(contact.created_at).toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeleteSponsor(contact.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              Email:
                            </span>
                            <p className="text-gray-800 dark:text-gray-200">
                              {contact.email}
                            </p>
                          </div>
                          {contact.company && (
                            <div>
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Company:
                              </span>
                              <p className="text-gray-800 dark:text-gray-200">
                                {contact.company}
                              </p>
                            </div>
                          )}
                          {contact.phone && (
                            <div>
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Phone:
                              </span>
                              <p className="text-gray-800 dark:text-gray-200">
                                {contact.phone}
                              </p>
                            </div>
                          )}
                        </div>

                        <div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Message:
                          </span>
                          <p className="text-gray-800 dark:text-gray-200 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg">
                            {contact.message}
                          </p>
                        </div>
                      </div>
                    ))
                  : filteredShowcase.map((reg) => (
                      <div
                        key={reg.id}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-1">
                              {reg.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {new Date(reg.created_at).toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeleteShowcase(reg.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Email:
                          </span>
                          <p className="text-gray-800 dark:text-gray-200">
                            {reg.email}
                          </p>
                        </div>

                        <div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Favorite Projects:
                          </span>
                          <p className="text-gray-800 dark:text-gray-200 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg">
                            {reg.favorite_projects}
                          </p>
                        </div>
                      </div>
                    ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
