import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";

function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=3`);
        if (!response.ok) {
          throw new Error(`GitHub Repos API error: ${response.statusText}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}

export default function StatsSection({ stats }) {
  const { repos, loading: reposLoading, error: reposError } = useGitHubRepos("PURPLE-ORCA");

  if (reposLoading) {
    return (
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm text-white text-center">
        <p>Loading GitHub repositories...</p>
      </section>
    );
  }

  if (reposError) {
    return (
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm text-red-400 text-center">
        <p>Error fetching GitHub data: {reposError?.message}</p>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">

        {/* Top Repositories */}
        {repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-400/20"
          >
            <h3 className="text-xl font-bold mb-4 text-center text-purple-300 font-mono">
              Top Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/50 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <h4 className="text-lg font-bold text-white mb-2 font-mono">
                    {repo.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2 font-mono">
                    <Icon icon="mdi:star" className="inline-block w-4 h-4 mr-1 text-yellow-400" />
                    {repo.stargazers_count} stars
                  </p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-mono"
                  >
                    <Icon icon="mdi:github" className="w-4 h-4 mr-1" />
                    View on GitHub
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
