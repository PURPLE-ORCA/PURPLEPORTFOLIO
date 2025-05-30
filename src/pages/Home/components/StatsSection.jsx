import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function StatsSection({ stats }) {
  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-purple-300 font-mono"
        >
          My Stats
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-300/20 hover:border-purple-300 transition-colors duration-300">
                {stat.iconName ? (
                  <Icon
                    icon={stat.iconName}
                    className="w-8 h-8 text-purple-300 mx-auto mb-4"
                  />
                ) : (
                  <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-4" />
                )}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-white mb-2 font-mono"
                >
                  {stat.value}+
                </motion.div>
                <div className="text-gray-300 font-mono">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub-style contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-300/20"
        >
          <h3 className="text-xl font-bold mb-4 text-center text-purple-200 font-mono">
            Coding Activity
          </h3>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 84 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, delay: i * 0.01 }}
                viewport={{ once: true }}
                className={`w-3 h-3 rounded-sm ${
                  Math.random() > 0.7
                    ? "bg-purple-400"
                    : Math.random() > 0.4
                    ? "bg-purple-600"
                    : "bg-gray-800"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
