// SHOWCASE PROJECT INTEREST FORM DEPRECATED JAN 2026
// Commented out as per migration to email link only
/*
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const ShowcaseProjectInterestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    favorite_projects: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const { error } = await supabase
        .from('showcase_project_interest')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            favorite_projects: formData.favorite_projects
          }
        ]);

      if (error) throw error;

      setStatus({
        type: 'success',
        message: 'Thank you! Your interest has been recorded. We look forward to seeing you at the showcase!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        favorite_projects: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 dark:text-gray-200 mb-4">
            Showcase <span className="text-yellow-600 dark:text-yellow-400">Project Interest Form</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400">
            Let us know which projects you're most excited to see!
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-800 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-800 transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="favorite_projects" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Favorite Projects at the Showcase 
              </label>
              <textarea
                id="favorite_projects"
                name="favorite_projects"
                value={formData.favorite_projects}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-800 transition-all outline-none resize-none"
                placeholder="Tell us which projects you're excited to join..."
              />
            </div>

            {status.message && (
              <div className={`p-4 rounded-xl ${
                status.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200' 
                  : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200'
              }`}>
                <div className="flex items-center gap-2">
                  {status.type === 'success' ? (
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <p className="font-medium">{status.message}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Submit Your Interest
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProjectInterestForm;
*/